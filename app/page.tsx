import About from '@/components/server/About'
import Contact from '@/components/client/Contact'
import HeroSection from '@/components/server/HeroSection'
import Portfolio from '@/components/server/Portfolio'
import Services from '@/components/server/Services'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      {/* @ts-expect-error Server Component */}
      <Portfolio />
      <Services />
      <Contact />
    </main>
  )
}
