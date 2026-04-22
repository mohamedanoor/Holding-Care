"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { clsx } from "clsx";

const schema = z.object({
  name:    z.string().min(2, "Full name is required."),
  email:   z.string().email("Please enter a valid email address."),
  phone:   z.string().optional(),
  message: z.string().min(20, "Please tell us a little about yourself."),
});

type FormData = z.infer<typeof schema>;

const inputClass = clsx(
  "w-full bg-white border border-[var(--border)] rounded-lg",
  "px-4 py-3 text-base text-[var(--text)]",
  "placeholder:text-[var(--text-muted)]",
  "focus:outline-none focus:border-[var(--green)]",
  "transition-colors duration-200"
);

export default function ApplyForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const { register, handleSubmit, reset, formState: { errors } } =
    useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/apply", {
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
      {/* Full name */}
      <div>
        <label className="block text-sm font-medium text-[var(--text)] mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input {...register("name")} type="text" placeholder="Your full name" autoComplete="name" className={inputClass} />
        {errors.name && <p className="text-xs text-red-500 mt-1.5">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-[var(--text)] mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input {...register("email")} type="email" placeholder="you@example.com" autoComplete="email" className={inputClass} />
        {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-[var(--text)] mb-1.5">
          Phone Number <span className="text-[var(--text-muted)] font-normal">(optional)</span>
        </label>
        <input {...register("phone")} type="tel" placeholder="(207) 555-0100" autoComplete="tel" className={inputClass} />
      </div>

      {/* Cover letter */}
      <div>
        <label className="block text-sm font-medium text-[var(--text)] mb-1.5">
          Tell Us About Yourself <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("message")}
          rows={6}
          placeholder="Share a bit about your experience, why you want to join the Holding Care team, and anything else you'd like us to know..."
          className={clsx(inputClass, "resize-none")}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1.5">{errors.message.message}</p>}
      </div>

      <div className="bg-[var(--blue-light)] border border-blue-200 rounded-lg p-4 text-sm text-[var(--blue-dark)]">
        After submitting, please email your resume to{" "}
        <a href="mailto:holdhandsinc@gmail.com" className="font-semibold hover:underline">
          holdhandsinc@gmail.com
        </a>
        {" "}with your name in the subject line.
      </div>

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="w-full bg-[var(--green)] text-white text-base font-semibold py-3.5 rounded-lg hover:bg-[var(--green-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Submitting…" : "Submit Application"}
      </button>

      {status === "success" && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <p className="text-[var(--green-dark)] font-semibold">Application received!</p>
          <p className="text-sm text-[var(--green-dark)] mt-1">
            Don&apos;t forget to email your resume to holdhandsinc@gmail.com. We&apos;ll be in touch soon.
          </p>
        </div>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm text-center">
          Something went wrong. Please email us directly at holdhandsinc@gmail.com.
        </p>
      )}
    </form>
  );
}
