import Link from "next/link";
export default function NotFound() { return <main className="error-page"><span className="eyebrow">Page not found</span><h1>We couldn’t find that page.</h1><p>The address may have changed, or the page may not be part of this preview.</p><Link className="button" href="/">Return to School Vision</Link></main>; }
