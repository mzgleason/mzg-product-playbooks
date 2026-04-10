import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/framework", label: "Framework Index" },
  { href: "/playbooks/strategy", label: "Strategy" },
  { href: "/playbooks/prioritization", label: "Prioritization" },
  { href: "/playbooks/metrics", label: "Metrics" }
];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/">
            PM Operating System
          </Link>
          <nav aria-label="Primary">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-title">Product Management Operating System</p>
            <p className="muted">
              Practical frameworks for PMs who need sharper commercial judgment and better decision rules.
            </p>
          </div>
          <div className="footer-links">
            <Link href="/framework">Framework Index</Link>
            <Link href="/playbooks/strategy">Strategy</Link>
            <Link href="/playbooks/prioritization">Prioritization</Link>
            <Link href="/playbooks/metrics">Metrics</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
