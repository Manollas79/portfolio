import { Project, SkillCategory, Education } from './types.ts';

export const PERSONAL_INFO = {
  name: "Manollas T S",
  title: "Computer Science Engineer (Data Science)",
  email: "manollasts79@gmail.com",
  phone: "+91-6362746319",
  location: "Bengaluru, Karnataka, India",
  github: "https://github.com/Manollas79",
  linkedin: "https://www.linkedin.com/in/manollas-t-s-3466542a1",
  about: `I’m Manollas T S, a final-year Computer Science (Data Science) student passionate about building AI-driven applications, full-stack solutions, and intelligent automation systems. I enjoy transforming raw ideas into scalable, fast, and user-friendly applications—whether it’s an AI-powered summarizer, a full-stack employment guidance system, or data-driven dashboards. My goal is to join a team where I can contribute to AI, software development, and data-driven products while continuing to grow as an engineer.`
};

export const PROJECTS: Project[] = [
  {
    title: "YouTube Transcript Summarizer & Translator",
    tech: ["Python", "Streamlit", "Google Gemini API", "Google Translate"],
    description: [
      "Developed a Python-based AI-powered tool to summarize and translate YouTube transcripts.",
      "Utilized the Google Gemini API for summarization and Google Translate for multi-language support.",
      "Implemented real-time transcript fetching, summarization, and translation features."
    ],
    impact: "Reduced processing time by 30% and increased efficiency by 15% using optimized NLP techniques.",
    link: "https://github.com/Manollas79"
  },
  {
    title: "AI-Powered Employment Guidance Framework",
    tech: ["Next.js", "Neon DB", "Prisma", "Shadcn UI", "Gemini AI API"],
    description: [
      "Designed and optimized Prisma schema and Neon DB models for reliable and scalable data storage.",
      "Built Next.js API routes to handle user interactions and connect with backend logic.",
      "Integrated Gemini AI API with Inngest background jobs for personalized career insights."
    ],
    impact: "Contributed to the frontend by developing responsive UI flows with Shadcn UI and Tailwind.",
    link: "https://github.com/Manollas79"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript", "Python", "SQL"]
  },
  {
    category: "Frameworks & Tools",
    skills: ["Next.js", "Streamlit", "Prisma", "Shadcn UI", "Tailwind CSS", "Django"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "Neon DB"]
  },
  {
    category: "AI / Data Science",
    skills: ["Machine Learning", "Artificial Intelligence", "NLP", "Data Analysis"]
  },
  {
    category: "Data Visualization",
    skills: ["Tableau", "Matplotlib", "Seaborn"]
  },
  {
    category: "Version Control",
    skills: ["Git", "GitHub"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.E in Computer Science Engineering (Data Science)",
    institution: "New Horizon College of Engineering",
    year: "Present",
    score: "CGPA: 8.86 / 10.00",
    location: "Bengaluru, Karnataka"
  },
  {
    degree: "Pre-University College (Science)",
    institution: "The Presidency Pre-University College",
    year: "April 2022",
    score: "93.33%",
    location: "Sira, Karnataka"
  },
  {
    degree: "Secondary School (CBSE)",
    institution: "The Presidency Public School",
    year: "March 2020",
    score: "74.80%",
    location: "Sira, Karnataka"
  }
];

export const CERTIFICATIONS = [
  "NPTEL Certification - Database Management Systems",
  "NPTEL Certification - Data Science for Engineers"
];