import HomePageHero from "../components/HomePage/HomePageHero"
import HomePageCTA from "../components/HomePage/HomePageCTA"
import HomePageAbout from "../components/HomePage/HomePageAbout"
import HomePageImpact from "../components/HomePage/HomePageImpact"
import Navbar from "../components/Shared/Navbar"
import Footer from "../components/Shared/Footer"

export const metadata = {
  title: "Hope Foundation - Making a Difference Together",
  description:
    "Join Hope Foundation in creating positive change worldwide. Support our mission through donations, volunteering, and community engagement.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HomePageHero />
        <HomePageAbout />
        <HomePageImpact />
        <HomePageCTA />
      </main>
      <Footer />
    </div>
  )
}
