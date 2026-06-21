
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/studyit-logo-transparent.png'
const HeaderPage = () => {
  return (
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
        <Link 
        href="/auth/google"
         className="rounded-full px-4 py-2 text-sm font-medium text-[#64748B] transition hover:text-[#0F172A]">
          Login
        </Link>
        <Link
          href="/dashboard"
          className="rounded-full bg-[#4F46E5] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:-translate-y-0.5 hover:bg-indigo-600"
        >
          Get Started
        </Link>
      </div>
    </div>
  </header>
  )
}

export default HeaderPage
