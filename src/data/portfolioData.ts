import { ExperienceItem, PublicationItem, EducationItem, SkillCategory } from '@/types';

export const personalInfo = {
  name: 'Adabala Uday Raghavendra Kumar',
  shortName: 'Uday Raghavendra',
  headline: 'Data Scientist & AI/ML Engineer',
  subheadline: 'Specializing in Production RAG Systems, Time-Series Telemetry & Anomaly Detection, and End-to-End ML Pipelines.',
  bio: 'Data Scientist with nearly 3 years of industry experience spanning applied machine learning, data engineering, and enterprise software quality assurance. Currently architecting production RAG document intelligence systems and real-time telemetry anomaly detection for LNG carriers at Volteo Maritime. Graduated with an M.Tech in Artificial Intelligence & Data Science from SASTRA University.',
  location: 'Chennai, India',
  email: 'udayraghavendra.adabala@gmail.com',
  github: 'https://github.com/rag3kumar',
  linkedin: 'https://linkedin.com/in/rag3kumar',
  medium: 'https://medium.com/@rag3kumar',
  resumeUrl: '/auday_resume.pdf',
  status: 'Open to High-Impact Data Science & AI Opportunities',
};

export const keyStats = [
  {
    label: 'Industry Experience',
    value: '~3 Years',
    detail: 'Applied AI/ML, Data Engineering & QA',
  },
  {
    label: 'Current Position',
    value: 'Data Scientist',
    detail: 'Volteo Maritime',
  },
  {
    label: 'Published Research',
    value: '2 Papers',
    detail: 'IEEE Xplore & Technical Medium',
  },
  {
    label: 'Education',
    value: 'M.Tech (AI & DS)',
    detail: 'SASTRA University',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'volteo-ds',
    role: 'Data Scientist',
    company: 'Volteo Maritime',
    type: 'Full-time',
    period: 'Jan 2025 – Present',
    location: 'Remote / Maritime Operations',
    summary: 'Architecting production AI/ML solutions for maritime IoT, advanced RAG document intelligence, and real-time vessel telemetry anomaly detection.',
    accentColor: 'blue',
    highlightBadge: 'Current Role',
    technologies: [
      'LangChain',
      'LlamaIndex',
      'QdrantDB',
      'FastAPI',
      'Sentence Transformers',
      'Hybrid Retrieval (HNSW + BM25)',
      'Cross-Encoder Re-Ranking',
      'Time-Series ML',
      'CouchDB',
      'GCS',
      'Power BI Embedded',
    ],
    bullets: [
      'Architected and deployed a production-grade RAG Document Assistant using LangChain, LlamaIndex, QdrantDB, and Sentence Transformers — featuring hierarchical chunking, hybrid retrieval (dense HNSW + sparse BM25), reciprocal rank fusion, and cross-encoder re-ranking for enterprise maritime documentation.',
      'Designed and executed a structured multi-layer evaluation framework across benchmark test queries to assess retrieval recall, answer faithfulness, and query-drift across model generations.',
      'Developed machine learning anomaly detection and data-quality validation models for real-time LNG vessel sensor telemetry, reducing manual monitoring overhead by ~40%.',
      'Formulated and validated predictive models for Boil-Off Gas (BOG) tracking, applying statistical and time-series modeling to support fuel management and operational decision-making.',
      'Engineered streaming telemetry ingestion pipelines to clean, normalize, and validate high-frequency sensor readings as reliable inputs for downstream ML models.',
      'Created backend data services and FastAPI endpoints connecting NoSQL data stores to Power BI Embedded for non-technical maritime stakeholders.',
    ],
  },
  {
    id: 'securden-se-trainee',
    role: 'Software Engineer Trainee',
    company: 'Securden Technologies',
    type: 'Full-time Trainee',
    period: 'Apr 2024 – Dec 2024',
    location: 'Chennai, India',
    summary: 'Engineered internal AI tooling and validated mission-critical security architectures across enterprise PAM, Vault, and endpoint privilege solutions.',
    accentColor: 'purple',
    highlightBadge: 'Enterprise Security',
    technologies: [
      'Internal AI Chatbot',
      'Privileged Access Management (PAM)',
      'Vault for MSPs',
      'Endpoint Privilege Manager (EPM)',
      'REST API Testing',
      'Postman',
      'Automation Frameworks',
    ],
    bullets: [
      'Engineered an internal AI chatbot to assist engineering and support teams with instant product documentation retrieval and knowledge queries.',
      'Validated critical security features and access-delegation workflows across three enterprise products: Privileged Access Management (PAM), Vault for MSPs, and Endpoint Privilege Manager (EPM).',
      'Authored and executed comprehensive test suites combining exploratory testing, Postman API automation, and regression frameworks.',
      'Identified and escalated security misconfigurations in PAM authorization workflows, ensuring robust privilege escalation prevention before release.',
      'Collaborated closely with developers on defect triage, root-cause isolation, and release candidate validation under tight product deadlines.',
    ],
  },
  {
    id: 'securden-qa-trainee',
    role: 'Software QA Trainee',
    company: 'Securden Technologies',
    type: 'Trainee',
    period: 'Aug 2022 – Sep 2022',
    location: 'Chennai, India',
    summary: 'Gained foundational experience in quality engineering, enterprise test execution, and defect lifecycle management.',
    accentColor: 'emerald',
    technologies: ['Manual Testing', 'Defect Reporting', 'Test Lifecycle', 'Bug Triage'],
    bullets: [
      'Supported quality assurance workflows, executing functional test cases and exploratory testing on early release builds.',
      'Assisted engineering teams in isolating functional regressions and documenting structured defect reports.',
    ],
  },
];

export const publicationsData: PublicationItem[] = [
  {
    id: 'maritime-vessel-monitoring',
    title: 'AI-Powered Vessel Performance Monitoring in Maritime Operations',
    publisher: 'Medium (Volteo Maritime)',
    year: '2025',
    authors: ['Adabala Uday Raghavendra Kumar'],
    url: 'https://medium.com/@rag3kumar',
    abstract:
      'Explores the practical implementation of machine learning architectures for continuous telemetry monitoring, Boil-Off Gas (BOG) predictive tracking, and sensor anomaly detection on liquefied natural gas (LNG) carriers to optimize fuel efficiency and cargo integrity.',
    tags: ['Maritime IoT', 'LNG Telemetry', 'Boil-Off Gas (BOG)', 'Predictive Modelling', 'Time Series'],
    type: 'Industry Research / Medium',
  },
  {
    id: 'rose-leaf-disease-cnn',
    title: 'Rose Plant Leaves: Disease Detection and Pesticide Management using CNN',
    publisher: 'IEEE Xplore',
    year: 'Jan 2022',
    authors: ['Adabala Uday Raghavendra Kumar', 'Mohammed Khaleel', 'Paineni Gowtham', 'Raja P.'],
    url: 'https://ieeexplore.ieee.org/document/9776898',
    abstract:
      'Proposed a deep convolutional neural network (CNN) framework for automated detection and classification of foliar diseases in rose crops, paired with an intelligent recommendation engine for targeted pesticide management to minimize crop yield loss.',
    tags: ['Deep Learning', 'CNN', 'Computer Vision', 'Image Classification', 'Agriculture AI'],
    type: 'Journal / IEEE',
  },
];

export const educationData: EducationItem[] = [
  {
    degree: 'M.Tech in Artificial Intelligence & Data Science',
    field: 'AI & Data Science',
    institution: 'SASTRA University',
    period: 'Oct 2022 – Apr 2024',
    badge: 'Postgraduate Degree',
    coursework: [
      'Machine Learning',
      'Deep Learning',
      'Time Series Analysis',
      'Natural Language Processing (NLP)',
      'Reinforcement Learning',
      'Statistics & Probability',
      'R Language',
    ],
  },
  {
    degree: 'B.Tech in Mechanical Engineering',
    field: 'Mechanical Engineering',
    institution: 'SASTRA University',
    period: 'Jul 2018 – Jul 2022',
    badge: 'Undergraduate Degree',
    coursework: [
      'Mathematics & Statistics',
      'Thermodynamics',
      'Fluid Mechanics',
      'Mechatronics',
      'Manufacturing Technology',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'AI & Production RAG Systems',
    description: 'Enterprise retrieval-augmented generation, vector search, query reformulation, and LLM orchestration.',
    color: 'blue',
    skills: [
      { name: 'LangChain & LlamaIndex', level: 'Advanced', description: 'Pipeline design & document intelligence' },
      { name: 'QdrantDB (Vector DB)', level: 'Advanced', description: 'HNSW indexing & filtered payload queries' },
      { name: 'Hybrid Retrieval (Dense + BM25)', level: 'Advanced', description: 'Dense-sparse rank fusion' },
      { name: 'Cross-Encoder Re-Ranking', level: 'Advanced', description: 'Context scoring & relevance filtering' },
      { name: 'HyDE & Query Rewriting', level: 'Advanced', description: 'Hypothetical embeddings & expansions' },
      { name: 'Evaluation & Faithfulness Scoring', level: 'Advanced', description: 'Hallucination suppression & regression gating' },
      { name: 'Sentence Transformers', level: 'Advanced', description: 'Dense embeddings & fine-tuning' },
      { name: 'LLM APIs & Serving', level: 'Proficient', description: 'FastAPI, NVIDIA NIM, Gemini, Ollama' },
    ],
  },
  {
    category: 'Data Engineering & Telemetry',
    description: 'Real-time telemetry ingestion, time-series storage, pipeline design, and data quality validation.',
    color: 'emerald',
    skills: [
      { name: 'Streaming Telemetry Ingestion', level: 'Advanced', description: 'High-frequency maritime sensor data' },
      { name: 'Data Quality & Validation', level: 'Advanced', description: 'Automated schema & value boundary tests' },
      { name: 'CouchDB & NoSQL Datastores', level: 'Advanced', description: 'Document stores & synchronization' },
      { name: 'Google Cloud Storage (GCS)', level: 'Advanced', description: 'Cloud data storage & artifact repositories' },
      { name: 'ETL Pipeline Architecture', level: 'Advanced', description: 'Data transformation & cleansing' },
      { name: 'Apache Spark', level: 'Proficient', description: 'Distributed batch processing' },
      { name: 'SQL & Database Design', level: 'Advanced', description: 'Relational data modeling & queries' },
    ],
  },
  {
    category: 'Machine Learning & Predictive Modeling',
    description: 'Statistical anomaly detection, predictive regression, time-series analysis, and deep learning.',
    color: 'amber',
    skills: [
      { name: 'Statistical Anomaly Detection', level: 'Advanced', description: 'Z-score, Isolation Forest, sliding windows' },
      { name: 'Time-Series Analysis & Forecasting', level: 'Advanced', description: 'Trend extraction, smoothing & seasonal models' },
      { name: 'Predictive Modeling (BOG)', level: 'Advanced', description: 'Cargo thermodynamics & ML regression curves' },
      { name: 'Deep Learning & CNNs', level: 'Advanced', description: 'Computer vision, classification & PyTorch' },
      { name: 'Supervised & Unsupervised Learning', level: 'Advanced', description: 'Tree ensembles, clustering & regression' },
      { name: 'NLP & Text Classification', level: 'Proficient', description: 'Semantic clustering & intent classification' },
    ],
  },
  {
    category: 'Cloud, APIs & Tooling',
    description: 'Production deployment runtimes, cloud platforms, and developer toolchains.',
    color: 'purple',
    skills: [
      { name: 'Python (NumPy, Pandas, SciPy)', level: 'Advanced', description: 'Core scientific computing stack' },
      { name: 'FastAPI & REST APIs', level: 'Advanced', description: 'High-throughput async web services' },
      { name: 'Google Cloud Platform (GCP)', level: 'Proficient', description: 'GCS, Compute & Cloud AI services' },
      { name: 'Docker (Containers)', level: 'Core', description: 'Service containerization & environments' },
      { name: 'Git & Version Control', level: 'Advanced', description: 'Collaborative development & branching' },
      { name: 'Jupyter & Interactive Prototyping', level: 'Advanced', description: 'Exploratory data analysis & experiments' },
    ],
  },
  {
    category: 'Quality Engineering & Analytics',
    description: 'API testing automation, enterprise cybersecurity validation, and stakeholder reporting.',
    color: 'rose',
    skills: [
      { name: 'Postman & REST API Automation', level: 'Advanced', description: 'Automated integration & regression testing' },
      { name: 'Enterprise Security QA (PAM/EPM)', level: 'Advanced', description: 'Privilege escalation & access testing' },
      { name: 'Power BI & Power BI Embedded', level: 'Advanced', description: 'Interactive executive reporting' },
      { name: 'Streamlit Dashboards', level: 'Advanced', description: 'Interactive ML exploration interfaces' },
      { name: 'Defect Lifecycle Management', level: 'Advanced', description: 'Root-cause analysis & bug triage' },
    ],
  },
];
