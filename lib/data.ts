export const site = {
  name: "Deepanshu Yadav",
  email: "deepanshuydv3009@gmail.com",
  location: "Ghaziabad, Uttar Pradesh, India",
  linkedin: "https://www.linkedin.com/in/deepanshu3009",
  github: "https://github.com/deepanshuydv3009",
  leetcode: "https://leetcode.com/u/deepanshu_ydv/",
  gfg: "https://www.geeksforgeeks.org/user/deepanshu3009/",
  resume: "/resume.pdf",
};

export const skills = [
  { group: "Languages", items: ["C++", "Python", "JavaScript"] },
  { group: "Frontend", items: ["Next.js", "HTML", "CSS"] },
  { group: "Backend", items: ["Node.js", "Express", "Socket.IO", "WebRTC"] },
  { group: "Databases", items: ["MongoDB", "MySQL"] },
  { group: "Cybersecurity", items: ["Cryptography", "Web Crypto API", "JWT", "bcrypt", "Network Security", "Ethical hacking concepts"] },
  { group: "AI and ML", items: ["Machine learning", "Deep learning", "NLP", "Keras", "Pandas"] },
  { group: "Tools", items: ["Git", "GitHub", "Postman"] },
  { group: "Core CS", items: ["Data structures and algorithms", "OOP", "LLD", "Operating systems", "DBMS", "Computer networks"] },
];

export type Project = {
  name: string; date: string; problem: string; built: string;
  stack: string[]; features: string[]; repo?: string; href?: string; blurb: string; icon: "shield" | "bug" | "video" | "face";
};

export const projects: Project[] = [
  {
    name: "Secure Vault", date: "April 2026", icon: "shield", blurb: "Encrypted file sharing where the server never sees plaintext.",
    problem: "Sharing a file normally means trusting the server with its contents.",
    built: "An encrypted file sharing and storage app on the MERN stack. Files are encrypted in the browser, so the server never holds plaintext.",
    stack: ["Next.js", "Node.js", "MongoDB", "Web Crypto API", "JWT", "bcrypt"],
    features: [
      "Client-side AES encryption through the Web Crypto API",
      "bcrypt password hashing and JWT-based sessions for API access",
      "Tokenized share links with configurable expiry, decrypted in the browser without exposing credentials",
    ],
    repo: "https://github.com/deepanshuydv3009/secure-share",
  },
  {
    name: "YARA-HARDEN", date: "Ongoing M.Tech research", icon: "bug", href: "#research",
    blurb: "Deterministic hardening of YARA rules against evasion and obfuscation.",
    problem: "Malware authors obfuscate code and generate polymorphic variants so that detection rules stop matching.",
    built: "Research into automated hardening and resilient synthesis of YARA rules against obfuscated and polymorphic malware.",
    stack: ["YARA", "Malware analysis"],
    features: ["Deterministic approach: the same input always yields the same rule", "Focus on resilience to evasion and obfuscation"],
  },
  {
    name: "Zoomify", date: "March 2025", icon: "video", blurb: "Real-time video conferencing with room management.",
    problem: "Group video calls need room management, signaling, and low-latency media.",
    built: "A video conferencing app with audio and video streaming and room management for 20+ users.",
    stack: ["WebRTC", "Socket.IO", "Node.js"],
    features: [
      "Create, join and leave video rooms dynamically",
      "WebRTC tuning for audio and video quality with minimal latency across networks",
    ],
    repo: "https://github.com/deepanshuydv3009/Zoomify-Instant-Video-Connect",
  },
  {
    name: "Facial Emotion Analysis", date: "December 2024", icon: "face", blurb: "CNN-based emotion recognition using deep learning.",
    problem: "Reading emotion from a live face is sensitive to data quality and lighting.",
    built: "A facial emotion detection system built on CNN models, reporting 95% real-time accuracy.",
    stack: ["Python", "Keras", "CNN"],
    features: [
      "Preprocessing and fine-tuning of CNN models to improve accuracy",
      "Testing across diverse datasets and real-world conditions",
    ],
    repo: "https://github.com/deepanshuydv3009/Facial-Emotion-Analysis",
  },
];

export const education = [
  { school: "ABV-Indian Institute of Information Technology and Management, Gwalior", degree: "M.Tech, Information and Cyber Security", years: "2025 to 2027", score: "CGPA 7.73/10" },
  { school: "Harcourt Butler Technical University, Kanpur", degree: "B.Tech, Chemical Technology (Oil Technology)", years: "2021 to 2025", score: "CGPA 8.029/10" },
  { school: "Unique International Public School, Ghaziabad", degree: "Senior Secondary, CBSE", years: "2020", score: "87.20%" },
];

export const achievements = [
  { title: "Vice-Chancellor’s Silver Medal", text: "Presented by the Governor of Uttar Pradesh for exceptional academic performance, as the second top scorer in the department." },
  { title: "Bureau of Indian Standards", text: "Contributed to the pre-standardization of Indian Standard IS 10523, and completed a BIS internship with lab and site visits." },
  { title: "200+ DSA problems solved", text: "Across platforms including LeetCode and GeeksforGeeks." },
  { title: "Oil Technologists’ Association of India", text: "Active member." },
];
