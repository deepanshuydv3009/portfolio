"use client";
import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { ArrowUpRight, Bug, ChevronDown, ScanFace, ShieldCheck, Video } from "lucide-react";
import { Section } from "./Sections";
import { projects, type Project } from "@/lib/data";

const icons = { shield: ShieldCheck, bug: Bug, video: Video, face: ScanFace };

function Card({ p }: { p: Project }) {
  const [open, setOpen] = useState(false);
  const Icon = icons[p.icon];
  const id = `proj-${p.name.replace(/\s+/g, "-").toLowerCase()}`;
  const link = p.repo ?? p.href;
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-panel transition-shadow hover:shadow-xl hover:shadow-accent/10">
      <div aria-hidden className="relative grid h-36 place-items-center bg-gradient-to-br from-accent/25 via-accent/5 to-transparent">
        <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(rgb(var(--accent)/0.35)_1px,transparent_1px)] [background-size:18px_18px]" />
        <Icon size={56} strokeWidth={1.25} className="relative text-accent" />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-3xl">{p.name}</h3>
            <p className="mt-1 text-sm text-mute">{p.date}</p>
          </div>
          {link && <a href={link} target={p.repo ? "_blank" : undefined} rel="noopener noreferrer" aria-label={p.repo ? `${p.name} on GitHub` : `Read about ${p.name}`} className="rounded-full border border-line p-2.5 text-mute transition hover:text-accent"><ArrowUpRight size={18} /></a>}
        </div>
        <p className="mt-4 text-mute">{p.blurb}</p>
        <ul className="mt-4 flex flex-wrap gap-2">{p.stack.map((s) => <li key={s} className="rounded-full border border-line px-3 py-1 text-xs text-mute">{s}</li>)}</ul>
        <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={id} className="mt-5 inline-flex items-center gap-1 text-sm text-accent">
          {open ? "Hide details" : "Show details"} <ChevronDown size={16} aria-hidden className={`transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div id={id} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
              <div className="grid gap-4 pt-5 text-sm">
                <div><h4 className="mb-1 font-medium">The problem</h4><p className="text-mute">{p.problem}</p></div>
                <div><h4 className="mb-1 font-medium">What I built</h4><p className="text-mute">{p.built}</p></div>
                <div><h4 className="mb-1 font-medium">Key features</h4><ul className="grid gap-2 text-mute">{p.features.map((f) => <li key={f} className="border-l border-line pl-3">{f}</li>)}</ul></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Featured projects">
      <MotionConfig reducedMotion="user">
        <div className="grid items-start gap-6 sm:grid-cols-2">{projects.map((p) => <Card key={p.name} p={p} />)}</div>
      </MotionConfig>
    </Section>
  );
}
