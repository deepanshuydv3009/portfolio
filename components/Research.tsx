import { Section } from "./Sections";

export default function Research() {
  const blocks = [
    ["Motivation", "YARA rules are a standard way to describe and detect malware. Attackers obfuscate code and generate polymorphic variants so that rules written for one sample stop matching the next."],
    ["Research problem", "How can detection rules be strengthened so they keep working against obfuscated and polymorphic malware, without relying on manual rewriting after each evasion?"],
    ["Approach", "A deterministic, automated approach to hardening and synthesizing YARA rules, so the same input always produces the same rule."],
  ];
  return (
    <Section id="research" title="Research and cybersecurity">
      <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-panel to-ink p-6 sm:p-10">
        <h3 className="max-w-3xl font-serif text-3xl sm:text-4xl">YARA-HARDEN: automated hardening and resilient synthesis of YARA rules against obfuscated and polymorphic malware</h3>
        <p className="mt-4 text-mute">Ongoing M.Tech research at ABV-IIITM Gwalior. Not yet published.</p>
        <dl className="mt-10 grid gap-8 md:grid-cols-3">
          {blocks.map(([t, d]) => (<div key={t}><dt className="mb-2 font-medium">{t}</dt><dd className="leading-relaxed text-mute">{d}</dd></div>))}
        </dl>
      </div>
      <p className="mt-8 max-w-3xl text-mute">My wider interests are malware analysis and reverse engineering, digital forensics and incident response, static and program analysis, and threat detection.</p>
    </Section>
  );
}
