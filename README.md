# Adabala Uday Raghavendra Kumar — Portfolio Website

A modern, minimal, bold-color portfolio built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**. Designed specifically around the professional experience, publications, and skills of **Adabala Uday Raghavendra Kumar** (Data Scientist at Volteo Maritime, former Securden Technologies).

---

## 🎨 Design System: Modern Minimalist with Thicker Color Aesthetics

- **Bold Structural Geometry**: Clean high-contrast cards framed with `border-3` and `border-[2.5px]` strokes.
- **Tactile Brutalist Shadows**: Hard offset drop-shadows (`shadow-[4px_4px_0px_0px_#00d2ff]`, `shadow-[4px_4px_0px_0px_#10b981]`, `shadow-[4px_4px_0px_0px_#f59e0b]`) paired with physical button-press interactions (`active:translate-x-[2px] active:translate-y-[2px]`).
- **High-Saturation Accent Palette**:
  - ⚡ **Cyan (`#00d2ff`)**: Production RAG, LangChain, LlamaIndex, Vector DB
  - 🌿 **Emerald (`#10b981`)**: Real-time Maritime IoT Telemetry & Anomaly Detection
  - ☀️ **Amber (`#f59e0b`)**: Boil-Off Gas (BOG) Predictive Models & IEEE Publications
  - 🔮 **Purple (`#a855f7`)**: 5-Layer RAG Model Evaluation & Enterprise PAM QA
  - 🌹 **Rose (`#f43f5e`)**: Telemetry Anomaly Triggers & Critical Diagnostics
- **Light & Dark Theme Engine**: Instant zero-flicker toggle between deep obsidian dark mode and crisp bone-white light mode.

---

## 🚀 Key Features & Interactive Studios

### 1. Interactive RAG Document Intelligence Studio
Walks visitors through the exact 6-stage RAG architecture built at Volteo Maritime:
1. **Hierarchical Document Chunking** (Parent-child chunk relationships)
2. **Hybrid Dense + Sparse Retrieval** (Qdrant HNSW vector search + BM25 sparse matching)
3. **Reciprocal Rank Fusion (RRF)** ($k=60$ rank blending)
4. **HyDE Query Rewriting** (Hypothetical Document Embeddings for edge queries)
5. **Cross-Encoder Re-Ranking** (BGE/MS-Marco cross-attention scoring)
6. **NLI Faithfulness & Confidence Gating** (Natural Language Inference hallucination filtering)

### 2. 5-Layer Structured Evaluation Matrix
Interactive model comparison tab evaluating **43 benchmark questions** across 3 model versions:
- **Latest Model (Fine-tuned NIM API)**: 96.4% faithfulness, 0.8% drift
- **Gemma 3B (Local Quantized Model)**: 88.2% faithfulness, 280ms latency
- **V1 Baseline**: 79.5% faithfulness

### 3. Real-Time LNG Vessel Telemetry & Anomaly Simulator
Interactive maritime IoT dashboard simulating:
- Cargo Tank Pressure (kPa)
- Cryogenic Temperature (°C)
- Boil-Off Gas (BOG) Predictive Rate (%/day)
- Anomaly disturbance injection buttons (Pressure Spike $>108\text{ kPa}$, Thermal Leakage)
- Sensitivity threshold slider ($30\% - 90\%$) with live alert dispatch

### 4. Experience & Career Trajectory
- **Volteo Maritime** — Data Scientist (Jan 2025 – Present)
- **Securden Technologies** — Software Engineer Trainee (Apr 2024 – Dec 2024)
- **Securden Technologies** — Software QA Trainee (Aug 2022 – Sep 2022)

### 5. Publications & Research
- *AI-Powered Vessel Performance Monitoring in Maritime Operations* — Medium (Volteo Maritime), 2025
- *Rose Plant Leaves: Disease Detection and Pesticide Management using CNN* — IEEE Xplore, Jan 2022

### 6. Interactive Skill Matrix
Filterable by category:
- AI & Production RAG Systems
- Data Engineering & Telemetry (CouchDB, GCS, Spark)
- Machine Learning & Modelling (BOG, Time Series, CNNs)
- Cloud, APIs & LLM Providers (GCP, Vertex AI, NVIDIA NIM, Gemini, Claude)
- Analytics, Tools & Enterprise QA (Power BI, Streamlit, Postman)
- Spoken & Programming Languages

### 7. Resume Viewer & Downloader
- Embedded PDF viewer modal rendering the authentic `auday_resume.pdf`
- One-click direct download button

### 8. Direct Contact Station
- Interactive direct contact message form
- Direct links to Medium, LinkedIn, and GitHub
- Confidential inquiry transmission

---

## 🛠️ Project Structure

```
├── public/
│   └── auday_resume.pdf            # Official resume PDF
├── src/
│   ├── app/
│   │   ├── globals.css             # Thick border utilities, theme vars, brutalist shadows
│   │   ├── layout.tsx              # SEO metadata & ThemeProvider
│   │   └── page.tsx                # Main single-page application
│   ├── components/
│   │   ├── Navbar.tsx              # Fixed nav with theme switch & resume CTA
│   │   ├── Hero.tsx                # Headline, live status, stats & terminal box
│   │   ├── RAGVisualizer.tsx       # 6-stage RAG studio & 43-query evaluation matrix
│   │   ├── TelemetrySimulator.tsx  # LNG sensor telemetry & anomaly injection
│   │   ├── Experience.tsx          # Career trajectory & expandable achievements
│   │   ├── Publications.tsx        # IEEE & Medium research papers
│   │   ├── SkillMatrix.tsx         # Filterable skill categories & search
│   │   ├── Education.tsx           # SASTRA University M.Tech & B.Tech credentials
│   │   ├── ContactSection.tsx      # Contact cards, clipboard copy & message form
│   │   ├── Footer.tsx              # Minimalist footer & back-to-top
│   │   ├── ResumeModal.tsx         # Embedded PDF preview modal
│   │   └── ThemeProvider.tsx       # Zero-flicker Dark/Light mode context
│   ├── data/
│   │   └── portfolioData.ts        # Typed source-of-truth portfolio data
│   ├── lib/
│   │   └── utils.ts                # Class merging utility
│   └── types/
│       └── index.ts                # TypeScript interfaces
├── next.config.mjs
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

## 💻 Development & Deployment Commands

```bash
# Run local development server
npm run dev

# Build optimized production bundle
npm run build

# Start production server
npm run start
```

### Deploying to Vercel
Simply push to GitHub and connect the repository in [Vercel](https://vercel.com) — it will automatically detect Next.js with zero configuration required.
