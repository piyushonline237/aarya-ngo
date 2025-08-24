import Navbar from "../../components/Shared/Navbar"
import Footer from "../../components/Shared/Footer"

import HealthcareHero from "@/components/Healthcare/HealthcareHero"
import HealthcarePrograms from "@/components/Healthcare/HealthcarePrograms"
import HealthcareImpact from "@/components/Healthcare/HealthcareImpact"
import HealthcareCTA from "@/components/Healthcare/HealthcareCTA"

export default function HealthcarePage() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <HealthcareHero />
        <HealthcarePrograms />
        <HealthcareImpact />
        <HealthcareCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

