import Navbar from "../../components/Shared/Navbar"
import Footer from "../../components/Shared/Footer"

import CorporateHero from "@/components/CorporatePartnership/CorporateHero"
import CorporateBenefits from "@/components/CorporatePartnership/CorporateBenefits"
import CorporatePrograms from "@/components/CorporatePartnership/CorporatePrograms"
import CorporateCTA from "@/components/CorporatePartnership/CorporateCTA"

export default function CorporatePartnershipPage() {
  return (
    <>
      <Navbar />
      <main>
        <CorporateHero />
        <CorporateBenefits />
        <CorporatePrograms />
        <CorporateCTA />
      </main>
      <Footer />
    </>
  )
}
