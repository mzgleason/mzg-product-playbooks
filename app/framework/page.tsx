import Link from "next/link";
import { playbooks } from "@/lib/content";

export default function FrameworkPage() {
  return (
    <main className="page-shell">
      <section className="section section-top">
        <div className="container">
          <div className="page-intro">
            <p className="eyebrow">Framework index</p>
            <h1>Scan the system and jump into the right decision tool.</h1>
            <p className="section-lead">
              These playbooks are designed for product managers who need practical tools, not abstract advice. Keep
              the scan path short: problem, use case, deliverables, then action.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container stack-grid">
          {playbooks.map((playbook) => (
            <article className="index-card" key={playbook.slug}>
              <div className="index-card-main">
                <p className="card-kicker">{playbook.label}</p>
                <h2>{playbook.title}</h2>
                <p className="index-summary">{playbook.problem}</p>
              </div>
              <div className="index-card-grid">
                <div>
                  <p className="panel-label">When to use it</p>
                  <ul className="plain-list">
                    {playbook.whenToUse.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="panel-label">What you get</p>
                  <ul className="plain-list">
                    {playbook.whatYouGet.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hero-actions">
                <Link className="button button-accent button-sm" href={`/playbooks/${playbook.slug}`}>
                  Read the {playbook.title}
                </Link>
                <Link className="button button-ghost button-sm" href={`/operators/${playbook.slug}`}>
                  Use the operator playbook
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
