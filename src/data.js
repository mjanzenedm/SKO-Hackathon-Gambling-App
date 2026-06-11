window.VEGAS_EDGE_DATA = {
  snapshotDate: "June 11, 2026",
  sources: [
    {
      id: "home",
      title: "Vegas Advantage home and public index",
      url: "https://vegasadvantage.com/",
      updated: "Copyright 2018-2026; latest posts visible through May 27, 2026",
      summary:
        "Public index for Las Vegas casino, blackjack, table game, sportsbook, poker room, hotel, and casino review coverage.",
      limit:
        "The home page says detailed information from over 70 casinos is available through membership, so this prototype keeps detailed paid-survey data out of the seed file."
    },
    {
      id: "blackjack",
      title: "Las Vegas Blackjack Survey 2026",
      url: "https://vegasadvantage.com/las-vegas-blackjack/",
      updated: "Last updated May 26, 2026",
      summary:
        "Public summary of blackjack coverage, survey method, 68 surveyed casinos, Strip/downtown/locals breakdowns, and casinos without traditional 3:2 blackjack.",
      limit:
        "Rules, minimums, and current monthly updates are membership data. The app uses only public summary facts and links back."
    },
    {
      id: "table",
      title: "Las Vegas 2026 Table Game Survey",
      url: "https://vegasadvantage.com/las-vegas-table-game-survey/",
      updated: "Last updated May 13, 2026",
      summary:
        "Public summary of 23 non-blackjack table game titles, casino counts, broad minimum ranges, and notes on baccarat, craps, roulette, pai gow poker, and other pit games.",
      limit:
        "Specific casino-by-casino minimums and rule variants are identified as membership details on the source page."
    },
    {
      id: "poker",
      title: "Las Vegas Poker Room Reviews 2026",
      url: "https://vegasadvantage.com/open-las-vegas-poker-rooms/",
      updated: "Last updated April 12, 2026",
      summary:
        "Public poker room directory with room notes, cash games, tournaments, closures, and reopening details for rooms such as Aria, Bellagio, Caesars Palace, Golden Nugget, South Point, Venetian, Westgate, and Wynn.",
      limit:
        "The poker page includes count changes around Planet Hollywood and Resorts World, so the app flags the count as a verification item."
    },
    {
      id: "sportsbook",
      title: "Las Vegas Sportsbook Reviews",
      url: "https://vegasadvantage.com/las-vegas-sportsbooks/",
      updated: "Last updated May 14, 2025",
      summary:
        "Public overview of Las Vegas sportsbook operators, mobile betting requirements, bet types, and operator notes for BetMGM, Boyd, Caesars, Circa, Golden Nugget, South Point, Station Casinos, Westgate, William Hill, and Wynn.",
      limit:
        "This is operator-level information. The app does not display live odds, lines, betting advice, or account actions."
    }
  ],
  metrics: [
    {
      value: "68",
      label: "Blackjack casinos surveyed",
      detail: "Public 2026 blackjack survey methodology",
      sourceId: "blackjack",
      tone: "teal"
    },
    {
      value: "23",
      label: "Non-blackjack table games",
      detail: "Public 2026 table game title count",
      sourceId: "table",
      tone: "gold"
    },
    {
      value: "17",
      label: "Poker rooms in active sample",
      detail: "Directory count reconciled against public closure notes",
      sourceId: "poker",
      tone: "magenta"
    },
    {
      value: "10",
      label: "Sportsbook operators",
      detail: "Operator groups from public sportsbook page",
      sourceId: "sportsbook",
      tone: "red"
    }
  ],
  marketSignals: [
    {
      title: "Locals casinos score well for value",
      body:
        "The public blackjack page says locals casinos often offer stronger odds and payouts, including some 3:2 blackjack at lower minimums."
    },
    {
      title: "Table-game depth is broad",
      body:
        "The public table game survey lists 23 non-blackjack titles across 62 licensed casinos operating under 66 brand names."
    },
    {
      title: "Sportsbooks are operator-driven",
      body:
        "The sportsbook page groups coverage by operator, which makes operator footprint more useful than one-off room notes for the prototype."
    }
  ],
  dataAlerts: [
    {
      title: "Membership boundary",
      body:
        "VegasAdvantage identifies current monthly survey updates, detailed minimums, and rule variants as membership content. This app stores only public summaries."
    },
    {
      title: "Poker count verification",
      body:
        "The poker source includes count changes and a Resorts World closure after a stated 18-room count. The app treats current count as a field check."
    },
    {
      title: "Responsible-use boundary",
      body:
        "The prototype is for informational planning. It does not rank bets, predict outcomes, collect account data, or place wagers."
    }
  ],
  tableGames: [
    { name: "Baccarat", casinos: 45, minimums: "$10-300", sourceId: "table" },
    { name: "Craps", casinos: 60, minimums: "$3-25", sourceId: "table" },
    { name: "Crapless Craps", casinos: 38, minimums: "$5-25", sourceId: "table" },
    { name: "Pai Gow Poker", casinos: 56, minimums: "$5-100", sourceId: "table" },
    { name: "Three Card Poker", casinos: 58, minimums: "$5-25", sourceId: "table" },
    { name: "Ultimate Texas Hold'em", casinos: 55, minimums: "$5-50", sourceId: "table" },
    { name: "00 Roulette", casinos: 60, minimums: "$2-50", sourceId: "table" },
    { name: "000 Roulette", casinos: 29, minimums: "$10-25", sourceId: "table" }
  ],
  gameProfiles: [
    {
      id: "blackjack-32",
      name: "3:2 Blackjack",
      category: "blackjack",
      sourceIds: ["blackjack"],
      suitableVenueCategories: ["blackjack", "low-limit"],
      risk: 2,
      skill: 3,
      time: 5,
      payout: 3,
      bankroll: 2,
      availability: 4,
      summary:
        "Best fit when the player wants a slower table game with room for decision quality. Public VegasAdvantage notes locals and off-Strip casinos tend to offer stronger blackjack value.",
      caveat:
        "Use this only where current rules are verified as traditional 3:2. The detailed casino-by-casino rules are not stored in this prototype."
    },
    {
      id: "low-limit-blackjack",
      name: "Low-Limit Blackjack",
      category: "blackjack",
      sourceIds: ["table", "blackjack"],
      suitableVenueCategories: ["blackjack", "low-limit"],
      risk: 2,
      skill: 2,
      time: 5,
      payout: 2,
      bankroll: 1,
      availability: 3,
      summary:
        "Good for stretching time on device and keeping stakes small. The public table-game FAQ calls out $1 blackjack at Downtown Grand and Oyo.",
      caveat:
        "Ultra-low limits are time-sensitive and may come with worse rules, so verify the table before play."
    },
    {
      id: "craps",
      name: "Craps",
      category: "table",
      sourceIds: ["table"],
      suitableVenueCategories: ["table", "low-limit"],
      risk: 3,
      skill: 2,
      time: 3,
      payout: 4,
      bankroll: 3,
      availability: 5,
      summary:
        "A broad table-game option with high energy and wide availability. The public table survey lists craps at 60 casinos and notes low-limit examples.",
      caveat:
        "Bet selection changes risk sharply; this prototype favors conservative pass-line style play, not proposition bets."
    },
    {
      id: "pai-gow-poker",
      name: "Pai Gow Poker",
      category: "table",
      sourceIds: ["table"],
      suitableVenueCategories: ["table", "low-limit"],
      risk: 2,
      skill: 2,
      time: 5,
      payout: 2,
      bankroll: 2,
      availability: 4,
      summary:
        "Strong choice for longer table time. VegasAdvantage's public survey lists pai gow poker at 56 casinos with public minimum ranges from $5 to $100.",
      caveat:
        "Side bets can materially change the risk profile and are outside this recommendation score."
    },
    {
      id: "three-card-poker",
      name: "Three Card Poker",
      category: "table",
      sourceIds: ["table"],
      suitableVenueCategories: ["table"],
      risk: 4,
      skill: 1,
      time: 2,
      payout: 4,
      bankroll: 3,
      availability: 5,
      summary:
        "Simple to learn and widely available. The public survey lists Three Card Poker at 58 casinos.",
      caveat:
        "Better for payout-seeking entertainment than bankroll preservation."
    },
    {
      id: "ultimate-texas-holdem",
      name: "Ultimate Texas Hold'em",
      category: "table",
      sourceIds: ["table"],
      suitableVenueCategories: ["table"],
      risk: 4,
      skill: 3,
      time: 3,
      payout: 4,
      bankroll: 3,
      availability: 5,
      summary:
        "A more decision-heavy carnival table game with broad availability. The public survey lists it at 55 casinos.",
      caveat:
        "More aggressive bet sizing can shorten session length quickly."
    },
    {
      id: "roulette-00",
      name: "Double-Zero Roulette",
      category: "table",
      sourceIds: ["table"],
      suitableVenueCategories: ["table"],
      risk: 4,
      skill: 1,
      time: 3,
      payout: 4,
      bankroll: 3,
      availability: 5,
      summary:
        "Easy, widely available, and payout-forward for casual play. The public survey lists 00 roulette at 60 casinos.",
      caveat:
        "It is chance-driven; skill level does not materially improve expected value."
    },
    {
      id: "roulette-000",
      name: "Triple-Zero Roulette",
      category: "table",
      sourceIds: ["table"],
      suitableVenueCategories: ["table"],
      risk: 5,
      skill: 1,
      time: 1,
      payout: 4,
      bankroll: 4,
      availability: 3,
      summary:
        "A high-house-edge entertainment pick for users who prioritize payout-style action over duration.",
      caveat:
        "The public survey lists 000 roulette at 29 casinos; this is not a value recommendation."
    },
    {
      id: "baccarat",
      name: "Baccarat",
      category: "table",
      sourceIds: ["table"],
      suitableVenueCategories: ["table"],
      risk: 3,
      skill: 1,
      time: 3,
      payout: 3,
      bankroll: 4,
      availability: 4,
      summary:
        "Low-complexity table play with broad availability. The public survey lists baccarat at 45 casinos with public minimum ranges from $10 to $300.",
      caveat:
        "Minimums can rise quickly at premium Strip properties."
    },
    {
      id: "live-poker",
      name: "Live Poker Cash Games",
      category: "poker",
      sourceIds: ["poker"],
      suitableVenueCategories: ["poker"],
      risk: 3,
      skill: 5,
      time: 4,
      payout: 5,
      bankroll: 3,
      availability: 3,
      summary:
        "Best fit for skilled players who want opponent-driven upside rather than house-banked table games. Public poker notes call out rooms with deep cash-game menus.",
      caveat:
        "Results depend heavily on skill, table selection, bankroll discipline, and current room traffic."
    },
    {
      id: "sportsbook",
      name: "Sportsbook Betting",
      category: "sportsbook",
      sourceIds: ["sportsbook"],
      suitableVenueCategories: ["sportsbook"],
      risk: 5,
      skill: 4,
      time: 2,
      payout: 5,
      bankroll: 4,
      availability: 4,
      summary:
        "Best fit for high-risk users seeking operator quality and wager variety. Public VegasAdvantage sportsbook coverage is operator-level, not live odds.",
      caveat:
        "This prototype does not provide odds, picks, account flows, or betting advice."
    }
  ],
  venues: [
    {
      id: "aria",
      name: "Aria",
      publicUrl: "https://aria.mgmresorts.com/en.html",
      region: "Strip",
      categories: ["poker", "sportsbook", "table"],
      tags: ["MGM Resorts", "BetMGM", "Premium poker"],
      scores: { value: 2, poker: 5, sportsbook: 4, table: 4 },
      highlights: [
        "Public poker summary lists 24 poker tables, standard cash games, and one daily tournament.",
        "Sportsbook coverage places Aria under the MGM Resorts and BetMGM footprint."
      ],
      cautions: ["Premium Strip profile; public summary does not imply low table minimums."],
      sourceIds: ["poker", "sportsbook"]
    },
    {
      id: "bellagio",
      name: "Bellagio",
      publicUrl: "https://bellagio.mgmresorts.com/en.html",
      region: "Strip",
      categories: ["poker", "sportsbook", "table"],
      tags: ["MGM Resorts", "24-hour poker", "Mixed games"],
      scores: { value: 2, poker: 5, sportsbook: 4, table: 5 },
      highlights: [
        "Public poker summary lists 37 poker tables, 24-hour operation, and Hold'em, Omaha, stud, and mixed games.",
        "BetMGM sportsbook footprint includes Bellagio."
      ],
      cautions: ["Better fit for depth and quality than low-minimum hunting."],
      sourceIds: ["poker", "sportsbook"]
    },
    {
      id: "caesars-palace",
      name: "Caesars Palace",
      publicUrl: "https://www.caesars.com/caesars-palace",
      region: "Strip",
      categories: ["poker", "sportsbook", "table"],
      tags: ["Caesars Sportsbook", "24-hour poker", "Daily tournaments"],
      scores: { value: 2, poker: 5, sportsbook: 4, table: 4 },
      highlights: [
        "Public poker summary says the room is open 24 hours, spreads 1/3 and 2/5 no-limit Hold'em, and has four daily tournaments.",
        "Sportsbook coverage places Caesars Palace inside the Caesars Sportsbook footprint."
      ],
      cautions: ["Central Strip convenience can trade off against value pricing."],
      sourceIds: ["poker", "sportsbook"]
    },
    {
      id: "circa",
      name: "Circa",
      publicUrl: "https://www.circalasvegas.com/",
      region: "Downtown",
      categories: ["sportsbook", "table"],
      tags: ["Serious action", "24-hour sportsbook", "Downtown"],
      scores: { value: 3, poker: 1, sportsbook: 5, table: 4 },
      highlights: [
        "Sportsbook coverage describes Circa as taking serious action and operating its main sportsbook 24 hours.",
        "The blackjack page calls out a stand-on-soft-17 downtown blackjack game at Circa."
      ],
      cautions: ["No poker room in the public poker-room sample."],
      sourceIds: ["sportsbook", "blackjack"]
    },
    {
      id: "golden-nugget",
      name: "Golden Nugget",
      publicUrl: "https://www.goldennugget.com/las-vegas/",
      region: "Downtown",
      categories: ["poker", "sportsbook", "table"],
      tags: ["Downtown poker", "IGT sportsbook", "Cash games"],
      scores: { value: 3, poker: 4, sportsbook: 3, table: 4 },
      highlights: [
        "Public poker summary lists 13 tables and describes it as the only downtown casino with a poker room.",
        "Sportsbook coverage notes a Golden Nugget sportsbook on Fremont Street."
      ],
      cautions: ["Tournament volume is limited outside named series in the public summary."],
      sourceIds: ["poker", "sportsbook"]
    },
    {
      id: "orleans",
      name: "The Orleans",
      publicUrl: "https://orleans.boydgaming.com/",
      region: "Off-Strip",
      categories: ["poker", "blackjack", "table", "low-limit"],
      tags: ["24-hour poker", "Wide cash mix", "Locals value"],
      scores: { value: 5, poker: 5, sportsbook: 2, table: 4 },
      highlights: [
        "Public poker summary says Orleans has the widest variety of cash games and a rake capped at $5.",
        "The blackjack page groups Orleans with off-Strip and locals-style options for low-limit play."
      ],
      cautions: ["Verify current poker promotions directly before building a live itinerary."],
      sourceIds: ["poker", "blackjack"]
    },
    {
      id: "south-point",
      name: "South Point",
      publicUrl: "https://southpointcasino.com/",
      region: "Locals",
      categories: ["poker", "sportsbook", "table", "low-limit"],
      tags: ["24-hour poker", "24-hour sportsbook", "Decent action"],
      scores: { value: 5, poker: 5, sportsbook: 4, table: 4 },
      highlights: [
        "Public poker summary says the room operates 24 hours, spreads Hold'em, stud, and pot-limit Omaha, and has four daily tournaments.",
        "Sportsbook coverage says South Point accepts decent action and operates a 24-hour sportsbook."
      ],
      cautions: ["South Strip location is more car-friendly than walkable Strip planning."],
      sourceIds: ["poker", "sportsbook"]
    },
    {
      id: "red-rock",
      name: "Red Rock Resort",
      publicUrl: "https://www.redrockresort.com/",
      region: "Locals",
      categories: ["poker", "sportsbook", "table", "low-limit"],
      tags: ["Station Casinos", "Summerlin", "Tournaments"],
      scores: { value: 4, poker: 4, sportsbook: 3, table: 4 },
      highlights: [
        "Public poker summary identifies Red Rock as the only Summerlin poker room and notes tournaments Sunday through Thursday.",
        "Sportsbook coverage places Red Rock within the Station Casinos and STN Sports footprint."
      ],
      cautions: ["Regional fit matters; this is not a central Strip stop."],
      sourceIds: ["poker", "sportsbook"]
    },
    {
      id: "green-valley-ranch",
      name: "Green Valley Ranch",
      publicUrl: "https://www.greenvalleyranch.com/",
      region: "Locals",
      categories: ["poker", "sportsbook", "table", "low-limit"],
      tags: ["Station Casinos", "Henderson", "Reopened poker"],
      scores: { value: 4, poker: 4, sportsbook: 3, table: 4 },
      highlights: [
        "Public poker summary says Green Valley Ranch reopened its poker room on December 18, 2025 with 15 tables.",
        "Sportsbook coverage places Green Valley Ranch in the STN Sports operator group."
      ],
      cautions: ["Public poker summary says tournaments were not dealt at reopen and may be added in 2026."],
      sourceIds: ["poker", "sportsbook"]
    },
    {
      id: "westgate",
      name: "Westgate",
      publicUrl: "https://www.westgatelasvegas.com/",
      region: "Off-Strip",
      categories: ["poker", "sportsbook"],
      tags: ["High-limit sportsbook", "Poker room", "Near Strip"],
      scores: { value: 3, poker: 3, sportsbook: 5, table: 2 },
      highlights: [
        "Sportsbook coverage describes Westgate as prestigious, higher-limit, and willing to take action.",
        "Public poker summary lists a Westgate poker room located in the sportsbook area."
      ],
      cautions: ["Poker room hours are more limited than 24-hour rooms in the public summary."],
      sourceIds: ["poker", "sportsbook"]
    },
    {
      id: "wynn-encore",
      name: "Wynn / Encore",
      publicUrl: "https://www.wynnlasvegas.com/",
      region: "Strip",
      categories: ["poker", "sportsbook", "table"],
      tags: ["Luxury sportsbook", "PLO and mixed games", "Tourney series"],
      scores: { value: 2, poker: 5, sportsbook: 5, table: 4 },
      highlights: [
        "Public poker summary says Wynn/Encore is home to no-limit Hold'em, pot-limit Omaha, mixed games, and frequent tournament series.",
        "Sportsbook coverage describes the Wynn and Encore sportsbooks as among the most luxurious in Las Vegas."
      ],
      cautions: ["Best suited for quality and depth, not low-limit value assumptions."],
      sourceIds: ["poker", "sportsbook"]
    },
    {
      id: "venetian",
      name: "Venetian",
      publicUrl: "https://www.venetianlasvegas.com/",
      region: "Strip",
      categories: ["poker", "blackjack", "table"],
      tags: ["24-hour poker", "Tournament variety", "Easy Blackjack"],
      scores: { value: 2, poker: 5, sportsbook: 2, table: 4 },
      highlights: [
        "Public poker summary says Venetian offers cash games, single-table tournaments, daily tournaments, and larger series.",
        "Blackjack public summary lists Venetian among Easy Blackjack locations."
      ],
      cautions: ["Easy Blackjack pays 6/5 in the public summary; compare live alternatives before playing."],
      sourceIds: ["poker", "blackjack"]
    },
    {
      id: "main-street-station",
      name: "Main Street Station",
      publicUrl: "https://mainstreet.boydgaming.com/",
      region: "Downtown",
      categories: ["table", "low-limit"],
      tags: ["Craps odds", "Weekend tables", "Downtown"],
      scores: { value: 5, poker: 1, sportsbook: 1, table: 4 },
      highlights: [
        "Public table-game summary calls out Main Street Station for 20-times craps odds.",
        "The same public note says table games are only open on weekends."
      ],
      cautions: ["Weekend-only table availability is a hard planning constraint."],
      sourceIds: ["table"]
    },
    {
      id: "rio",
      name: "Rio",
      publicUrl: "https://www.riolasvegas.com/",
      region: "Off-Strip",
      categories: ["table", "low-limit"],
      tags: ["Low craps", "Off-Strip", "Value flag"],
      scores: { value: 5, poker: 1, sportsbook: 1, table: 3 },
      highlights: ["Public table-game summary notes $3 craps for 12 hours every day."],
      cautions: ["Validate active hours and limits before relying on the public summary."],
      sourceIds: ["table"]
    },
    {
      id: "downtown-grand",
      name: "Downtown Grand",
      publicUrl: "https://www.downtowngrand.com/",
      region: "Downtown",
      categories: ["blackjack", "sportsbook", "low-limit"],
      tags: ["Low blackjack", "Caesars Sportsbook", "Downtown"],
      scores: { value: 5, poker: 1, sportsbook: 3, table: 3 },
      highlights: [
        "Public table-game FAQ says Downtown Grand has $1 blackjack.",
        "Sportsbook coverage notes Downtown Grand uses the Caesars Sportsbook brand."
      ],
      cautions: ["Dollar-minimum notes are especially time-sensitive; verify before presenting live advice."],
      sourceIds: ["table", "sportsbook"]
    },
    {
      id: "oyo",
      name: "Oyo Casino",
      publicUrl: "https://www.oyolasvegas.com/",
      region: "Off-Strip",
      categories: ["blackjack", "low-limit"],
      tags: ["Low blackjack", "Off-Strip", "Budget signal"],
      scores: { value: 5, poker: 1, sportsbook: 1, table: 2 },
      highlights: ["Public table-game FAQ says Oyo has $1 blackjack."],
      cautions: ["Public FAQ does not replace current on-property minimum checks."],
      sourceIds: ["table"]
    },
    {
      id: "binions",
      name: "Binion's",
      publicUrl: "https://www.binions.com/",
      region: "Downtown",
      categories: ["blackjack", "sportsbook"],
      tags: ["Downtown", "William Hill", "3:2 caution"],
      scores: { value: 2, poker: 1, sportsbook: 2, table: 2 },
      highlights: [
        "Blackjack public summary lists Binion's among casinos without traditional 3:2 blackjack games.",
        "Sportsbook coverage places Binion's in the William Hill downtown footprint."
      ],
      cautions: ["Blackjack rules are a caution item in the public summary."],
      sourceIds: ["blackjack", "sportsbook"]
    },
    {
      id: "circus-circus",
      name: "Circus Circus",
      publicUrl: "https://www.circuscircus.com/",
      region: "Strip",
      categories: ["blackjack", "sportsbook"],
      tags: ["North Strip", "William Hill", "3:2 caution"],
      scores: { value: 2, poker: 1, sportsbook: 2, table: 2 },
      highlights: [
        "Blackjack public summary lists Circus Circus among casinos without traditional 3:2 blackjack games.",
        "Sportsbook coverage places Circus Circus in William Hill's Strip footprint."
      ],
      cautions: ["Good prototype example for rule-quality warnings."],
      sourceIds: ["blackjack", "sportsbook"]
    }
  ]
};
