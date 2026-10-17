'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { RAGVisualizer } from '@/components/RAGVisualizer';
import { TelemetrySimulator } from '@/components/TelemetrySimulator';
import { Experience } from '@/components/Experience';
import { Publications } from '@/components/Publications';
import { SkillMatrix } from '@/components/SkillMatrix';
import { Education } from '@/components/Education';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ResumeModal } from '@/components/ResumeModal';

export default function Home() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0b10] light:bg-[#f8fafc] text-white light:text-slate-900 bg-grid-pattern relative">
      {/* Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* Interactive Production RAG System Studio */}
        <RAGVisualizer />

        {/* Interactive Real-Time Maritime Telemetry & Anomaly Simulator */}
        <TelemetrySimulator />

        {/* Work Experience */}
        <Experience />

        {/* Research & Publications */}
        <Publications />

        {/* Technical Arsenal & Skills */}
        <SkillMatrix />

        {/* Education & Degrees */}
        <Education />

        {/* Contact Station */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Resume PDF Viewer Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
