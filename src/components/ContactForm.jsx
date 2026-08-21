"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | success
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const onSubmit = (event) => {
    event.preventDefault();
    // No backend yet — acknowledge locally so the flow is complete and testable.
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className={styles.success} role="status">
        <p className="eyebrow">Message sent</p>
        <h3 className={styles.successTitle}>Thanks, {form.name || "there"}.</h3>
        <p className="text-muted">
          We&apos;ve received your message and will reply to{" "}
          <span className={styles.strong}>{form.email || "your inbox"}</span> shortly.
        </p>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => {
            setForm({ name: "", email: "", message: "" });
            setStatus("idle");
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          className={styles.input}
          type="text"
          value={form.name}
          onChange={update("name")}
          placeholder="Your name"
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className={styles.input}
          type="email"
          value={form.email}
          onChange={update("email")}
          placeholder="you@company.com"
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          Project details
        </label>
        <textarea
          id="message"
          className={`${styles.input} ${styles.textarea}`}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us what you're building…"
          rows={5}
          required
        />
      </div>

      <button type="submit" className="btn btn--primary">
        Send message
      </button>
    </form>
  );
}
