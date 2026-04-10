import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getOperatorPlaybookBySlug, operatorPlaybooks } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return operatorPlaybooks.map((playbook) => ({ slug: playbook.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const playbook = getOperatorPlaybookBySlug(slug);

  if (!playbook) {
    return {};
  }

  return {
    title: `${playbook.title} Operator`,
    description: playbook.purpose
  };
}

export default async function OperatorPlaybookPage({ params }: PageProps) {
  const { slug } = await params;
  const playbook = getOperatorPlaybookBySlug(slug);

  if (!playbook) {
    notFound();
  }

  return (
    <main className="page-shell">
      <section className="section section-top">
        <div className="container detail-grid">
          <aside className="detail-rail operator-rail">
            <p className="eyebrow">Operator mode</p>
            <h1>{playbook.title}</h1>
            <p className="section-lead">{playbook.purpose}</p>
            <div className="chip-wrap">
              <span className="chip">{playbook.timebox}</span>
              <span className="chip">{playbook.runWhen[0]}</span>
            </div>
            <div className="hero-actions">
              <Link className="button button-accent button-sm" href={`/playbooks/${playbook.slug}`}>
                Read framework mode
              </Link>
            </div>
          </aside>

          <div className="content-stack">
            <article className="prose-content">
              <p className="eyebrow">Run this when</p>
              <ul>
                {playbook.runWhen.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="prose-content split">
              <div>
                <p className="eyebrow">Who should be in the room</p>
                <ul>
                  {playbook.who.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow">Inputs required</p>
                <ul>
                  {playbook.inputs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="prose-content">
              <p className="eyebrow">Expected output</p>
              <ul>
                {playbook.outputs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="prose-content">
              <p className="eyebrow">Workflow</p>
              <div className="step-stack">
                {playbook.workflow.map((step) => (
                  <section className="step-card" key={step.title}>
                    <h3>{step.title}</h3>
                    {step.prompt ? (
                      <>
                        <p className="step-label">Prompt</p>
                        <p>{step.prompt}</p>
                      </>
                    ) : null}
                    {step.capture.length ? (
                      <>
                        <p className="step-label">Capture</p>
                        <ul>
                          {step.capture.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </>
                    ) : null}
                    {step.questions.length ? (
                      <ul>
                        {step.questions.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                    <p className="step-rule">
                      <strong>Rule:</strong> {step.rule}
                    </p>
                  </section>
                ))}
              </div>
            </article>

            <article className="prose-content split">
              <div>
                <p className="eyebrow">{playbook.templateTitle}</p>
                <ul className="worksheet-list">
                  {playbook.template.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow">Failure modes</p>
                <ul>
                  {playbook.failureModes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="eyebrow done-standard">Done standard</p>
                <ul>
                  {playbook.doneStandard.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
