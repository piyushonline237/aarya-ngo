import DonateButton from "../DonateButton/DonateButton"
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism"
import GroupsIcon from "@mui/icons-material/Groups"
import PublicIcon from "@mui/icons-material/Public"

export default function HomePageHero() {
  return (
    <section className="relative min-h-screen flex items-center" style={{ backgroundColor: "#fefefe" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ color: "#022741" }}>
              Creating Hope, this is my changes
              <span className="block" style={{ color: "#ffb70b" }}>
                Changing Lives
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join us in our mission to build stronger communities through education, healthcare, and sustainable
              development. Together, we can make a lasting impact on the world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <DonateButton size="large" />
              <button
                className="px-8 py-4 text-lg font-semibold rounded-lg border-2 transition-all duration-200 hover:shadow-lg"
                style={{
                  borderColor: "#022741",
                  color: "#022741",
                  backgroundColor: "transparent",
                }}
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <GroupsIcon className="w-8 h-8" style={{ color: "#ffb70b" }} />
                </div>
                <div className="text-3xl font-bold" style={{ color: "#022741" }}>
                  50K+
                </div>
                <div className="text-gray-600">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <PublicIcon className="w-8 h-8" style={{ color: "#ffb70b" }} />
                </div>
                <div className="text-3xl font-bold" style={{ color: "#022741" }}>
                  25+
                </div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <VolunteerActivismIcon className="w-8 h-8" style={{ color: "#ffb70b" }} />
                </div>
                <div className="text-3xl font-bold" style={{ color: "#022741" }}>
                  100+
                </div>
                <div className="text-gray-600">Projects</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/volunteers-children-community.png"
                alt="Hope Foundation volunteers helping communities"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#ffb70b" }}
            >
              <VolunteerActivismIcon className="w-12 h-12" style={{ color: "#022741" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
