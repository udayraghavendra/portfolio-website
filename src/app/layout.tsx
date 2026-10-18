import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Adabala Uday Raghavendra Kumar | Data Scientist & AI/ML Engineer',
  description:
    'Resume & portfolio of Adabala Uday Raghavendra Kumar — Data Scientist specializing in Production RAG architectures, real-time IoT anomaly detection, and predictive ML models.',
  keywords: [
    'Adabala Uday Raghavendra Kumar',
    'Uday Raghavendra',
    'Data Scientist',
    'Machine Learning Engineer',
    'Volteo Maritime',
    'RAG Systems',
    'LangChain',
    'LlamaIndex',
    'QdrantDB',
    'Time Series ML',
    'Securden Technologies',
  ],
  authors: [{ name: 'Adabala Uday Raghavendra Kumar' }],
  openGraph: {
    title: 'Adabala Uday Raghavendra Kumar | Data Scientist & AI/ML Engineer',
    description:
      'Data Scientist specializing in Production RAG systems, IoT telemetry anomaly detection, and end-to-end ML pipelines.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0f1117] dark:text-slate-100 transition-colors duration-200 antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
