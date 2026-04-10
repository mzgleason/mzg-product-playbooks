import Link from "next/link";
import { operatorPlaybooks, playbooks, siteContent } from "@/lib/content";

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="hero-shell">
        <div className="container">
          <div className="builder-hero">
            <div className="builder-hero-overlay">
              <div className="builder-hero-grid">
                <div className="builder-hero-topline">
                  <p className="eyebrow">{siteContent.hero.eyebrow}</p>
                  <p className="builder-hero-kicker">Editorial precision for PMs who are in the work.</p>
                </div>

                <div className="builder-hero-headline">
                  <h1>
                    <span className="builder-hero-headline-left">
                      <span className="builder-hero-line">Make better</span>
                    </span>
                    <span className="builder-hero-headline-right">
                      <span className="builder-hero-line">product bets.</span>
                    </span>
                  </h1>
                </div>

                <div className="builder-hero-copy">
                  <p className="builder-hero-lead">{siteContent.hero.subhead}</p>
                  <div className="hero-actions">
                    <Link className="button button-accent" href="/framework">
                      Explore the Playbooks
                    </Link>
                    <Link className="button button-ghost" href="/playbooks/strategy">
                      Start with Strategy
                    </Link>
                  </div>
                  <div className="builder-hero-footer">
                    <p className="builder-hero-inline-note">
                      Built for product managers who need better decision rules, not more vague advice.
                    </p>
                  </div>
                </div>

                <aside className="builder-hero-proof">
                  <p className="card-kicker">What changes</p>
                  <h2>Sharpen judgment. Make tradeoffs visible. Move faster with more conviction.</h2>
                  <p className="builder-hero-proof-copy">
                    This system is built to help PMs make better bets, learn faster, and improve decision quality over
                    time.
                  </p>
                  <div className="builder-hero-proof-divider" />
                  <div className="builder-hero-proof-points">
                    <p>Three core playbooks for strategy, prioritization, and metrics.</p>
                    <p>Operator versions for running live sessions with a team.</p>
                    <p>Commercially sharp frameworks that hold up under real pressure.</p>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <article className="prose-panel">
            <p className="eyebrow">Why this exists</p>
            <h2>Most PM advice sounds good and changes nothing.</h2>
            <p>{siteContent.intro[0]}</p>
            <p>{siteContent.intro[1]}</p>
          </article>
          <aside className="rail-card">
            <p className="eyebrow">Built for</p>
            <h3>PMs who are in the work</h3>
            <ul className="plain-list">
              {siteContent.audienceBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Belief system</p>
              <h2>What strong product work actually demands</h2>
            </div>
          </div>
          <div className="principles-grid">
            {siteContent.beliefs.map((belief, index) => (
              <article className="principle-card" key={belief}>
                <span className="principle-mark">0{index + 1}</span>
                <p>{belief}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Framework preview</p>
              <h2>Start with the bottleneck you have right now</h2>
              <p className="section-lead">
                Each playbook is designed to improve decision quality in live product work, then paired with an
                operator version for actually running the process.
              </p>
            </div>
            <Link className="text-link" href="/framework">
              See the full framework index
            </Link>
          </div>
          <div className="card-grid three">
            {playbooks.map((playbook) => (
              <article className="card service-card" key={playbook.slug}>
                <p className="card-kicker">{playbook.label}</p>
                <h3>{playbook.title}</h3>
                <p className="service-summary">{playbook.summary}</p>
                <ul className="signal-list">
                  {playbook.whenToUse.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="hero-actions">
                  <Link className="button button-accent button-sm" href={`/playbooks/${playbook.slug}`}>
                    Read the playbook
                  </Link>
                  <Link className="button button-ghost button-sm" href={`/operators/${playbook.slug}`}>
                    Operator mode
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <article className="prose-panel">
            <p className="eyebrow">How to use this</p>
            <h2>Use the system like an operator.</h2>
            <ol className="number-list">
              {siteContent.howToUse.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
          <article className="prose-panel">
            <p className="eyebrow">Public on purpose</p>
            <h2>The goal is usefulness, not performance.</h2>
            <p>{siteContent.publicProof[0]}</p>
            <p>{siteContent.publicProof[1]}</p>
          </article>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container">
          <div className="cta-panel home-cta-shell">
            <div className="home-cta-copy">
              <p className="eyebrow">Start here</p>
              <h2>{siteContent.closingCta.headline}</h2>
              <p className="home-cta-lead">{siteContent.closingCta.body}</p>
              <div className="hero-actions">
                <Link className="button button-accent" href="/framework">
                  Explore the Playbooks
                </Link>
              </div>
            </div>
            <div className="home-cta-stack">
              {operatorPlaybooks.map((playbook, index) => (
                <article
                  className={`home-cta-panel-card ${index === 0 ? "home-cta-panel-card-sky" : index === 1 ? "home-cta-panel-card-fire" : "home-cta-panel-card-ghost"}`}
                  key={playbook.slug}
                >
                  <h3 className="home-cta-panel-title">{playbook.title}</h3>
                  <p className="home-cta-panel-copy">{playbook.purpose}</p>
                  <span className="home-cta-panel-count">Operator mode</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
