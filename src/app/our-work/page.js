import Navbar from "@/components/Shared/Navbar"
import Footer from "@/components/Shared/Footer"
import WorkIntro from "@/components/ourwork/WorkIntro"
import FocusAreas from "@/components/ourwork/FocusAreas"
import ImpactStats from "@/components/ourwork/ImpactStats"

export default function OurWorkPage() {
  return (
    <>
      <Navbar />

      <main className="px-8 py-16 max-w-6xl mx-auto space-y-16">
        <WorkIntro />
        <FocusAreas />
        <ImpactStats />
      </main>

      <Footer />
    </>
  )
}
