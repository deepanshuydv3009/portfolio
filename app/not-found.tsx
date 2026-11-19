import Link from "next/link";
export const metadata = { title: "Page not found" };
export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-screen max-w-3xl content-center gap-6 px-6">
      <p className="font-serif text-7xl">404</p>
      <p className="text-lg text-mute">This page doesn’t exist. It may have moved, or the link may be wrong.</p>
      <Link href="/" className="w-fit rounded-full bg-accent px-5 py-3 font-medium text-onaccent">Back to the portfolio</Link>
    </main>
  );
}
