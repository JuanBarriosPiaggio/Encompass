"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  extras,
  loftTypes,
  propertyTypes,
  quoteRange,
  type LoftTypeId,
  type PlanningChoice,
  type PropertyId,
} from "@/lib/estimator";
import { formatGBP, site } from "@/lib/site";
import { Photo } from "@/components/Photo";
import { Sheen } from "@/components/Buttons";

function useCount(value: number | null) {
  const [shown, setShown] = useState(value ?? 0);
  const from = useRef(value ?? 0);

  useEffect(() => {
    if (value === null) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      from.current = value;
      setShown(value);
      return;
    }
    const start = from.current;
    const began = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - began) / 680);
      const eased = 1 - (1 - t) ** 3;
      const next = Math.round(start + (value - start) * eased);
      setShown(next);
      if (t < 1) frame = requestAnimationFrame(tick);
      else from.current = value;
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return shown;
}

const postcodePattern = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i;

export function Estimator() {
  const baseId = useId();
  const [step, setStep] = useState(1);
  const [typeId, setTypeId] = useState<LoftTypeId | null>(null);
  const [propertyId, setPropertyId] = useState<PropertyId | null>(null);
  const [ensuite, setEnsuite] = useState(false);
  const [planning, setPlanning] = useState<PlanningChoice>("none");
  const [details, setDetails] = useState({ postcode: "", name: "", email: "", phone: "" });
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const headingRef = useRef<HTMLHeadingElement>(null);

  const type = loftTypes.find((item) => item.id === typeId) ?? null;
  const property = propertyTypes.find((item) => item.id === propertyId) ?? null;
  const range = quoteRange({ type, property: propertyId, ensuite, planning });
  const minShown = useCount(range?.min ?? null);
  const maxShown = useCount(range?.max ?? null);

  useEffect(() => {
    if (step === 1) return;
    headingRef.current?.focus();
  }, [step]);

  function updateFile(file: File | undefined) {
    if (!file) {
      setPhotoName(null);
      setPhotoUrl(null);
      return;
    }
    if (!file.type.startsWith("image/")) {
      setErrors((current) => ({ ...current, photo: "Choose an image file. It is only previewed on this page." }));
      return;
    }
    if (file.size > 8_000_000) {
      setErrors((current) => ({ ...current, photo: "Choose a photo under 8MB. It stays on this device." }));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setPhotoUrl(typeof reader.result === "string" ? reader.result : null);
      setPhotoName(file.name);
      setErrors((current) => ({ ...current, photo: "" }));
    };
    reader.readAsDataURL(file);
  }

  function validateDetails() {
    const next: Record<string, string> = {};
    if (!postcodePattern.test(details.postcode.trim())) next.postcode = "Enter a UK postcode, for example SW18 4EL.";
    if (details.name.trim().length < 2) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email.trim())) next.email = "Enter a valid email address.";
    const digits = details.phone.replace(/\D/g, "");
    if (digits.length < 10) next.phone = "Enter a phone number we can call.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function continueStep() {
    if (step === 1 && !typeId) return;
    if (step === 2 && !propertyId) return;
    if (step === 4) {
      if (!validateDetails()) return;
      setStep(5);
      return;
    }
    setStep((current) => Math.min(5, current + 1));
  }

  const progress = step >= 5 ? 100 : (step / 4) * 100;
  const stepLabel = ["Loft type", "Property", "Extras", "Your details", "Summary"][step - 1];

  return (
    <div className="estimator">
      <div className="est-top">
        <p className="label" id={`${baseId}-label`}>
          Instant loft estimate
        </p>
        <p className="label" style={{ color: "var(--muted)" }}>
          0{Math.min(step, 4)} / 04
        </p>
      </div>
      <div
        className="est-progress"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={4}
        aria-valuenow={Math.min(step, 4)}
        aria-valuetext={stepLabel}
      >
        <span style={{ width: `${progress}%` }} />
      </div>

      <p className="est-price" aria-hidden="true">
        {range ? (
          <>
            <span>{formatGBP(minShown)}</span>
            <span aria-hidden="true">–</span>
            <span>{formatGBP(maxShown)}</span>
          </>
        ) : (
          <span>Select a loft</span>
        )}
      </p>
      <p className="visually-hidden" aria-live="polite">
        {range && type
          ? `Guide price ${formatGBP(range.min)} to ${formatGBP(range.max)}. ${type.time}.`
          : "Select a loft type to see a guide price."}
      </p>
      {range && type ? <p className="est-time">{type.time}</p> : null}
      {property?.note ? <p className="est-note">{property.note}</p> : null}
      {planning === "unsure" ? <p className="est-note">We&apos;ll check permitted development for you.</p> : null}
      <p className="est-note">Guide price. A survey is required for a fixed quote.</p>

      <h3 ref={headingRef} tabIndex={-1} className="visually-hidden">
        {stepLabel}
      </h3>

      {step === 1 ? (
        <div className="est-grid" role="listbox" aria-labelledby={`${baseId}-label`}>
          {loftTypes.map((item) => (
            <button
              key={item.id}
              type="button"
              className={typeId === item.id ? "tile is-on" : "tile"}
              aria-pressed={typeId === item.id}
              onClick={() => setTypeId(item.id)}
            >
              <span className="tile-media frame">
                <Photo photo={item.image} sizes="180px" />
              </span>
              <span className="tile-copy">
                <strong>{item.name}</strong>
                <span>
                  {formatGBP(item.min)}–{formatGBP(item.max)} · {item.time}
                </span>
              </span>
            </button>
          ))}
        </div>
      ) : null}

      {step === 2 ? (
        <div className="choice-list" role="radiogroup" aria-label="Property type">
          {propertyTypes.map((item) => (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={propertyId === item.id}
              className={propertyId === item.id ? "choice is-on" : "choice"}
              onClick={() => setPropertyId(item.id)}
            >
              <span>{item.label}</span>
              <small>{item.factor === 1 ? "Base price" : `+${Math.round((item.factor - 1) * 100)}%`}</small>
            </button>
          ))}
        </div>
      ) : null}

      {step === 3 ? (
        <div className="choice-list">
          <button type="button" className={ensuite ? "choice is-on" : "choice"} aria-pressed={ensuite} onClick={() => setEnsuite((value) => !value)}>
            <span>Add an en-suite</span>
            <small>
              +{formatGBP(extras.ensuite.min)}–{formatGBP(extras.ensuite.max)}
            </small>
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={planning === "needed"}
            className={planning === "needed" ? "choice is-on" : "choice"}
            onClick={() => setPlanning(planning === "needed" ? "none" : "needed")}
          >
            <span>Planning needed</span>
            <small>
              +{formatGBP(extras.planning.min)}–{formatGBP(extras.planning.max)}
            </small>
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={planning === "unsure"}
            className={planning === "unsure" ? "choice is-on" : "choice"}
            onClick={() => setPlanning(planning === "unsure" ? "none" : "unsure")}
          >
            <span>Not sure if I need planning</span>
            <small>No extra on the guide</small>
          </button>
        </div>
      ) : null}

      {step === 4 ? (
        <form
          id={`${baseId}-form`}
          className="fields"
          noValidate
          onSubmit={(event) => {
            event.preventDefault();
            continueStep();
          }}
        >
          <div className="field">
            <label htmlFor={`${baseId}-postcode`}>Postcode</label>
            <input
              id={`${baseId}-postcode`}
              name="postcode"
              autoComplete="postal-code"
              value={details.postcode}
              aria-invalid={Boolean(errors.postcode)}
              aria-describedby={errors.postcode ? `${baseId}-postcode-error` : undefined}
              onChange={(event) => setDetails({ ...details, postcode: event.target.value })}
            />
            {errors.postcode ? (
              <p className="error" id={`${baseId}-postcode-error`}>
                {errors.postcode}
              </p>
            ) : null}
          </div>
          <div className="field">
            <label htmlFor={`${baseId}-name`}>Name</label>
            <input
              id={`${baseId}-name`}
              name="name"
              autoComplete="name"
              value={details.name}
              aria-invalid={Boolean(errors.name)}
              onChange={(event) => setDetails({ ...details, name: event.target.value })}
            />
            {errors.name ? <p className="error">{errors.name}</p> : null}
          </div>
          <div className="field">
            <label htmlFor={`${baseId}-email`}>Email</label>
            <input
              id={`${baseId}-email`}
              name="email"
              type="email"
              autoComplete="email"
              value={details.email}
              aria-invalid={Boolean(errors.email)}
              onChange={(event) => setDetails({ ...details, email: event.target.value })}
            />
            {errors.email ? <p className="error">{errors.email}</p> : null}
          </div>
          <div className="field">
            <label htmlFor={`${baseId}-phone`}>Phone</label>
            <input
              id={`${baseId}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              value={details.phone}
              aria-invalid={Boolean(errors.phone)}
              onChange={(event) => setDetails({ ...details, phone: event.target.value })}
            />
            {errors.phone ? <p className="error">{errors.phone}</p> : null}
          </div>
          <div className="field">
            <label htmlFor={`${baseId}-photo`}>Photo of the loft or house, optional</label>
            <input
              id={`${baseId}-photo`}
              name="photo"
              type="file"
              accept="image/*"
              onChange={(event) => updateFile(event.target.files?.[0])}
            />
            <p className="est-note">Preview only. The photo stays on this device and is not uploaded.</p>
            {errors.photo ? <p className="error">{errors.photo}</p> : null}
            {photoUrl ? (
              <div className="preview">
                {/* Local preview. The file never leaves the browser. */}
                <img src={photoUrl} alt="Preview of the photo you chose. It has not been uploaded." />
                <span>{photoName}</span>
              </div>
            ) : null}
          </div>
        </form>
      ) : null}

      {step === 5 && range && type ? (
        <div className="thanks">
          <h3>Thank you{details.name.trim() ? `, ${details.name.trim().split(" ")[0]}` : ""}.</h3>
          <p>A director will call you within 1 working day to arrange a free survey.</p>
          <dl className="summary-list">
            <div>
              <dt>Estimate</dt>
              <dd>
                {formatGBP(range.min)}–{formatGBP(range.max)}
              </dd>
            </div>
            <div>
              <dt>Build time</dt>
              <dd>{range.time}</dd>
            </div>
            <div>
              <dt>Loft</dt>
              <dd>{type.name}</dd>
            </div>
            <div>
              <dt>Property</dt>
              <dd>{property?.label}</dd>
            </div>
            <div>
              <dt>En-suite</dt>
              <dd>{ensuite ? "Yes" : "No"}</dd>
            </div>
            <div>
              <dt>Planning</dt>
              <dd>{planning === "needed" ? "Needed" : planning === "unsure" ? "We'll check permitted development" : "Not added"}</dd>
            </div>
            <div>
              <dt>Postcode</dt>
              <dd>{details.postcode.trim().toUpperCase()}</dd>
            </div>
          </dl>
          <p className="est-note">This is a guide price. A survey is required before we can give a fixed quote.</p>
          <p className="est-note">Shown on this page only. Nothing is sent from this demo. Call {site.phoneDisplay} or email {site.email}.</p>
          {photoUrl ? (
            <div className="preview">
              <img src={photoUrl} alt="The photo you attached, still only on this device." />
              <span>{photoName}</span>
            </div>
          ) : null}
        </div>
      ) : null}

      {step < 5 ? (
        <div className="est-actions">
          <button className="btn btn-ghost" type="button" onClick={() => setStep((current) => Math.max(1, current - 1))} disabled={step === 1}>
            Back
          </button>
          <button
            className="btn btn-gold"
            type={step === 4 ? "submit" : "button"}
            form={step === 4 ? `${baseId}-form` : undefined}
            onClick={step === 4 ? undefined : continueStep}
            disabled={(step === 1 && !typeId) || (step === 2 && !propertyId)}
          >
            <Sheen />
            <span className="btn-label">{step === 4 ? "See my estimate" : "Continue"}</span>
          </button>
        </div>
      ) : (
        <div className="est-actions">
          <button className="btn btn-ghost" type="button" onClick={() => setStep(1)}>
            Adjust the estimate
          </button>
          <a className="btn btn-gold" href={`tel:${site.phoneTel}`}>
            <Sheen />
            <span className="btn-label">Call {site.phoneDisplay}</span>
          </a>
        </div>
      )}
    </div>
  );
}
