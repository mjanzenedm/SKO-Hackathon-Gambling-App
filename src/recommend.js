(function () {
  const data = window.VEGAS_EDGE_DATA;
  const contentById = window.VEGAS_GAME_PROFILE_CONTENT || {};
  const sourceById = Object.fromEntries(data.sources.map((source) => [source.id, source]));

  const controls = {
    risk: document.querySelector("#risk-tolerance"),
    income: document.querySelector("#income"),
    skill: document.querySelector("#skill-level"),
    style: document.querySelector("#play-style")
  };

  const results = {
    games: document.querySelector("#game-results"),
    casinos: document.querySelector("#casino-results"),
    styleLabel: document.querySelector("#play-style-label"),
    summary: document.querySelector("#profile-summary"),
    snapshot: document.querySelector("#recommend-snapshot")
  };

  function sourceLinks(sourceIds) {
    return sourceIds
      .map((sourceId) => {
        const source = sourceById[sourceId];
        return `<a href="${source.url}" target="_blank" rel="noreferrer">${source.title}</a>`;
      })
      .join("");
  }

  function profile() {
    const payoutWeight = Number(controls.style.value) / 100;
    return {
      risk: Number(controls.risk.value),
      income: Number(controls.income.value),
      skill: Number(controls.skill.value),
      payoutWeight,
      timeWeight: 1 - payoutWeight
    };
  }

  function closeness(target, actual, weight) {
    return Math.max(0, 5 - Math.abs(target - actual)) * weight;
  }

  function incomeLabel(value) {
    return {
      1: "low bankroll sensitivity",
      2: "moderate bankroll sensitivity",
      3: "flexible bankroll",
      4: "premium bankroll flexibility"
    }[value];
  }

  function styleLabel(payoutWeight) {
    if (payoutWeight <= 0.2) return "Strongest lean: longest time";
    if (payoutWeight < 0.45) return "Balanced lean: time";
    if (payoutWeight <= 0.55) return "Balanced";
    if (payoutWeight < 0.8) return "Balanced lean: payout";
    return "Strongest lean: payout";
  }

  function scoreGame(game, currentProfile) {
    const bankrollFit = Math.max(0, 5 - Math.max(0, game.bankroll - currentProfile.income));
    const riskFit = closeness(currentProfile.risk, game.risk, 1.2);
    const skillFit = currentProfile.skill >= game.skill ? 5 : Math.max(0, 5 - (game.skill - currentProfile.skill) * 1.6);
    const preferenceFit = game.time * currentProfile.timeWeight + game.payout * currentProfile.payoutWeight;
    const beginnerPenalty = currentProfile.skill <= 2 && game.skill >= 4 ? -2.5 : 0;
    const lowIncomePenalty = currentProfile.income <= 2 && game.bankroll >= 4 ? -2 : 0;
    const lowRiskPenalty = currentProfile.risk <= 2 && game.risk >= 4 ? -2.2 : 0;

    return (
      riskFit +
      skillFit * 0.95 +
      bankrollFit * 0.85 +
      preferenceFit * 1.35 +
      game.availability * 0.35 +
      beginnerPenalty +
      lowIncomePenalty +
      lowRiskPenalty
    );
  }

  function venueGameFit(venue, topGames) {
    return topGames.reduce((total, game) => {
      const hasCategory = game.suitableVenueCategories.some((category) => venue.categories.includes(category));
      return total + (hasCategory ? 1.4 : -0.4);
    }, 0);
  }

  function scoreVenue(venue, currentProfile, topGames) {
    const lowLimitBoost = venue.categories.includes("low-limit") ? Math.max(0, 5 - currentProfile.income) * 0.9 : 0;
    const premiumPenalty = currentProfile.income <= 2 && venue.region === "Strip" && !venue.categories.includes("low-limit") ? -2.4 : 0;
    const riskMismatch = currentProfile.risk <= 2 && venue.scores.value <= 2 ? -1.6 : 0;
    const payoutBoost =
      currentProfile.payoutWeight * (venue.scores.poker + venue.scores.sportsbook + venue.scores.table) * 0.26;
    const timeBoost =
      currentProfile.timeWeight * (venue.scores.value + (venue.categories.includes("low-limit") ? 2 : 0)) * 0.56;
    const skillBoost =
      currentProfile.skill >= 4 && venue.scores.poker >= 4 ? 1.5 : currentProfile.skill <= 2 && venue.scores.poker >= 5 ? -1.2 : 0;

    return (
      venue.scores.value * 0.9 +
      venue.scores.table * 0.35 +
      venue.scores.poker * 0.2 +
      venueGameFit(venue, topGames) +
      lowLimitBoost +
      payoutBoost +
      timeBoost +
      skillBoost +
      premiumPenalty +
      riskMismatch
    );
  }

  function fitTagsForGame(game, currentProfile) {
    const tags = [];
    if (game.risk <= currentProfile.risk) tags.push("risk fit");
    if (game.skill <= currentProfile.skill) tags.push("skill fit");
    if (game.bankroll <= currentProfile.income) tags.push("bankroll fit");
    tags.push(currentProfile.payoutWeight > 0.55 ? "payout weighted" : "time weighted");
    return tags;
  }

  function fitTagsForVenue(venue, currentProfile) {
    const tags = [venue.region];
    if (venue.categories.includes("low-limit")) tags.push("low-limit signal");
    if (venue.scores.poker >= 4 && currentProfile.skill >= 3) tags.push("poker depth");
    if (venue.scores.sportsbook >= 4 && currentProfile.payoutWeight > 0.55) tags.push("sportsbook quality");
    if (venue.scores.value >= 4) tags.push("value score");
    return tags;
  }

  function renderGameCard(game, rank, currentProfile) {
    const content = contentById[game.id];
    const profileUrl = content ? `game-profiles/${content.slug}.html` : "game-profiles.html";

    return `
      <article class="match-card">
        <div class="match-card-top">
          <a class="match-title-link" href="${profileUrl}" aria-label="Open ${game.name} game profile">
            <span class="rank-pill">#${rank}</span>
            <h3>${game.name}</h3>
          </a>
        </div>
        <p>${game.summary}</p>
        <div class="score-row">
          ${miniScore("Risk", game.risk)}
          ${miniScore("Skill", game.skill)}
          ${miniScore("Time", game.time)}
          ${miniScore("Payout", game.payout)}
        </div>
        <div class="tag-row">
          ${fitTagsForGame(game, currentProfile).map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <p class="caveat">${game.caveat}</p>
        <div class="source-links">${sourceLinks(game.sourceIds)}</div>
      </article>
    `;
  }

  function renderVenueCard(venue, rank, currentProfile) {
    const reason = venue.highlights[0] || venue.cautions[0];
    const titleContent = `
      <span class="rank-pill">#${rank}</span>
      <h3>${venue.name}</h3>
    `;
    const titleMarkup = venue.publicUrl
      ? `<a class="match-title-link" href="${venue.publicUrl}" target="_blank" rel="noreferrer" aria-label="Open ${venue.name} public website">${titleContent}</a>`
      : `<div class="match-title-link">${titleContent}</div>`;

    return `
      <article class="match-card">
        <div class="match-card-top">
          ${titleMarkup}
        </div>
        <p>${reason}</p>
        <div class="score-row">
          ${miniScore("Value", venue.scores.value)}
          ${miniScore("Poker", venue.scores.poker)}
          ${miniScore("Book", venue.scores.sportsbook)}
          ${miniScore("Tables", venue.scores.table)}
        </div>
        <div class="tag-row">
          ${fitTagsForVenue(venue, currentProfile).map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <p class="caveat">${venue.cautions[0] || "Verify current availability before using this for an itinerary."}</p>
        <div class="source-links">${sourceLinks(venue.sourceIds)}</div>
      </article>
    `;
  }

  function miniScore(label, score) {
    return `
      <div class="score">
        <span>${label}</span>
        <div class="score-bar" aria-label="${label} ${score} out of 5">
          <b style="--score:${score}"></b>
        </div>
      </div>
    `;
  }

  function renderProfileSummary(currentProfile, topGame) {
    const riskText = controls.risk.options[controls.risk.selectedIndex].text;
    const skillText = controls.skill.options[controls.skill.selectedIndex].text;
    results.summary.innerHTML = `
      <strong>Profile readout</strong>
      <p>${riskText} risk, ${incomeLabel(currentProfile.income)}, ${skillText.toLowerCase()} skill.</p>
      <p>Current model bias: ${styleLabel(currentProfile.payoutWeight).toLowerCase()}.</p>
      <p>Primary fit: ${topGame.name}.</p>
    `;
  }

  function render() {
    const currentProfile = profile();
    const rankedGames = data.gameProfiles
      .map((game) => ({ game, score: scoreGame(game, currentProfile) }))
      .sort((a, b) => b.score - a.score);
    const topGames = rankedGames.slice(0, 3).map((item) => item.game);
    const rankedVenues = data.venues
      .map((venue) => ({ venue, score: scoreVenue(venue, currentProfile, topGames) }))
      .sort((a, b) => b.score - a.score);

    results.styleLabel.textContent = styleLabel(currentProfile.payoutWeight);
    results.snapshot.textContent = `Snapshot prepared ${data.snapshotDate}`;
    results.games.innerHTML = topGames
      .map((game, index) => renderGameCard(game, index + 1, currentProfile))
      .join("");
    results.casinos.innerHTML = rankedVenues
      .slice(0, 5)
      .map(({ venue }, index) => renderVenueCard(venue, index + 1, currentProfile))
      .join("");
    renderProfileSummary(currentProfile, topGames[0]);
  }

  Object.values(controls).forEach((control) => {
    control.addEventListener("input", render);
    control.addEventListener("change", render);
  });

  render();
})();
