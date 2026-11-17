import Link from "next/link";

export function Brand({ light = false }: { light?: boolean }) {
  return <Link className="brand" href="/" aria-label="School Vision home">
    <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M4 19V7l8-4 8 4v12M8 19v-6h8v6M3 19h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 8h.01M15 8h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></svg></span>
    <span className="brand-copy"><span className="brand-name">School Vision</span><span className="brand-subtitle">{light ? "Management platform" : "See your school clearly"}</span></span>
  </Link>;
}
