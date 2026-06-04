import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Studyit</h1>

      <Link href="/login">
        Login
      </Link>
    </div>
  );
}