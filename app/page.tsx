"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/studyit-logo-transparent.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  TrendingUp,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Search,
  Calendar,
  HelpCircle,
  Rocket,
  FileText,
  StickyNote,
  Bot,
  Heart,
  Book,
  Target,
} from "lucide-react";

import { useRouter } from "next/navigation";

const TRUST_BADGES = [
  "1000+ Study Resources",
  "University Specific",
  "AI Powered Learning",
  "Semester Focused",
];

// const UNIVERSITIES = [
//   { name: "AKTU", programs: 12, subjects: 240, resources: "8.5k+" },
//   { name: "IPU", programs: 10, subjects: 210, resources: "7.2k+" },
//   { name: "MDU", programs: 9, subjects: 184, resources: "6.1k+" },
//   { name: "RTU", programs: 8, subjects: 166, resources: "5.8k+" },
//   { name: "JNTU", programs: 14, subjects: 278, resources: "9.4k+" },
//   { name: "Anna University", programs: 13, subjects: 296, resources: "10k+" },
// ];

const HOW_IT_WORKS = [
  {
    title: "Choose University",
    description: "Select your university and program.",
    icon: GraduationCap,
  },
  {
    title: "Select Program & Semester",
    description: "Access semester-specific content.",
    icon: BookOpen,
  },
  {
    title: "Start Learning",
    description: "Learn using notes, PYQs, quizzes and AI tools.",
    icon: Rocket,
  },
];

const FEATURES = [
  { title: "Notes", description: "Well-organized semester notes.", icon: StickyNote },
  { title: "PYQs", description: "Previous year exam papers.", icon: FileText },
  { title: "Quizzes", description: "Practice and self-assessment.", icon: CheckCircle2 },
  { title: "AI Tutor", description: "Ask doubts instantly.", icon: Bot },
  { title: "Study Planner", description: "Personalized study roadmap.", icon: Calendar },
  { title: "Progress Tracking", description: "Monitor your preparation.", icon: TrendingUp },
];

const TESTIMONIALS = [
  {
    name: "Aman Verma",
    university: "AKTU",
    review:
      "Studyit saved me hours every week. Everything for semester prep is already organized and easy to access.",
  },
  {
    name: "Priya Sharma",
    university: "Sharda University",
    review:
      "The PYQs + AI Tutor combo helped me revise faster before internals. It feels made for our actual syllabus.",
  },
  {
    name: "Rohit Nair",
    university: "Galgotia University",
    review:
      "Clean interface, quality notes, and quizzes in one place. It finally feels like a premium student platform.",
  },
];

const FAQS = [
  {
    question: "Which universities are supported?",
    answer: "We currently support AKTU, IPU, MDU, RTU, JNTU, Anna University and are onboarding more every month.",
  },
  {
    question: "Is Studyit free?",
    answer: "Yes. The Free plan includes limited notes, PYQs and quizzes to help you explore the platform.",
  },
  {
    question: "How does Premium work?",
    answer: "Premium unlocks advanced AI tools, deeper quizzes, analytics, and full access to semester resources.",
  },
  {
    question: "Can I access multiple semesters?",
    answer: "You can switch semesters from the dashboard. Access scope depends on your selected plan and package.",
  },
  {
    question: "How does AI Tutor work?",
    answer: "AI Tutor gives subject-specific explanations, revision help and doubt solving aligned to your selected semester.",
  },
];

const FOOTER_LINKS: Array<[string, string[]]> = [
  ["Product", ["Features", "Pricing", "AI Tutor"]],
  ["Resources", ["Universities", "Notes", "PYQs"]],
  ["Company", ["About", "Contact"]],
  ["Legal", ["Privacy Policy", "Terms"]],
];

const SECTION_IN_VIEW = { once: true, amount: 0.25 };

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={SECTION_IN_VIEW}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}


export default function Home() {
  const router = useRouter();
  const handleSignIn = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`,
        {
          credentials: "include",
        }
      );
  
      if (res.ok) {
        const user = await res.json();
  
        router.push(
          user.role === "admin"
            ? "/admin/dashboard"
            : "/dashboard"
        );
  
        return;
      }
    } catch {}
  
    router.push("/auth/google");
  };
  
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
      <header className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <Link href="/" className="text-2xl flex font-semibold tracking-tight text-[#0F172A]">
            <Image src={Logo} alt="Studyit Logo" className="h-8 w-8" />
            <div className="ml-2 font-bold text-[#483ffe]">
              Studyit
            </div>

          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#features" className="transition hover:text-[#4F46E5]">Features</a>
            <a href="#pricing" className="transition hover:text-[#4F46E5]">Pricing</a>
            <a href="#testimonials" className="transition hover:text-[#4F46E5]">Testimonials</a>
            <a href="#faqs" className="transition hover:text-[#4F46E5]">FAQs</a>
          </nav>

          <div className="flex items-center gap-3">
            <button 
            onClick={handleSignIn}
             className="rounded-full px-4 py-2 text-sm font-medium text-[#64748B] transition hover:text-[#0F172A]">
              Login
            </button>
            <button
              onClick={handleSignIn}
              className="rounded-full bg-[#4F46E5] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:-translate-y-0.5 hover:bg-indigo-600"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-28 px-6 py-12 md:py-20">
        <Section className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#000000] bg-[#F8FAFC] px-4 py-2 text-sm font-medium ">
              <Heart className="text-[#22C55E]" />
              Trusted by students across universities
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Everything Your Semester Needs.<br />  In One Place.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[#64748B]">
                Access Notes, PYQs, Quizzes and AI-powered learning tools tailored to your university, program and semester.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleSignIn}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4F46E5] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:-translate-y-0.5 hover:bg-indigo-600"
              >
                Get Started Free <ArrowRight />
              </button>
              <a
                href="#universities"
                className="inline-flex items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Browse Universities
              </a>
            </div>

            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              {TRUST_BADGES.map((badge) => (
                <div key={badge} className="flex items-center gap-2 rounded-2xl border border-[#E2E8F0] bg-zinc-50 p-3 text-sm ">
                  <CheckCircle2 className="text-[#22C55E]" /> {badge}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={SECTION_IN_VIEW}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-[20px] border border-[#d5d5d5] bg-[#F8FAFC] p-5 shadow-xl shadow-slate-900/5 md:p-6">
              <div className="mb-4 grid grid-cols-3 gap-3">
                {[
                  "AKTU",
                  "B.Tech CSE",
                  "Semester 4",
                ].map((value) => (
                  <div key={value} className="rounded-2xl border border-[#E2E8F0] bg-white px-3 py-2 text-xs font-medium text-[#64748B]">
                    {value}
                  </div>
                ))}
              </div>

              <div className="mb-4 flex items-center gap-2 rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#64748B]">
                <Search /> Search subjects, notes, PYQs...
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {["DBMS", "Operating Systems", "DAA", "Computer Networks"].map((subject) => (
                  <div key={subject} className="rounded-2xl border border-[#E2E8F0] bg-white p-4">
                    <h3 className="text-sm font-semibold">{subject}</h3>
                    <p className="mt-1 text-xs text-[#64748B]">Notes • PYQs • Quiz • AI Tutor</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-indigo-100 bg-indigo-100 p-4 text-sm text-indigo-900">
                <div className="font-semibold">Premium Plan</div>
                <div className="text-xs text-lime-700">Extra 50% OFF + AI Tutor</div>
              </div>
            </div>

            {[
              { label: "Notes", icon: Book, position: "-left-2 top-12" },
              { label: "PYQs", icon: FileText, position: "right-0 top-4" },
              { label: "AI Tutor", icon: Bot, position: "-left-3 bottom-20" },
              { label: "Quiz", icon: Target, position: "right-4 bottom-6" },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2 + idx * 0.3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className={`absolute ${item.position} hidden rounded-2xl border border-[#61a5ff] bg-white px-3 py-2 text-xs font-semibold shadow-md md:flex items-center gap-1.5`}
              >
                <item.icon size={14} /> {item.label}
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* <Section id="universities" className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Find Your University</h2>
            <p className="text-[#64748B]">Choose your university and start learning instantly.</p>
          </div>

          <div className="mx-auto flex max-w-3xl items-center gap-2 rounded-[20px] border border-[#E2E8F0] bg-white px-4 py-4 shadow-sm">
            <Search className="text-[#64748B]" />
            <input
              placeholder="Search universities..."
              className="w-full border-0 bg-transparent text-sm text-[#0F172A] outline-none placeholder:text-[#94A3B8]"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {UNIVERSITIES.map((item) => (
              <div key={item.name} className="rounded-[20px] border border-[#E2E8F0] bg-[#F8FAFC] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-[#64748B]">
                  <div className="rounded-xl bg-white p-2"><p className="font-semibold text-[#0F172A]">{item.programs}</p>Programs</div>
                  <div className="rounded-xl bg-white p-2"><p className="font-semibold text-[#0F172A]">{item.subjects}</p>Subjects</div>
                  <div className="rounded-xl bg-white p-2"><p className="font-semibold text-[#0F172A]">{item.resources}</p>Resources</div>
                </div>
              </div>
            ))}
          </div>
        </Section> */}

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
              <button
              onClick={handleSignIn} className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5">
                Get Started Free
              </button>
              <a href="#universities" className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                Explore Universities
              </a>
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
