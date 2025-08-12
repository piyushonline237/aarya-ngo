import Navbar from "../../components/Shared/Navbar"
import Footer from "../../components/Shared/Footer"
import DonateButton from "../../components/DonateButton/DonateButton"
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks"
import AssessmentIcon from "@mui/icons-material/Assessment"
import DownloadIcon from "@mui/icons-material/Download"
import LinkIcon from "@mui/icons-material/Link"
import SchoolIcon from "@mui/icons-material/School"
import PolicyIcon from "@mui/icons-material/Policy"

export const metadata = {
  title: "Resources - Hope Foundation | Educational Materials & Reports",
  description:
    "Access Hope Foundation's educational materials, annual reports, research publications, and useful resources for community development and social impact.",
}

export default function ResourcesPage() {
  const resources = [
    {
      category: "Annual Reports",
      icon: AssessmentIcon,
      color: "#ffb70b",
      items: [
        {
          title: "Annual Report 2023",
          description: "Comprehensive overview of our programs, impact, and financial transparency for 2023.",
          type: "PDF",
          size: "2.4 MB",
          downloadUrl: "#",
        },
        {
          title: "Annual Report 2022",
          description: "Detailed report showcasing our achievements and community impact in 2022.",
          type: "PDF",
          size: "2.1 MB",
          downloadUrl: "#",
        },
        {
          title: "Financial Summary 2023",
          description: "Transparent breakdown of our financial activities and fund utilization.",
          type: "PDF",
          size: "1.2 MB",
          downloadUrl: "#",
        },
      ],
    },
    {
      category: "Educational Materials",
      icon: SchoolIcon,
      color: "#022741",
      items: [
        {
          title: "Community Health Guide",
          description: "Practical guide for basic healthcare and hygiene practices in rural communities.",
          type: "PDF",
          size: "3.2 MB",
          downloadUrl: "#",
        },
        {
          title: "Literacy Program Handbook",
          description: "Comprehensive handbook for volunteers teaching basic literacy skills.",
          type: "PDF",
          size: "4.1 MB",
          downloadUrl: "#",
        },
        {
          title: "Nutrition Education Kit",
          description: "Educational materials about proper nutrition and healthy eating habits.",
          type: "PDF",
          size: "2.8 MB",
          downloadUrl: "#",
        },
      ],
    },
    {
      category: "Research & Studies",
      icon: LibraryBooksIcon,
      color: "#ffb609",
      items: [
        {
          title: "Rural Education Impact Study",
          description: "Research on the effectiveness of our education programs in rural communities.",
          type: "PDF",
          size: "5.6 MB",
          downloadUrl: "#",
        },
        {
          title: "Healthcare Access Analysis",
          description: "Comprehensive analysis of healthcare accessibility in underserved areas.",
          type: "PDF",
          size: "4.3 MB",
          downloadUrl: "#",
        },
        {
          title: "Community Development Best Practices",
          description: "Research-based recommendations for sustainable community development.",
          type: "PDF",
          size: "3.7 MB",
          downloadUrl: "#",
        },
      ],
    },
    {
      category: "Policy Documents",
      icon: PolicyIcon,
      color: "#011728",
      items: [
        {
          title: "Child Protection Policy",
          description: "Our comprehensive policy ensuring the safety and protection of children in our programs.",
          type: "PDF",
          size: "1.8 MB",
          downloadUrl: "#",
        },
        {
          title: "Volunteer Code of Conduct",
          description: "Guidelines and expectations for all volunteers working with our organization.",
          type: "PDF",
          size: "1.1 MB",
          downloadUrl: "#",
        },
        {
          title: "Privacy and Data Protection",
          description: "Our commitment to protecting personal data and privacy of beneficiaries and supporters.",
          type: "PDF",
          size: "1.5 MB",
          downloadUrl: "#",
        },
      ],
    },
  ]

  const usefulLinks = [
    {
      title: "Ministry of Health and Family Welfare",
      description: "Government health policies and programs",
      url: "https://mohfw.gov.in/",
    },
    {
      title: "Ministry of Education",
      description: "Educational policies and initiatives",
      url: "https://education.gov.in/",
    },
    {
      title: "NITI Aayog",
      description: "Development planning and policy research",
      url: "https://niti.gov.in/",
    },
    {
      title: "UN Sustainable Development Goals",
      description: "Global framework for sustainable development",
      url: "https://sdgs.un.org/",
    },
    {
      title: "World Health Organization",
      description: "Global health guidance and resources",
      url: "https://who.int/",
    },
    {
      title: "UNESCO",
      description: "Education, science and culture resources",
      url: "https://unesco.org/",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20" style={{ backgroundColor: "#fefefe" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <LibraryBooksIcon className="w-16 h-16 mx-auto mb-6" style={{ color: "#ffb70b" }} />
              <h1 className="text-5xl font-bold mb-6" style={{ color: "#022741" }}>
                Resources
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Access our comprehensive collection of reports, educational materials, research studies, and useful
                resources to support community development and social impact initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {resources.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="flex items-center space-x-4 mb-8">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: category.color }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold" style={{ color: "#022741" }}>
                    {category.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold" style={{ color: "#022741" }}>
                          {item.title}
                        </h3>
                        <span
                          className="px-2 py-1 rounded text-xs font-semibold text-white"
                          style={{ backgroundColor: category.color }}
                        >
                          {item.type}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{item.size}</span>
                        <button
                          className="flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-colors"
                          style={{ backgroundColor: "#ffb70b", color: "#022741" }}
                        >
                          <DownloadIcon className="w-4 h-4" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Useful Links */}
        <section className="py-20" style={{ backgroundColor: "#fefefe" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6" style={{ color: "#022741" }}>
                Useful Links
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore external resources and organizations that align with our mission and can provide additional
                support for community development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {usefulLinks.map((link, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#ffb70b" }}
                    >
                      <LinkIcon className="w-5 h-5" style={{ color: "#022741" }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2" style={{ color: "#022741" }}>
                        {link.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{link.description}</p>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-sm font-semibold hover:underline"
                        style={{ color: "#ffb70b" }}
                      >
                        <span>Visit Website</span>
                        <LinkIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 text-center">
              <h2 className="text-4xl font-bold mb-6" style={{ color: "#022741" }}>
                Stay Updated
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest resources, reports, and updates about our programs and
                impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none"
                />
                <button
                  className="px-6 py-3 rounded-lg font-semibold transition-colors"
                  style={{ backgroundColor: "#ffb70b", color: "#022741" }}
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy and will never share your email address.
              </p>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-20" style={{ backgroundColor: "#fefefe" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6" style={{ color: "#022741" }}>
              Support Our Work
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Help us continue creating and sharing valuable resources that support community development and social
              impact initiatives.
            </p>
            <DonateButton size="large" className="mx-auto" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
