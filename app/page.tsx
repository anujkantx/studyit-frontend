import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-16">
      <section className="grid w-full gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        <div className="flex flex-col justify-center space-y-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Smart study hub for notes, PYQs, quizzes, and premium access
          </div>

          <div className="space-y-5">
            <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Study smarter, revise faster, and stay organized.
            </h1>

            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Studyit brings your notes, practice questions, and subject materials into one clean workspace so you can focus on learning instead of hunting files.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Continue with Google
            </Link>

            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-400"
            >
              Explore dashboard
            </Link>
          </div>

          <div className="grid gap-4 pt-2 sm:grid-cols-3">
            {[
              ["Notes", "Quick access to structured learning material."],
              ["PYQs", "Practice with previous year questions."],
              ["Quizzes", "Test yourself with short focused quizzes."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur">
                <h2 className="text-sm font-semibold text-slate-950">{title}</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="absolute inset-0 -z-10 mx-auto h-80 w-80 rounded-full bg-cyan-300/40 blur-3xl" />
          <div className="w-full max-w-md rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
            <div className="space-y-4">
              <div className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Live study space
              </div>
              <h2 className="text-2xl font-semibold text-slate-950">Everything you need in one place</h2>
              <p className="text-sm leading-6 text-slate-600">
                A focused experience for students who want a clean landing page, fast login, and clear learning paths.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {[
                ["Google sign-in", "Secure access with a single tap"],
                ["Personal dashboard", "Keep your learning organized"],
                ["Premium ready", "Easy path to paid content"],
              ].map(([title, description]) => (
                <div key={title} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-950" />
                  <div>
                    <div className="text-sm font-semibold text-slate-950">{title}</div>
                    <div className="text-sm text-slate-600">{description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}