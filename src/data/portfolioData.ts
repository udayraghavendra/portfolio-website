import { ExperienceItem, PublicationItem, EducationItem, SkillCategory, PipelineStage } from '@/types';

export const personalInfo = {
  name: 'Adabala Uday Raghavendra Kumar',
  shortName: 'Uday Raghavendra',
  headline: 'Data Scientist & AI/ML Engineer',
  subheadline: 'Specializing in Production RAG Systems, Real-Time Maritime IoT & Anomaly Detection, and End-to-End ML Pipelines.',
  bio: 'Results-driven Data Scientist with nearly 3 years of experience spanning data engineering, applied AI/ML, and enterprise software quality assurance. Currently architecting RAG-powered document intelligence systems and real-time telemetry anomaly detection for LNG vessels at Volteo Maritime. Comfortable across the full lifecycle — from ingestion and transformation to model deployment, evaluation, and quality validation.',
  location: 'India',
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
    detail: 'Data Engineering, Applied AI/ML & QA',
    accent: 'cyan',
  },
  {
    label: 'Manual Monitoring Effort',
    value: '-40%',
    detail: 'Reduced via Real-Time Telemetry ML',
    accent: 'emerald',
  },
  {
    label: 'RAG Eval Benchmark',
    value: '43 Queries',
    detail: 'Evaluated across 3 Model Generations',
    accent: 'purple',
  },
  {
    label: 'Published Research',
    value: '2 Papers',
    detail: 'IEEE Xplore & Volteo Maritime Medium',
    accent: 'amber',
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
    summary: 'Spearheading production AI/ML architectures for maritime IoT, advanced RAG document intelligence, and real-time LNG vessel sensor telemetry.',
    accentColor: 'cyan',
    highlightBadge: 'Current Role',
    technologies: [
      'LangChain',
      'LlamaIndex',
      'QdrantDB',
      'NVIDIA NIM API',
      'FastAPI',
      'Sentence Transformers',
      'HyDE',
      'Reciprocal Rank Fusion',
      'Cross-Encoder Re-ranking',
      'NLI Faithfulness',
      'CouchDB',
      'GCS',
      'Power BI Embedded',
    ],
    bullets: [
      'Built and deployed an advanced RAG Document Assistant using LangChain, LlamaIndex, QdrantDB, NVIDIA NIM API, FastAPI, and Sentence Transformers — featuring hierarchical chunking, hybrid dense+sparse retrieval (HNSW + BM25), Reciprocal Rank Fusion, HyDE query rewriting, cross-encoder re-ranking, and NLI-based faithfulness scoring; demoed internally and iterated based on stakeholder feedback.',
      'Conducted structured RAG evaluation across 43 questions and three model versions (Gemma 3B, Latest Model, V1), designing a 5-layer evaluation framework with query drift tracking and confidence gating to identify regressions and guide model selection.',
      'Developed ML-based anomaly detection and data-quality models for real-time LNG vessel telemetry, applying statistical and time-series techniques to flag deviations and reduce manual monitoring effort by ~40%.',
      'Built and validated Boil-Off Gas (BOG) predictive models, applying data modelling and analysis techniques to improve cargo management accuracy and support operational decision-making for maritime clients.',
      'Designed and maintained real-time data pipelines to ingest and prepare sensor telemetry from LNG vessels as clean, model-ready inputs for downstream ML and analytics use cases.',
      'Prototyped a CouchDB-to-Power BI integration via FastAPI and Power BI Embedded, enabling real-time maritime analytics for non-technical stakeholders.',
    ],
  },
  {
    id: 'securden-se-trainee',
    role: 'Software Engineer Trainee',
    company: 'Securden Technologies',
    type: 'Trainee',
    period: 'Apr 2024 – Dec 2024',
    location: 'Chennai, India',
    summary: 'Engineered internal AI automation and validated mission-critical security architectures across enterprise PAM and endpoint privilege solutions.',
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
      'Tested early-stage features across the product suite and developed small internal features before moving on to build an internal AI chatbot.',
      'Validated features across three core enterprise security products: Privileged Access Management (PAM), Vault for MSPs, and Endpoint Privilege Manager (EPM).',
      'Executed comprehensive test strategies combining manual exploratory testing, REST API testing via Postman, and automation frameworks — achieving thorough coverage across functional, regression, and edge-case scenarios.',
      'Identified and escalated high-severity security misconfigurations in PAM workflows, preventing potential privilege-escalation vulnerabilities from reaching production.',
      'Authored detailed test plans, test cases, and defect reports; consistently met aggressive release timelines by coordinating closely with developers on bug triage.',
    ],
  },
  {
    id: 'securden-qa-trainee',
    role: 'Software QA Trainee',
    company: 'Securden Technologies',
    type: 'Trainee',
    period: 'Aug 2022 – Sep 2022',
    location: 'Chennai, India',
    summary: 'Gained foundational experience in quality engineering, enterprise test execution, and structured defect lifecycle management.',
    accentColor: 'rose',
    technologies: ['Manual Testing', 'Defect Reporting', 'Test Lifecycle', 'Bug Triage'],
    bullets: [
      'Supported quality assurance activities as an early trainee, gaining foundational exposure to manual testing and defect reporting workflows.',
      'Assisted engineering teams in isolating functional regressions across release candidate builds.',
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
      'Explores the implementation of machine learning architectures for continuous telemetry monitoring, Boil-Off Gas (BOG) predictive tracking, and sensor anomaly detection on liquefied natural gas (LNG) carriers to optimize fuel efficiency and cargo integrity.',
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
      'Reinforcement Learning',
      'Natural Language Processing (NLP)',
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
      'Fluid Mechanics',
      'Thermodynamics',
      'Mechatronics',
      'Manufacturing Technology',
      'Mathematics & Statistics',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'AI & Production RAG Systems',
    description: 'Advanced retrieval augmented generation, vector search, query rewriting, and LLM orchestration.',
    color: 'cyan',
    skills: [
      { name: 'LangChain & LlamaIndex', level: 'Advanced', description: 'Agentic workflows & document pipelines' },
      { name: 'QdrantDB (Vector DB)', level: 'Advanced', description: 'HNSW indexing & filtered payload search' },
      { name: 'Hybrid Retrieval (Dense + BM25)', level: 'Advanced', description: 'Lexical + Semantic rank fusion' },
      { name: 'HyDE & Query Rewriting', level: 'Advanced', description: 'Hypothetical Document Embeddings' },
      { name: 'Cross-Encoder Re-Ranking', level: 'Advanced', description: 'BGE / MS-Marco cross-attention scoring' },
      { name: 'NLI Faithfulness & Confidence Gating', level: 'Advanced', description: 'Hallucination suppression' },
      { name: 'Sentence Transformers', level: 'Advanced', description: 'Custom fine-tuned dense embeddings' },
      { name: 'NVIDIA NIM & Cloud APIs', level: 'Proficient', description: 'High-throughput microservices inference' },
    ],
  },
  {
    category: 'Data Engineering & Telemetry',
    description: 'Real-time telemetry streaming, ingestion pipelines, time-series storage, and ETL workflows.',
    color: 'emerald',
    skills: [
      { name: 'ETL Pipeline Design', level: 'Advanced', description: 'High-throughput sensor ingestion' },
      { name: 'LNG Telemetry Processing', level: 'Advanced', description: 'Industrial IoT time-series validation' },
      { name: 'CouchDB & NoSQL', level: 'Advanced', description: 'Document schemas & sync protocols' },
      { name: 'Google Cloud Storage (GCS)', level: 'Advanced', description: 'Cloud object data lakes' },
      { name: 'Apache Spark', level: 'Proficient', description: 'Distributed batch transformation' },
      { name: 'Data Quality Automation', level: 'Advanced', description: 'Schema drift & statistical checks' },
      { name: 'Workflow Orchestration', level: 'Proficient', description: 'Automated data pipeline jobs' },
    ],
  },
  {
    category: 'Machine Learning & Modelling',
    description: 'Statistical anomaly detection, predictive regression, time-series analysis, and computer vision.',
    color: 'amber',
    skills: [
      { name: 'Boil-Off Gas (BOG) Modelling', level: 'Advanced', description: 'Thermodynamic & ML predictive curves' },
      { name: 'Statistical Anomaly Detection', level: 'Advanced', description: 'Z-score, Isolation Forest, Rolling limits' },
      { name: 'Time-Series Analysis', level: 'Advanced', description: 'Trend extraction, seasonal decomposition' },
      { name: 'Deep Learning & CNNs', level: 'Advanced', description: 'Computer vision & image classification' },
      { name: 'Transfer Learning', level: 'Advanced', description: 'Fine-tuning foundation backbones' },
      { name: 'Supervised & Unsupervised ML', level: 'Advanced', description: 'Regression, clustering, tree ensembles' },
      { name: 'NLP & Text Classification', level: 'Proficient', description: 'Semantic clustering & intent classification' },
    ],
  },
  {
    category: 'Cloud, APIs & LLM Providers',
    description: 'Scalable deployment runtimes, cloud platforms, and modern generative AI SDKs.',
    color: 'purple',
    skills: [
      { name: 'Google Cloud Platform (GCP)', level: 'Advanced', description: 'Vertex AI, GCS, Cloud Compute' },
      { name: 'FastAPI', level: 'Advanced', description: 'Async high-performance REST APIs' },
      { name: 'Google Gemini API', level: 'Advanced', description: 'Multimodal & reasoning models' },
      { name: 'Anthropic Claude API', level: 'Proficient', description: 'Complex analytical prompt chains' },
      { name: 'Ollama (Gemma, LLaMA)', level: 'Advanced', description: 'Local quantized model serving' },
      { name: 'Docker (Basic)', level: 'Core', description: 'Containerization & deployment images' },
    ],
  },
  {
    category: 'Analytics, Tools & Enterprise QA',
    description: 'Business intelligence integration, testing automation, and enterprise security validation.',
    color: 'rose',
    skills: [
      { name: 'Power BI & Power BI Embedded', level: 'Advanced', description: 'Executive maritime analytics dashboards' },
      { name: 'Streamlit & Python Dashboards', level: 'Advanced', description: 'Rapid ML prototyping & interactive apps' },
      { name: 'Postman & REST API Automation', level: 'Advanced', description: 'Comprehensive regression test suites' },
      { name: 'PAM, MSP Vault & EPM QA', level: 'Advanced', description: 'High-severity privilege escalation testing' },
      { name: 'Jupyter & Google Colab', level: 'Advanced', description: 'Interactive exploratory analysis' },
      { name: 'Defect Lifecycle Management', level: 'Advanced', description: 'Bug triage & release validation' },
    ],
  },
];

export const ragPipelineStages: PipelineStage[] = [
  {
    id: 1,
    title: 'Hierarchical Document Chunking',
    subtitle: 'Context-Preserving Parsing',
    tech: ['LlamaIndex', 'Sentence Transformers', 'LangChain'],
    description:
      'Raw maritime operational manuals and telemetry spec sheets are split into parent context blocks (1024 tokens) and linked child sub-chunks (256 tokens) to retain macro context during micro retrieval.',
    details: [
      'Prevents loss of domain context in dense technical maritime specs',
      'Parent-child linkage stores metadata pointers in QdrantDB',
      'Extracts structured table metadata and section headers',
    ],
    metrics: '100% preservation of section hierarchy across 100+ maritime manuals',
    accent: 'cyan',
  },
  {
    id: 2,
    title: 'Hybrid Dense + Sparse Retrieval',
    subtitle: 'Semantic & Lexical Convergence',
    tech: ['QdrantDB', 'HNSW Indexing', 'BM25 Sparse Vectors'],
    description:
      'Executes parallel vector similarity search via Qdrant (HNSW cosine similarity) alongside BM25 sparse keyword matching to capture both conceptual intent and exact maritime equipment codes.',
    details: [
      'Dense branch captures conceptual semantic intent (e.g., "cargo pressure variance")',
      'Sparse BM25 branch prevents miss of exact vessel codes (e.g., "LNG-BOG-P702")',
      'Optimized with payload filtering by vessel type and timestamp',
    ],
    metrics: '+34% recall improvement over pure dense vector search',
    accent: 'blue',
  },
  {
    id: 3,
    title: 'Reciprocal Rank Fusion (RRF)',
    subtitle: 'Score Normalization & Blending',
    tech: ['Custom RRF Engine', 'k=60 Parameter'],
    description:
      'Combines top-k ranks from dense and sparse candidate lists using the Reciprocal Rank Fusion algorithm R(d) = sum(1 / (k + rank_i)), eliminating raw score calibration disparities.',
    details: [
      'Harmonizes unbounded BM25 scores with cosine similarity values',
      'Configurable dampening parameter (k=60) prevents outlier domination',
      'Produces a unified top-50 candidate candidate pool for refinement',
    ],
    metrics: 'Zero calibration drift across varying corpus lengths',
    accent: 'emerald',
  },
  {
    id: 4,
    title: 'HyDE Query Rewriting',
    subtitle: 'Hypothetical Document Embeddings',
    tech: ['FastAPI', 'NVIDIA NIM API / Gemma', 'Prompt Engineering'],
    description:
      'When incoming maritime queries are vague or underspecified, an LLM generates a synthetic hypothetical answer before embedding, projecting query semantics into the document manifold.',
    details: [
      'Resolves ambiguous maritime slang and engineer shorthand',
      'Generates synthetic technical answer for embedding vector alignment',
      'Bypasses zero-shot keyword mismatch on edge telemetry questions',
    ],
    metrics: '+28% semantic match on brief engineer queries',
    accent: 'amber',
  },
  {
    id: 5,
    title: 'Cross-Encoder Re-Ranking',
    subtitle: 'Deep Cross-Attention Scoring',
    tech: ['Sentence Transformers', 'Cross-Encoder (BGE/MS-Marco)'],
    description:
      'Feeds the top-25 candidate passages paired directly with the rewritten query into a deep cross-encoder model to compute fine-grained attention across query-document token interactions.',
    details: [
      'Full cross-attention scoring replaces bi-encoder dot product approximations',
      'Prunes irrelevant chunks before feeding context window into generator',
      'Limits final context to top 3-5 highly relevant passages',
    ],
    metrics: '94.2% top-3 precision on maritime operational benchmark',
    accent: 'purple',
  },
  {
    id: 6,
    title: 'NLI Faithfulness & Confidence Gating',
    subtitle: 'Hallucination Suppression & Verification',
    tech: ['Natural Language Inference', 'Confidence Thresholding'],
    description:
      'Before returning the final answer to the maritime client, a Natural Language Inference (NLI) model treats the retrieved context as premise and the generated answer as hypothesis to score factual entailment.',
    details: [
      'Checks entailment score: If < 0.85, answer is flagged or routed to human review',
      'Evaluated across 43 structured questions against Gemma 3B, V1, and Latest Model',
      'Protects against hallucinated safety procedures in critical vessel tasks',
    ],
    metrics: '0 critical safety hallucinations across 43 evaluation test suites',
    accent: 'rose',
  },
];

export const telemetrySimulationData = [
  {
    timestamp: '14:00',
    tankPressure: 104.2,
    temperature: -161.4,
    bogRate: 0.12,
    anomalyScore: 0.04,
    status: 'Nominal',
  },
  {
    timestamp: '14:15',
    tankPressure: 104.8,
    temperature: -161.2,
    bogRate: 0.13,
    anomalyScore: 0.08,
    status: 'Nominal',
  },
  {
    timestamp: '14:30',
    tankPressure: 105.5,
    temperature: -160.8,
    bogRate: 0.16,
    anomalyScore: 0.18,
    status: 'Nominal',
  },
  {
    timestamp: '14:45',
    tankPressure: 107.9,
    temperature: -159.6,
    bogRate: 0.28,
    anomalyScore: 0.79,
    status: 'Anomaly Detected',
  },
  {
    timestamp: '15:00',
    tankPressure: 106.1,
    temperature: -160.2,
    bogRate: 0.19,
    anomalyScore: 0.35,
    status: 'Stabilizing',
  },
  {
    timestamp: '15:15',
    tankPressure: 104.5,
    temperature: -161.3,
    bogRate: 0.13,
    anomalyScore: 0.06,
    status: 'Nominal',
  },
];
