"use client";

import { FormEvent, useState } from "react";

export function PreviewForm({ kind }: { kind: "login" | "institution" | "contact" }) {
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Preview only: this form is not connected to a service, and no information was sent or saved.");
  }
  return <form className="preview-form" onSubmit={submit}>
    {kind === "institution" && <label>School or institution name<input required name="institution" autoComplete="organization" placeholder="Your institution"/></label>}
    {kind !== "contact" && <label>Email address<input required name="email" type="email" autoComplete="email" placeholder="you@school.org"/></label>}
    {kind === "contact" && <><label>Your name<input required name="name" autoComplete="name" placeholder="Your name"/></label><label>Email address<input required name="email" type="email" autoComplete="email" placeholder="you@example.com"/></label><label>How can we help?<textarea required name="message" rows={4} placeholder="Tell us what you would like to know"/></label></>}
    {kind === "login" && <label>Password<input required name="password" type="password" autoComplete="current-password" placeholder="Enter your password"/></label>}
    {kind === "institution" && <><label>Work email<input required name="email" type="email" autoComplete="email" placeholder="you@school.org"/></label><label>What are you looking for?<select name="interest" defaultValue=""><option value="" disabled>Select an option</option><option>School management platform</option><option>Product information</option><option>Partnership</option></select></label></>}
    <button className="button form-submit" type="submit">{kind === "login" ? "Continue" : kind === "institution" ? "Request a conversation" : "Prepare message"}<span aria-hidden="true">→</span></button>
    {message && <p className="form-message" role="status">{message}</p>}
  </form>;
}
