# Vegas Edge

A static hackathon prototype that uses public VegasAdvantage pages as a seed data source for a Las Vegas casino intelligence dashboard.

## What It Does

- Normalizes public VegasAdvantage summaries for blackjack, table games, poker rooms, and sportsbooks.
- Shows searchable venue cards with visible source backlinks.
- Builds a simple recommendation run sheet from preference, region, and bankroll-sensitivity inputs.
- Adds a matcher page that uses risk tolerance, income, skill level, and a longest-time-vs-best-payout slider to suggest games and casinos.
- Adds a Game Profiles library with individual educational pages for each modeled game.
- Surfaces data limits, count conflicts, and responsible-gambling boundaries in the UI.

## Data Policy

VegasAdvantage states that detailed survey data and current monthly updates are part of its membership product. This prototype does not scrape or reproduce paid detail. It uses public page summaries within a small seed file and links back to every source page.

Source pages used:

- https://vegasadvantage.com/
- https://vegasadvantage.com/las-vegas-blackjack/
- https://vegasadvantage.com/las-vegas-table-game-survey/
- https://vegasadvantage.com/open-las-vegas-poker-rooms/
- https://vegasadvantage.com/las-vegas-sportsbooks/

## Local Use

Run the standalone Python launcher:

```bash
python3 app.py
```

The app binds to `127.0.0.1`, finds an available port starting at `8765`, and opens the browser automatically. It uses only Python's standard library.

Useful options:

```bash
python3 app.py --no-browser
python3 app.py --port 9000
```

You can also open `index.html` directly in a browser. No build step or package install is required.

For a hosted demo, any static host can serve the repository root.

## Files

- `index.html` - application shell
- `recommend.html` - player profile matcher page
- `game-profiles.html` - index of game profile image links
- `game-profiles/` - individual profile pages
- `app.py` - standalone Python launcher for laptop prototyping
- `styles.css` - responsive UI styling
- `src/data.js` - public seed data with source references
- `src/app.js` - filtering, rendering, and recommendation logic
- `src/recommend.js` - matcher scoring model and result rendering
- `src/game-profile-content.js` - summary, history, beginner, and advanced profile copy
- `src/game-profiles.js` - Game Profiles index renderer
- `src/game-profile-detail.js` - individual game profile renderer
- `assets/vegas-edge-hero.png` - generated bitmap hero asset
