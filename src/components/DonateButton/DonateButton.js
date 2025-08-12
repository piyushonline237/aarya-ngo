"use client"
import { useState } from "react"
import FavoriteIcon from "@mui/icons-material/Favorite"

export default function DonateButton({ size = "medium", className = "", amount = null, showAmount = false }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleDonate = async (donationAmount = null) => {
    setIsLoading(true)

    try {
      // If specific amount is provided, handle quick donation
      if (donationAmount) {
        const orderResponse = await fetch("/api/create-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: donationAmount,
            currency: "INR",
            donorInfo: {
              name: "Quick Donation",
              email: "",
            },
          }),
        })

        if (!orderResponse.ok) {
          throw new Error("Failed to create order")
        }

        const orderData = await orderResponse.json()

        // Initialize Razorpay for quick donation
        const options = {
          key: orderData.key || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: orderData.amount,
          currency: orderData.currency,
          name: "Hope Foundation",
          description: `Quick Donation - ₹${donationAmount}`,
          order_id: orderData.orderId,
          image: "/logo.png",
          handler: async (response) => {
            try {
              const verifyResponse = await fetch("/api/verify-payment", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  donorInfo: {
                    name: "Quick Donation",
                    email: "",
                  },
                }),
              })

              const verifyData = await verifyResponse.json()

              if (verifyData.success) {
                alert("Thank you for your donation! Your contribution makes a difference.")
              } else {
                alert("Payment verification failed. Please contact support.")
              }
            } catch (error) {
              console.error("Payment verification error:", error)
              alert("Payment completed but verification failed. Please contact support.")
            }
          },
          prefill: {
            name: "",
            email: "",
            contact: "",
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

        if (!window.Razorpay) {
          const script = document.createElement("script")
          script.src = "https://checkout.razorpay.com/v1/checkout.js"
          script.onload = () => {
            const rzp = new window.Razorpay(options)
            rzp.open()
          }
          script.onerror = () => {
            alert("Failed to load payment gateway. Please try again.")
            setIsLoading(false)
          }
          document.body.appendChild(script)
        } else {
          const rzp = new window.Razorpay(options)
          rzp.open()
        }
      } else {
        // Redirect to full donation page
        window.location.href = "/donate-now"
      }
    } catch (error) {
      console.error("Donation error:", error)
      alert("Payment failed. Please try again.")
      setIsLoading(false)
    }
  }

  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  }

  return (
    <button
      onClick={() => handleDonate(amount)}
      disabled={isLoading}
      className={`
        ${sizeClasses[size]}
        font-semibold rounded-lg transition-all duration-200
        flex items-center space-x-2 hover:shadow-lg
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      style={{
        backgroundColor: "#ffb70b",
        color: "#022741",
      }}
    >
      <FavoriteIcon className="w-5 h-5" />
      <span>{isLoading ? "Processing..." : showAmount && amount ? `Donate ₹${amount}` : "Donate Now"}</span>
    </button>
  )
}
