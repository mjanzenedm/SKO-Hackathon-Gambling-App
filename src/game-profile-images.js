(function () {
  function escapeXml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function initials(name) {
    return name
      .replaceAll("'", "")
      .split(/\s+|-/)
      .filter(Boolean)
      .slice(0, 3)
      .map((part) => part[0].toUpperCase())
      .join("");
  }

  window.vegasEdgeGameImage = function vegasEdgeGameImage(game, content) {
    const palette = content.palette || ["#111111", "#0f766e", "#c98208"];
    const title = escapeXml(game.name);
    const category = escapeXml(game.category);
    const mark = escapeXml(initials(game.name));
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420" role="img" aria-label="${title}">
        <defs>
          <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stop-color="${palette[0]}"/>
            <stop offset="0.58" stop-color="${palette[1]}"/>
            <stop offset="1" stop-color="${palette[2]}"/>
          </linearGradient>
          <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M 44 0 L 0 0 0 44" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="2"/>
          </pattern>
        </defs>
        <rect width="640" height="420" fill="url(#bg)"/>
        <rect width="640" height="420" fill="url(#grid)"/>
        <circle cx="510" cy="92" r="110" fill="rgba(255,255,255,0.14)"/>
        <circle cx="104" cy="328" r="128" fill="rgba(0,0,0,0.18)"/>
        <rect x="74" y="78" width="200" height="280" rx="28" fill="rgba(255,255,255,0.9)" transform="rotate(-8 174 218)"/>
        <rect x="104" y="92" width="200" height="280" rx="28" fill="rgba(255,255,255,0.74)" transform="rotate(6 204 232)"/>
        <circle cx="450" cy="252" r="78" fill="rgba(17,17,17,0.88)"/>
        <circle cx="450" cy="252" r="54" fill="none" stroke="rgba(255,255,255,0.84)" stroke-width="10"/>
        <text x="174" y="236" text-anchor="middle" font-family="Arial, sans-serif" font-size="76" font-weight="900" fill="#111111">${mark}</text>
        <text x="450" y="262" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="900" fill="#ffffff">${category}</text>
        <text x="42" y="386" font-family="Arial, sans-serif" font-size="28" font-weight="900" fill="rgba(255,255,255,0.96)">${title}</text>
      </svg>
    `;

    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  };
})();
