import SchoolIcon from "@mui/icons-material/School"
import LocalHospitalIcon from "@mui/icons-material/LocalHospital"
import NatureIcon from "@mui/icons-material/Nature" // replaced EcoIcon with NatureIcon
import HomeIcon from "@mui/icons-material/Home"

export default function HomePageAbout() {
  const features = [
    {
      icon: SchoolIcon,
      title: "Education",
      description: "Providing quality education and learning opportunities to underserved communities worldwide.",
    },
    {
      icon: LocalHospitalIcon,
      title: "Healthcare",
      description: "Delivering essential healthcare services and medical support to those who need it most.",
    },
    {
      icon: NatureIcon, // replaced EcoIcon with NatureIcon
      title: "Environment",
      description: "Promoting sustainable practices and environmental conservation for future generations.",
    },
    {
      icon: HomeIcon,
      title: "Housing",
      description: "Building safe, affordable housing solutions for families in need of stable homes.",
    },
  ]

  return (
    <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#022741" }}>
            Our Mission Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We focus on four key areas to create sustainable change and improve lives in communities around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center group">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: "#ffb70b" }}
                >
                  <IconComponent className="w-10 h-10" style={{ color: "#022741" }} />
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: "#022741" }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
