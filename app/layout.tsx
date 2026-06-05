import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[radial-gradient(circle_at_top,_#f8fafc,_#e2e8f0_42%,_#cbd5e1)] text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}