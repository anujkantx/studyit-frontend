export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
          Contact
        </div>

        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Reach the Studyit team.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          Questions about access, study tools, or account support? Use the
          channels below and we&apos;ll get back to you.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-zinc-400">Email</p>
            <p className="mt-2 text-lg font-medium">support@studyit.app</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-zinc-400">Response time</p>
            <p className="mt-2 text-lg font-medium">Within 24 hours</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-zinc-400">Coverage</p>
            <p className="mt-2 text-lg font-medium">Student support</p>
          </div>
        </div>
      </div>
    </main>
  );
}