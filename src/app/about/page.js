import Navbar from "@/components/Shared/Navbar"
import Footer from "@/components/Shared/Footer"
import AboutIntro from "@/components/aboutus/AboutIntro"
import MissionVision from "@/components/aboutus/MissionVision"
import TeamSection from "@/components/aboutus/TeamSection"

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="px-8 py-16 max-w-6xl mx-auto space-y-16">
        <AboutIntro />
        <MissionVision />
        <TeamSection />
      </main>

      <Footer />
    </>
  )
}

