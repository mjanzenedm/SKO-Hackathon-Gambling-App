window.VEGAS_GAME_PROFILE_CONTENT = {
  "blackjack-32": {
    slug: "blackjack-32",
    title: "3:2 Blackjack",
    image: "assets/game-profile-previews/blackjack-32.png",
    palette: ["#111111", "#0f766e", "#c98208"],
    summary:
      "3:2 blackjack is a decision-heavy casino card game where correct basic strategy can make the session more efficient than many higher-volatility table games.",
    history:
      "Blackjack grew from European twenty-one games such as vingt-et-un and became a fixture in American casinos as operators standardized rules around a dealer hand, player decisions, and a bonus payout for a natural blackjack. The traditional 3:2 payout became the benchmark players used to judge blackjack value, while newer 6:5 games spread in some markets as casinos looked for higher hold. For Vegas Edge, 3:2 blackjack is treated as a value-sensitive profile because the payout rule, dealer rule, doubling rules, and minimums can change the quality of the game materially.",
    beginnerHints:
      "Start by confirming the table actually pays 3:2 on blackjack, then use a basic strategy chart until the decisions are automatic. Avoid insurance unless you understand the math behind it, keep bets small while learning, and do not assume every blackjack table in the same casino has the same rules.",
    advancedStrategies: [
      "Advanced blackjack selection starts before the first hand: compare dealer stands or hits soft 17, double-after-split rules, surrender availability, deck count, penetration, and whether mid-shoe entry is allowed. The goal is not to chase a single feature, but to identify a complete rule set that keeps the house edge lower while matching your bankroll and session goals.",
      "Serious advantage play requires disciplined counting, bet spreads, cover decisions, and tolerance for casino countermeasures, so this prototype treats it as educational rather than a recommendation. For most players, the practical advanced edge is rule selection, perfect basic strategy, strict session limits, and leaving tables whose rules or pace no longer match the plan."
    ]
  },
  "low-limit-blackjack": {
    slug: "low-limit-blackjack",
    title: "Low-Limit Blackjack",
    image: "assets/game-profile-previews/low-limit-blackjack.png",
    palette: ["#172554", "#0f766e", "#eab308"],
    summary:
      "Low-limit blackjack is best for players who want table-game structure and longer playing time with smaller individual decisions.",
    history:
      "Low-limit blackjack developed as casinos used accessible table minimums to introduce casual players to the casino floor and keep slower-paced card action available alongside higher-limit pits. In Las Vegas, low-limit opportunities have shifted over time as labor costs, demand, and rule changes pushed many Strip tables higher. The Vegas Edge profile separates low-limit blackjack from traditional 3:2 blackjack because a cheap seat is useful for session length, but it does not automatically mean the underlying rules are strong.",
    beginnerHints:
      "Treat the low minimum as a way to learn calmly, not as permission to overplay. Confirm the blackjack payout, dealer rule, and allowed doubles before buying in, then keep the bet size consistent while you practice basic strategy.",
    advancedStrategies: [
      "The advanced low-limit skill is comparing total cost of play instead of only looking at the posted minimum. A $5 table with poor rules can be worse than a slightly higher table with a better payout, better double rules, and a slower pace.",
      "Use low-limit games for skill repetition and bankroll control, especially when learning count-neutral discipline such as not chasing losses. If the table becomes crowded, too fast, or pushes side bets aggressively, the time-value advantage of the low minimum can disappear."
    ]
  },
  craps: {
    slug: "craps",
    title: "Craps",
    image: "assets/game-profile-previews/craps.png",
    palette: ["#14532d", "#f8fafc", "#dc2626"],
    summary:
      "Craps is a social dice game where conservative line bets can support moderate risk while proposition-heavy betting can raise volatility quickly.",
    history:
      "Modern craps descends from older dice games, especially hazard, and evolved in the United States through street play and casino standardization. The casino layout organized many wagers around a shooter, the pass line, come bets, odds, place bets, and proposition bets, creating one of the most energetic tables on the floor. Vegas Edge treats craps as broadly available and highly configurable because the same table can serve a conservative player or a high-volatility player depending on bet selection.",
    beginnerHints:
      "Begin with pass line or come bets and learn what odds bets do before adding more wagers. Avoid the center-table proposition bets while learning, because they are fast, tempting, and often much more expensive over time.",
    advancedStrategies: [
      "Advanced craps play is mostly about wager discipline and volatility control. Full odds can reduce the blended house edge on a line-bet package, but they also increase the amount of money exposed on each decision, so the right odds multiple depends on bankroll and session length.",
      "Experienced players should map every bet to a purpose: line bets for lower house edge, place bets for controlled number exposure, and hardways or props only as entertainment costs. Dice-setting claims should not be treated as reliable edge without evidence, so the practical strategy remains bet selection, table minimum selection, and loss-limit enforcement."
    ]
  },
  "pai-gow-poker": {
    slug: "pai-gow-poker",
    title: "Pai Gow Poker",
    image: "assets/game-profile-previews/pai-gow-poker.png",
    palette: ["#4c1d95", "#f5f3ff", "#f59e0b"],
    summary:
      "Pai Gow Poker is a slower table game that often produces pushes, making it a strong fit for players who prioritize longer sessions.",
    history:
      "Pai Gow Poker combines the two-hand structure of Chinese pai gow with poker rankings and became popular in American card rooms and casinos in the late twentieth century. The modern casino version asks players to arrange seven cards into a five-card high hand and a two-card low hand, then compare both hands against the dealer. Its high push frequency makes it different from many faster table games, which is why Vegas Edge scores it strongly for playing time rather than payout upside.",
    beginnerHints:
      "Learn the house way for setting hands and use it as a baseline until you understand exceptions. Remember that winning only one of the two hands usually pushes, so the game rewards patient hand-setting more than fast action.",
    advancedStrategies: [
      "Advanced hand setting means recognizing when to split pairs, preserve a strong two-card hand, or sacrifice a marginal high hand to avoid losing both sides. Small setting differences matter most on borderline hands, so reviewing common dealer-house-way examples is more useful than memorizing rare edge cases first.",
      "If the table allows player banking, understand the bankroll requirements, commission treatment, and rotation rules before taking it. Side bets can make the game feel more exciting, but they usually change the low-volatility profile that makes Pai Gow Poker attractive in the first place."
    ]
  },
  "three-card-poker": {
    slug: "three-card-poker",
    title: "Three Card Poker",
    image: "assets/game-profile-previews/three-card-poker.png",
    palette: ["#7f1d1d", "#fff7ed", "#0f766e"],
    summary:
      "Three Card Poker is a simple, fast table game with approachable rules and higher volatility than slower value-oriented games.",
    history:
      "Three Card Poker was created in the 1990s and spread widely after casino distributors packaged it as a compact, easy-to-teach table game. It combines an ante-and-play decision against the dealer with optional bonus-style side betting, giving casinos a game that is faster and simpler than traditional poker. Vegas Edge scores it as beginner-friendly but payout-leaning because its simplicity comes with meaningful volatility.",
    beginnerHints:
      "Learn the basic play threshold before sitting down: many players use queen-six-four or better as the simple rule for continuing against the dealer. Keep the Pair Plus or bonus side bet small if you play it at all, because the side bet is where much of the volatility lives.",
    advancedStrategies: [
      "Advanced play is mostly about not giving back value through bad continue/fold decisions. The ante-play decision is simple enough to execute accurately, so the real discipline is avoiding emotional deviations after streaks.",
      "Evaluate pay tables before playing, because bonus payouts can vary by casino and materially affect the game profile. If the goal is longer time, reduce or skip side bets; if the goal is payout-style entertainment, size side bets as a separate entertainment budget rather than as part of a recovery plan."
    ]
  },
  "ultimate-texas-holdem": {
    slug: "ultimate-texas-holdem",
    title: "Ultimate Texas Hold'em",
    image: "assets/game-profile-previews/ultimate-texas-holdem.png",
    palette: ["#164e63", "#ecfeff", "#f97316"],
    summary:
      "Ultimate Texas Hold'em is a casino poker table game where early aggressive decisions can create higher upside and higher bankroll swings.",
    history:
      "Ultimate Texas Hold'em grew from the popularity of Texas hold'em and the casino industry's effort to turn familiar poker mechanics into house-banked table games. Unlike live poker, players compete against the dealer rather than one another, and the largest raise opportunity appears before all community cards are known. Vegas Edge profiles it as more skill-sensitive than many carnival games because betting timing and hand selection matter, even though the house remains the counterparty.",
    beginnerHints:
      "Before playing, understand that the biggest decision often happens preflop, where the available raise is largest. Learn a simplified starting-hand chart and avoid treating the Trips side bet as required.",
    advancedStrategies: [
      "Advanced Ultimate Texas Hold'em strategy focuses on knowing when to use the 4x preflop raise, when to wait, and when to check down weaker holdings. Because the raise multiple shrinks later in the hand, passing up correct early raises can cost more than beginners expect.",
      "Pay attention to table pay schedules, side-bet pressure, and bankroll depth. The game can feel like poker, but the variance pattern is closer to a table game with large decision-based bet sizing, so session limits and side-bet restraint are central to advanced play."
    ]
  },
  "roulette-00": {
    slug: "double-zero-roulette",
    title: "Double-Zero Roulette",
    image: "assets/game-profile-previews/double-zero-roulette.png",
    palette: ["#064e3b", "#fee2e2", "#111111"],
    summary:
      "Double-zero roulette is a chance-driven wheel game that is easy to understand but offers little room for skill-based improvement.",
    history:
      "Roulette developed in Europe and later took distinct forms as single-zero wheels became common in many European casinos while American casinos adopted the double-zero layout. The extra green pocket increased the house edge and helped define the Las Vegas-style wheel many visitors recognize. Vegas Edge treats double-zero roulette as widely available and simple, but not as a value game when compared with lower-edge table options.",
    beginnerHints:
      "Use outside bets such as red-black or odd-even if your goal is smoother variance, and understand that those bets do not improve the underlying house edge. Avoid systems that claim previous spins predict future spins on a properly functioning wheel.",
    advancedStrategies: [
      "The advanced move in roulette is table selection, not pattern prediction. A single-zero wheel is usually preferable when available, and a lower minimum can be more useful than a complex progression system.",
      "Experienced players should set a fixed spin budget and avoid escalating after losses. Progression systems can make sessions feel structured, but they do not change the wheel math and can increase the chance of hitting table limits or bankroll limits."
    ]
  },
  "roulette-000": {
    slug: "triple-zero-roulette",
    title: "Triple-Zero Roulette",
    image: "assets/game-profile-previews/triple-zero-roulette.png",
    palette: ["#111827", "#e0f2fe", "#22c55e"],
    summary:
      "Triple-zero roulette is a high-house-edge roulette variant best treated as short-session entertainment rather than a value play.",
    history:
      "Triple-zero roulette appeared as casinos experimented with new wheel layouts and higher-hold versions of familiar games, especially in major tourist markets. It keeps the recognizable roulette experience but adds a third green pocket, which increases the house advantage compared with single-zero and double-zero wheels. Vegas Edge scores it as payout-leaning and high risk because it is easy to play but costly over longer sessions.",
    beginnerHints:
      "If you choose this version, know that the third zero is not cosmetic; it changes the cost of play. Keep sessions short and compare the wheel to any double-zero or single-zero alternatives nearby.",
    advancedStrategies: [
      "Advanced strategy often means declining the game when your goal is value or longevity. If a group wants the experience anyway, use flat bets and a strict stop point rather than chasing the same result that would be cheaper on another wheel.",
      "Do not let the familiar roulette layout hide the rule difference. The best practical comparison is the number of green pockets, the table minimum, and the session budget, because betting systems do not overcome the added house edge."
    ]
  },
  baccarat: {
    slug: "baccarat",
    title: "Baccarat",
    image: "assets/game-profile-previews/baccarat.png",
    palette: ["#7c2d12", "#fff7ed", "#ca8a04"],
    summary:
      "Baccarat is a low-complexity card game where bet choice matters more than hand-playing skill.",
    history:
      "Baccarat has roots in European banking games and later developed into several casino forms, including chemin de fer, baccarat banque, and punto banco. The Las Vegas version most players encounter is usually punto banco, where drawing rules are automatic and players choose between banker, player, and tie outcomes. Vegas Edge scores baccarat as simple and broadly available, while noting that minimums can vary sharply by property and room.",
    beginnerHints:
      "Understand that you do not control the draw decisions, so focus on bet choice and bankroll limits. The banker bet is commonly the baseline value bet even with commission, while the tie bet is usually much more volatile.",
    advancedStrategies: [
      "Advanced baccarat is mostly about table selection, commission structure, and avoiding pattern myths. Scorecards can help players follow the shoe, but they should not be treated as predictive tools for independent outcomes.",
      "Compare traditional commission games with no-commission variants before playing, because alternative payout rules can change the value of banker wins. High-limit atmosphere can also push bet sizing up quickly, so table minimum matters as much as rule familiarity."
    ]
  },
  "live-poker": {
    slug: "live-poker-cash-games",
    title: "Live Poker Cash Games",
    image: "assets/game-profile-previews/live-poker-cash-games.png",
    palette: ["#0f172a", "#dcfce7", "#16a34a"],
    summary:
      "Live poker cash games are player-versus-player games where skill, table selection, and discipline matter more than house-banked game selection.",
    history:
      "Poker developed across the United States in the nineteenth century and continued to evolve through draw, stud, hold'em, and Omaha variants. Las Vegas poker rooms became central to the game's identity through cash games, tournament series, and televised poker eras that brought no-limit hold'em to a wider audience. Vegas Edge separates live poker from house-banked table games because the casino usually earns through rake while the player edge depends on decisions against other players.",
    beginnerHints:
      "Start at stakes where a lost buy-in is manageable, play fewer starting hands from early position, and pay attention to rake and promotions. A full table can be patient and slow, so avoid forcing action just because you came to play.",
    advancedStrategies: [
      "Advanced live poker starts with game selection: table composition, stack depth, rake cap, seat position, and opponent tendencies often matter more than the room's brand name. Moving tables can be a strategic decision, not a sign of impatience.",
      "Build decisions around ranges, position, bet sizing, and emotional control rather than single-hand results. Track sessions honestly, separate poker bankroll from trip money, and avoid moving up in stakes to recover losses."
    ]
  },
  sportsbook: {
    slug: "sportsbook-betting",
    title: "Sportsbook Betting",
    image: "assets/game-profile-previews/sportsbook-betting-v2.png",
    palette: ["#1e293b", "#dbeafe", "#b83280"],
    summary:
      "Sportsbook betting is a high-risk profile where price discipline and bankroll control matter more than picking a favorite team.",
    history:
      "Sports wagering has long existed through bookmakers and regulated Nevada sportsbooks, then expanded significantly as more jurisdictions legalized and mobile platforms became common. Las Vegas sportsbooks evolved from small betting counters into major viewing venues tied to operator networks and mobile account systems. Vegas Edge treats sportsbook betting as operator-driven because public VegasAdvantage data is structured around sportsbook operators rather than live lines.",
    beginnerHints:
      "Learn what odds mean before betting, use small fixed units, and avoid parlays until you understand how each added leg compounds risk. Do not bet a game just because you plan to watch it.",
    advancedStrategies: [
      "Advanced sportsbook discipline focuses on price, timing, and record keeping. Line shopping, tracking closing-line value, and specializing in markets you understand are more durable habits than chasing picks from social media.",
      "Promotions, limits, and house rules can change the real value of a wager, so read terms carefully and keep unit size consistent. The app does not provide picks or odds; it only identifies operator and venue fit from public source data."
    ]
  }
};
