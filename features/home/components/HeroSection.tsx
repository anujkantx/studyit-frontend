
import Link from "next/link"
import { Section, SECTION_IN_VIEW } from "../constants/Section"
import { motion } from "framer-motion"

import { ArrowRight, Bot, Book, CheckCircle2, FileText, Heart, Search, Target } from "lucide-react"

import {TRUST_BADGES} from "@/features/home/constants/homeData"
const HeroSection = () => {
  return (
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
              <Link
                href="/dashboard"  
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4F46E5] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:-translate-y-0.5 hover:bg-indigo-600"
              >
                Get Started Free <ArrowRight />
              </Link>
              <Link
                href="#universities"
                className="inline-flex items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Browse Universities
              </Link>
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
  )
}

export default HeroSection
