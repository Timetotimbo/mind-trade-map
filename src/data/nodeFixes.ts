// What to do about each card: practical steps, a rule to remember, and a KJV verse (text from the KJV, checked).
export interface NodeFix {
  steps: string[];
  rule: string;
  verse: { reference: string; text: string };
}

export const nodeFixes: Record<string, NodeFix> = {
  "t1": {
    "steps": [
      "Hands off for 10 seconds: let the candle close before you act.",
      "Keep stops at structure, not inside the noise.",
      "Size so a spike can't hurt you more than your plan allows."
    ],
    "rule": "Spikes are noise until the candle closes.",
    "verse": {
      "reference": "Proverbs 19:2",
      "text": "Also, that the soul be without knowledge, it is not good; and he that hasteth with his feet sinneth."
    }
  },
  "t2": {
    "steps": [
      "Know the calendar: no new trades 5 minutes before or after red-folder news.",
      "Flatten or reduce before the release if your plan says so.",
      "Trade the reaction after it settles, not the release."
    ],
    "rule": "If you don't know when news drops, you're gambling on it.",
    "verse": {
      "reference": "Proverbs 22:3",
      "text": "A prudent man foreseeth the evil, and hideth himself: but the simple pass on, and are punished."
    }
  },
  "t3": {
    "steps": [
      "Hide the P&L and watch price and your plan.",
      "Ask: is my stop or my reason for the trade broken? If not, do nothing.",
      "Take four slow breaths before any click."
    ],
    "rule": "Judge the trade by the plan, not the P&L flash.",
    "verse": {
      "reference": "Psalm 46:10",
      "text": "Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth."
    }
  },
  "t4": {
    "steps": [
      "Follow your exit plan; don't add size on the high.",
      "Write down why it worked before the next trade.",
      "Take a 5-minute break after a big win."
    ],
    "rule": "A big win is tested on the next trade: stay small.",
    "verse": {
      "reference": "Proverbs 16:18",
      "text": "Pride goeth before destruction, and an haughty spirit before a fall."
    }
  },
  "t5": {
    "steps": [
      "Accept it: the stop did its job.",
      "Review stop placement after the session, not now.",
      "No re-entry unless your setup forms again."
    ],
    "rule": "A stopped trade is an insurance premium paid.",
    "verse": {
      "reference": "Philippians 4:11",
      "text": "Not that I speak in respect of want: for I have learned, in whatsoever state I am, therewith to be content."
    }
  },
  "t6": {
    "steps": [
      "Place stops beyond the obvious levels, and size down so you can afford it.",
      "Wait for the sweep and the reclaim before entering.",
      "Don't take it personally: it's mechanics."
    ],
    "rule": "Where everyone's stop is, don't put yours.",
    "verse": {
      "reference": "Proverbs 14:15",
      "text": "The simple believeth every word: but the prudent man looketh well to his going."
    }
  },
  "t7": {
    "steps": [
      "Know your gap risk before holding overnight.",
      "Hold only a size you can sleep with.",
      "Wait 15 minutes after the open before acting on a gap."
    ],
    "rule": "Only hold what you can sleep through.",
    "verse": {
      "reference": "Psalm 4:8",
      "text": "I will both lay me down in peace, and sleep: for thou, LORD , only makest me dwell in safety."
    }
  },
  "t8": {
    "steps": [
      "Have a backup: the phone app logged in and your broker's trade desk number saved.",
      "Use hard stops at the broker, not mental stops.",
      "After a glitch, stop for 15 minutes; don't trade to win it back."
    ],
    "rule": "Prepare for failure before it happens.",
    "verse": {
      "reference": "Proverbs 21:5",
      "text": "The thoughts of the diligent tend only to plenteousness; but of every one that is hasty only to want."
    }
  },
  "t9": {
    "steps": [
      "Set targets a tick or two before obvious levels.",
      "Take a partial at the target and trail the rest.",
      "Let it go: the plan was right."
    ],
    "rule": "Front-run the level; don't marry it.",
    "verse": {
      "reference": "Ecclesiastes 7:8",
      "text": "Better is the end of a thing than the beginning thereof: and the patient in spirit is better than the proud in spirit."
    }
  },
  "t10": {
    "steps": [
      "Mark the range and plan both breakout directions ahead of time.",
      "Size down when volatility expands.",
      "Wait for a retest instead of chasing the first candle."
    ],
    "rule": "Plan the breakout before it happens; never chase it.",
    "verse": {
      "reference": "Ecclesiastes 3:1",
      "text": "To every thing there is a season, and a time to every purpose under the heaven:"
    }
  },
  "t11": {
    "steps": [
      "Always trade with a hard stop and sane size: survival first.",
      "Don't average down into chaos.",
      "Step away and reassess when the dust settles."
    ],
    "rule": "Survive first, profit second.",
    "verse": {
      "reference": "Psalm 91:2",
      "text": "I will say of the LORD , He is my refuge and my fortress: my God; in him will I trust."
    }
  },
  "t12": {
    "steps": [
      "Read the new rules and rewrite your daily max loss to fit.",
      "Trade smaller until you've adapted.",
      "Keep a buffer from every rule limit."
    ],
    "rule": "Know the rules better than the firm does.",
    "verse": {
      "reference": "Proverbs 4:7",
      "text": "Wisdom is the principal thing; therefore get wisdom: and with all thy getting get understanding."
    }
  },
  "e1": {
    "steps": [
      "Shrink your size until the possible loss feels small.",
      "Write your plan before the open and follow it step by step.",
      "Name it: say \"I feel fear\". Naming it lowers it."
    ],
    "rule": "Trade a size you're not afraid of.",
    "verse": {
      "reference": "2 Timothy 1:7",
      "text": "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind."
    }
  },
  "e2": {
    "steps": [
      "Hands off the mouse. Breathe in for 4, hold for 4, out for 6.",
      "Let your hard stop do its work; don't decide in shock.",
      "Stand up and step away for 5 minutes."
    ],
    "rule": "Never decide in the first minute of shock.",
    "verse": {
      "reference": "Isaiah 26:3",
      "text": "Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee."
    }
  },
  "e3": {
    "steps": [
      "Stop for the session after two losses in a row.",
      "Walk away from the screen: the market owes you nothing.",
      "Write down what happened and review it tomorrow."
    ],
    "rule": "Two losses in a row: done for the day.",
    "verse": {
      "reference": "James 1:20",
      "text": "For the wrath of man worketh not the righteousness of God."
    }
  },
  "e4": {
    "steps": [
      "Keep your normal size after a winning streak.",
      "Re-read your rules before the next trade.",
      "Remember: the last trade doesn't predict the next one."
    ],
    "rule": "Size stays the same, win or lose.",
    "verse": {
      "reference": "1 Corinthians 10:12",
      "text": "Wherefore let him that thinketh he standeth take heed lest he fall."
    }
  },
  "e5": {
    "steps": [
      "If you missed it, it wasn't yours: wait for the next setup.",
      "Only enter from your list of setups.",
      "Set alerts at your levels and look away."
    ],
    "rule": "Missing a trade costs nothing; chasing one costs money.",
    "verse": {
      "reference": "Psalm 37:7",
      "text": "Rest in the LORD , and wait patiently for him: fret not thyself because of him who prospereth in his way, because of the man who bringeth wicked devices to pass."
    }
  },
  "e6": {
    "steps": [
      "Stop at your daily loss limit, no exceptions.",
      "Take a 20-minute break away from all screens.",
      "If you come back, trade half size for the rest of the day."
    ],
    "rule": "Tilt is a signal to stop, not to push.",
    "verse": {
      "reference": "Proverbs 16:32",
      "text": "He that is slow to anger is better than the mighty; and he that ruleth his spirit than he that taketh a city."
    }
  },
  "e7": {
    "steps": [
      "Ask: would I enter this trade right now? If not, get out.",
      "Never widen a stop.",
      "Use bracket orders so the exit is decided before you enter."
    ],
    "rule": "Hope is not a strategy; the stop is.",
    "verse": {
      "reference": "Proverbs 14:12",
      "text": "There is a way which seemeth right unto a man, but the end thereof are the ways of death."
    }
  },
  "e8": {
    "steps": [
      "On heavy days, sit out or trade small.",
      "Keep bill money separate from trading money.",
      "Talk it through with someone before the session."
    ],
    "rule": "Pressure up, size down.",
    "verse": {
      "reference": "1 Peter 5:7",
      "text": "Casting all your care upon him; for he careth for you."
    }
  },
  "e9": {
    "steps": [
      "Stop posting live trades; share reviews afterwards.",
      "Measure yourself by rules followed, not P&L screenshots.",
      "Keep your journal private and honest."
    ],
    "rule": "Your process is your proof.",
    "verse": {
      "reference": "Galatians 1:10",
      "text": "For do I now persuade men, or God? or do I seek to please men? for if I yet pleased men, I should not be the servant of Christ."
    }
  },
  "b1": {
    "steps": [
      "Place the stop at the broker when you enter, and leave it.",
      "If you want to move it, close the trade instead.",
      "Only move a stop toward profit, by your rule."
    ],
    "rule": "Stops move one way: toward profit.",
    "verse": {
      "reference": "Matthew 5:37",
      "text": "But let your communication be, Yea, yea; Nay, nay: for whatsoever is more than these cometh of evil."
    }
  },
  "b2": {
    "steps": [
      "Add only to winners, never to losers.",
      "Decide your maximum size before you enter.",
      "If it's wrong, it's wrong: take the stop."
    ],
    "rule": "Never add to a loser.",
    "verse": {
      "reference": "Proverbs 26:11",
      "text": "As a dog returneth to his vomit, so a fool returneth to his folly."
    }
  },
  "b3": {
    "steps": [
      "Use a written checklist: no checkmarks, no trade.",
      "Count to 10 before you click.",
      "Keep pictures of your setups next to your chart."
    ],
    "rule": "No setup, no trade.",
    "verse": {
      "reference": "Proverbs 29:20",
      "text": "Seest thou a man that is hasty in his words? there is more hope of a fool than of him."
    }
  },
  "b4": {
    "steps": [
      "Set the daily loss limit in your broker or prop platform so it locks you out.",
      "When it's hit, close the platform.",
      "Review tomorrow, not tonight."
    ],
    "rule": "The max loss is a wall, not a suggestion.",
    "verse": {
      "reference": "Proverbs 25:28",
      "text": "He that hath no rule over his own spirit is like a city that is broken down, and without walls."
    }
  },
  "b5": {
    "steps": [
      "After a loss, wait 15 minutes before the next trade.",
      "Take the next trade at half size.",
      "Ask: is this my setup, or my anger?"
    ],
    "rule": "The next trade must earn its place, not repay the last one.",
    "verse": {
      "reference": "Romans 12:19",
      "text": "Dearly beloved, avenge not yourselves, but rather give place unto wrath: for it is written, Vengeance is mine; I will repay, saith the Lord."
    }
  },
  "b6": {
    "steps": [
      "Set the target when you enter and let the order work.",
      "Take a partial, then trail the rest.",
      "Look away from the P&L while you're in profit."
    ],
    "rule": "Let winners reach the plan.",
    "verse": {
      "reference": "Galatians 6:9",
      "text": "And let us not be weary in well doing: for in due season we shall reap, if we faint not."
    }
  },
  "b7": {
    "steps": [
      "Risk the same fixed amount on every trade (for example 1%).",
      "Write your size down before you enter and stick to it.",
      "Raise size only after a set number of rule-following days."
    ],
    "rule": "Risk the same on every trade.",
    "verse": {
      "reference": "Luke 14:28",
      "text": "For which of you, intending to build a tower, sitteth not down first, and counteth the cost, whether he have sufficient to finish it ?"
    }
  },
  "b8": {
    "steps": [
      "Set a maximum number of trades a day.",
      "Trade only your session window, then close the platform.",
      "Boredom is not a setup."
    ],
    "rule": "Fewer, better trades.",
    "verse": {
      "reference": "Ecclesiastes 4:6",
      "text": "Better is an handful with quietness, than both the hands full with travail and vexation of spirit."
    }
  },
  "b9": {
    "steps": [
      "Trade the smallest size to rebuild trust.",
      "Follow the checklist: if every box is checked, click.",
      "Count the trades you took by the plan, not the P&L."
    ],
    "rule": "Do your part; the outcome isn't yours to control.",
    "verse": {
      "reference": "Joshua 1:9",
      "text": "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest."
    }
  },
  "b10": {
    "steps": [
      "No trading tired, sick, drunk, or right after an argument.",
      "Do a one-minute check before the session: rested? calm? clear?",
      "If any answer is no, sit out."
    ],
    "rule": "If you're not clear, you're not trading.",
    "verse": {
      "reference": "1 Peter 5:8",
      "text": "Be sober, be vigilant; because your adversary the devil, as a roaring lion, walketh about, seeking whom he may devour:"
    }
  },
  "b11": {
    "steps": [
      "Write three lines after every session: what I did, how I felt, what I'll do next.",
      "Screenshot each trade with its entry and exit.",
      "Review the week every Friday."
    ],
    "rule": "What you don't write down, you repeat.",
    "verse": {
      "reference": "Habakkuk 2:2",
      "text": "And the LORD answered me, and said, Write the vision, and make it plain upon tables, that he may run that readeth it."
    }
  },
  "c1": {
    "steps": [
      "Stop trading live; trade on a simulator for two weeks.",
      "Write down what led here, step by step.",
      "Come back smaller, with a hard daily loss limit."
    ],
    "rule": "Protect the capital: it's your business.",
    "verse": {
      "reference": "Lamentations 3:22-23",
      "text": "It is of the LORD’s mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness."
    }
  },
  "c2": {
    "steps": [
      "Go through your stats: find the setups that lose and cut them.",
      "Take fewer trades with better setups.",
      "Add up fees and slippage each week."
    ],
    "rule": "Small leaks sink great ships.",
    "verse": {
      "reference": "Song of Solomon 2:15",
      "text": "Take us the foxes, the little foxes, that spoil the vines: for our vines have tender grapes."
    }
  },
  "c3": {
    "steps": [
      "Take a day or two fully off.",
      "Sleep, move your body, and spend time with people you love.",
      "Shorten your trading window when you return."
    ],
    "rule": "Rest is part of the plan.",
    "verse": {
      "reference": "Matthew 11:28",
      "text": "Come unto me, all ye that labour and are heavy laden, and I will give you rest."
    }
  },
  "c4": {
    "steps": [
      "Find the first domino: which trigger starts it?",
      "Write an if-then rule for it (\"If I lose twice, then I stop\").",
      "Ask someone to hold you to it."
    ],
    "rule": "Break the first domino, not the last.",
    "verse": {
      "reference": "Romans 12:2",
      "text": "And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God."
    }
  },
  "c5": {
    "steps": [
      "Track how much you make and lose per setup.",
      "Let winners run to your planned target.",
      "Cut the setups that don't pay."
    ],
    "rule": "Your edge only works if you let it.",
    "verse": {
      "reference": "Proverbs 13:4",
      "text": "The soul of the sluggard desireth, and hath nothing: but the soul of the diligent shall be made fat."
    }
  },
  "c6": {
    "steps": [
      "Make small promises to yourself and keep them: one rule, one week.",
      "Trade tiny size and follow the plan exactly.",
      "Celebrate the days you followed your rules."
    ],
    "rule": "Trust is rebuilt one kept rule at a time.",
    "verse": {
      "reference": "Luke 16:10",
      "text": "He that is faithful in that which is least is faithful also in much: and he that is unjust in the least is unjust also in much."
    }
  }
};
