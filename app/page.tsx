import Link from "next/link";
import "./globals.css";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Link href="/discrete-math">
          <p>Discrete Math</p>
        </Link>
        <Link href="/oop">
          <p>Object Oriented Programming</p>
        </Link>
        <Link href="/databases">
          <p>Databases</p>
        </Link>
      </div>
    </main>
  );
}
