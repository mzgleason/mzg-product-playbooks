type FrameworkStep = {
  title: string;
  copy?: string;
  bullets: string[];
};

type OperatorStep = {
  title: string;
  prompt?: string;
  capture: string[];
  questions: string[];
  rule: string;
};

export const siteContent = {
  hero: {
    eyebrow: "Product Management Operating System",
    subhead:
      "This is a practical operating system for PMs who are actively building, shipping, and carrying outcomes. It is built for people who want sharper judgment, better commercial instincts, and tools they can use immediately."
  },
  intro: [
    "Most PM advice sounds good and changes nothing. It tells you to align stakeholders, be customer-centric, and think strategically, but that is not enough when you are the one making tradeoffs, defending priorities, and trying to create outcomes with limited time, limited trust, and incomplete information.",
    "This operating system is built for PMs who need a clearer way to think and act. The focus is simple: make better bets, learn faster, and improve your decision quality over time."
  ],
  beliefs: [
    "Product management is not status reporting. It is decision making under uncertainty.",
    "Most teams do not have a strategy problem. They have a clarity problem.",
    "Prioritization is not about ranking ideas. It is about choosing what deserves resources now.",
    "Metrics are only useful when they sharpen decisions.",
    "Commercial reality matters. A product bet is only strong if it can create value for users and for the business."
  ],
  audienceBullets: [
    "Owning decisions, not just facilitating them.",
    "Building with design, engineering, and go-to-market teams.",
    "Expected to show judgment, not just output.",
    "Trying to improve their craft in public and in practice."
  ],
  howToUse: [
    "Start with the playbook that matches your current bottleneck.",
    "Apply the framework to a live decision, not a hypothetical one.",
    "Use the worksheet or checklist to make the decision more concrete.",
    "Review what changed in your thinking, your plan, and your confidence."
  ],
  publicProof: [
    "The goal is not to sound smart. The goal is to share a system that helps PMs make stronger decisions in the real world.",
    "You will not find inflated claims, recycled templates, or theory with no operating value. You will find practical frameworks, realistic examples, and strong points of view you can test in your own work."
  ],
  closingCta: {
    headline: "Pick the decision you are stuck on and start there.",
    body: "The best way to evaluate a framework is to use it on a real product problem. Start with strategy, prioritization, or metrics and put the system to work."
  }
};

export const playbooks = [
  {
    slug: "strategy",
    label: "Playbook 01",
    title: "Strategy",
    summary: "Use this when your team has ideas, energy, and motion, but no clear logic for where to win.",
    claim:
      "Strategy is not a slogan. It is a set of choices about where you will win, why that choice matters, and what you will not do.",
    problem:
      "Many teams say they have a strategy when they really have goals, themes, a market they happen to be in, or stakeholder expectations. That creates motion without a coherent bet.",
    problemBullets: [
      "A list of goals.",
      "A roadmap theme.",
      "A market they happen to be in.",
      "A collection of stakeholder expectations."
    ],
    whenToUse: [
      "Your roadmap has momentum but weak direction.",
      "Teams are spreading effort across too many customer types or problems.",
      "Strategy discussions sound ambitious but stay fuzzy."
    ],
    whatYouGet: [
      "A strategy framing model.",
      "A market choice worksheet.",
      "A strategy quality checklist.",
      "An attached operator playbook for running the process live."
    ],
    operatingPrinciple:
      "Strong strategy narrows the field. If it does not make resource allocation easier, it is probably not a strategy.",
    framework: [
      {
        title: "Step 1: Define the outcome worth winning",
        copy: "Write the concrete outcome the business needs from this area over the next planning cycle.",
        bullets: [
          "What must become true for this product area to matter commercially?",
          "What change would count as a meaningful win?",
          "What would make this effort not worth continuing?"
        ]
      },
      {
        title: "Step 2: Pick the customer and problem space deliberately",
        copy: "Choose the segment and problem where you believe you can create disproportionate value.",
        bullets: [
          "Which customer has painful urgency, not mild interest?",
          "Which problem has economic weight, not just qualitative appeal?",
          "Where do we have an unfair advantage or a credible path to one?"
        ]
      },
      {
        title: "Step 3: State the wedge",
        bullets: [
          "What can we do meaningfully better than alternatives?",
          "Why will this wedge pull adoption, retention, or monetization?",
          "What adjacent opportunities become easier if this works?"
        ]
      },
      {
        title: "Step 4: Name the tradeoffs",
        bullets: [
          "Which segments are we not serving right now?",
          "Which attractive requests do not support the wedge?",
          "What work looks useful but weakens the bet?"
        ]
      },
      {
        title: "Step 5: Convert the strategy into decision rules",
        bullets: [
          "Prioritize work that improves adoption in the target segment, even if it slows lower-value requests.",
          "Favor product depth in the wedge over horizontal breadth.",
          "Reject roadmap items that do not strengthen acquisition, retention, or monetization in the chosen path."
        ]
      }
    ] satisfies FrameworkStep[],
    exampleIntro:
      "A B2B SaaS team says its strategy is to become the system of record for customer onboarding. That sounds substantial, but it does not tell the team where to focus. After using the framework, the strategy sharpens into something operational.",
    exampleBullets: [
      "Outcome worth winning: increase expansion revenue from mid-market accounts by proving time-to-value in the first 30 days.",
      "Target customer: operations leaders at companies with distributed onboarding workflows.",
      "Wedge: reduce setup friction and make cross-team task ownership visible in week one.",
      "Tradeoff: pause enterprise customization requests that do not improve early activation.",
      "Decision rule: roadmap items must strengthen activation for the target segment before they earn investment."
    ],
    exampleClosing: "That strategy is narrower, but it is more useful. It changes what gets built.",
    commonMistakes: [
      "Calling goals a strategy.",
      "Choosing a segment broad enough to avoid discomfort.",
      "Refusing to name tradeoffs because requests feel politically expensive.",
      "Treating strategy as a slide instead of a filter for decisions."
    ],
    worksheetTitle: "Strategy snapshot",
    worksheet: [
      "Outcome worth winning:",
      "Target customer:",
      "Problem with real urgency:",
      "Wedge:",
      "Reason this can win:",
      "Key tradeoffs:",
      "Decision rules:"
    ],
    checklist: [
      "Can a new teammate explain who this is for in one sentence?",
      "Does the strategy make at least one attractive option feel out of scope?",
      "Can the team use it to reject work?",
      "Is the commercial logic explicit?",
      "Does the wedge create leverage instead of generic value?"
    ],
    closing: "If your strategy does not reduce ambiguity for the team, it is not done. The real test is whether it changes decisions."
  },
  {
    slug: "prioritization",
    label: "Playbook 02",
    title: "Prioritization",
    summary: "Use this when everything sounds important and the real job is choosing what earns focus now.",
    claim:
      "Prioritization is not the art of making everyone feel heard. It is the discipline of putting resources behind the bets that are most worth making now.",
    problem:
      "Most prioritization breaks down because teams compare unlike things and urgency usually wins.",
    problemBullets: [
      "Strategic bets.",
      "Customer asks.",
      "Tech debt.",
      "Compliance work.",
      "Executive requests."
    ],
    whenToUse: [
      "The roadmap is overcrowded.",
      "Stakeholders keep adding high-priority work.",
      "The team is busy but uncertain whether it is funding the right bets."
    ],
    whatYouGet: [
      "A prioritization decision stack.",
      "A bet scoring worksheet.",
      "A meeting checklist for hard tradeoffs.",
      "An attached operator playbook for running prioritization sessions."
    ],
    operatingPrinciple:
      "A prioritization system should reward expected value and strategic fit, not noise, seniority, or recency.",
    framework: [
      {
        title: "Step 1: Separate work by type",
        copy: "Do not compare fundamentally different work without naming the category first.",
        bullets: [
          "Growth bet.",
          "Retention bet.",
          "Strategic platform investment.",
          "Reliability or risk reduction.",
          "Obligation or compliance."
        ]
      },
      {
        title: "Step 2: Define the value of the bet",
        bullets: [
          "What user or business outcome improves?",
          "How meaningful is that improvement?",
          "Is the value near-term, long-term, or mostly speculative?"
        ]
      },
      {
        title: "Step 3: Estimate confidence honestly",
        bullets: [
          "What evidence supports the bet?",
          "Where are we still guessing?",
          "What assumptions would kill the value if they are wrong?"
        ]
      },
      {
        title: "Step 4: Price the cost",
        bullets: [
          "What is the implementation cost?",
          "What focus does it consume?",
          "What higher-value work gets delayed if we do this now?"
        ]
      },
      {
        title: "Step 5: Check strategic fit",
        bullets: [
          "Does this support the current strategy?",
          "Does it strengthen a key metric?",
          "Does it move the team toward the chosen wedge?"
        ]
      },
      {
        title: "Step 6: Make the tradeoff visible",
        bullets: ["If we do this, what are we explicitly not doing?"]
      }
    ] satisfies FrameworkStep[],
    exampleIntro:
      "A product team is choosing between an integration requested by a large prospect, onboarding improvements for new self-serve users, and a data migration that reduces operational risk.",
    exampleBullets: [
      "The integration has plausible upside but weak repeatability.",
      "Onboarding improvements support the current growth strategy and benefit a larger user set.",
      "The migration is necessary risk work and should be reserved as protected capacity rather than mixed into bet scoring.",
      "Reserve fixed capacity for risk reduction.",
      "Prioritize onboarding improvements as the lead bet and defer the integration until demand is clearer."
    ],
    exampleClosing: "This is not perfect certainty. It is better tradeoff quality.",
    commonMistakes: [
      "Ranking everything in one list without separating work types.",
      "Rewarding loud requests instead of strategic value.",
      "Ignoring opportunity cost.",
      "Claiming confidence without evidence.",
      "Treating prioritization as a one-time ceremony instead of an ongoing resource decision."
    ],
    worksheetTitle: "Bet review",
    worksheet: [
      "Item:",
      "Work type:",
      "Expected value:",
      "Confidence level:",
      "Cost:",
      "Strategic fit:",
      "What it displaces:",
      "Decision:"
    ],
    checklist: [
      "Is the work type clear?",
      "Is the value meaningful, not just possible?",
      "Is confidence supported by evidence?",
      "Is the strategic fit explicit?",
      "Have we named what this displaces?"
    ],
    closing: "Good prioritization does not remove hard calls. It makes them legible and harder to fake."
  },
  {
    slug: "metrics",
    label: "Playbook 03",
    title: "Metrics",
    summary: "Use this when dashboards are growing but decision quality is not.",
    claim:
      "Metrics matter when they improve decisions. If a metric does not change what the team notices, debates, or does next, it is overhead.",
    problem:
      "Teams often have too many dashboards, lagging KPIs with weak operational value, and metrics that sound important but do not guide action.",
    problemBullets: [
      "Too many dashboards.",
      "Lagging KPIs with weak operational value.",
      "Metrics that sound important but do not guide action."
    ],
    whenToUse: [
      "Your team is reviewing numbers but not learning much.",
      "Key metrics are broad and hard to influence.",
      "There is confusion about what to monitor versus what to act on."
    ],
    whatYouGet: [
      "A metric selection framework.",
      "An operating metric template.",
      "A metric review checklist.",
      "An attached operator playbook for turning metrics into operating rhythms."
    ],
    operatingPrinciple:
      "Every important metric should have a job. If its job is unclear, the metric should probably not be central.",
    framework: [
      {
        title: "Step 1: Start with the decision",
        bullets: [
          "Are we investing in the right activation work?",
          "Is the new onboarding flow reducing time-to-value?",
          "Is retention improving in the target segment?"
        ]
      },
      {
        title: "Step 2: Separate outcome metrics from operating metrics",
        bullets: [
          "Outcome metric: paid conversion rate.",
          "Operating metric: percentage of new users completing setup within 24 hours."
        ]
      },
      {
        title: "Step 3: Check controllability",
        bullets: [
          "Can the team move this with real product work?",
          "Is the signal close enough to the work to be useful?",
          "Will changes show up fast enough to support learning?"
        ]
      },
      {
        title: "Step 4: Define the diagnostic pair",
        bullets: [
          "Headline: activation rate.",
          "Diagnostic: median time to complete setup."
        ]
      },
      {
        title: "Step 5: Set review behavior",
        bullets: [
          "How often is it reviewed?",
          "What threshold triggers action?",
          "Who owns interpretation?",
          "What decisions can it change?"
        ]
      }
    ] satisfies FrameworkStep[],
    exampleIntro:
      "A team says its key metric is monthly active users. The problem is that the metric is broad, lagging, and not useful for weekly product decisions.",
    exampleBullets: [
      "Decision: are onboarding changes improving early value realization?",
      "Outcome metric: 30-day retained activated accounts.",
      "Operating metric: percentage of new accounts reaching first value event within 7 days.",
      "Diagnostic metric: median days to first value event.",
      "Review behavior: weekly review with a required action note if the operating metric stalls for two consecutive weeks."
    ],
    exampleClosing: "The team still tracks MAU, but it stops pretending MAU is the best metric for operating the product.",
    commonMistakes: [
      "Choosing metrics because they sound executive-ready.",
      "Using lagging metrics for short-cycle product learning.",
      "Tracking more numbers instead of clearer ones.",
      "Reviewing metrics without a decision attached.",
      "Confusing visibility with usefulness."
    ],
    worksheetTitle: "Metric design",
    worksheet: [
      "Decision this metric supports:",
      "Outcome metric:",
      "Operating metric:",
      "Diagnostic metric:",
      "Owner:",
      "Review cadence:",
      "Action trigger:"
    ],
    checklist: [
      "Is the decision explicit?",
      "Can the team influence the metric?",
      "Is there a clear difference between outcome and operating metrics?",
      "Is there a diagnostic pair?",
      "Does the review process define what happens next?"
    ],
    closing: "Metrics should make the product team harder to fool, not easier to impress."
  }
] as const;

export const operatorPlaybooks = [
  {
    slug: "strategy",
    title: "Strategy Operator Playbook",
    purpose:
      "Turn vague strategic ambition into a clear, usable product bet with explicit tradeoffs and decision rules.",
    runWhen: [
      "The roadmap feels active but unfocused.",
      "Teams cannot explain where they are trying to win.",
      "Strategy conversations keep producing themes instead of choices."
    ],
    who: [
      "Product lead or PM owner.",
      "Engineering lead.",
      "Design lead if the wedge depends on workflow or behavior change.",
      "Go-to-market or commercial partner if pricing, packaging, or segment choice matters."
    ],
    timebox: "60 to 90 minutes plus 30 minutes of cleanup.",
    inputs: [
      "Current roadmap or initiative list.",
      "Current business goals.",
      "Customer segment information.",
      "Performance data relevant to adoption, retention, revenue, or expansion.",
      "Top open strategic questions."
    ],
    outputs: [
      "One clear strategy statement.",
      "Named target customer and problem.",
      "Stated wedge.",
      "Explicit tradeoffs.",
      "Decision rules the team can apply immediately."
    ],
    workflow: [
      {
        title: "Step 1: Define the win",
        prompt: "What business outcome must become true for this product area to matter in the next planning cycle?",
        capture: ["Write one sentence only."],
        questions: [],
        rule: "If the sentence is broad enough to fit every team, rewrite it."
      },
      {
        title: "Step 2: Narrow the customer",
        prompt:
          "Which customer or segment has enough pain, urgency, and economic value to justify focused investment now?",
        capture: [],
        questions: [],
        rule: 'Do not allow the answer to be "all users" or "the market."'
      },
      {
        title: "Step 3: Name the problem that earns focus",
        prompt:
          "What specific problem, if solved well, creates disproportionate value for that customer and the business?",
        capture: [],
        questions: [],
        rule: "If the problem is really a feature area, keep pushing until it describes a painful job or failure state."
      },
      {
        title: "Step 4: Define the wedge",
        prompt: "What is the narrowest entry point that gives us leverage?",
        capture: [],
        questions: [],
        rule: "The wedge should be specific enough to guide the next quarter of decisions."
      },
      {
        title: "Step 5: Force the tradeoffs",
        prompt: "What are we explicitly not doing if this is the bet?",
        capture: [
          "Segments not served now.",
          "Requests deprioritized.",
          "Adjacent opportunities intentionally delayed."
        ],
        questions: [],
        rule: "If nothing feels excluded, the strategy is still too broad."
      },
      {
        title: "Step 6: Write decision rules",
        prompt: "What rules should the team use to accept or reject roadmap work against this strategy?",
        capture: ["Write three to five rules."],
        questions: [
          "We prioritize work that increases activation in the target segment.",
          "We reject horizontal expansion that weakens the wedge.",
          "We favor depth over breadth until the wedge proves repeatable value."
        ],
        rule: "Make the rules concrete enough to influence roadmap choices immediately."
      },
      {
        title: "Step 7: Pressure test",
        capture: [],
        questions: [
          "Would this change the roadmap next week?",
          "Can a new teammate explain the bet in one minute?",
          "Would this help us say no to attractive but off-strategy work?",
          "Is the commercial logic obvious?"
        ],
        rule: "If the answer is no to any of these, revise the strategy statement."
      }
    ] satisfies OperatorStep[],
    templateTitle: "Strategy statement",
    template: [
      "Win:",
      "Target customer:",
      "Problem:",
      "Wedge:",
      "Why this can win:",
      "Tradeoffs:",
      "Decision rules:"
    ],
    failureModes: [
      "The conversation stays at theme level.",
      "Stakeholders protect too many exceptions.",
      "Tradeoffs are softened to avoid discomfort.",
      "The output sounds polished but does not change resourcing."
    ],
    doneStandard: ["Reject work.", "Explain the bet clearly.", "Align roadmap choices to a commercial outcome."]
  },
  {
    slug: "prioritization",
    title: "Prioritization Operator Playbook",
    purpose:
      "Run a prioritization process that compares bets honestly, exposes opportunity cost, and produces a defensible near-term choice.",
    runWhen: [
      "Too many initiatives are competing for the same capacity.",
      "Stakeholders keep escalating requests into the roadmap.",
      "The team needs a more credible way to make tradeoffs."
    ],
    who: [
      "PM owner.",
      "Engineering lead.",
      "Design lead when user impact is material.",
      "Finance, operations, or go-to-market partner when commercial implications matter.",
      "Decision-maker if the group cannot only recommend."
    ],
    timebox: "45 to 75 minutes depending on the number of items.",
    inputs: [
      "Current candidate initiatives.",
      "Current strategy or focus areas.",
      "Available capacity assumptions.",
      "Supporting evidence for each major bet.",
      "Known obligations or protected work."
    ],
    outputs: [
      "Categorized candidate list.",
      "Clear decision on what is in, out, and protected.",
      "Named displacement for every approved bet.",
      "Brief rationale that can be reused with stakeholders."
    ],
    workflow: [
      {
        title: "Step 1: Separate protected work first",
        capture: ["Compliance.", "Critical reliability work.", "Contractual commitments."],
        questions: [],
        rule: "Do not let protected work compete with strategic bets in the same scoring discussion."
      },
      {
        title: "Step 2: Categorize the remaining bets",
        capture: ["Growth.", "Retention.", "Expansion.", "Platform.", "Operational efficiency."],
        questions: [],
        rule: "If an item does not fit a category, the item is probably underspecified."
      },
      {
        title: "Step 3: Score expected value",
        capture: [],
        questions: [
          "What outcome improves?",
          "How meaningful is the upside?",
          "How repeatable is the value if this works?"
        ],
        rule: "Use a simple scale such as low, medium, or high."
      },
      {
        title: "Step 4: Score confidence",
        capture: [],
        questions: [
          "What evidence do we have?",
          "What assumptions are carrying the case?",
          "How likely is it that the upside is overstated?"
        ],
        rule: "Do not reward conviction. Reward evidence."
      },
      {
        title: "Step 5: Score cost and focus load",
        capture: [],
        questions: [
          "What is the delivery cost?",
          "What coordination cost does this create?",
          "What focus does it consume beyond engineering time?"
        ],
        rule: "Price cost as more than implementation effort."
      },
      {
        title: "Step 6: Check strategic fit",
        capture: [],
        questions: [
          "Does this support the current strategy?",
          "Does it strengthen a priority metric?",
          "Does it help the team win where it already chose to compete?"
        ],
        rule: "A valuable item can still be wrong for the quarter."
      },
      {
        title: "Step 7: Force displacement",
        prompt: "What specifically are we not doing if we fund this now?",
        capture: [],
        questions: [],
        rule: "No item is approved until its displacement is named."
      },
      {
        title: "Step 8: Finalize the decision set",
        capture: ["Approved now.", "Deferred.", "Protected capacity."],
        questions: ["Add one sentence of rationale for each approved item."],
        rule: "Make the final output reusable with stakeholders."
      }
    ] satisfies OperatorStep[],
    templateTitle: "Candidate review",
    template: [
      "Item:",
      "Category:",
      "Expected value:",
      "Confidence:",
      "Cost:",
      "Strategic fit:",
      "What it displaces:",
      "Decision:",
      "Rationale:"
    ],
    failureModes: [
      "Protected work is mixed into bet scoring.",
      "Executives bypass the framework through urgency language.",
      "Confidence scores are inflated by politics.",
      "The team approves items without naming what gets displaced."
    ],
    doneStandard: [
      "Explain why the chosen bets won.",
      "Explain what got deferred.",
      "Explain what capacity is already committed.",
      "Explain what tradeoffs were accepted."
    ]
  },
  {
    slug: "metrics",
    title: "Metrics Operator Playbook",
    purpose:
      "Rebuild a product metric set around decisions, operating behavior, and useful review rhythms.",
    runWhen: [
      "The team has too many metrics and weak clarity.",
      "Dashboard reviews feel informative but not actionable.",
      "Key KPIs are lagging indicators with little operating value."
    ],
    who: [
      "PM owner.",
      "Engineering or analytics partner.",
      "Design or research partner when behavior interpretation matters.",
      "Team lead who will own the review cadence."
    ],
    timebox: "60 minutes to redesign the metric set, plus 20 minutes to define the operating review.",
    inputs: [
      "Current KPIs and dashboard views.",
      "Active product goals.",
      "Recent product decisions or open questions.",
      "Event or reporting definitions if available."
    ],
    outputs: [
      "A short list of core metrics.",
      "Explicit pairing of outcome and operating metrics.",
      "Diagnostic metrics where needed.",
      "A review cadence with action triggers."
    ],
    workflow: [
      {
        title: "Step 1: Start with decisions, not dashboards",
        capture: [],
        questions: [
          "Are onboarding changes improving early value?",
          "Is retention weakness tied to activation or ongoing usage?",
          "Which funnel step deserves product attention now?"
        ],
        rule: "If the decision is unclear, the metric set will be weak."
      },
      {
        title: "Step 2: Sort existing metrics",
        capture: ["Keep.", "Demote.", "Remove.", "Diagnostic only."],
        questions: [],
        rule: "A visible metric is not automatically a useful operating metric."
      },
      {
        title: "Step 3: Choose one outcome metric per decision area",
        prompt: "What result are we trying to improve at the business or user level?",
        capture: ["Retained activated accounts.", "Expansion revenue from target accounts.", "Paid conversion."],
        questions: [],
        rule: "Choose metrics that match the real decision area."
      },
      {
        title: "Step 4: Choose one operating metric per outcome",
        prompt: "What nearer-term behavior or state can the team influence directly?",
        capture: ["First value event within 7 days.", "Setup completion rate.", "Weekly use of the core workflow."],
        questions: [],
        rule: "The operating metric should be close enough to support learning."
      },
      {
        title: "Step 5: Add a diagnostic metric if needed",
        prompt: "If the operating metric moves, what companion metric helps explain why?",
        capture: ["Time to complete setup.", "Drop-off rate at a specific funnel step.", "Usage depth in a key feature path."],
        questions: [],
        rule: "Add diagnostics only when they help interpret movement."
      },
      {
        title: "Step 6: Define the review rhythm",
        capture: ["Owner.", "Review cadence.", "Threshold or trigger.", "Required response if the metric stalls or drops."],
        questions: [],
        rule: "If there is no action rule, the review is mostly theater."
      },
      {
        title: "Step 7: Remove noise",
        capture: [],
        questions: [
          "Which metrics look important but do not influence decisions?",
          "Which ones can stay in a dashboard without being central?",
          "Which ones are executive visibility metrics only?"
        ],
        rule: "Cut aggressively."
      }
    ] satisfies OperatorStep[],
    templateTitle: "Decision area",
    template: [
      "Decision:",
      "Outcome metric:",
      "Operating metric:",
      "Diagnostic metric:",
      "Owner:",
      "Review cadence:",
      "Trigger:",
      "Expected action:"
    ],
    failureModes: [
      "The team starts from existing dashboards instead of decisions.",
      "Lagging metrics are treated as operating controls.",
      "Too many metrics survive because removing them feels risky.",
      "Review meetings discuss numbers but assign no next action."
    ],
    doneStandard: [
      "Map metrics to real decisions.",
      "Distinguish outcomes from operating signals.",
      "Give the set clear owners and review rules.",
      "Remove nonessential noise."
    ]
  }
] as const;

export function getPlaybookBySlug(slug: string) {
  return playbooks.find((playbook) => playbook.slug === slug);
}

export function getOperatorPlaybookBySlug(slug: string) {
  return operatorPlaybooks.find((playbook) => playbook.slug === slug);
}
