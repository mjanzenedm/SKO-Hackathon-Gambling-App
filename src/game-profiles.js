(function () {
  const data = window.VEGAS_EDGE_DATA;
  const contentById = window.VEGAS_GAME_PROFILE_CONTENT;
  const grid = document.querySelector("#game-profile-grid");
  const count = document.querySelector("#profile-count");

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function render() {
    const profiles = data.gameProfiles
      .map((game) => ({ game, content: contentById[game.id] }))
      .filter((profile) => profile.content);

    count.textContent = `${profiles.length} profiles`;
    grid.innerHTML = profiles
      .map(({ game, content }) => {
        const image = window.vegasEdgeGameImage(game, content);
        return `
          <a class="profile-link-card" href="game-profiles/${content.slug}.html">
            <img src="${image}" alt="${escapeHtml(game.name)} game profile artwork">
            <span class="profile-link-body">
              <strong>${escapeHtml(game.name)}</strong>
              <span>${escapeHtml(content.summary)}</span>
            </span>
          </a>
        `;
      })
      .join("");
  }

  render();
})();
