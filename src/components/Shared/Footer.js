import Link from "next/link"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "#022741" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#ffb70b" }}
              >
                <span className="font-bold text-lg" style={{ color: "#022741" }}>
                  H
                </span>
              </div>
              <span className="font-bold text-xl">Hope Foundation</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Dedicated to creating positive change in communities worldwide through education, healthcare, and
              sustainable development programs.
            </p>
            <div className="flex space-x-4">
              <FacebookIcon
                className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer"
                style={{ color: "#ffb70b" }}
              />
              <TwitterIcon
                className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer"
                style={{ color: "#ffb70b" }}
              />
              <InstagramIcon
                className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer"
                style={{ color: "#ffb70b" }}
              />
              <LinkedInIcon
                className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer"
                style={{ color: "#ffb70b" }}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4" style={{ color: "#ffb70b" }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/who-we-are" className="text-gray-300 hover:text-white">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-gray-300 hover:text-white">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-gray-300 hover:text-white">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-300 hover:text-white">
                  Donate Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4" style={{ color: "#ffb70b" }}>
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <EmailIcon className="w-5 h-5" style={{ color: "#ffb70b" }} />
                <span className="text-gray-300">info@hopefoundation.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5" style={{ color: "#ffb70b" }} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-2">
                <LocationOnIcon className="w-5 h-5 mt-1" style={{ color: "#ffb70b" }} />
                <span className="text-gray-300">
                  123 Hope Street
                  <br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Hope Foundation. All rights reserved. |
            <Link href="/privacy" className="hover:text-white ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-white ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
