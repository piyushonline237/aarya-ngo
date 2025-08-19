"use client"
import Link from "next/link"
import { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import DonateButton from "../DonateButton/DonateButton"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    // { href: "/who-we-are", label: "Who We Are?" },
    // { href: "/what-we-do", label: "What We Do?" },
    // { href: "/get-involved", label: "Get Involved" },
    // { href: "/resources", label: "Resources" },
    // { href: "/donate-now", label: "Donate Now" },
    // { href: "/blog", label: "Blog" },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#022741" }}
            >
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="font-bold text-xl" style={{ color: "#022741" }}>
              Prayas by Aarya Foundation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-opacity-80 font-medium transition-colors"
                style={{ color: "#022741" }}
              >
                {link.label}
              </Link>
            ))}
            <DonateButton size="small" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md" style={{ color: "#022741" }}>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium hover:bg-gray-50 rounded-md"
                  style={{ color: "#022741" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {/* <div className="px-3 py-2">
                <DonateButton size="small" />
              </div> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
