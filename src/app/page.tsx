'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { SkillMatrix } from '@/components/SkillMatrix';
import { Publications } from '@/components/Publications';
import { Education } from '@/components/Education';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ResumeModal } from '@/components/ResumeModal';

export default function Home() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b0416] bg-cosmic-stars text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
      {/* Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* Professional Experience */}
        <Experience />

        {/* Technical Skills & Competencies */}
        <SkillMatrix />

        {/* Research & Publications */}
        <Publications />

        {/* Education & Qualifications */}
        <Education />

        {/* Contact Section */}
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
