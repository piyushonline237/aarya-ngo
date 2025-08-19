import DonateButton from "../DonateButton/DonateButton"
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism"
import HandshakeIcon from "@mui/icons-material/Handshake"

export default function HomePageCTA() {
  return (
    <section className="py-20" style={{ backgroundColor: "#fefefe" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#022741" }}>
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of supporters who are helping us create positive change. Every contribution, big or small,
            makes a real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Donate Card */}
          <div className="text-center p-8 rounded-2xl shadow-lg" style={{ backgroundColor: "#ffffff" }}>
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "#ffb70b" }}
            >
              <VolunteerActivismIcon className="w-10 h-10" style={{ color: "#022741" }} />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#022741" }}>
              Make a Donation
            </h3>
            <p className="text-gray-600 mb-6">
              Your financial support helps us expand our programs and reach more communities in need.
            </p>
            <DonateButton size="large" />
          </div>

          {/* Volunteer Card */}
          <div className="text-center p-8 rounded-2xl shadow-lg" style={{ backgroundColor: "#ffffff" }}>
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "#ffb70b" }}
            >
              <HandshakeIcon className="w-10 h-10" style={{ color: "#022741" }} />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#022741" }}>
              Become a Volunteer
            </h3>
            <p className="text-gray-600 mb-6">
              Share your time and skills to directly impact lives and build stronger communities.
            </p>
            {/* <button
              className="px-8 py-4 text-lg font-semibold rounded-lg border-2 transition-all duration-200 hover:shadow-lg"
              style={{
                borderColor: "#022741",
                color: "#022741",
                backgroundColor: "transparent",
              }}
            >
              Get Involved
            </button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
