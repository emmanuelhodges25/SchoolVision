import type { Metadata } from "next";
import { PublicShell } from "../../../components/public-shell";
import { PreviewForm } from "../../../components/preview-form";

export const metadata: Metadata = { title: "Institution access" };
export default function InstitutionRequestPage() { return <PublicShell><main><section className="page-hero"><div className="container"><span className="eyebrow">Institution access</span><h1>Start a conversation about your school.</h1><p>Share basic contact information so the platform team can discuss a possible onboarding path.</p></div></section><section className="section"><div className="container"><div className="form-card"><div className="preview-banner"><span aria-hidden="true">ⓘ</span><div><strong>Preview only — nothing will be submitted</strong><p>Do not enter real school, student, financial or other confidential information here.</p></div></div><PreviewForm kind="institution"/></div></div></section></main></PublicShell>; }
