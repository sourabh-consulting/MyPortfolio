import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  GitBranch,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

export const profile = {
  name: 'Sourabh Jain',
  initials: 'SJ',
  role: 'AI Systems Architect',
  headline: 'I design practical AI systems that move from prototype to production.',
  summary:
    'Associate Architect and Conversational Bot Engineer at Quantiphi, focused on conversational AI, LLM systems, Google Cloud, and product-grade engineering delivery.',
  location: 'Bengaluru, Karnataka, India',
  email: 'sourabh.consulting@gmail.com',
  github: 'https://github.com/sourabh-consulting',
  linkedin: 'https://www.linkedin.com/in/sourabh1407/',
}

export const proofPoints = [
  { value: '8+', label: 'Years in software and AI delivery' },
  { value: '4.5+', label: 'Years at Quantiphi' },
  { value: 'GCP', label: 'Cloud Architect and ML credentials' },
  { value: '11k+', label: 'LinkedIn followers' },
]

export const focusAreas = [
  {
    title: 'Conversational AI Systems',
    description:
      'Dialogflow CX, Vertex AI Search, chatbot modernization, and production bot delivery patterns.',
    icon: Bot,
  },
  {
    title: 'LLM Product Architecture',
    description:
      'Grounded assistant flows, retrieval-aware UX, human review loops, and practical GenAI system boundaries.',
    icon: BrainCircuit,
  },
  {
    title: 'Cloud-Native Delivery',
    description:
      'Google Cloud architecture, deployment tradeoffs, operational reliability, and cost-aware design.',
    icon: Cloud,
  },
  {
    title: 'Full-Stack Engineering',
    description:
      'React, TypeScript, REST APIs, backend integration, data modeling, and pragmatic implementation planning.',
    icon: Code2,
  },
]

export const experience = [
  {
    company: 'Quantiphi',
    location: 'Bengaluru, Karnataka, India',
    roles: [
      {
        title: 'Associate Architect - Conversational Bot Engineer',
        dates: 'Apr 2025 - Present',
        summary:
          'Architecting and delivering conversational AI systems with a focus on production readiness, cloud integration, and stakeholder-ready technical design.',
      },
      {
        title: 'Senior Conversational Bot Engineer',
        dates: 'Nov 2021 - Mar 2025',
        summary:
          'Built and improved bot solutions across Dialogflow, REST APIs, AI workflows, and enterprise delivery contexts.',
      },
    ],
  },
  {
    company: 'Amelia',
    location: 'Bengaluru, Karnataka, India',
    roles: [
      {
        title: 'Senior Cognitive Implementation Engineer',
        dates: 'Jul 2021 - Nov 2021',
        summary:
          'Implemented conversational and cognitive automation solutions with API integration and enterprise implementation practices.',
      },
      {
        title: 'Cognitive Implementation Engineer',
        dates: 'May 2020 - Jul 2021',
        summary:
          'Worked on AI implementation, REST integration, and bot delivery for customer-facing automation use cases.',
      },
    ],
  },
  {
    company: 'Capgemini',
    location: 'Pune and Bengaluru, India',
    roles: [
      {
        title: 'Associate Consultant / Senior Software Engineer / Software Engineer',
        dates: 'Oct 2017 - Apr 2020',
        summary:
          'Grew through software engineering roles across REST APIs, Java/Spring foundations, and delivery-focused implementation work.',
      },
    ],
  },
]

export const education = [
  {
    school: 'PES University',
    credential: 'MTech, Data Science and Machine Learning',
    dates: 'Jul 2021 - Sep 2024',
    detail: 'Grade: 9.67',
  },
  {
    school: 'University Institute of Technology, RGPV',
    credential: 'Bachelor of Engineering, Information Technology',
    dates: '2013 - 2017',
    detail: 'Grade: 8.15',
  },
  {
    school: 'Udacity',
    credential: 'AWS Machine Learning Engineer Nanodegree',
    dates: 'Oct 2021 - Feb 2022',
    detail: 'Machine learning engineering and production ML foundations.',
  },
]

export const certifications = [
  'Google Professional Cloud Architect',
  'Google Professional Machine Learning Engineer',
  'Customer Engagement Suite with Google AI Technical Expert Badge',
  'Conversational AI on Vertex AI and Dialogflow CX',
  'Search & Conversational AI in Vertex AI and Dialogflow CX',
  'Vertex AI Search',
  'Introduction to Generative AI, LLMs, and Responsible AI',
]

export const skills = [
  { label: 'Dialogflow CX', icon: Bot },
  { label: 'Vertex AI', icon: Sparkles },
  { label: 'Google Cloud', icon: Cloud },
  { label: 'LLM systems', icon: BrainCircuit },
  { label: 'REST APIs', icon: GitBranch },
  { label: 'MongoDB', icon: Database },
  { label: 'React + TypeScript', icon: Code2 },
  { label: 'Architecture reviews', icon: ShieldCheck },
]

export const consultingOffers = [
  {
    title: 'AI workflow audit',
    description:
      'Map an existing AI, bot, or automation workflow and identify reliability, cost, UX, and delivery risks.',
    icon: ShieldCheck,
  },
  {
    title: 'Conversational bot modernization',
    description:
      'Plan upgrades for Dialogflow CX, Vertex AI Search, handoff flows, integrations, and analytics loops.',
    icon: Bot,
  },
  {
    title: 'MVP architecture support',
    description:
      'Turn a rough AI product idea into a buildable architecture, implementation roadmap, and free-tier-aware stack.',
    icon: BriefcaseBusiness,
  },
]

export const caseStudies = [
  {
    label: 'Enterprise bot platform',
    result:
      'Public-safe pattern: structured intent flows, API-backed fulfillment, handoff design, and operational review loops.',
  },
  {
    label: 'Knowledge assistant workflow',
    result:
      'Public-safe pattern: retrieval-aware UX, confidence boundaries, source review, and maintainable content operations.',
  },
  {
    label: 'Cloud architecture review',
    result:
      'Public-safe pattern: deployment shape, cost controls, reliability checks, and team handoff documentation.',
  },
]

export const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Sourabh Jain - AI Systems Architect',
    description:
      'AI systems architect focused on conversational AI, LLM systems, Google Cloud, and practical product engineering.',
  },
  '/resume': {
    title: 'Experience - Sourabh Jain',
    description:
      'Experience, education, certifications, and skills for Sourabh Jain, AI systems architect and conversational AI engineer.',
  },
  '/projects': {
    title: 'Projects - Sourabh Jain',
    description: 'Project scaffold and portfolio placeholders for Sourabh Jain.',
  },
  '/blog': {
    title: 'Blog - Sourabh Jain',
    description: 'Writing scaffold and placeholder posts for future portfolio content.',
  },
  '/contact': {
    title: 'Contact - Sourabh Jain',
    description: 'Contact Sourabh Jain for career, consulting, or technical collaboration conversations.',
  },
  '/consulting': {
    title: 'Consulting - Sourabh Jain',
    description: 'Private consulting view for AI workflow audits, bot modernization, and MVP architecture support.',
  },
}
