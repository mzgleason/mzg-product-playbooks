# Prioritization Playbook

## Core Claim

Prioritization is not the art of making everyone feel heard. It is the discipline of putting resources behind the bets that are most worth making now.

## Problem It Solves

Most prioritization breaks down because teams compare unlike things:

- strategic bets
- customer asks
- tech debt
- compliance work
- executive requests

Everything enters the same conversation, and urgency usually wins.

## When To Use It

Use this playbook when:

- the roadmap is overcrowded
- stakeholders keep adding high-priority work
- the team is busy but uncertain whether it is funding the right bets

## Operating Principle

A prioritization system should reward expected value and strategic fit, not noise, seniority, or recency.

## Framework

### Step 1: Separate work by type

Do not compare fundamentally different work without naming the category first.

Suggested categories:

- growth bet
- retention bet
- strategic platform investment
- reliability or risk reduction
- obligation or compliance

This prevents the discussion from pretending every item should win for the same reason.

### Step 2: Define the value of the bet

Estimate the upside if this works.

Questions:

- What user or business outcome improves?
- How meaningful is that improvement?
- Is the value near-term, long-term, or mostly speculative?

### Step 3: Estimate confidence honestly

Many teams confuse conviction with confidence. Keep them separate.

Questions:

- What evidence supports the bet?
- Where are we still guessing?
- What assumptions would kill the value if they are wrong?

### Step 4: Price the cost

Cost is more than engineering effort.

Questions:

- What is the implementation cost?
- What focus does it consume?
- What higher-value work gets delayed if we do this now?

### Step 5: Check strategic fit

The same item can be valuable and still wrong for this quarter.

Questions:

- Does this support the current strategy?
- Does it strengthen a key metric?
- Does it move the team toward the chosen wedge?

### Step 6: Make the tradeoff visible

Before approving an item, name what it displaces.

Prompt:

If we do this, what are we explicitly not doing?

## Realistic Example

A product team is choosing between:

- an integration requested by a large prospect
- onboarding improvements for new self-serve users
- a data migration that reduces operational risk

Without a system, the prospect request dominates because it is visible and urgent.

Using this framework, the team clarifies:

- the integration has plausible upside but weak repeatability
- onboarding improvements support the current growth strategy and benefit a larger user set
- the migration is necessary risk work and should be reserved as protected capacity rather than mixed into bet scoring

The decision becomes clearer:

- reserve fixed capacity for risk reduction
- prioritize onboarding improvements as the lead bet
- defer the integration until repeat demand or strategic importance is clearer

This is not perfect certainty. It is better tradeoff quality.

## Common Mistakes

- ranking everything in one list without separating work types
- rewarding loud requests instead of strategic value
- ignoring opportunity cost
- claiming confidence without evidence
- treating prioritization as a one-time ceremony instead of an ongoing resource decision

## Worksheet

### Bet Review

- Item:
- Work type:
- Expected value:
- Confidence level:
- Cost:
- Strategic fit:
- What it displaces:
- Decision:

## Quick Checklist

- Is the work type clear?
- Is the value meaningful, not just possible?
- Is confidence supported by evidence?
- Is the strategic fit explicit?
- Have we named what this displaces?

## Closing

Good prioritization does not remove hard calls. It makes them legible and harder to fake.

## Attached Operator Playbook

Use the operator version when you need to run an actual prioritization review and force explicit tradeoffs.

See: `content/operator-playbooks/prioritization-operator.md`
