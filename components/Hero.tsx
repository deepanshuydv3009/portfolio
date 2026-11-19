import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/data";

function Wave() {
  const paths = Array.from({ length: 46 }, (_, i) => {
    const pts: string[] = [];
    for (let x = 0; x <= 800; x += 10) {
      const env = Math.sin((x / 800) * Math.PI);
      const y = 250 + Math.sin(x / 85 + i * 0.07) * 90 * env + Math.cos(x / 140 - i * 0.05) * 40 * env + (i - 23) * 3.4 * env;
      pts.push(`${x === 0 ? "M" : "L"}${x},${y.toFixed(1)}`);
    }
    return <path key={i} d={pts.join(" ")} strokeOpacity={0.18 + (i / 46) * 0.6} />;
  });
  return (
    <svg viewBox="0 0 800 500" aria-hidden className="sway h-full w-full text-accent">
      <g fill="none" stroke="currentColor" strokeWidth="0.8">{paths}</g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -right-24 top-16 w-[58rem] max-w-[140vw] opacity-60 sm:opacity-100"><Wave /></div>
      <div aria-hidden className="pointer-events-none absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[110px]" />
      <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-center px-6 pb-16 pt-28">
        <p className="rise mb-6 w-fit rounded-full border border-line bg-panel/70 px-4 py-1.5 text-sm text-mute">Software engineer and security researcher</p>
        <h1 className="rise max-w-3xl font-serif text-[3.4rem] leading-[0.98] sm:text-[5.5rem] lg:text-[6.5rem]" style={{ animationDelay: ".1s" }}>
          Building secure software with <em>purpose.</em>
        </h1>
        <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-mute" style={{ animationDelay: ".3s" }}>
          I’m Deepanshu Yadav, pursuing an M.Tech in Information and Cyber Security. I build secure web applications and research how malware evades detection.
        </p>
        <div className="rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: ".5s" }}>
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-onaccent shadow-lg shadow-accent/20 transition hover:brightness-110">View projects <ArrowRight size={16} aria-hidden /></a>
          <a href={site.resume} download="Deepanshu_Yadav_Resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-6 py-3 transition hover:border-paper/60"><Download size={16} aria-hidden /> Download resume</a>
        </div>
        <div className="rise mt-8 flex items-center gap-2 text-paper" style={{ animationDelay: ".6s" }}>
          <a href={site.github} aria-label="GitHub profile" target="_blank" rel="noopener noreferrer" className="rounded-full p-3 transition hover:text-accent"><Github size={22} /></a>
          <a href={site.linkedin} aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer" className="rounded-full p-3 transition hover:text-accent"><Linkedin size={22} /></a>
          <a href={`mailto:${site.email}`} aria-label="Email me" className="rounded-full p-3 transition hover:text-accent"><Mail size={22} /></a>
        </div>
      </div>
    </section>
  );
}
