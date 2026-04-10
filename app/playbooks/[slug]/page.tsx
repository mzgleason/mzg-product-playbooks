import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPlaybookBySlug, playbooks } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return playbooks.map((playbook) => ({ slug: playbook.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const playbook = getPlaybookBySlug(slug);

  if (!playbook) {
    return {};
  }

  return {
    title: playbook.title,
    description: playbook.summary
  };
}

export default async function PlaybookPage({ params }: PageProps) {
  const { slug } = await params;
  const playbook = getPlaybookBySlug(slug);

  if (!playbook) {
    notFound();
  }

  return (
    <main className="page-shell">
      <section className="section section-top">
        <div className="container detail-grid">
          <aside className="detail-rail">
            <p className="eyebrow">Framework</p>
            <h1>{playbook.title}</h1>
            <p className="section-lead">{playbook.summary}</p>
            <div className="hero-actions">
              <Link className="button button-accent button-sm" href={`/operators/${playbook.slug}`}>
                Open operator mode
              </Link>
              <Link className="button button-ghost button-sm" href="/framework">
                Back to index
              </Link>
            </div>
          </aside>

          <div className="content-stack">
            <article className="prose-content">
              <p className="eyebrow">Core claim</p>
              <p>{playbook.claim}</p>
            </article>

            <article className="prose-content">
              <p className="eyebrow">Problem it solves</p>
              <p>{playbook.problem}</p>
              <ul>
                {playbook.problemBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="prose-content">
              <p className="eyebrow">When to use it</p>
              <ul>
                {playbook.whenToUse.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="prose-content">
              <p className="eyebrow">Operating principle</p>
              <p>{playbook.operatingPrinciple}</p>
            </article>

            <article className="prose-content">
              <p className="eyebrow">Framework</p>
              <div className="step-stack">
                {playbook.framework.map((step) => (
                  <section className="step-card" key={step.title}>
                    <h3>{step.title}</h3>
                    {"copy" in step && step.copy ? <p>{step.copy}</p> : null}
                    <ul>
                      {step.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </article>

            <article className="prose-content">
              <p className="eyebrow">Realistic example</p>
              <p>{playbook.exampleIntro}</p>
              <ul>
                {playbook.exampleBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>{playbook.exampleClosing}</p>
            </article>

            <article className="prose-content">
              <p className="eyebrow">Common mistakes</p>
              <ul>
                {playbook.commonMistakes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="prose-content">
              <p className="eyebrow">{playbook.worksheetTitle}</p>
              <ul className="worksheet-list">
                {playbook.worksheet.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="prose-content">
              <p className="eyebrow">Quick checklist</p>
              <ul>
                {playbook.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>{playbook.closing}</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
