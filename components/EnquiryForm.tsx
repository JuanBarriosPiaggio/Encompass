"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Sheen } from "@/components/Buttons";

const subjects = ["Loft conversion", "Extension", "Kitchen", "Bathroom", "Interior", "Staircase", "Retail", "Development", "Something else"];

export function EnquiryForm() {
  const router = useRouter();
  const [values, setValues] = useState({ name: "", email: "", phone: "", subject: subjects[0], message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (values.name.trim().length < 2) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = "Enter a valid email address.";
    if (values.phone.replace(/\D/g, "").length < 10) next.phone = "Enter a phone number.";
    if (values.message.trim().length < 8) next.message = "Tell us a little about the house.";
    setErrors(next);
    if (Object.keys(next).length) return;
    sessionStorage.setItem(
      "encompass-enquiry",
      JSON.stringify({ name: values.name.trim(), subject: values.subject }),
    );
    router.push("/enquiry-thank-you/");
  }

  return (
    <form className="fields" noValidate onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="enquiry-name">Name</label>
        <input id="enquiry-name" name="name" autoComplete="name" value={values.name} aria-invalid={Boolean(errors.name)} onChange={(event) => setValues({ ...values, name: event.target.value })} />
        {errors.name ? <p className="error">{errors.name}</p> : null}
      </div>
      <div className="field">
        <label htmlFor="enquiry-email">Email</label>
        <input id="enquiry-email" name="email" type="email" autoComplete="email" value={values.email} aria-invalid={Boolean(errors.email)} onChange={(event) => setValues({ ...values, email: event.target.value })} />
        {errors.email ? <p className="error">{errors.email}</p> : null}
      </div>
      <div className="field">
        <label htmlFor="enquiry-phone">Phone</label>
        <input id="enquiry-phone" name="phone" type="tel" autoComplete="tel" value={values.phone} aria-invalid={Boolean(errors.phone)} onChange={(event) => setValues({ ...values, phone: event.target.value })} />
        {errors.phone ? <p className="error">{errors.phone}</p> : null}
      </div>
      <div className="field">
        <label htmlFor="enquiry-subject">About</label>
        <select id="enquiry-subject" name="subject" value={values.subject} onChange={(event) => setValues({ ...values, subject: event.target.value })}>
          {subjects.map((subject) => (
            <option key={subject}>{subject}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="enquiry-message">Message</label>
        <textarea id="enquiry-message" name="message" value={values.message} aria-invalid={Boolean(errors.message)} onChange={(event) => setValues({ ...values, message: event.target.value })} />
        {errors.message ? <p className="error">{errors.message}</p> : null}
      </div>
      <button className="btn btn-gold" type="submit">
        <Sheen />
        <span className="btn-label">Send enquiry</span>
      </button>
    </form>
  );
}
