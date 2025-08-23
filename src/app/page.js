import HomePageHero from "../components/HomePage/HomePageHero"
import HomePageCTA from "../components/HomePage/HomePageCTA"
import HomePageAbout from "../components/HomePage/HomePageAbout"
import HomePageImpact from "../components/HomePage/HomePageImpact"
import Navbar from "../components/Shared/Navbar"
import Footer from "../components/Shared/Footer"
import HomeCarousel from "@/components/HomePage/HomeCarousel"
import HomeSubscribe from "@/components/HomePage/HomeSubscribe"

export const metadata = {
  title: "Prayas by Aarya Foundation - Making a Difference Together",
  description:
    "Join Prayas by Aarya Foundation in creating positive change worldwide. Support our mission through donations, volunteering, and community engagement.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-[1px]"> 
        {/* 👆 Matches Navbar height (h-16 = 64px) */}

        <HomeCarousel />
        <HomePageHero />
        <HomePageAbout />
        <HomePageImpact />
        <HomePageCTA />
        <HomeSubscribe />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
