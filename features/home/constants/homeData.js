import { GraduationCap, BookOpen, Rocket, StickyNote, FileText, CheckCircle2, Bot, Calendar, TrendingUp } from "lucide-react";

const TRUST_BADGES = [
  "1000+ Study Resources",
  "University Specific",
  "AI Powered Learning",
  "Semester Focused",
];

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
  
export { TRUST_BADGES, HOW_IT_WORKS, FEATURES, TESTIMONIALS, FAQS };

