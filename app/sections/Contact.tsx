"use client";
import React, { useState } from 'react';

// Simple contact form using Formspree (replace with your form ID)
const FORMSPREE = 'https://formspree.io/f/movqwzjn' // TODO: replace with your endpoint

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function Contact(){
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    setStatus('sending');
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(FORMSPREE, { method:'POST', body: data, headers: { Accept: 'application/json' } });
      if(res.ok){ setStatus('sent'); (e.target as HTMLFormElement).reset(); }
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  return (
  <section id="contact" className="section-padding">
      <div className="max-w-xl mx-auto glass p-8 md:p-10">
        <h2 className="heading-gradient text-3xl md:text-4xl font-semibold text-center mb-6">Contact</h2>
        <form onSubmit={onSubmit} className="grid gap-4">
          <label className="grid gap-1">
            <span className="text-sm">Name</span>
            <input name="name" required className="px-3 py-2 rounded-lg bg-white/60 dark:bg-white/10 border border-white/30 dark:border-white/10" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">Email</span>
            <input type="email" name="email" required className="px-3 py-2 rounded-lg bg-white/60 dark:bg-white/10 border border-white/30 dark:border-white/10" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">Message</span>
            <textarea name="message" rows={5} required className="px-3 py-2 rounded-lg bg-white/60 dark:bg-white/10 border border-white/30 dark:border-white/10" />
          </label>
          <button disabled={status==='sending'} className="glass px-5 py-2 font-medium">
            {status==='sending'? 'Sending...' : status==='sent'? 'Sent ✓' : 'Send'}
          </button>
          {status==='error' && <p role="alert" className="text-red-600">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}
