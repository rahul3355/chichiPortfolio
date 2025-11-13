import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import FeaturedProjects from "@/components/FeaturedProjects"
import AdditionalWork from "@/components/AdditionalWork"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="home">
        <Hero />
        <About />
        <FeaturedProjects />
        <AdditionalWork />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
