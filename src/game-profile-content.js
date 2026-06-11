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
    ],
    strategy: {
      name: "Basic Strategy First, Counting Only as Advanced Study",
      bestStrategy:
        "Play favorable 3:2 tables when available, use a rule-correct basic strategy chart for every decision, and treat card counting as an advanced discipline rather than a casual shortcut.",
      howToUse: [
        "Confirm the table pays 3:2 on blackjack before you sit down; skip 6:5 when a playable 3:2 table is available.",
        "Use a basic strategy chart that matches the table rules, especially deck count, dealer soft-17 rule, doubling, splitting, and surrender.",
        "Make the chart decision every hand before considering hunches, streaks, or table talk.",
        "Keep bet sizing fixed unless you have trained, tested, and bankroll-supported advantage-play reasons to vary it."
      ],
      avoid: [
        "6:5 blackjack when comparable 3:2 games are available.",
        "Routine insurance or even-money decisions as a casual player.",
        "Changing hit, stand, double, or split decisions because a hand feels due.",
        "Treating card counting as easy guaranteed profit."
      ],
      whyItWorks:
        "Basic strategy is the expected-value-minimizing decision set for the rules in front of you. A 6:5 payout materially worsens the game compared with 3:2, while counting can shift edge only when the count, bet spread, rules, penetration, and discipline all line up.",
      advancedNote:
        "Card counting tracks whether the remaining shoe is richer in high cards or low cards. High-card-rich shoes can improve blackjacks, doubles, splits, and dealer bust frequency, but real use requires accurate running and true counts, practice, bankroll depth, and awareness that casinos may shuffle early, limit action, back off, or bar counters.",
      sources: [
        {
          label: "Wizard of Odds: Blackjack Basic Strategy",
          url: "https://wizardofodds.com/games/blackjack/strategy/calculator/",
          note: "Strategy calculator and rule-sensitive basic strategy reference."
        },
        {
          label: "Wizard of Odds: High-Low Card Counting",
          url: "https://wizardofodds.com/games/blackjack/card-counting/high-low/",
          note: "Explains how high-low counting changes decisions and why execution discipline matters."
        },
        {
          label: "VegasAdvantage: Las Vegas Blackjack",
          url: "https://vegasadvantage.com/las-vegas-blackjack/",
          note: "Used for public Las Vegas blackjack rule and availability context."
        }
      ]
    }
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
    ],
    strategy: {
      name: "Basic Strategy Plus Rule Screening",
      bestStrategy:
        "Use basic strategy, but first screen the table for rules that keep the low minimum from becoming a bad mathematical tradeoff.",
      howToUse: [
        "Look for 3:2 blackjack before choosing a low-limit seat; a cheap 6:5 table can cost more over time than a slightly higher 3:2 game.",
        "Check whether doubling after splits, surrender, and reasonable split rules are available.",
        "Use a simple basic strategy chart for every decision and keep the same small base bet while learning.",
        "Leave if the table relies on side-bet pressure, fast pace, or poor rules that defeat the purpose of low-limit play."
      ],
      avoid: [
        "Assuming low minimum automatically means good value.",
        "6:5 payouts when 3:2 alternatives exist.",
        "Side bets, insurance, and progressive betting after losses.",
        "Overbuying chips just because the posted minimum is small."
      ],
      whyItWorks:
        "Low-limit play helps session length only if the rule set is not giving too much value back to the house. Basic strategy reduces avoidable decision errors, while avoiding 6:5 and weak rules protects the biggest controllable parts of blackjack expected value.",
      advancedNote:
        "Card counting is possible only with enough penetration, rule quality, skill, and bankroll; at many low-limit tables, poor rules or crowded conditions can erase the practical value before a casual player has an edge.",
      sources: [
        {
          label: "Wizard of Odds: Blackjack Basic Strategy",
          url: "https://wizardofodds.com/games/blackjack/strategy/calculator/",
          note: "Use a chart matched to the exact table rules."
        },
        {
          label: "VegasAdvantage: Las Vegas Blackjack",
          url: "https://vegasadvantage.com/las-vegas-blackjack/",
          note: "Public Las Vegas blackjack notes used for low-limit and rule-quality context."
        }
      ]
    }
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
    ],
    strategy: {
      name: "Pass Line or Don't Pass With Odds",
      bestStrategy:
        "Make a pass line or don't pass line bet, then take or lay odds after a point is established instead of spreading money across high-house-edge center bets.",
      howToUse: [
        "Choose either pass line or don't pass before the come-out roll and keep the line bet at a size you can repeat calmly.",
        "After a point is set, add the odds bet only up to a level that still fits your session limit.",
        "Treat odds as paired with the line bet; it cannot be made by itself and it increases variance.",
        "Keep the plan simple: line bet, odds, decision, reset."
      ],
      avoid: [
        "Hardways, horn, any seven, and other proposition bets as a default strategy.",
        "Increasing odds beyond your bankroll comfort just because the odds portion has no house edge.",
        "Dice-control claims or streak logic as a substitute for bet selection.",
        "Chasing losses with larger line bets."
      ],
      whyItWorks:
        "Odds bets are paid at true odds, so the odds portion has 0% house edge, while the required line bet still has a house edge. Combining the line bet with odds lowers the blended house edge compared with betting the same total amount on many other craps wagers.",
      sources: [
        {
          label: "Wizard of Odds: Craps House Edge Appendix",
          url: "https://wizardofodds.com/games/craps/appendix/1/",
          note: "Shows 0% expected edge on buying and laying odds and higher edges on many proposition bets."
        },
        {
          label: "VegasAdvantage: Las Vegas Table Game Survey",
          url: "https://vegasadvantage.com/las-vegas-table-game-survey/",
          note: "Public source for Las Vegas craps availability and minimum context."
        }
      ]
    }
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
    ],
    strategy: {
      name: "Correct Hand Setting",
      bestStrategy:
        "Set the five-card high hand and two-card low hand according to a reliable house-way-style strategy so both hands are as balanced as possible without fouling the hand.",
      howToUse: [
        "Sort the seven cards into the best five-card poker hand and the strongest legal two-card hand that can sit behind it.",
        "Make sure the five-card high hand always outranks the two-card low hand; otherwise the hand is fouled.",
        "Use the casino's house way as a baseline for close decisions, especially two pair, three pair, straights, flushes, and full houses.",
        "If player banking is offered, use it only after you understand the rules, commission, bankroll requirement, and rotation."
      ],
      avoid: [
        "Setting only the strongest possible high hand while leaving the low hand too weak.",
        "Fouling the hand by making the two-card hand outrank the five-card hand.",
        "Using side bets as the main plan.",
        "Banking without enough bankroll or rule knowledge."
      ],
      whyItWorks:
        "Pai Gow Poker is decided by two comparisons, so correct setting improves the chance of winning or pushing both hands instead of accidentally turning a balanced hand into a loss. Banking can improve expectation in some formats, but only when the player understands the exposure and rules.",
      advancedNote:
        "Because pushes are common, small setting errors matter over time. The practical edge is reducing avoidable missets, not trying to force action from every seven-card hand.",
      sources: [
        {
          label: "Wizard of Odds: Pai Gow Poker",
          url: "https://wizardofodds.com/games/pai-gow-poker/",
          note: "Strategy and house-edge reference for hand setting, banking, and common rule variations."
        },
        {
          label: "VegasAdvantage: Las Vegas Table Game Survey",
          url: "https://vegasadvantage.com/las-vegas-table-game-survey/",
          note: "Public source for Pai Gow Poker availability and minimum context."
        }
      ]
    }
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
    ],
    strategy: {
      name: "Q-6-4 Ante-Play Threshold",
      bestStrategy:
        "Make the Play bet with queen-six-four or better and fold weaker hands, while treating Pair Plus and other side bets as optional entertainment rather than the core strategy.",
      howToUse: [
        "Look at the three-card hand before making the Play decision.",
        "If the hand is Q-6-4 or better, make the Play bet.",
        "If the hand is worse than Q-6-4, fold and do not add more money to a negative situation.",
        "Keep the Ante/Play plan separate from any side-bet budget."
      ],
      avoid: [
        "Playing every hand because the rules feel simple.",
        "Folding qualifying Q-6-4-or-better hands after short-term losses.",
        "Using Pair Plus or progressive side bets as the main strategy.",
        "Increasing bet size to recover a folded hand."
      ],
      whyItWorks:
        "The Q-6-4 threshold is the standard expected-value play/fold rule for the Ante/Play decision. It prevents players from adding the Play bet to hands that are too weak while preserving value on hands strong enough to continue.",
      sources: [
        {
          label: "Wizard of Odds: Three Card Poker",
          url: "https://wizardofodds.com/games/three-card-poker/",
          note: "Strategy reference for the Q-6-4 play/fold threshold and side-bet math."
        },
        {
          label: "VegasAdvantage: Las Vegas Table Game Survey",
          url: "https://vegasadvantage.com/las-vegas-table-game-survey/",
          note: "Public source for Three Card Poker availability and minimum context."
        }
      ]
    }
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
    ],
    strategy: {
      name: "Raise Early When Equity Supports It",
      bestStrategy:
        "Use the accepted Ultimate Texas Hold'em raise structure: 4x before the flop with strong starting hands, 2x on the flop with sufficient equity, and 1x on the river only with qualifying made hands or accepted strategy bluffs.",
      howToUse: [
        "Before the flop, make the 4x raise with strong starting hands from a reliable strategy chart rather than waiting for more cards.",
        "If you check preflop, use the flop decision to make a 2x raise only when the hand has enough equity against the dealer.",
        "If you reach the river, make the 1x call with qualifying made hands and chart-supported bluff-catchers; fold hands that do not meet strategy thresholds.",
        "Keep Trips and other side bets separate from the main strategy or skip them."
      ],
      avoid: [
        "Checking strong preflop hands because a smaller later raise feels safer.",
        "Calling the river with any pair or high card without using accepted strategy thresholds.",
        "Making the Trips side bet the default plan.",
        "Changing raise timing because of recent wins or losses."
      ],
      whyItWorks:
        "Ultimate Texas Hold'em gives the largest raise multiple before all cards are known, so correct early aggression captures value that cannot be recovered later. Most avoidable player loss comes from wrong raise timing, not from reading opponents.",
      sources: [
        {
          label: "Wizard of Odds: Ultimate Texas Hold'em",
          url: "https://wizardofodds.com/games/ultimate-texas-hold-em/",
          note: "Strategy and house-edge reference for preflop, flop, and river raise decisions."
        },
        {
          label: "VegasAdvantage: Las Vegas Table Game Survey",
          url: "https://vegasadvantage.com/las-vegas-table-game-survey/",
          note: "Public source for Ultimate Texas Hold'em availability and minimum context."
        }
      ]
    }
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
    ],
    strategy: {
      name: "Flat Betting Only If You Play",
      bestStrategy:
        "Recognize that no betting pattern beats the double-zero wheel; if you play anyway, use small flat bets and prefer lower-edge wheels when available.",
      howToUse: [
        "Set a fixed spin budget before the first spin.",
        "Choose a small flat bet size and keep it unchanged after wins and losses.",
        "Use outside bets if you want lower volatility, understanding they do not reduce the house edge.",
        "Move to single-zero or better rules when available instead of trying to overcome double-zero with a system."
      ],
      avoid: [
        "Martingale, Labouchere, Fibonacci, or any other progression system.",
        "Increasing bets because a color, number, or section feels due.",
        "Treating previous spins as predictive on a fair wheel.",
        "Using roulette as a recovery game after losses elsewhere."
      ],
      whyItWorks:
        "Every standard double-zero roulette bet resolves against the same wheel disadvantage over time. Flat betting does not create positive expected value, but it limits the damage from compounding a fixed negative expectation with larger chase bets.",
      sources: [
        {
          label: "Wizard of Odds: Roulette",
          url: "https://wizardofodds.com/games/roulette/",
          note: "House-edge reference for roulette wheels and bet types."
        },
        {
          label: "VegasAdvantage: Las Vegas Table Game Survey",
          url: "https://vegasadvantage.com/las-vegas-table-game-survey/",
          note: "Public source for double-zero roulette availability context."
        }
      ]
    }
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
    ],
    strategy: {
      name: "Avoid Triple-Zero When Better Wheels Exist",
      bestStrategy:
        "The best mathematical strategy is to avoid triple-zero roulette when single-zero or double-zero alternatives are available; if you still play, use only small flat entertainment bets.",
      howToUse: [
        "Check the wheel layout before buying in and count the green pockets.",
        "Choose single-zero first, double-zero second, and triple-zero only as a deliberate short-session entertainment choice.",
        "If playing triple-zero, set a small fixed wager and a firm stop point.",
        "Leave the table rather than increasing stakes to compensate for the higher house edge."
      ],
      avoid: [
        "Trying to solve triple-zero roulette with a betting system.",
        "Assuming the third zero is a small cosmetic rule change.",
        "Chasing back losses after a short run of missed outside bets.",
        "Comparing only table minimums while ignoring the extra green pocket."
      ],
      whyItWorks:
        "Adding a third zero increases the house edge materially compared with double-zero and single-zero roulette. Avoiding the worse wheel is the only reliable way to improve the math; bet patterns cannot change the wheel probabilities.",
      sources: [
        {
          label: "Wizard of Odds: Roulette",
          url: "https://wizardofodds.com/games/roulette/",
          note: "Explains roulette house edge by wheel configuration and why systems do not overcome it."
        },
        {
          label: "VegasAdvantage: Las Vegas Table Game Survey",
          url: "https://vegasadvantage.com/las-vegas-table-game-survey/",
          note: "Public source for triple-zero roulette availability context."
        }
      ]
    }
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
    ],
    strategy: {
      name: "Banker Bet as the Default",
      bestStrategy:
        "Use the Banker bet as the default wager, accept the standard commission as part of the price, and avoid Tie and most side bets.",
      howToUse: [
        "Choose Banker as the baseline bet rather than alternating based on scorecard patterns.",
        "Expect a commission, commonly 5%, on winning Banker bets in traditional baccarat.",
        "Use flat stakes and stop when the planned session limit is reached.",
        "If a no-commission table is offered, read the alternative payout rule before assuming it is better."
      ],
      avoid: [
        "Tie bets as a default strategy.",
        "Dragon, pair, and other side bets unless they are treated as small entertainment costs.",
        "Pattern betting based on scorecards or streak boards.",
        "Increasing bet size because Banker or Player feels due."
      ],
      whyItWorks:
        "Under common baccarat rules, Banker has the lowest house edge even after commission because the drawing rules make Banker win slightly more often. Tie and many side bets pay more when they hit but usually carry much higher house edges.",
      sources: [
        {
          label: "Wizard of Odds: Baccarat",
          url: "https://wizardofodds.com/games/baccarat/",
          note: "House-edge reference for Banker, Player, Tie, and common baccarat side bets."
        },
        {
          label: "VegasAdvantage: Las Vegas Table Game Survey",
          url: "https://vegasadvantage.com/las-vegas-table-game-survey/",
          note: "Public source for baccarat availability and minimum context."
        }
      ]
    }
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
    ],
    strategy: {
      name: "Table Selection Plus Tight-Aggressive Position",
      bestStrategy:
        "Choose beatable tables, play tighter ranges from early position, widen intelligently in later position, and apply disciplined aggression against weaker opponents while respecting rake and bankroll limits.",
      howToUse: [
        "Before sitting, look for tables with deep enough stacks, weaker opponents, reasonable rake, and seats that give you position on loose players.",
        "Play fewer hands from early position and more playable hands from the button and cutoff.",
        "Raise or fold more often than limping, especially when entering first.",
        "Track results by session, but judge decisions by expected value and opponent tendencies rather than one hand outcome."
      ],
      avoid: [
        "Playing any open seat without considering table quality.",
        "Chasing losses by moving to higher stakes.",
        "Calling too many hands out of position.",
        "Ignoring rake, promotions, and stack depth when judging whether a game is worth playing."
      ],
      whyItWorks:
        "Live poker is not house-banked; the casino takes rake while player results depend on decision quality against other players. Position gives more information before acting, tight-aggressive ranges reduce weak calls, and table selection puts the player in games where skill edge has room to overcome rake.",
      sources: [
        {
          label: "Wizard of Odds: Texas Hold'em Poker",
          url: "https://wizardofodds.com/games/texas-hold-em/",
          note: "Poker math and hand-value reference for decision quality."
        },
        {
          label: "Poker Strategy: Position and Aggression",
          url: "https://en.wikipedia.org/wiki/Poker_strategy",
          note: "Reference for position, pot odds, aggression, and opponent-based decision concepts."
        },
        {
          label: "VegasAdvantage: Open Las Vegas Poker Rooms",
          url: "https://vegasadvantage.com/open-las-vegas-poker-rooms/",
          note: "Public source for Las Vegas poker-room availability and room characteristics."
        }
      ]
    }
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
    ],
    strategy: {
      name: "Line Shopping and Flat Staking",
      bestStrategy:
        "Only bet when your estimated probability is better than the market price, shop for the best available line, and use small flat stakes instead of parlays or chase bets.",
      howToUse: [
        "Convert the offered odds into an implied probability before betting.",
        "Compare that price with your own fair probability estimate and skip the wager if there is no clear value.",
        "Check multiple legal sportsbooks for the best number before placing a bet.",
        "Stake a small fixed unit per wager and record the price, stake, result, and closing line."
      ],
      avoid: [
        "Making picks without considering the price.",
        "Using parlays as the default bet type.",
        "Increasing stake size after losses.",
        "Betting games only because you plan to watch them."
      ],
      whyItWorks:
        "Sports betting expected value depends on price as much as prediction. A good opinion at a bad number can be a bad bet, while line shopping can turn the same opinion into a better expected-value position. Flat staking limits variance and prevents loss-chasing from overwhelming any edge.",
      sources: [
        {
          label: "Wizard of Odds: Sports Betting",
          url: "https://wizardofodds.com/games/sports-betting/",
          note: "Sports-betting math reference for odds, expected value, and bet pricing."
        },
        {
          label: "Wizard of Odds: Parlay Calculator",
          url: "https://wizardofodds.com/games/sports-betting/parlay-calculator/",
          note: "Shows how multiple legs compound payout and probability in parlay betting."
        },
        {
          label: "VegasAdvantage: Las Vegas Sportsbooks",
          url: "https://vegasadvantage.com/las-vegas-sportsbooks/",
          note: "Public source for Las Vegas sportsbook operator and venue context."
        }
      ]
    }
  }
};
