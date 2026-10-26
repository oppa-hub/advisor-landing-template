"use client";

import { useState, type FormEvent } from "react";

export function InquiryLinkForm({ email }: { email: string }) {
  const [opened, setOpened] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${String(data.get("replyEmail") ?? "")}\n\n${String(data.get("message") ?? "")}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }
  return <form className="inquiry-form" onSubmit={handleSubmit}>
    <label htmlFor="inquiry-name">Your name</label><input id="inquiry-name" name="name" autoComplete="name" required />
    <label htmlFor="inquiry-email">Your email</label><input id="inquiry-email" name="replyEmail" type="email" autoComplete="email" required />
    <label htmlFor="inquiry-message">How can I help?</label><textarea id="inquiry-message" name="message" rows={4} required />
    <button className="button button-solid" type="submit">Prepare email inquiry</button>
    <p className="inquiry-note" aria-live="polite">{opened ? "Your email app should open with this message. The website does not store your details." : "This form prepares an email on your device. It does not send or store your information."}</p>
  </form>;
}
