# Metrics Operator Playbook

## Purpose

Use this playbook to rebuild a product metric set around decisions, operating behavior, and useful review rhythms.

## Run This When

- the team has too many metrics and weak clarity
- dashboard reviews feel informative but not actionable
- key KPIs are lagging indicators with little operating value

## Who Should Be In The Room

- PM owner
- engineering or analytics partner
- design or research partner when behavior interpretation matters
- team lead who will own the review cadence

## Timebox

60 minutes to redesign the metric set, plus 20 minutes to define the operating review.

## Inputs Required

- current KPIs and dashboard views
- active product goals
- recent product decisions or open questions
- event or reporting definitions if available

## Expected Output

- a short list of core metrics
- explicit pairing of outcome and operating metrics
- diagnostic metrics where needed
- a review cadence with action triggers

## Workflow

### Step 1: Start with decisions, not dashboards

List the real decisions the team needs help making.

Examples:

- Are onboarding changes improving early value?
- Is retention weakness tied to activation or ongoing usage?
- Which funnel step deserves product attention now?

Rule:

If the decision is unclear, the metric set will be weak.

### Step 2: Sort existing metrics

For each metric, classify it as:

- keep
- demote
- remove
- diagnostic only

Rule:

A visible metric is not automatically a useful operating metric.

### Step 3: Choose one outcome metric per decision area

Prompt:

What result are we trying to improve at the business or user level?

Examples:

- retained activated accounts
- expansion revenue from target accounts
- paid conversion

### Step 4: Choose one operating metric per outcome

Prompt:

What nearer-term behavior or state can the team influence directly?

Examples:

- first value event within 7 days
- setup completion rate
- weekly use of the core workflow

### Step 5: Add a diagnostic metric if needed

Prompt:

If the operating metric moves, what companion metric helps explain why?

Examples:

- time to complete setup
- drop-off rate at a specific funnel step
- usage depth in a key feature path

### Step 6: Define the review rhythm

For each metric pair, specify:

- owner
- review cadence
- threshold or trigger
- required response if the metric stalls or drops

Rule:

If there is no action rule, the review is mostly theater.

### Step 7: Remove noise

Ask:

- Which metrics look important but do not influence decisions?
- Which ones can stay in a dashboard without being central?
- Which ones are executive visibility metrics only?

Cut aggressively.

## Metric Design Template

### Decision Area

- Decision:
- Outcome metric:
- Operating metric:
- Diagnostic metric:
- Owner:
- Review cadence:
- Trigger:
- Expected action:

## Failure Modes

- the team starts from existing dashboards instead of decisions
- lagging metrics are treated as operating controls
- too many metrics survive because removing them feels risky
- review meetings discuss numbers but assign no next action

## Done Standard

This playbook is complete when the team has a metric set that:

- maps to real decisions
- distinguishes outcomes from operating signals
- has clear owners and review rules
- removes nonessential noise
