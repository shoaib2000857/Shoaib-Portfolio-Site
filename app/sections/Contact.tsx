"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ActionButton } from "../components/ActionButton";
import { SectionHeading } from "../components/SectionHeading";
import { contactLinks, profile } from "../data/portfolio";

const FORMSPREE = "https://formspree.io/f/movqwzjn";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-shell pb-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Transmission"
          title="Let’s Build Something That Feels Alive"
          description="If you want to collaborate on a product, internship, experiment, or interface that needs stronger visual energy, send a message."
        />

        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="panel-shell p-7 md:p-8"
          >
            <p className="eyebrow">Open Channel</p>
            <h3 className="mt-4 font-display text-3xl uppercase tracking-[0.14em] text-white">
              {profile.availability}
            </h3>
            <p className="mt-5 text-sm leading-7 text-[color:var(--text-secondary)]">
              Best reached by email, but you can also connect through GitHub, LinkedIn, or YouTube.
              This portfolio was rebuilt as a sci-fi interface system and is meant to reflect the
              kind of visual ambition I want to bring into future products.
            </p>

            <div className="mt-8 grid gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="sub-panel transition hover:border-[rgba(255,77,184,0.28)]"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--pink-soft)]">
                    {link.label}
                  </p>
                  <p className="mt-3 break-all text-sm leading-7 text-white/80">{link.value}</p>
                </a>
              ))}
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="panel-shell p-7 md:p-8"
          >
            <form onSubmit={onSubmit} className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-xs uppercase tracking-[0.28em] text-[color:var(--pink-soft)]">
                  Name
                </span>
                <input name="name" required className="field-shell" />
              </label>
              <label className="grid gap-2">
                <span className="text-xs uppercase tracking-[0.28em] text-[color:var(--pink-soft)]">
                  Email
                </span>
                <input type="email" name="email" required className="field-shell" />
              </label>
              <label className="grid gap-2">
                <span className="text-xs uppercase tracking-[0.28em] text-[color:var(--pink-soft)]">
                  Message
                </span>
                <textarea name="message" rows={6} required className="field-shell resize-none" />
              </label>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <ActionButton disabled={status === "sending"} type="submit" variant="glow">
                  {status === "sending"
                    ? "Sending..."
                    : status === "sent"
                      ? "Sent"
                      : "Send Message"}
                </ActionButton>
                <p className="text-sm text-[color:var(--text-secondary)]">
                  Direct line: {profile.email}
                </p>
              </div>
              {status === "error" && (
                <p role="alert" className="text-sm text-[#ff8dcf]">
                  Transmission failed. Please try again.
                </p>
              )}
              {status === "sent" && (
                <p className="text-sm text-[#ffc9eb]">Message delivered successfully.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
