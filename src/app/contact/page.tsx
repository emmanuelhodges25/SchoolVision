import type { Metadata } from "next";
import { PublicShell } from "../../components/public-shell";
import { PreviewForm } from "../../components/preview-form";

export const metadata: Metadata = { title: "Contact" };
export default function ContactPage() { return <PublicShell><main><section className="page-hero"><div className="container"><span className="eyebrow">Contact</span><h1>Let’s talk about your school.</h1><p>Tell us what you’d like to understand about School Vision.</p></div></section><section className="section"><div className="container"><div className="form-card"><div className="preview-banner"><span aria-hidden="true">ⓘ</span><div><strong>Preview form</strong><p>Please do not enter confidential or student information. This preview does not send or store messages.</p></div></div><PreviewForm kind="contact"/></div></div></section></main></PublicShell>; }
