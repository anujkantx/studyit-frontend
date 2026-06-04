export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
          Terms of Service
        </div>

        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Simple rules for using Studyit.
        </h1>

        <div className="mt-8 space-y-6 text-zinc-300 leading-8">
          <p>
            Use Studyit for lawful, educational purposes and keep your account
            credentials secure.
          </p>
          <p>
            You are responsible for the content you upload or submit. Do not
            share content that violates another person&apos;s rights.
          </p>
          <p>
            We may update these terms as the product evolves. Continued use means
            you accept the updated terms.
          </p>
        </div>
      </div>
    </main>
  );
}