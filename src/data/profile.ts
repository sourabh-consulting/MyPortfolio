import {
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
  headline: 'I design production-ready GenAI systems and AI product architecture.',
  summary:
    'Associate Architect at Quantiphi repositioning toward GenAI architecture, agentic AI workflows, Google Cloud, LLM systems, and product-grade enterprise AI delivery.',
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
    title: 'GenAI Product Architecture',
    description:
      'LLM application design, RAG patterns, evaluation loops, human review, and production boundaries.',
    icon: BrainCircuit,
  },
  {
    title: 'Agentic AI Workflows',
    description:
      'Tool use, workflow orchestration, task boundaries, failure handling, and governance for agent-style systems.',
    icon: Sparkles,
  },
  {
    title: 'Cloud-Native AI Delivery',
    description:
      'Google Cloud architecture, Vertex AI ecosystem awareness, deployment tradeoffs, reliability, and cost-aware design.',
    icon: Cloud,
  },
  {
    title: 'Platform Engineering Foundations',
    description:
      'REST APIs, backend integration, data modeling, React/TypeScript, and pragmatic implementation planning.',
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
          'Associate architect role with a current focus on enterprise delivery, technical design, stakeholder alignment, and rebuilding depth toward GenAI and AI architecture.',
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
  { label: 'GenAI architecture', icon: BrainCircuit },
  { label: 'Agentic AI workflows', icon: Sparkles },
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
    price: 'Rs 75k-Rs 1.5L',
    timeline: '1-2 weeks',
    description:
      'Map an existing AI, bot, or automation workflow and identify reliability, cost, UX, governance, integration, and handoff risks.',
    icon: ShieldCheck,
  },
  {
    title: 'Agentic AI workflow readiness plan',
    price: 'Rs 1.5L-Rs 4L',
    timeline: '2-4 weeks',
    description:
      'Assess whether an AI workflow should use agents, RAG, deterministic orchestration, human review, or a simpler automation path.',
    icon: Sparkles,
  },
  {
    title: 'GenAI MVP architecture sprint',
    price: 'Rs 2L-Rs 6L',
    timeline: '2-5 weeks',
    description:
      'Turn a rough AI product, copilot, assistant, or internal workflow idea into a buildable architecture and implementation roadmap.',
    icon: BriefcaseBusiness,
  },
]

export const caseStudies = [
  {
    label: 'Enterprise AI assistant workflow',
    result:
      'Public-safe pattern: scoped assistant behavior, API-backed actions, handoff design, evaluation, and operational review loops.',
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
      'AI systems architect focused on GenAI architecture, LLM systems, Google Cloud, and practical product engineering.',
  },
  '/resume': {
    title: 'Experience - Sourabh Jain',
    description:
      'Experience, education, certifications, and skills for Sourabh Jain, AI systems architect and GenAI architecture candidate.',
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
    description: 'Contact Sourabh Jain for career, AI architecture, or technical collaboration conversations.',
  },
  '/consulting': {
    title: 'Consulting - Sourabh Jain',
    description: 'Private consulting view for AI workflow audits, agentic AI readiness, and GenAI MVP architecture support.',
  },
}
