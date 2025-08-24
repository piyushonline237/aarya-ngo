import Navbar from "../../components/Shared/Navbar"
import Footer from "../../components/Shared/Footer"
import VisionMissionSection from "@/components/visionMission/VisionMissionSection"
import Vision from "@/components/visionMission/Vision"
import Mission from "@/components/visionMission/Mission"

export default function VisionMissionPage() {
  return (
    <>
      <Navbar />
      <main>
        <VisionMissionSection />
        <Vision />
        <Mission />
      </main>
      <Footer />
    </>
  )
}
