import Navbar from "../../components/Shared/Navbar"
import Footer from "../../components/Shared/Footer"

import WorkHero from "@/components/WorkWithUs/WorkHero"
import WorkOpportunities from "@/components/WorkWithUs/WorkOpportunities"
import WorkVolunteer from "@/components/WorkWithUs/WorkVolunteer"
import WorkCTA from "@/components/WorkWithUs/WorkCTA"

export default function WorkWithUsPage() {
  return (
    <>
      <Navbar />
      <main>
        <WorkHero />
        <WorkOpportunities />
        <WorkVolunteer />
        <WorkCTA />
      </main>
      <Footer />
    </>
  )
}
