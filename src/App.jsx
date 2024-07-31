import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import SelfSummary from './components/Self-Summary'
import TechStack from './components/TechStack'
import ContactForm from './components/ContactForm'

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SelfSummary />
      <TechStack />
      <ContactForm />
    </>
  )
}
