"use client";
import HeaderPage from "@/features/home/components/HeaderPage";
import HeroSection from "@/features/home/components/HeroSection";
import Link from "next/link";

import { Section } from "@/features/home/constants/Section";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronDown,
  HelpCircle,
} from "lucide-react";

import { HOW_IT_WORKS,FEATURES, TESTIMONIALS, FAQS } from "@/features/home/constants/homeData";


const FOOTER_LINKS: Array<[string, string[]]> = [
  ["Product", ["Features", "Pricing", "AI Tutor"]],
  ["Resources", ["Universities", "Notes", "PYQs"]],
  ["Company", ["About", "Contact"]],
  ["Legal", ["Privacy Policy", "Terms"]],
];


export default function Home() {
  
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-white text-[#0F172A]">
      <HeaderPage />

      <div className="mx-auto max-w-7xl space-y-28 px-6 py-12 md:py-20">
        <HeroSection />

        <Section className="space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Start Learning In 3 Simple Steps</h2>
          </div>

          <div className="relative grid gap-4 md:grid-cols-3">
            <div className="absolute top-1/2 hidden h-px w-full -translate-y-1/2 bg-linear-to-r from-transparent via-indigo-200 to-transparent md:block" />
            {HOW_IT_WORKS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="relative rounded-[20px] border border-[#E2E8F0] bg-white p-6 shadow-sm">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-[#4F46E5]">
                    <Icon size={24} />
                  </div>
                  <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-[#94A3B8]">STEP {index + 1}</p>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#64748B]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Section>

        <Section id="features" className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Everything You Need To Ace Your Semester</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-[20px] border border-white/60 bg-white/70 p-6 shadow-lg shadow-slate-900/5 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-[#4F46E5]">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-[#64748B]">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </Section>

        <Section className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Built For Serious Students</h2>
          </div>

          <div className="grid gap-6 rounded-[20px] border border-[#E2E8F0] bg-[#F8FAFC] p-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-[18px] border border-[#E2E8F0] bg-white p-5 shadow-sm">
              <div className="mb-4 grid grid-cols-2 gap-3">
                {["Semester-wise subjects", "Smart search", "Subscription management", "AI learning assistant"].map((label) => (
                  <div key={label} className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 text-sm font-medium text-[#334155]">
                    {label}
                  </div>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {["Notes access", "PYQ access", "Progress tracking"].map((label) => (
                  <div key={label} className="rounded-xl bg-indigo-50 p-3 text-sm text-indigo-700">
                    {label}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {["Semester-wise subjects", "Smart search", "Subscription management", "AI assistant", "Notes/PYQ access", "Progress tracking"].map((callout) => (
                <div key={callout} className="rounded-2xl border border-[#E2E8F0] bg-white p-3 text-sm text-[#64748B] shadow-sm">
                  <span className="font-semibold text-[#0F172A]">•</span> {callout}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Why Students Love Studyit</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Save Time", "No more searching through Telegram groups."],
              ["Score Better", "Focused semester preparation."],
              ["Everything In One Place", "Single platform for complete preparation."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[20px] border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-sm">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-[#64748B]">{text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="pricing" className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Simple Pricing</h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {[
              { tier: "Free", price: "₹0", items: ["Limited Notes", "Limited PYQs", "Starter Quizzes"] },
              { tier: "Basic", price: "₹199/mo", items: ["Full Semester Notes", "PYQs", "Subject Resources"] },
              {
                tier: "Premium",
                price: "₹399/mo",
                items: ["Everything in Basic", "AI tools", "Advanced quizzes + analytics"],
                highlight: true,
              },
            ].map((plan) => (
              <div
                key={plan.tier}
                className={`rounded-[20px] border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                  plan.highlight
                    ? "border-indigo-200 bg-indigo-50/70 shadow-indigo-300/20"
                    : "border-[#E2E8F0] bg-white"
                }`}
              >
                <h3 className="text-xl font-semibold">{plan.tier}</h3>
                <p className="mt-2 text-3xl font-semibold">{plan.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-[#64748B]">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-[#22C55E]" size={16} /> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-[#4F46E5] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-600">
              View Full Pricing
            </a>
          </div>
        </Section>

        <Section id="testimonials" className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Testimonials</h2>
          </div>

          <div className="mx-auto max-w-3xl rounded-[20px] border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <motion.div
              key={TESTIMONIALS[activeTestimonial].name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
                  {TESTIMONIALS[activeTestimonial].name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold">{TESTIMONIALS[activeTestimonial].name}</p>
                  <p className="text-sm text-[#64748B]">{TESTIMONIALS[activeTestimonial].university}</p>
                </div>
              </div>
              <p className="text-lg leading-8 text-[#334155]">“{TESTIMONIALS[activeTestimonial].review}”</p>
            </motion.div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {TESTIMONIALS.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2.5 w-6 rounded-full transition ${
                    index === activeTestimonial ? "bg-[#4F46E5]" : "bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Section>

        <Section id="faqs" className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">FAQ</h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-3">
            {FAQS.map((faq, index) => (
              <div key={faq.question} className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm">
                <button
                  onClick={() => setOpenFaq((prev) => (prev === index ? -1 : index))}
                  className="flex w-full items-center justify-between gap-3 text-left"
                >
                  <span className="flex items-center gap-2 text-sm font-semibold sm:text-base">
                    <HelpCircle className="text-[#4F46E5]" size={18} />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`shrink-0 text-[#64748B] transition ${openFaq === index ? "rotate-180" : ""}`}
                    size={18}
                  />
                </button>
                {openFaq === index && <p className="mt-3 text-sm leading-7 text-[#64748B]">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <div className="rounded-3xl bg-linear-to-r from-slate-950 via-indigo-900 to-slate-900 px-6 py-14 text-center text-white shadow-2xl shadow-indigo-900/30 md:px-10">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Ready To Ace Your Semester?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-indigo-100 md:text-base">
              Everything you need to learn, revise and score better.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/dashboard"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                Get Started Free
              </Link>
              <Link
                href="#universities"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Explore Universities
              </Link>
            </div>
          </div>
        </Section>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 text-center text-sm text-[#64748B]">
        Note: Some features may be in development and subject availability may vary. We’re continuously adding more universities, subjects and features based on student feedback. Stay tuned for updates! 
      </div>

      <footer className="border-t border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 text-sm text-[#64748B] md:grid-cols-5">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-[#0F172A]">Studyit.in</h3>
            <p className="mt-2">University-specific learning platform for semester prep.</p>
          </div>

          {FOOTER_LINKS.map(([title, items]) => (
            <div key={title}>
              <h4 className="font-semibold text-[#0F172A]">{title}</h4>
              <ul className="mt-3 space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition hover:text-[#4F46E5]">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[#E2E8F0] px-6 py-5 text-center text-xs text-[#64748B]">© 2026 Studyit.in. All rights reserved.</div>
      </footer>
    </main>
  );
}
