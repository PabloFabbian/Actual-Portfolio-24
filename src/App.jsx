import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SelfSummary from './components/Self-Summary';
import TechStack from './components/TechStack';
import ContactForm from './components/ContactForm';
import { Toaster } from 'sonner';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main role="main">
        <HeroSection />
        <ProjectsSection />
        <SelfSummary />
        <TechStack />
        <ContactForm />
      </main>
      <Toaster richColors position="bottom-center" />
    </>
  );
}