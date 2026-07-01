import Image from "next/image";

interface LogoProps {
  variant?: "icon" | "text" | "wordmark";
  direction?: "horizontal" | "vertical";
}

export default function Logo({
  variant = "icon",
  direction = "horizontal",
}: LogoProps) {
  if (variant === "icon") {
    return (
      <Image
        src="/images/logo-icon.png"
        alt="Studyit Logo"
        width={32}
        height={32}
        priority
      />
    );
  }

  if (variant === "text") {
    return (
      <span className="text-2xl font-bold tracking-tight">
        Studyit
      </span>
    );
  }

  return (
    <div
      className={`flex ${
        direction === "horizontal"
          ? "flex-row items-center gap-2"
          : "flex-col items-center gap-1"
      }`}
    >
      <Image
        src="/images/logo-icon.png"
        alt="Studyit Logo"
        width={32}
        height={32}
        priority
      />

      <span className="text-2xl font-bold tracking-tight">
        Studyit
      </span>
    </div>
  );
}