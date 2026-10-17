import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Adabala Uday Raghavendra Kumar | Data Scientist & AI/ML Engineer',
  description:
    'Portfolio of Adabala Uday Raghavendra Kumar — Data Scientist at Volteo Maritime specializing in Production RAG architectures, real-time LNG IoT telemetry, BOG predictive modelling, and enterprise security AI.',
  keywords: [
    'Adabala Uday Raghavendra Kumar',
    'Data Scientist',
    'RAG Architect',
    'Volteo Maritime',
    'LangChain',
    'QdrantDB',
    'NVIDIA NIM',
    'Maritime IoT',
    'Boil-Off Gas Modelling',
    'Securden Technologies',
    'Machine Learning Engineer',
  ],
  authors: [{ name: 'Adabala Uday Raghavendra Kumar' }],
  openGraph: {
    title: 'Adabala Uday Raghavendra Kumar | Data Scientist & AI/ML Engineer',
    description:
      'Production RAG systems, maritime IoT telemetry anomaly detection, and predictive ML models.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-canvas-dark text-slate-100 transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
