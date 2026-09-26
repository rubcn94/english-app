const BLUE_DATA = [
  {
    section: 1,
    title: "Present & Past",
    units: "1–6",
    cards: [
      {
        id: "b1_01",
        front: "Use _____ for routines and permanent facts.\n\n'I ___ to work every day.'",
        blanks: ["present simple", "go"],
        back: "Present simple\n\n'I go to work every day.'\n\n📌 Routines · facts · permanent states"
      },
      {
        id: "b1_02",
        front: "Use _____ for actions happening right now or temporary situations.\n\n'I ___ (study) for my exam this week.'",
        blanks: ["present continuous", "am studying"],
        back: "Present continuous\n\n'I am studying for my exam this week.'\n\n📌 Now · temporary · in progress"
      },
      {
        id: "b1_03",
        front: "State verbs NEVER go in continuous.\n\nWhich of these is WRONG?\n\na) I know the answer\nb) I'm knowing the answer\nc) She wants coffee",
        answer: "I'm knowing the answer",
        back: "b) ❌ I'm knowing the answer\n\n✅ I know the answer\n\n📌 State verbs: know · like · want · need · believe · understand · own · have (possession)"
      },
      {
        id: "b1_04",
        front: "Use _____ for a completed action in the past.\n\n'She ___ (leave) at 8am yesterday.'",
        blanks: ["past simple", "left"],
        back: "Past simple\n\n'She left at 8am yesterday.'\n\n📌 Triggers: yesterday · ago · last week · in 2010"
      },
      {
        id: "b1_05",
        front: "Use _____ for an action in progress when another happened.\n\n'I ___ (read) when the phone rang.'",
        blanks: ["past continuous", "was reading"],
        back: "Past continuous\n\n'I was reading when the phone rang.'\n\n📌 Background action interrupted by past simple"
      },
      {
        id: "b1_06",
        front: "TRICKY: 'have' as state vs action\n\nWhich uses continuous and which doesn't?\n\na) I ___ a car (possession)\nb) I ___ lunch (activity)",
        blanks: ["have", "am having"],
        back: "a) ❌ continuous → I HAVE a car (possession = state)\nb) ✅ continuous → I'M HAVING lunch (activity = action)\n\n📌 have (own) = state / have (do) = action"
      },
      {
        id: "b1_07",
        front: "TRICKY: 'think' — state or action?\n\nChoose the correct form:\n\na) I ___ it's a great idea. (opinion)\nb) I ___ about you. (mental process)",
        blanks: ["think", "am thinking"],
        back: "a) I THINK it's a great idea. (opinion = state → simple)\nb) I'M THINKING about you. (process = action → continuous)\n\n📌 think (believe) = simple / think (consider) = continuous"
      },
      {
        id: "b1_08",
        front: "Complete with the correct tense:\n\n'She usually ___ (walk) to work but today she ___ (take) the bus.'",
        blanks: ["walks", "is taking"],
        back: "'She usually WALKS to work but today she IS TAKING the bus.'\n\n📌 usually + present simple · today (temporary) + present continuous"
      }
    ]
  },
  {
    section: 2,
    title: "Present Perfect & Past",
    units: "7–18",
    cards: [
      {
        id: "b2_01",
        front: "Use _____ when the past is connected to the present.\n\n'I can't find my keys — I ___ (lose) them.'",
        blanks: ["present perfect", "have lost / 've lost"],
        back: "Present perfect\n\n'I've lost them.'\n\n📌 Result matters NOW · don't know exact time"
      },
      {
        id: "b2_02",
        front: "Use _____ when you give a specific past time.\n\n'I ___ (lose) my keys yesterday.'",
        blanks: ["past simple", "lost"],
        back: "Past simple\n\n'I lost my keys yesterday.'\n\n📌 yesterday · ago · last · in [year] → ALWAYS past simple"
      },
      {
        id: "b2_03",
        front: "Use _____ for how long an action has been happening.\n\n'She ___ (teach) here for 10 years.'",
        blanks: ["present perfect continuous", "has been teaching"],
        back: "Present perfect continuous\n\n'She has been teaching here for 10 years.'\n\n📌 for · since · how long · recently → PP continuous"
      },
      {
        id: "b2_04",
        front: "FOR vs SINCE — which one?\n\n'I've lived here ___ 2018.'\n'I've lived here ___ six years.'",
        blanks: ["since", "for"],
        back: "'I've lived here SINCE 2018.' (point in time)\n'I've lived here FOR six years.' (duration)\n\n📌 SINCE = starting point / FOR = length of time"
      },
      {
        id: "b2_05",
        front: "PP simple vs PP continuous — what's the difference?\n\na) I've read three books this month.\nb) I've been reading all afternoon.",
        answer: "How many/much → PP simple, how long → PP continuous",
        freeText: true,
        back: "a) PP simple → completed, number matters (three books)\nb) PP continuous → duration matters, process (all afternoon)\n\n📌 How many/much → PP simple · How long → PP continuous"
      },
      {
        id: "b2_06",
        front: "Correct the error:\n\n'Mozart has written over 600 compositions.'",
        back: "❌ Mozart has written...\n✅ Mozart WROTE over 600 compositions.\n\n📌 Dead people / historical facts → ALWAYS past simple"
      },
      {
        id: "b2_07",
        front: "Use _____ for an action completed BEFORE another past action.\n\n'When I arrived, she ___ (already leave).'",
        blanks: ["past perfect", "had already left"],
        back: "Past perfect\n\n'When I arrived, she had already left.'\n\n📌 Past perfect = the earlier of two past actions"
      },
      {
        id: "b2_08",
        front: "JUST · ALREADY · YET — which tense?\n\n'Have you eaten ___?'\n'I've ___ eaten.'\n'She's ___ arrived.'",
        blanks: ["yet", "already", "just"],
        back: "YET → questions and negatives: 'Have you eaten yet?'\nALREADY → affirmative: 'I've already eaten.'\nJUST → very recently: 'She's just arrived.'\n\n📌 All three → present perfect"
      },
      {
        id: "b2_09",
        front: "EVER · NEVER — which tense?\n\n'Have you ___ been to Japan?'\n'I've ___ tried sushi.'",
        blanks: ["ever", "never"],
        back: "EVER → questions: 'Have you ever been to Japan?'\nNEVER → negative: 'I've never tried sushi.'\n\n📌 Life experience up to now → present perfect"
      },
      {
        id: "b2_10",
        front: "State verbs + present perfect — correct or wrong?\n\n'I've been knowing him for years.'",
        answer: "Wrong — I've known him for years",
        back: "❌ I've been knowing him for years.\n✅ I've known him for years.\n\n📌 State verbs (know · like · want) → NEVER in continuous, even with for/since"
      }
    ]
  },
  {
    section: 3,
    title: "Future",
    units: "19–25",
    cards: [
      {
        id: "b3_01",
        front: "You're deciding at the moment of speaking.\n\n'I'm hungry.' → '___ get a sandwich.'",
        answer: "I'll",
        back: "'I'll get a sandwich.'\n\n📌 will = instant decision made while speaking"
      },
      {
        id: "b3_02",
        front: "You already had this plan before speaking.\n\n'What are you doing tonight?' → 'I ___ (visit) my parents.'",
        answer: "am going to visit / am visiting",
        back: "'I'm going to visit my parents.' OR 'I'm visiting my parents.'\n\n📌 going to / present continuous = pre-made plan"
      },
      {
        id: "b3_03",
        front: "You can see evidence of what's about to happen.\n\n'Look at those clouds — it ___ (rain).'",
        answer: "is going to rain",
        back: "'It's going to rain.'\n\n📌 going to = prediction based on present evidence"
      },
      {
        id: "b3_04",
        front: "Which is correct after WHEN, IF, BEFORE, AFTER, AS SOON AS?\n\na) I'll call you when I will arrive.\nb) I'll call you when I arrive.",
        answer: "I'll call you when I arrive",
        back: "b) ✅ I'll call you when I ARRIVE.\n\n📌 After time conjunctions → present simple (NEVER will)\nwhen · if · before · after · as soon as · until"
      },
      {
        id: "b3_05",
        front: "WILL vs GOING TO — prediction\n\nWhich uses which?\n\na) 'The forecast says it ___ snow tomorrow.'\nb) 'I think she ___ be a great doctor.'",
        blanks: ["is going to", "will / 'll"],
        back: "a) It's going to snow. (evidence: forecast)\nb) I think she'll be a great doctor. (personal opinion, no evidence)\n\n📌 Evidence → going to / Opinion/guess → will"
      },
      {
        id: "b3_06",
        front: "Present continuous for the future — when?\n\n'I ___ (meet) Sarah at 7pm tomorrow.'",
        answer: "am meeting",
        back: "'I'm meeting Sarah at 7pm tomorrow.'\n\n📌 Arranged event with time + place already fixed\n→ like an entry in your diary"
      },
      {
        id: "b3_07",
        front: "Complete:\n\n'By the time you read this, I ___ (already leave).'",
        answer: "will have already left",
        back: "'I will have already left.'\n\n📌 will have + past participle = future perfect\nAction completed before a future point"
      }
    ]
  },
  {
    section: 4,
    title: "Modals",
    units: "26–37",
    cards: [
      {
        id: "b4_01",
        front: "MUST vs HAVE TO — what's the difference?\n\na) 'I ___ wear a uniform at work.' (rule imposed by boss)\nb) 'I ___ call her — it's important to me.' (personal decision)",
        blanks: ["have to", "must"],
        back: "a) I HAVE TO wear a uniform. (external obligation)\nb) I MUST call her. (internal decision)\n\n📌 must = you decide · have to = someone/rule imposes"
      },
      {
        id: "b4_02",
        front: "MUST NOT vs DON'T HAVE TO — same or different?\n\na) You ___ tell anyone. (forbidden)\nb) You ___ come if you don't want to. (not necessary)",
        blanks: ["must not / mustn't", "don't have to"],
        back: "DIFFERENT!\n\na) You MUST NOT tell anyone. (prohibition = forbidden)\nb) You DON'T HAVE TO come. (no obligation = your choice)\n\n📌 mustn't = forbidden / don't have to = not necessary"
      },
      {
        id: "b4_03",
        front: "Degrees of certainty — present\n\nOrder from most to least certain:\nmight be · must be · can't be · should be",
        answer: "must be, should be, might be, can't be",
        freeText: true,
        back: "must be (~95%) → deduction almost certain\nshould be (~80%) → expected\nmight be (~50%) → possible\ncan't be (~5%) → almost impossible\n\n📌 must be ≠ have to (obligation) in this context"
      },
      {
        id: "b4_04",
        front: "Modal + HAVE + past participle = past modal\n\nWhat do these mean?\n\na) You should have called.\nb) She must have left.\nc) He can't have known.",
        answer: "criticism / deduction / impossibility",
        back: "a) You should have called. → but you didn't (criticism)\nb) She must have left. → almost certain she left (deduction)\nc) He can't have known. → impossible that he knew\n\n📌 modal + have + pp = judgement about the past"
      },
      {
        id: "b4_05",
        front: "CAN vs COULD vs BE ABLE TO\n\n'She ___ speak three languages when she was ten.'\n'I ___ come tomorrow if you need me.'",
        blanks: ["could", "can / will be able to"],
        back: "'She COULD speak three languages when she was ten.' (past ability)\n'I CAN / WILL BE ABLE TO come tomorrow.' (future ability)\n\n📌 could = past general ability / was able to = specific past achievement"
      },
      {
        id: "b4_06",
        front: "MAY vs MIGHT — any difference?\n\n'It ___ rain later — bring an umbrella.'",
        back: "Both possible: It MAY / MIGHT rain later.\n\n📌 might = slightly less certain than may\nIn practice often interchangeable\nmay = more formal"
      },
      {
        id: "b4_07",
        front: "WOULD — uses\n\nMatch each:\na) Would you like some tea?\nb) I would always walk to school as a child.\nc) She would help if she could.",
        back: "a) Polite offer/request\nb) Past habit (= used to)\nc) Conditional\n\n📌 would = polite · past habit · conditional"
      },
      {
        id: "b4_08",
        front: "USED TO — correct or wrong?\n\na) I used to live in Madrid. (no longer true)\nb) I am used to waking up early. (it's normal for me now)\nc) I got used to the cold weather. (became accustomed)",
        answer: "All three are correct",
        back: "All three are correct but different!\n\na) used to + inf = past habit/state (no longer)\nb) be used to + -ing = accustomed to (present)\nc) get used to + -ing = become accustomed (process)\n\n📌 Three completely different structures"
      }
    ]
  },
  {
    section: 5,
    title: "If & Wish",
    units: "38–41",
    cards: [
      {
        id: "b5_01",
        front: "1st conditional — when?\n\n'If it ___ (rain), I ___ (stay) home.'",
        blanks: ["rains", "'ll stay / will stay"],
        back: "'If it rains, I'll stay home.'\n\n📌 if + present simple → will + infinitive\nReal/possible situation"
      },
      {
        id: "b5_02",
        front: "2nd conditional — when?\n\n'If I ___ (be) rich, I ___ (travel) the world.'",
        blanks: ["were", "would travel"],
        back: "'If I were rich, I would travel the world.'\n\n📌 if + past simple → would + infinitive\nHypothetical present (not real)\nNote: were (not was) for all persons in formal use"
      },
      {
        id: "b5_03",
        front: "3rd conditional — when?\n\n'If she ___ (study) harder, she ___ (pass) the exam.'",
        blanks: ["had studied", "would have passed"],
        back: "'If she had studied harder, she would have passed the exam.'\n\n📌 if + past perfect → would have + past participle\nImaginary past (can't change what happened)"
      },
      {
        id: "b5_04",
        front: "WISH + past simple vs wish + past perfect\n\n'I wish I ___ taller.' (I'm not tall)\n'I wish I ___ harder.' (I didn't study — regret)",
        blanks: ["were", "had studied"],
        back: "'I wish I WERE taller.' (present wish — not true now)\n'I wish I HAD STUDIED harder.' (past regret)\n\n📌 wish + past simple = present hypothetical\nwish + past perfect = past regret"
      },
      {
        id: "b5_05",
        front: "WISH + WOULD — when?\n\n'I wish he ___ stop talking.'",
        answer: "would",
        back: "'I wish he WOULD stop talking.'\n\n📌 wish + would = annoyed about someone's behaviour\nWant them to change what they do"
      },
      {
        id: "b5_06",
        front: "IF ONLY vs I WISH — same or different?\n\n'If only I had more time.'\n'I wish I had more time.'",
        answer: "Same meaning",
        back: "Same meaning — if only is more emphatic/dramatic\n\n📌 if only = stronger emotional version of I wish"
      }
    ]
  },
  {
    section: 6,
    title: "Passive",
    units: "42–46",
    cards: [
      {
        id: "b6_01",
        front: "Passive formula:\n\n'Someone built this house in 1900.'\n→ passive: 'This house ___ in 1900.'",
        answer: "was built",
        back: "'This house WAS BUILT in 1900.'\n\n📌 be + past participle in any tense\nAgent (by someone) only if important"
      },
      {
        id: "b6_02",
        front: "When do you use the passive?\n\nChoose all that apply:\na) When the agent is unknown\nb) When the agent is obvious\nc) When you want to focus on the action/object\nd) Always instead of active",
        answer: "Agent unknown, obvious, or focus on result — never always",
        freeText: true,
        back: "a) ✅ Agent unknown: 'My bike was stolen.'\nb) ✅ Agent obvious: 'He was arrested.' (by police — obvious)\nc) ✅ Focus on result: 'The report has been sent.'\nd) ❌ Not always — use active when agent matters\n\n📌 Passive = agent irrelevant or unknown"
      },
      {
        id: "b6_03",
        front: "GET passive vs BE passive — difference?\n\n'He was promoted.' vs 'He got promoted.'",
        answer: "BE = neutral/formal, GET = informal/accidental",
        freeText: true,
        back: "BE passive = neutral/formal\nGET passive = informal, often accidental or unexpected\n\n'The window was broken.' (neutral)\n'The window got broken.' (accident implied)\n\n📌 get passive = more colloquial, implies change"
      },
      {
        id: "b6_04",
        front: "HAVE SOMETHING DONE — what does it mean?\n\n'I had my hair cut yesterday.'",
        answer: "Someone did it for you",
        back: "Someone did it FOR you (you paid/arranged it)\n\n'I had my hair cut.' = a hairdresser cut it\n≠ 'I cut my hair.' (did it myself)\n\n📌 have + object + past participle = arranged service"
      },
      {
        id: "b6_05",
        front: "Passive of reporting verbs:\n\n'People say he is rich.'\n→ two passive forms?",
        answer: "It is said that he is rich / He is said to be rich",
        freeText: true,
        back: "1) It IS SAID that he is rich.\n2) He IS SAID TO BE rich.\n\n📌 Both correct · say · believe · think · report · know · consider"
      }
    ]
  },
  {
    section: 7,
    title: "Reported Speech",
    units: "47–48",
    cards: [
      {
        id: "b7_01",
        front: "Backshift rule — what happens to tenses?\n\n'I am tired.' → She said...\n'I was working.' → She said...\n'I will call.' → She said...",
        answer: "present→past, past→past perfect, will→would",
        freeText: true,
        back: "'I am tired.' → She said she WAS tired.\n'I was working.' → She said she HAD BEEN working.\n'I will call.' → She said she WOULD call.\n\n📌 present→past · past→past perfect · will→would"
      },
      {
        id: "b7_02",
        front: "SAY vs TELL — which needs an object?\n\na) He ___ that he was late.\nb) He ___ me that he was late.",
        blanks: ["said", "told"],
        back: "a) He SAID that he was late. (no object after say)\nb) He TOLD me that he was late. (object needed after tell)\n\n📌 say + (that) / tell + person + (that)\n❌ He told that... / He said me..."
      },
      {
        id: "b7_03",
        front: "Reported questions — word order?\n\n'Where do you live?' → She asked me...",
        answer: "She asked me where I lived",
        back: "She asked me WHERE I LIVED.\n\n📌 Reported questions = normal word order (no inversion)\n❌ She asked me where did I live."
      },
      {
        id: "b7_04",
        front: "Reported yes/no questions — how?\n\n'Are you coming?' → He asked me...",
        back: "He asked me IF / WHETHER I was coming.\n\n📌 Yes/no questions → if/whether + normal word order\n❌ He asked me was I coming."
      }
    ]
  },
  {
    section: 8,
    title: "Questions",
    units: "49–52",
    cards: [
      {
        id: "b8_01",
        front: "Question tags — rule:\n\n'It's cold, ___?'\n'You don't know, ___?'\n'She can swim, ___?'",
        blanks: ["isn't it", "do you", "can't she"],
        back: "'It's cold, ISN'T IT?'\n'You don't know, DO YOU?'\n'She can swim, CAN'T SHE?'\n\n📌 Positive → negative tag / Negative → positive tag\nSame auxiliary as the statement"
      },
      {
        id: "b8_02",
        front: "Indirect questions — word order?\n\n'Where is the station?'\n→ 'Do you know ___?'",
        answer: "where the station is",
        back: "'Do you know WHERE THE STATION IS?'\n\n📌 Indirect questions = normal order (no inversion, no do/does/did)\n❌ Do you know where is the station?"
      },
      {
        id: "b8_03",
        front: "Subject questions — with or without auxiliary?\n\n'Who called you?'\n'What happened?'",
        back: "NO auxiliary needed!\n\n'WHO called you?' (who = subject → no did)\n'WHAT happened?' (what = subject → no did)\n\n📌 Who/what as subject → no do/does/did\n❌ Who did call you?"
      },
      {
        id: "b8_04",
        front: "Negative questions — meaning?\n\n'Didn't you get my message?'",
        answer: "Express surprise or seek confirmation",
        back: "Negative questions express surprise or seek confirmation\n\n'Didn't you get my message?' = I expected you did\n\n📌 Negative question = speaker is surprised the opposite happened"
      }
    ]
  },
  {
    section: 9,
    title: "-ing and to",
    units: "53–68",
    cards: [
      {
        id: "b9_01",
        front: "Which verbs take -ING?\n\nComplete: 'I enjoy ___ (swim).'\nComplete: 'She avoids ___ (eat) sugar.'",
        blanks: ["swimming", "eating"],
        back: "'I enjoy SWIMMING.'\n'She avoids EATING sugar.'\n\n📌 enjoy · mind · avoid · finish · stop · admit · deny · suggest · recommend · keep"
      },
      {
        id: "b9_02",
        front: "Which verbs take TO + infinitive?\n\nComplete: 'He decided ___ (leave).'\nComplete: 'She promised ___ (call).'",
        blanks: ["to leave", "to call"],
        back: "'He decided TO LEAVE.'\n'She promised TO CALL.'\n\n📌 want · need · hope · decide · plan · manage · offer · refuse · promise · agree · seem"
      },
      {
        id: "b9_03",
        front: "REMEMBER — two meanings:\n\n'I remember ___ (lock) the door.' (I did it — I recall)\n'Remember ___ (lock) the door.' (don't forget to do it)",
        blanks: ["locking", "to lock"],
        back: "'I remember LOCKING the door.' (-ing = recall a past action)\n'Remember TO LOCK the door.' (to = future obligation)\n\n📌 -ing looks back · to looks forward"
      },
      {
        id: "b9_04",
        front: "STOP — two meanings:\n\n'He stopped ___ (smoke).'\n'He stopped ___ (buy) a newspaper.'",
        blanks: ["smoking", "to buy"],
        back: "'He stopped SMOKING.' (gave up the habit)\n'He stopped TO BUY a newspaper.' (paused in order to buy)\n\n📌 stop -ing = quit / stop to = pause for a purpose"
      },
      {
        id: "b9_05",
        front: "TRY — two meanings:\n\n'Try ___ (add) more salt.' (experiment)\n'I tried ___ (open) the door but it was locked.' (attempt with effort)",
        blanks: ["adding", "to open"],
        back: "'Try ADDING more salt.' (experiment — see if it works)\n'I tried TO OPEN the door.' (attempted but possibly failed)\n\n📌 try -ing = experiment / try to = attempt"
      },
      {
        id: "b9_06",
        front: "Preposition + verb → always ___\n\n'She's good at ___ (cook).'\n'He left without ___ (say) goodbye.'",
        blanks: ["-ing", "cooking", "saying"],
        back: "Preposition + -ING always\n\n'She's good at COOKING.'\n'He left without SAYING goodbye.'\n\n📌 at · in · on · of · about · without + -ing"
      },
      {
        id: "b9_07",
        front: "USED TO vs BE USED TO vs GET USED TO\n\n'I ___ live in Paris.' (past habit)\n'I ___ living alone now.' (it's normal for me)\n'It took time to ___ the cold.'",
        blanks: ["used to", "am used to", "get used to"],
        back: "'I USED TO live in Paris.' (past habit, no longer)\n'I'M USED TO living alone.' (accustomed now)\n'It took time to GET USED TO the cold.' (process of adapting)\n\n📌 used to + inf / be used to + -ing / get used to + -ing"
      }
    ]
  },
  {
    section: 10,
    title: "Articles & Nouns",
    units: "69–81",
    cards: [
      {
        id: "b10_01",
        front: "A vs THE — first mention vs second mention:\n\n'I saw ___ dog. ___ dog was barking.'",
        blanks: ["a", "the"],
        back: "'I saw A dog. THE dog was barking.'\n\n📌 First mention = a/an (one of many)\nSecond mention = the (we know which one)"
      },
      {
        id: "b10_02",
        front: "No article (∅) — when?\n\n'I like ___music.'\n'She goes to ___ school every day.'\n'He's at ___ work.'",
        blanks: ["∅", "∅", "∅"],
        back: "'I like ∅ music.' (general — not specific)\n'She goes to ∅ school.' (function, not building)\n'He's at ∅ work.' (activity)\n\n📌 ∅ with general plural/uncountable · go to bed/school/work/church"
      },
      {
        id: "b10_03",
        front: "THE with unique things:\n\nComplete: '___ sun · ___ moon · ___ internet · ___ north of Spain'",
        blanks: ["the", "the", "the", "the"],
        back: "THE sun · THE moon · THE internet · THE north of Spain\n\n📌 Unique = only one exists → always the\nAlso: the radio · the cinema · the theatre"
      },
      {
        id: "b10_04",
        front: "Countable vs uncountable — which needs an article change?\n\n'I need ___ information.'\n'I need ___ piece of information.'",
        blanks: ["∅", "a"],
        back: "'I need ∅ information.' (uncountable — no a/an)\n'I need A piece of information.' (made countable with unit)\n\n📌 Uncountable nouns need a unit: a piece of · a bit of · a slice of"
      },
      {
        id: "b10_05",
        front: "SOME vs ANY — rule?\n\n'I'd like ___ coffee.'\n'Do you have ___ questions?'\n'I don't have ___ money.'",
        blanks: ["some", "any", "any"],
        back: "'I'd like SOME coffee.' (affirmative)\n'Do you have ANY questions?' (question)\n'I don't have ANY money.' (negative)\n\n📌 some = affirmative / any = questions and negatives\nException: 'Would you like SOME tea?' (offer)"
      }
    ]
  },
  {
    section: 11,
    title: "Pronouns & Determiners",
    units: "82–91",
    cards: [
      {
        id: "b11_01",
        front: "Reflexive pronouns — when?\n\n'She hurt ___.' (herself/her)\n'I did it ___.' (myself/alone)",
        blanks: ["herself", "by myself"],
        back: "'She hurt HERSELF.' (subject = object)\n'I did it BY MYSELF.' (alone, without help)\n\n📌 -self/-selves when subject = object\nby myself = alone"
      },
      {
        id: "b11_02",
        front: "EACH OTHER vs ONE ANOTHER — difference?\n\n'They looked at ___.'\n'The students helped ___.'",
        answer: "Largely interchangeable",
        back: "Both express reciprocity — largely interchangeable\n\n'They looked at EACH OTHER / ONE ANOTHER.'\n\n📌 each other = two people (traditionally)\none another = more than two (traditionally)\nIn modern English both work for any number"
      },
      {
        id: "b11_03",
        front: "BOTH · EITHER · NEITHER — which?\n\n'___ of them came.' (= none of the two)\n'___ of them came.' (= the two of them)\n'___ day works for me.' (= one or the other)",
        blanks: ["neither", "both", "either"],
        back: "'NEITHER of them came.' (not one, not the other)\n'BOTH of them came.' (the two)\n'EITHER day works for me.' (one or the other)\n\n📌 neither + singular verb / both + plural verb"
      },
      {
        id: "b11_04",
        front: "ALL · MOST · SOME · NO + of — when to add 'of'?\n\n'___ people like music.' (general)\n'___ the people at the party left early.' (specific)",
        blanks: ["most", "most of"],
        back: "'MOST people like music.' (general → no 'of')\n'MOST OF THE people at the party left early.' (specific → of + the)\n\n📌 General noun → no 'of' / Specific reference → of + the/my/his..."
      }
    ]
  },
  {
    section: 12,
    title: "Relative Clauses",
    units: "92–97",
    cards: [
      {
        id: "b12_01",
        front: "Defining vs non-defining relative clauses:\n\n'The man WHO called you is here.'\n'My brother, WHO lives in London, called me.'\n\nWhich needs commas?",
        back: "No commas → DEFINING (tells us which one — essential)\nCommas → NON-DEFINING (extra info — could remove it)\n\n'The man who called you' → which man? essential\n'My brother, who lives in London,' → extra info\n\n📌 THAT only in defining clauses, never with commas"
      },
      {
        id: "b12_02",
        front: "WHO · WHICH · THAT · WHOSE — which for each?\n\n'The man ___ called.'\n'The car ___ was stolen.'\n'The man ___ car was stolen.'",
        blanks: ["who", "which / that", "whose"],
        back: "'The man WHO called.' (person)\n'The car WHICH / THAT was stolen.' (thing)\n'The man WHOSE car was stolen.' (possession)\n\n📌 who = person · which = thing · that = either (defining only) · whose = possession"
      },
      {
        id: "b12_03",
        front: "Can you omit the relative pronoun?\n\n'The film (that) I saw was great.'\n'The woman who called was angry.'",
        answer: "Only when it's the object of the clause",
        back: "'The film I saw was great.' ✅ (can omit — object clause)\n'The woman who called was angry.' ❌ (can't omit — subject clause)\n\n📌 Omit when pronoun = object of the clause\nKeep when pronoun = subject of the clause"
      }
    ]
  },
  {
    section: 13,
    title: "Adjectives & Adverbs",
    units: "98–120",
    cards: [
      {
        id: "b13_01",
        front: "Comparatives — short vs long adjectives:\n\n'This is ___ (cheap) than that.'\n'She is ___ (intelligent) than him.'",
        blanks: ["cheaper", "more intelligent"],
        back: "'This is CHEAPER than that.' (1 syllable → -er)\n'She is MORE INTELLIGENT than him.' (3+ syllables → more)\n\n📌 1 syllable → -er/est · 2+ syllables → more/most\nIrregular: good→better→best · bad→worse→worst"
      },
      {
        id: "b13_02",
        front: "TOO vs ENOUGH — position and meaning:\n\n'It's ___ hot ___ eat.'\n'It's hot ___ swim.'",
        blanks: ["too", "to", "enough to"],
        back: "'It's TOO hot TO eat.' (excess — negative)\n'It's hot ENOUGH TO swim.' (sufficient — positive)\n\n📌 too + adj + to / adj + enough + to\nEnough comes AFTER the adjective"
      },
      {
        id: "b13_03",
        front: "Adjective vs adverb — which?\n\n'She is a ___ (quick) learner.'\n'She learns ___ (quick).'",
        blanks: ["quick", "quickly"],
        back: "'She is a QUICK learner.' (adjective → modifies noun)\n'She learns QUICKLY.' (adverb → modifies verb)\n\n📌 Adjective + noun / Adverb + verb/adjective/adverb"
      },
      {
        id: "b13_04",
        front: "HARD vs HARDLY · LATE vs LATELY — same or different?\n\n'She works hard.' vs 'She hardly works.'\n'He arrived late.' vs 'I haven't seen him lately.'",
        back: "HARD = with effort / HARDLY = almost not\nLATE = not on time / LATELY = recently\n\n📌 These pairs have completely different meanings!\nHardly/lately are NOT simply adverbs of hard/late"
      }
    ]
  },
  {
    section: 14,
    title: "Prepositions",
    units: "121–136",
    cards: [
      {
        id: "b14_01",
        front: "AT · ON · IN for time — which?\n\n'___ 3pm'\n'___ Monday'\n'___ March'\n'___ 2026'",
        blanks: ["at", "on", "in", "in"],
        back: "AT 3pm (exact time)\nON Monday (specific day)\nIN March / IN 2026 (month, year, season)\n\n📌 AT = point · ON = day/date · IN = longer period"
      },
      {
        id: "b14_02",
        front: "AT · ON · IN for place — which?\n\n'___ the door'\n'___ the table'\n'___ the box'\n'___ London'",
        blanks: ["at", "on", "in", "in"],
        back: "AT the door (specific point)\nON the table (surface)\nIN the box (inside/enclosed)\nIN London (city/country)\n\n📌 AT = point/location · ON = surface · IN = inside"
      },
      {
        id: "b14_03",
        front: "BY vs UNTIL — difference?\n\n'The report must be ready ___ Friday.'\n'I'll wait ___ Friday.'",
        blanks: ["by", "until"],
        back: "'The report must be ready BY Friday.' (deadline — no later than)\n'I'll wait UNTIL Friday.' (continuous up to that point)\n\n📌 by = deadline (action completed before) · until = duration up to a point"
      },
      {
        id: "b14_04",
        front: "Common verb + preposition pairs:\n\n'She's good ___ maths.'\n'He's interested ___ history.'\n'I'm afraid ___ spiders.'",
        blanks: ["at", "in", "of"],
        back: "'She's good AT maths.'\n'He's interested IN history.'\n'I'm afraid OF spiders.'\n\n📌 good at · interested in · afraid of · bored with · responsible for · excited about"
      }
    ]
  },
  {
    section: 15,
    title: "Phrasal Verbs",
    units: "137–145",
    cards: [
      {
        id: "b15_01",
        front: "Separable phrasal verbs — pronoun rule:\n\n'Turn off the light.' → with pronoun?\n'Turn off it.' or 'Turn it off.'?",
        answer: "Turn it off",
        back: "'Turn IT off.' ✅\n'Turn off it.' ❌\n\n📌 With pronouns → ALWAYS between verb and particle\nWith nouns → either position works"
      },
      {
        id: "b15_02",
        front: "Inseparable phrasal verbs:\n\n'Look after the children.' → with pronoun?\n'Look them after.' or 'Look after them.'?",
        answer: "Look after them",
        back: "'Look after THEM.' ✅\n'Look them after.' ❌\n\n📌 Inseparable = object always after the particle\nlook after · get on with · come across · run into"
      },
      {
        id: "b15_03",
        front: "Match the meaning:\n\na) give up\nb) find out\nc) put off\nd) carry out",
        answer: "give up = quit, find out = discover, put off = postpone, carry out = perform",
        freeText: true,
        back: "a) give up = stop doing / quit\nb) find out = discover / learn information\nc) put off = postpone\nd) carry out = execute / perform\n\n📌 These are the most tested phrasal verbs in exams"
      },
      {
        id: "b15_04",
        front: "UP particle — general meaning pattern:\n\n'save up · use up · eat up · finish up · wash up'",
        answer: "Completion or increase",
        back: "UP often = completion or increase\n\nsave up = accumulate\nuse up = exhaust completely\neat up = eat all of it\nfinish up = complete\nwash up = clean (BrE)\n\n📌 UP frequently suggests finishing or increasing"
      }
    ]
  }
];
