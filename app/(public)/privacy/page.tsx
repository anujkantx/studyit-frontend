export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
          Privacy Policy
        </div>

        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Your data stays focused on learning.
        </h1>

        <div className="mt-8 space-y-6 text-zinc-300 leading-8">
          <p>
            Studyit only collects the information needed to create your account,
            authenticate access, and improve your learning experience.
          </p>
          <p>
            We do not sell your data. Your study progress is used to power your
            dashboard, saved notes, and quiz history.
          </p>
          <p>
            If you want account deletion or data access help, contact support.
          </p>
        </div>
      </div>
    </main>
  );
}