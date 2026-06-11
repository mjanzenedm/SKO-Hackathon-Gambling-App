(function () {
  const data = window.VEGAS_EDGE_DATA;
  const sourceById = Object.fromEntries(data.sources.map((source) => [source.id, source]));

  const state = {
    search: "",
    region: "all",
    category: "all",
    profile: "value",
    bankroll: 4,
    routeRegions: new Set(["Strip", "Downtown", "Locals", "Off-Strip"])
  };

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));

  function normalize(value) {
    return String(value).toLowerCase();
  }

  function sourceLinks(sourceIds) {
    return sourceIds
      .map((sourceId) => {
        const source = sourceById[sourceId];
        return `<a href="${source.url}" target="_blank" rel="noreferrer">${source.title}</a>`;
      })
      .join("");
  }

  function renderMetrics() {
    $("#metrics-grid").innerHTML = data.metrics
      .map(
        (metric) => `
          <article class="metric-card" data-tone="${metric.tone}">
            <p class="metric-value">${metric.value}</p>
            <h3>${metric.label}</h3>
            <p>${metric.detail}</p>
          </article>
        `
      )
      .join("");
  }

  function matchesVenue(venue) {
    const haystack = normalize(
      [
        venue.name,
        venue.region,
        ...venue.categories,
        ...venue.tags,
        ...venue.highlights,
        ...venue.cautions
      ].join(" ")
    );

    const categoryMatch =
      state.category === "all" ||
      venue.categories.includes(state.category) ||
      (state.category === "low-limit" && venue.categories.includes("low-limit"));

    const regionMatch = state.region === "all" || venue.region === state.region;
    const searchMatch = state.search.length === 0 || haystack.includes(state.search);

    return categoryMatch && regionMatch && searchMatch;
  }

  function scoreMarkup(label, score) {
    return `
      <div class="score">
        <span>${label}</span>
        <div class="score-bar" aria-label="${label} ${score} out of 5">
          <b style="--score:${score}"></b>
        </div>
      </div>
    `;
  }

  function renderVenueCard(venue) {
    return `
      <article class="venue-card">
        <div class="venue-topline">
          <h3>${venue.name}</h3>
          <span class="region-tag">${venue.region}</span>
        </div>
        <div class="tag-row">
          ${venue.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="score-row">
          ${scoreMarkup("Value", venue.scores.value)}
          ${scoreMarkup("Poker", venue.scores.poker)}
          ${scoreMarkup("Book", venue.scores.sportsbook)}
          ${scoreMarkup("Tables", venue.scores.table)}
        </div>
        <ul>
          ${venue.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
          ${venue.cautions.map((caution) => `<li>${caution}</li>`).join("")}
        </ul>
        <div class="source-links" aria-label="Sources">
          ${sourceLinks(venue.sourceIds)}
        </div>
      </article>
    `;
  }

  function renderVenues() {
    const venues = data.venues.filter(matchesVenue);
    $("#record-list").innerHTML =
      venues.length > 0
        ? venues.map(renderVenueCard).join("")
        : `<div class="empty-state">No records match the current filters.</div>`;
  }

  function renderMarketSignals() {
    $("#market-signals").innerHTML = data.marketSignals
      .map(
        (signal) => `
          <article class="signal-card">
            <strong>${signal.title}</strong>
            <p>${signal.body}</p>
          </article>
        `
      )
      .join("");

    $("#data-alerts").innerHTML = data.dataAlerts
      .map(
        (alert) => `
          <article class="alert-card">
            <strong>${alert.title}</strong>
            <p>${alert.body}</p>
          </article>
        `
      )
      .join("");
  }

  function renderTableGames() {
    $("#game-grid").innerHTML = data.tableGames
      .map(
        (game) => `
          <article class="game-card">
            <h3>${game.name}</h3>
            <p class="count">${game.casinos}</p>
            <p>${game.minimums} public minimum range</p>
          </article>
        `
      )
      .join("");
  }

  function routeScore(venue) {
    const profileScore =
      state.profile === "balanced"
        ? (venue.scores.value + venue.scores.poker + venue.scores.sportsbook + venue.scores.table) / 4
        : venue.scores[state.profile];

    const lowLimitBoost = venue.categories.includes("low-limit") ? state.bankroll * 0.35 : 0;
    const pokerPenalty = state.profile === "poker" && venue.scores.poker < 3 ? -3 : 0;
    const bookPenalty = state.profile === "sportsbook" && venue.scores.sportsbook < 3 ? -3 : 0;

    return profileScore + lowLimitBoost + pokerPenalty + bookPenalty;
  }

  function recommendationReason(venue) {
    if (state.profile === "poker") {
      return venue.highlights.find((item) => normalize(item).includes("poker")) || venue.highlights[0];
    }
    if (state.profile === "sportsbook") {
      return venue.highlights.find((item) => normalize(item).includes("sportsbook")) || venue.highlights[0];
    }
    if (state.profile === "balanced") {
      return venue.highlights[0];
    }
    return venue.categories.includes("low-limit") ? venue.highlights[0] : venue.cautions[0] || venue.highlights[0];
  }

  function renderRunSheet() {
    const eligible = data.venues
      .filter((venue) => state.routeRegions.has(venue.region))
      .map((venue) => ({ venue, routeScore: routeScore(venue) }))
      .sort((a, b) => b.routeScore - a.routeScore)
      .slice(0, 4);

    $("#run-sheet").innerHTML =
      eligible.length > 0
        ? eligible
            .map(
              ({ venue }, index) => `
                <article class="run-card">
                  <small>Stop ${index + 1}</small>
                  <h3>${venue.name}</h3>
                  <p>${recommendationReason(venue)}</p>
                  <div class="tag-row">
                    <span class="tag">${venue.region}</span>
                    ${venue.categories.slice(0, 3).map((category) => `<span class="tag">${category}</span>`).join("")}
                  </div>
                </article>
              `
            )
            .join("")
        : `<div class="empty-state">Select at least one region for the run sheet.</div>`;
  }

  function renderSources() {
    $("#source-grid").innerHTML = data.sources
      .map(
        (source) => `
          <article class="source-card">
            <h3>${source.title}</h3>
            <p><strong>${source.updated}</strong></p>
            <p>${source.summary}</p>
            <p>${source.limit}</p>
            <a href="${source.url}" target="_blank" rel="noreferrer">Open source</a>
          </article>
        `
      )
      .join("");
  }

  function renderSnapshot() {
    $("#snapshot-pill").textContent = `Snapshot prepared ${data.snapshotDate}`;
  }

  function renderAll() {
    renderMetrics();
    renderVenues();
    renderMarketSignals();
    renderRunSheet();
    renderTableGames();
    renderSources();
    renderSnapshot();
  }

  function bindEvents() {
    $("#search-input").addEventListener("input", (event) => {
      state.search = normalize(event.target.value.trim());
      renderVenues();
    });

    $("#region-select").addEventListener("change", (event) => {
      state.region = event.target.value;
      renderVenues();
    });

    $$(".segment").forEach((button) => {
      button.addEventListener("click", () => {
        $$(".segment").forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");
        state.category = button.dataset.category;
        renderVenues();
      });
    });

    $("#planner-form").addEventListener("change", (event) => {
      const target = event.target;

      if (target.name === "profile") {
        state.profile = target.value;
      }

      if (target.name === "route-region") {
        if (target.checked) {
          state.routeRegions.add(target.value);
        } else {
          state.routeRegions.delete(target.value);
        }
      }

      renderRunSheet();
    });

    $("#bankroll-range").addEventListener("input", (event) => {
      state.bankroll = Number(event.target.value);
      renderRunSheet();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    bindEvents();
    renderAll();
  });
})();
