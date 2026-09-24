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
