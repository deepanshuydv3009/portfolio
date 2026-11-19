import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource/instrument-serif";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { site } from "@/lib/data";

const base = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");
const description = "Deepanshu Yadav is a software engineer and M.Tech student in Information and Cyber Security at ABV-IIITM Gwalior, building secure web applications and researching malware detection.";

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: { default: "Deepanshu Yadav | Software Engineer and Cybersecurity Researcher", template: "%s | Deepanshu Yadav" },
  description,
  openGraph: { title: "Deepanshu Yadav | Software Engineer and Cybersecurity Researcher", description, type: "website", siteName: site.name },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};
export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f8faff" }, { media: "(prefers-color-scheme: dark)", color: "#0c0d0f" }] };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Person", name: site.name, email: site.email,
    jobTitle: "Software engineer and cybersecurity researcher", url: base,
    sameAs: [site.github, site.linkedin],
    alumniOf: [{ "@type": "CollegeOrUniversity", name: "Harcourt Butler Technical University, Kanpur" }],
    affiliation: { "@type": "CollegeOrUniversity", name: "ABV-IIITM Gwalior" },
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem("theme");if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="light"}` }} />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-onaccent">Skip to content</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
