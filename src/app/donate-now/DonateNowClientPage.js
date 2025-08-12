"use client"
import { useState } from "react"
import Navbar from "../../components/Shared/Navbar"
import Footer from "../../components/Shared/Footer"
import FavoriteIcon from "@mui/icons-material/Favorite"
import SecurityIcon from "@mui/icons-material/Security"
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"
import CreditCardIcon from "@mui/icons-material/CreditCard"

const donationAmounts = [100, 200, 500, 1000, 2000]

export default function DonateNowClientPage() {
  const [selectedAmount, setSelectedAmount] = useState(500)
  const [customAmount, setCustomAmount] = useState("")
  const [isCustom, setIsCustom] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount)
    setIsCustom(false)
    setCustomAmount("")
  }

  const handleCustomAmount = (value) => {
    setCustomAmount(value)
    setIsCustom(true)
    setSelectedAmount(0)
  }

  const getFinalAmount = () => {
    return isCustom ? Number.parseInt(customAmount) || 0 : selectedAmount
  }

  const handleDonate = async () => {
    const amount = getFinalAmount()

    if (amount < 1) {
      alert("Please enter a valid donation amount")
      return
    }

    if (!donorInfo.name || !donorInfo.email) {
      alert("Please fill in your name and email")
      return
    }

    setIsLoading(true)

    try {
      // Initialize Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_1234567890", // Replace with your Razorpay key
        amount: amount * 100, // Razorpay expects amount in paise
        currency: "INR",
        name: "Hope Foundation",
        description: "Donation to Hope Foundation",
        image: "/logo.png",
        handler: (response) => {
          // Handle successful payment
          console.log("Payment successful:", response)
          alert("Thank you for your donation! Payment ID: " + response.razorpay_payment_id)

          // Reset form
          setDonorInfo({ name: "", email: "", phone: "" })
          setSelectedAmount(500)
          setCustomAmount("")
          setIsCustom(false)
        },
        prefill: {
          name: donorInfo.name,
          email: donorInfo.email,
          contact: donorInfo.phone,
        },
        notes: {
          address: "Hope Foundation Donation",
        },
        theme: {
          color: "#ffb70b",
        },
        modal: {
          ondismiss: () => {
            setIsLoading(false)
          },
        },
      }

      // Load Razorpay script if not already loaded
      if (!window.Razorpay) {
        const script = document.createElement("script")
        script.src = "https://checkout.razorpay.com/v1/checkout.js"
        script.onload = () => {
          const rzp = new window.Razorpay(options)
          rzp.open()
        }
        document.body.appendChild(script)
      } else {
        const rzp = new window.Razorpay(options)
        rzp.open()
      }
    } catch (error) {
      console.error("Payment error:", error)
      alert("Payment failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20" style={{ backgroundColor: "#fefefe" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FavoriteIcon className="w-16 h-16 mx-auto mb-6" style={{ color: "#ffb70b" }} />
            <h1 className="text-5xl font-bold mb-6" style={{ color: "#022741" }}>
              Make a Difference Today
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your donation helps us provide education, healthcare, and essential services to communities in need. Every
              contribution, no matter the size, creates lasting impact.
            </p>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-8 lg:p-12">
                {/* Amount Selection */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6" style={{ color: "#022741" }}>
                    Choose Your Donation Amount
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleAmountSelect(amount)}
                        className={`
                          p-4 rounded-xl border-2 font-semibold transition-all duration-200
                          ${
                            selectedAmount === amount && !isCustom
                              ? "border-yellow-400 shadow-lg"
                              : "border-gray-200 hover:border-gray-300"
                          }
                        `}
                        style={{
                          backgroundColor: selectedAmount === amount && !isCustom ? "#ffb70b" : "#fefefe",
                          color: selectedAmount === amount && !isCustom ? "#022741" : "#022741",
                        }}
                      >
                        ₹{amount}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    <label className="text-lg font-semibold" style={{ color: "#022741" }}>
                      Custom Amount:
                    </label>
                    <div className="flex items-center">
                      <span className="text-lg font-semibold mr-2" style={{ color: "#022741" }}>
                        ₹
                      </span>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => handleCustomAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none"
                        min="1"
                      />
                    </div>
                  </div>
                </div>

                {/* Donor Information */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4" style={{ color: "#022741" }}>
                    Donor Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={donorInfo.name}
                      onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                      className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                      className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number (Optional)"
                      value={donorInfo.phone}
                      onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                      className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none md:col-span-2"
                    />
                  </div>
                </div>

                {/* Security Features */}
                <div className="mb-8 p-6 rounded-xl" style={{ backgroundColor: "#fefefe" }}>
                  <div className="flex items-center justify-center space-x-8">
                    <div className="flex items-center space-x-2">
                      <SecurityIcon className="w-6 h-6" style={{ color: "#ffb70b" }} />
                      <span className="text-sm font-semibold" style={{ color: "#022741" }}>
                        Secure Payment
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <VerifiedUserIcon className="w-6 h-6" style={{ color: "#ffb70b" }} />
                      <span className="text-sm font-semibold" style={{ color: "#022741" }}>
                        SSL Encrypted
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CreditCardIcon className="w-6 h-6" style={{ color: "#ffb70b" }} />
                      <span className="text-sm font-semibold" style={{ color: "#022741" }}>
                        All Cards Accepted
                      </span>
                    </div>
                  </div>
                </div>

                {/* Donate Button */}
                <button
                  onClick={handleDonate}
                  disabled={isLoading || getFinalAmount() < 1}
                  className="w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                  style={{
                    backgroundColor: "#ffb70b",
                    color: "#022741",
                  }}
                >
                  <FavoriteIcon className="w-6 h-6" />
                  <span>{isLoading ? "Processing..." : `Donate ₹${getFinalAmount()} Now`}</span>
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Your donation is secure and helps us continue our mission to serve communities in need.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20" style={{ backgroundColor: "#fefefe" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6" style={{ color: "#022741" }}>
                Your Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how your donation makes a real difference in the lives of those we serve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: "#ffffff" }}>
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#ffb70b" }}
                >
                  <span className="text-2xl font-bold" style={{ color: "#022741" }}>
                    ₹100
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#022741" }}>
                  Provides School Supplies
                </h3>
                <p className="text-gray-600">
                  Funds notebooks, pencils, and basic educational materials for one child for a month.
                </p>
              </div>

              <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: "#ffffff" }}>
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#ffb70b" }}
                >
                  <span className="text-2xl font-bold" style={{ color: "#022741" }}>
                    ₹500
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#022741" }}>
                  Supports Healthcare
                </h3>
                <p className="text-gray-600">Covers basic medical checkups and essential medicines for a family.</p>
              </div>

              <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: "#ffffff" }}>
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#ffb70b" }}
                >
                  <span className="text-2xl font-bold" style={{ color: "#022741" }}>
                    ₹2000
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#022741" }}>
                  Funds Training Programs
                </h3>
                <p className="text-gray-600">
                  Sponsors vocational training for one person to develop sustainable livelihood skills.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
