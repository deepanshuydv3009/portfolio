import { Mail, Download, Github, Linkedin } from "lucide-react";
import Reveal from "./Reveal";
import { achievements, education, site, skills } from "@/lib/data";

export function Section({ id, title, children }: { id: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="mx-auto max-w-6xl border-t border-line px-6 py-20 sm:py-28">
      <Reveal>
        <h2 id={`${id}-h`} className="mb-12 max-w-3xl font-serif text-4xl sm:text-5xl">{title}</h2>
        {children}
      </Reveal>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" title={<>A curious mind, building secure and scalable <em>solutions.</em></>}>
      <div className="grid gap-8 text-lg leading-relaxed text-mute md:max-w-3xl">
        <p>I started with a B.Tech in Oil Technology from Harcourt Butler Technical University, Kanpur. Along the way, I became interested in programming and moved into software engineering and cybersecurity by pursuing an M.Tech at ABV-IIITM Gwalior.</p>
        <p>I like building applications where security is part of the design, not an add-on: client-side encryption, careful authentication, and links that expire. My foundations are C++, data structures and algorithms, and full-stack JavaScript.</p>
        <p>My research looks at how detection rules for malware can be made harder to evade. I’m looking for software engineering roles, with a growing interest in system design and cloud computing.</p>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group} className="border-l border-line pl-5">
            <dt className="mb-3 font-medium">{s.group}</dt>
            <dd className="flex flex-wrap gap-2">
              {s.items.map((i) => <span key={i} className="rounded-md border border-line bg-panel px-3 py-1 text-sm text-mute">{i}</span>)}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="relative grid gap-10 border-l border-line pl-8">
        {education.map((e) => (
          <li key={e.school} className="relative">
            <span aria-hidden className="absolute -left-[2.45rem] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="text-sm text-mute">{e.years}</p>
            <h3 className="mt-1 text-xl">{e.school}</h3>
            <p className="mt-1 text-mute">{e.degree}</p>
            <p className="mt-1 text-paper">{e.score}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
        {achievements.map((a) => (
          <li key={a.title} className="bg-ink p-6">
            <h3 className="text-lg">{a.title}</h3>
            <p className="mt-2 text-mute">{a.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Let’s connect">
      <p className="max-w-xl text-lg text-mute">I’m open to software engineering roles. The quickest way to reach me is email.</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-onaccent transition hover:brightness-110"><Mail size={16} aria-hidden /> {site.email}</a>
        <a href={site.resume} download="Deepanshu_Yadav_Resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 transition hover:border-paper/60"><Download size={16} aria-hidden /> Download resume</a>
      </div>
      <div className="mt-8 flex gap-6 text-mute">
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-paper"><Linkedin size={18} aria-hidden /> LinkedIn</a>
        <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-paper"><Github size={18} aria-hidden /> GitHub</a>
      </div>
    </Section>
  );
}
