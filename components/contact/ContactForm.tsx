"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { clsx } from "clsx";

const schema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName:  z.string().min(1, "Last name is required."),
  email:     z.string().email("Please enter a valid email address."),
  phone:     z.string().optional(),
  message:   z.string().min(10, "Please write at least a sentence so we can help you."),
});

type FormData = z.infer<typeof schema>;

const inputClass = clsx(
  "w-full bg-[var(--bg-surface)] border border-[var(--border)] rounded-lg",
  "px-4 py-3 text-base text-[var(--text)]",
  "placeholder:text-[var(--text-muted)]",
  "focus:outline-none focus:border-[var(--green)]",
  "transition-colors duration-200"
);

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const { register, handleSubmit, reset, formState: { errors } } =
    useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) { setStatus("success"); reset(); }
      else         { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <h2 className="text-xl font-semibold text-[var(--text)] mb-6">
        Send Us a Message
      </h2>

      {/* Name row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[var(--text)] mb-1.5">
            First Name <span className="text-red-500">*</span>
          </label>
          <input {...register("firstName")} type="text" placeholder="Jane" autoComplete="given-name" className={inputClass} />
          {errors.firstName && <p className="text-xs text-red-500 mt-1.5">{errors.firstName.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--text)] mb-1.5">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input {...register("lastName")} type="text" placeholder="Doe" autoComplete="family-name" className={inputClass} />
          {errors.lastName && <p className="text-xs text-red-500 mt-1.5">{errors.lastName.message}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-[var(--text)] mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input {...register("email")} type="email" placeholder="jane@example.com" autoComplete="email" className={inputClass} />
        {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-[var(--text)] mb-1.5">
          Phone Number <span className="text-[var(--text-muted)] font-normal">(optional)</span>
        </label>
        <input {...register("phone")} type="tel" placeholder="(207) 555-0100" autoComplete="tel" className={inputClass} />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-[var(--text)] mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("message")}
          rows={6}
          placeholder="Tell us how we can help you or your loved one..."
          className={clsx(inputClass, "resize-none")}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1.5">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="w-full bg-[var(--green)] text-white text-base font-semibold py-3.5 rounded-lg hover:bg-[var(--green-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>

      {status === "success" && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <p className="text-[var(--green-dark)] font-semibold">Message sent!</p>
          <p className="text-sm text-[var(--green-dark)] mt-1">We&apos;ll be in touch with you shortly.</p>
        </div>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm text-center">
          Something went wrong. Please call us at (207) 773-1400.
        </p>
      )}
    </form>
  );
}
