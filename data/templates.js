// ── Dynamic exercise templates ──────────────────────────────────────────────
// Each template describes a grammar rule as a pattern with slots. The engine
// (app.js) picks random slot values each time to generate a fresh sentence,
// instead of always showing the same fixed cards.
//
// Slot value arrays can mix in words pulled from VOCAB_DATA at runtime (see
// getWordBank in app.js) — this file only needs to define what's specific to
// the grammar point itself.

const TEMPLATE_DATA = [
  {
    id: "present-simple-vs-continuous",
    tags: ["present-simple", "present-continuous"],
    title: "Present Simple vs Continuous",
    // Each generator produces ONE exercise instance when called.
    generators: [
      {
        type: "gap-fill",
        // {{slot}} placeholders get replaced; ANSWER marks the blank shown as ___
        build(rand) {
          const subj = rand.pick(SUBJECTS);
          const verb = rand.pick(ROUTINE_VERBS);
          const time = rand.pick(ROUTINE_TIME);
          const conj = conjugatePresentSimple(subj, verb.base);
          return {
            front: `Complete with the correct form:\n\n'${subj} ___ (${verb.base}) ${time}.'`,
            correct: conj,
            explanation: `Present simple — routines/facts. Trigger: "${time}"`,
            back: `'${subj} ${conj} ${time}.'\n\n📌 Present simple: routines, facts, permanent states — triggers like "${time}"`
          };
        }
      },
      {
        type: "gap-fill",
        build(rand) {
          const subj = rand.pick(SUBJECTS);
          const verb = rand.pick(ACTION_VERBS);
          const time = rand.pick(NOW_TIME);
          const conj = conjugatePresentContinuous(subj, verb.base, verb.ing);
          return {
            front: `Complete with the correct form:\n\n'${subj} ___ (${verb.base}) ${time}.'`,
            correct: conj,
            explanation: `Present continuous — happening now/temporary. Trigger: "${time}"`,
            back: `'${subj} ${conj} ${time}.'\n\n📌 Present continuous: now, temporary, in progress — triggers like "${time}"`
          };
        }
      },
      {
        type: "multiple-choice",
        build(rand) {
          const subj = rand.pick(SUBJECTS);
          const stateVerb = rand.pick(STATE_VERBS);
          const correctForm = conjugatePresentSimple(subj, stateVerb.base);
          const wrongForm = conjugatePresentContinuous(subj, stateVerb.base, stateVerb.ing);
          const options = rand.shuffle([correctForm, wrongForm]);
          const objectPart = stateVerb.object ? ` ${stateVerb.object}` : '';
          return {
            front: `Which is correct?\n\n'${subj} ___${objectPart}.'`,
            options,
            correct: correctForm,
            explanation: `State verbs (${stateVerb.base}) never go in continuous form.`,
            back: `✅ '${subj} ${correctForm}'\n❌ '${subj} ${wrongForm}'\n\n📌 State verbs: know · like · want · need · believe · understand · own · have (possession) — never continuous`
          };
        }
      }
    ]
  },
  {
    id: "past-simple",
    tags: ["past-simple"],
    title: "Past Simple",
    generators: [
      {
        type: "gap-fill",
        build(rand) {
          const subj = rand.pick(SUBJECTS);
          const verb = rand.pick(PAST_VERBS);
          const time = rand.pick(PAST_TIME);
          return {
            front: `Complete with the correct form:\n\n'${subj} ___ (${verb.base}) ${time}.'`,
            correct: verb.past,
            explanation: `Past simple — completed action. Trigger: "${time}"`,
            back: `'${subj} ${verb.past} ${time}.'\n\n📌 Past simple: completed actions — triggers like "${time}"`
          };
        }
      },
      {
        type: "multiple-choice",
        build(rand) {
          const subj = rand.pick(SUBJECTS);
          const verb = rand.pick(IRREGULAR_PAST_VERBS);
          const time = rand.pick(PAST_TIME);
          const wrongForm = verb.base + (verb.base.endsWith('e') ? 'd' : 'ed');
          const options = rand.shuffle([verb.past, wrongForm]);
          return {
            front: `Which is correct?\n\n'${subj} ___ (${verb.base}) ${time}.'`,
            options,
            correct: verb.past,
            explanation: `"${verb.base}" is irregular — past is "${verb.past}", not "${wrongForm}".`,
            back: `✅ '${subj} ${verb.past} ${time}.'\n\n📌 Irregular verb: ${verb.base} → ${verb.past}`
          };
        }
      }
    ]
  },
  {
    id: "past-continuous",
    tags: ["past-continuous"],
    title: "Past Continuous",
    generators: [
      {
        type: "gap-fill",
        build(rand) {
          const subj = rand.pick(SUBJECTS);
          const verb = rand.pick(ACTION_VERBS);
          const interrupt = rand.pick(PAST_INTERRUPTIONS);
          const be = { I: "was", You: "were", She: "was", He: "was", We: "were", They: "were" }[subj];
          const conj = `${be} ${verb.ing}`;
          return {
            front: `Complete with the correct form:\n\n'${subj} ___ (${verb.base}) when ${interrupt}.'`,
            correct: conj,
            explanation: `Past continuous — action in progress, interrupted by a past simple event.`,
            back: `'${subj} ${conj} when ${interrupt}.'\n\n📌 Past continuous (background) + past simple (interruption)`
          };
        }
      }
    ]
  },
  {
    id: "present-perfect",
    tags: ["present-perfect"],
    title: "Present Perfect",
    generators: [
      {
        type: "multiple-choice",
        build(rand) {
          const subj = rand.pick(SUBJECTS);
          const verb = rand.pick(PERFECT_VERBS);
          const marker = rand.pick(["for", "since"]);
          const span = marker === "for" ? rand.pick(FOR_SPANS) : rand.pick(SINCE_POINTS);
          const have = { I: "have", You: "have", She: "has", He: "has", We: "have", They: "have" }[subj];
          const correct = `${have} ${verb.pp}`;
          const wrong = have === "have" ? `has ${verb.pp}` : `have ${verb.pp}`;
          const options = rand.shuffle([correct, wrong]);
          return {
            front: `Which is correct?\n\n'${subj} ___ (${verb.base}) here ${marker} ${span}.'`,
            options,
            correct,
            explanation: `Subject-verb agreement: ${subj} → "${have}".`,
            back: `✅ '${subj} ${correct} here ${marker} ${span}.'\n\n📌 for + duration (2 years) · since + point in time (2020, June)`
          };
        }
      },
      {
        type: "gap-fill",
        build(rand) {
          const subj = rand.pick(SUBJECTS);
          const verb = rand.pick(PERFECT_VERBS);
          const have = { I: "have", You: "have", She: "has", He: "has", We: "have", They: "have" }[subj];
          const adverb = rand.pick(["ever", "just", "already", "never"]);
          return {
            front: `Complete with the correct form:\n\n'${subj} ___ ${adverb} ___ (${verb.base}) this.'`,
            correct: `${have} ${verb.pp}`,
            explanation: `Present perfect with "${adverb}" — no specific past time given.`,
            back: `'${subj} ${have} ${adverb} ${verb.pp} this.'\n\n📌 ever/just/already/never + present perfect — connects past to now`
          };
        }
      }
    ]
  },
  {
    id: "modals-obligation",
    tags: ["modals", "obligation"],
    title: "Modals of Obligation",
    generators: [
      {
        type: "multiple-choice",
        build(rand) {
          const subj = rand.pick(SUBJECTS);
          const rule = rand.pick(OBLIGATION_RULES);
          const wrong = rule.correct === "must" ? "have to" : "must";
          const options = rand.shuffle([rule.correct, wrong]);
          return {
            front: `Which fits best?\n\n'${subj} ___ ${rule.text}.'`,
            options,
            correct: rule.correct,
            explanation: rule.explanation,
            back: `✅ '${subj} ${rule.correct} ${rule.text}.'\n\n📌 ${rule.explanation}`
          };
        }
      },
      {
        type: "gap-fill",
        build(rand) {
          const subj = rand.pick(SUBJECTS);
          const advice = rand.pick(ADVICE_ITEMS);
          return {
            front: `Complete with SHOULD or SHOULDN'T:\n\n'${subj} ___ ${advice.text}.'`,
            correct: advice.correct,
            explanation: advice.explanation,
            back: `'${subj} ${advice.correct} ${advice.text}.'\n\n📌 ${advice.explanation}`
          };
        }
      }
    ]
  }
];

// ── Word banks specific to this template ────────────────────────────────────
const SUBJECTS = ["I", "You", "She", "He", "We", "They"];

const ROUTINE_VERBS = [
  { base: "work" }, { base: "study" }, { base: "play" }, { base: "cook" },
  { base: "travel" }, { base: "read" }, { base: "exercise" }, { base: "clean" }
];
const ROUTINE_TIME = ["every day", "every morning", "on weekends", "twice a week", "every year"];

const ACTION_VERBS = [
  { base: "study", ing: "studying" }, { base: "cook", ing: "cooking" },
  { base: "read", ing: "reading" }, { base: "run", ing: "running" },
  { base: "write", ing: "writing" }, { base: "clean", ing: "cleaning" }
];
const NOW_TIME = ["right now", "at the moment", "this week", "today", "currently"];

const STATE_VERBS = [
  { base: "know", ing: "knowing", object: "the answer" },
  { base: "want", ing: "wanting", object: "coffee" },
  { base: "like", ing: "liking", object: "this song" },
  { base: "need", ing: "needing", object: "help" },
  { base: "believe", ing: "believing", object: "you" },
  { base: "own", ing: "owning", object: "a car" }
];

const IRREGULAR_PAST_VERBS = [
  { base: "go", past: "went" }, { base: "see", past: "saw" }, { base: "have", past: "had" },
  { base: "eat", past: "ate" }, { base: "buy", past: "bought" }, { base: "take", past: "took" }
];
const REGULAR_PAST_VERBS = [
  { base: "work", past: "worked" }, { base: "study", past: "studied" }, { base: "arrive", past: "arrived" },
  { base: "call", past: "called" }, { base: "watch", past: "watched" }, { base: "finish", past: "finished" }
];
const PAST_VERBS = [...IRREGULAR_PAST_VERBS, ...REGULAR_PAST_VERBS];
const PAST_TIME = ["yesterday", "last week", "two days ago", "in 2019", "last summer", "this morning"];

const PAST_INTERRUPTIONS = [
  "the phone rang", "she arrived", "it started raining", "the power went out",
  "he called", "the alarm went off"
];

const PERFECT_VERBS = [
  { base: "live", pp: "lived" }, { base: "work", pp: "worked" }, { base: "know", pp: "known" },
  { base: "be", pp: "been" }, { base: "study", pp: "studied" }, { base: "have", pp: "had" },
  { base: "see", pp: "seen" }, { base: "do", pp: "done" }
];
const FOR_SPANS = ["two years", "six months", "a long time", "three weeks", "ages"];
const SINCE_POINTS = ["2020", "last June", "she was a child", "Monday", "the beginning of the year"];

const OBLIGATION_RULES = [
  { text: "wear a seatbelt in this country", correct: "must", explanation: "must = strong obligation, often a fixed rule/law" },
  { text: "renew my passport before travelling", correct: "have to", explanation: "have to = external obligation (not the speaker's personal rule)" },
  { text: "show ID to enter the building", correct: "have to", explanation: "have to = an external rule imposed by someone else" },
  { text: "finish this report today, it's non-negotiable", correct: "must", explanation: "must = the speaker's own strong obligation/urgency" },
];

const ADVICE_ITEMS = [
  { text: "drink more water", correct: "should", explanation: "should = advice, it's a good idea" },
  { text: "skip breakfast every day", correct: "shouldn't", explanation: "shouldn't = advice against something" },
  { text: "get more sleep before the exam", correct: "should", explanation: "should = recommendation" },
  { text: "ignore the doctor's advice", correct: "shouldn't", explanation: "shouldn't = warning against a bad idea" },
];

// ── Tiny conjugation helpers (3rd person -s, be+ing) ────────────────────────
function conjugatePresentSimple(subject, base) {
  const thirdPerson = subject === "She" || subject === "He";
  if (!thirdPerson) return base;
  if (/(s|sh|ch|x|o)$/.test(base)) return base + "es";
  if (/[^aeiou]y$/.test(base)) return base.slice(0, -1) + "ies";
  return base + "s";
}

function conjugatePresentContinuous(subject, base, ing) {
  const be = { I: "am", You: "are", She: "is", He: "is", We: "are", They: "are" }[subject];
  return `${be} ${ing}`;
}
