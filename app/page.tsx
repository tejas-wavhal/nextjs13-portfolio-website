import About from '@/components/server/About'
import Contact from '@/components/client/Contact'
import HeroSection from '@/components/server/HeroSection'
import Portfolio from '@/components/server/Portfolio'
import Services from '@/components/server/Services'
import { Project } from '@/types'

export default async function Home() {
  const res = await fetch(`${process.env.URL}/api/projects`,
    {
      method: "GET",
    }
  );
  const projects: { success: boolean, projects: Project[] } = await res.json();

  return (
    <main>
      <HeroSection />
      <About />
      <Portfolio projects={projects} />
      <Services />
      <Contact />
    </main>
  )
}
