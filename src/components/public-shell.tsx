import Link from "next/link";
import { Brand } from "./brand";

export function PublicShell({ children }: { children: React.ReactNode }) {
  return <><header className="public-header"><div className="container public-header-inner"><Brand/><nav className="public-nav" aria-label="Main navigation"><Link href="/features">Platform</Link><Link href="/onboarding">How it works</Link><Link href="/contact">Contact</Link></nav><div className="public-actions"><Link className="text-link" href="/login">Sign in</Link><Link className="button button-small" href="/register/institution">Request access <span aria-hidden="true">↗</span></Link></div></div></header>{children}<footer className="public-footer"><div className="container footer-inner"><Brand/><span>School Vision · Clearer school operations</span><Link href="/contact">Get in touch</Link></div></footer></>;
}
