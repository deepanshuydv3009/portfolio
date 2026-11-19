"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [["About", "#about"], ["Projects", "#projects"], ["Research", "#research"], ["Skills", "#skills"], ["Education", "#education"], ["Contact", "#contact"]];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/70 bg-ink/80 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" aria-label="Deepanshu Yadav, home" className="font-serif text-3xl">DY.</a>
        <ul className="hidden gap-7 text-sm text-mute md:flex">
          {links.map(([l, h]) => <li key={h}><a href={h} className="transition-colors hover:text-paper">{l}</a></li>)}
        </ul>
        <div className="flex items-center gap-3">
        <a href="/resume.pdf" download="Deepanshu_Yadav_Resume.pdf" className="hidden rounded-full border border-line px-4 py-2 text-sm transition hover:border-paper/60 md:inline-block">Download CV</a>
        <ThemeToggle />
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-ink px-6 py-4 md:hidden">
          {links.map(([l, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-3 text-lg">{l}</a></li>)}
        </ul>
      )}
    </header>
  );
}
