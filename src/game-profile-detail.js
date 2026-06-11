(function () {
  const rootPrefix = document.body.dataset.root || "../";
  const gameId = document.body.dataset.gameId;
  const data = window.VEGAS_EDGE_DATA;
  const contentById = window.VEGAS_GAME_PROFILE_CONTENT;
  const game = data.gameProfiles.find((profile) => profile.id === gameId);
  const content = contentById[gameId];
  const sourceById = Object.fromEntries(data.sources.map((source) => [source.id, source]));

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function sourceLinks(sourceIds) {
    return sourceIds
      .map((sourceId) => {
        const source = sourceById[sourceId];
        return `<a href="${source.url}" target="_blank" rel="noreferrer">${escapeHtml(source.title)}</a>`;
      })
      .join("");
  }

  function score(label, value) {
    return `
      <div class="score">
        <span>${label}</span>
        <div class="score-bar" aria-label="${label} ${value} out of 5">
          <b style="--score:${value}"></b>
        </div>
      </div>
    `;
  }

  function listItems(items) {
    return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  }

  function strategySources(sources) {
    return sources
      .map(
        (source) => `
          <li>
            <a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.label)}</a>
            <span>${escapeHtml(source.note)}</span>
          </li>
        `
      )
      .join("");
  }

  function strategySection(strategy) {
    if (!strategy) {
      return "";
    }

    return `
      <section class="strategy-section">
        <p class="eyebrow">Data-Based Strategy</p>
        <h2>${escapeHtml(strategy.name)}</h2>
        <div class="strategy-block">
          <h3>Best Strategy</h3>
          <p>${escapeHtml(strategy.bestStrategy)}</p>
        </div>
        <div class="strategy-block">
          <h3>How To Use It</h3>
          <ol>${listItems(strategy.howToUse)}</ol>
        </div>
        <div class="strategy-block">
          <h3>Avoid</h3>
          <ul>${listItems(strategy.avoid)}</ul>
        </div>
        <div class="strategy-block">
          <h3>Why It Works</h3>
          <p>${escapeHtml(strategy.whyItWorks)}</p>
        </div>
        ${
          strategy.advancedNote
            ? `<div class="strategy-block"><h3>Advanced Note</h3><p>${escapeHtml(strategy.advancedNote)}</p></div>`
            : ""
        }
        <div class="strategy-block strategy-source-block">
          <h3>Sources</h3>
          <ul>${strategySources(strategy.sources)}</ul>
        </div>
        <p class="strategy-responsible-note">
          Strategy can reduce disadvantage or improve decision quality, but it does not guarantee winning.
          Set limits before playing, never chase losses, and use help resources if gambling stops being recreational.
        </p>
      </section>
    `;
  }

  function renderMissing() {
    document.body.innerHTML = `
      <main class="section-block">
        <div class="section-inner">
          <h1>Game profile unavailable</h1>
          <p>The requested game profile was not found.</p>
          <a class="button primary" href="${rootPrefix}game-profiles.html">Back to Game Profiles</a>
        </div>
      </main>
    `;
  }

  function render() {
    if (!game || !content) {
      renderMissing();
      return;
    }

    document.title = `${game.name} - Vegas Edge Game Profile`;
    const image =
      (content.image ? `${rootPrefix}${content.image}` : "") ||
      (window.vegasEdgeGameImage ? window.vegasEdgeGameImage(game, content) : "");
    document.body.innerHTML = `
      <a class="skip-link" href="#main-content">Skip to content</a>
      <header class="site-header" aria-label="Primary">
        <div class="brand-lockup" aria-label="Vegas Edge">
          <span class="brand-mark" aria-hidden="true">VE</span>
          <span class="brand-name">Vegas Edge</span>
        </div>
        <nav class="top-nav" aria-label="Sections">
          <a href="${rootPrefix}index.html">Matcher</a>
          <a href="${rootPrefix}game-profiles.html" aria-current="page">Game Profiles</a>
        </nav>
      </header>
      <main id="main-content">
        <section class="profile-detail-hero">
          <div class="section-inner profile-detail-hero-inner">
            <div>
              <a class="back-link" href="${rootPrefix}game-profiles.html">Back to Game Profiles</a>
              <p class="eyebrow">${escapeHtml(game.category)}</p>
              <h1>${escapeHtml(game.name)}</h1>
              <p class="hero-copy">${escapeHtml(content.summary)}</p>
            </div>
            <img class="profile-detail-image" src="${image}" alt="${escapeHtml(game.name)} game profile artwork">
          </div>
        </section>

        <section class="section-block" aria-label="${escapeHtml(game.name)} profile">
          <div class="section-inner profile-detail-layout">
            <article class="profile-article">
              <section>
                <p class="eyebrow">Summary</p>
                <p class="lead-sentence">${escapeHtml(content.summary)}</p>
              </section>
              <section>
                <h2>History of the Game</h2>
                <p>${escapeHtml(content.history)}</p>
              </section>
              <section>
                <h2>Beginner Hints</h2>
                <p>${escapeHtml(content.beginnerHints)}</p>
              </section>
              <section>
                <h2>Advanced Strategies</h2>
                <p>${escapeHtml(content.advancedStrategies[0])}</p>
                <p>${escapeHtml(content.advancedStrategies[1])}</p>
              </section>
              ${strategySection(content.strategy)}
            </article>

            <aside class="profile-facts">
              <h2>Model Signals</h2>
              <div class="score-row vertical-score-row">
                ${score("Risk", game.risk)}
                ${score("Skill", game.skill)}
                ${score("Time", game.time)}
                ${score("Payout", game.payout)}
                ${score("Bankroll", game.bankroll)}
                ${score("Availability", game.availability)}
              </div>
              <div class="tag-row">
                ${game.suitableVenueCategories.map((category) => `<span class="tag">${escapeHtml(category)}</span>`).join("")}
              </div>
              <div class="source-links profile-source-links">
                ${sourceLinks(game.sourceIds)}
              </div>
            </aside>
          </div>
        </section>
      </main>
      <footer class="site-footer">
        <div>
          <strong>Responsible play only.</strong>
          These profiles are educational and do not guarantee outcomes, payouts, or game availability.
        </div>
        <a href="https://www.ncpgambling.org/help-treatment/about-the-national-problem-gambling-helpline/" target="_blank" rel="noreferrer">
          Problem gambling help: 1-800-GAMBLER
        </a>
      </footer>
    `;
  }

  render();
})();
