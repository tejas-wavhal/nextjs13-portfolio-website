import About from '@/components/server/About'
import Contact from '@/components/client/Contact'
import HeroSection from '@/components/server/HeroSection'
import Portfolio from '@/components/server/Portfolio'
import Services from '@/components/server/Services'





export default async function page() {

  return (
    <main>
      <HeroSection />
      <About />
      {/* @ts-expect-error Async Server Component */}
      <Portfolio />
      <Services />
      <Contact />
    </main>
  )
}
