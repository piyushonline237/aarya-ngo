"use client"
import { useState } from "react"

export default function DonatePage() {
  const [amount, setAmount] = useState(500) // default ₹500

  const handleDonate = async () => {
    try {
      // 1. Create order on backend
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      })
      const orderData = await res.json()

      // 2. Open Razorpay checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.id,
        name: "Prayas by Aarya Foundation",
        description: "Donation Support",
        handler: function (response) {
          alert("Thank you! Payment successful. ID: " + response.razorpay_payment_id)
        },
        theme: { color: "#3399cc" },
      }

      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch (err) {
      console.error(err)
      alert("Something went wrong")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Support Our Cause</h1>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border px-4 py-2 mb-4 rounded"
        placeholder="Enter amount"
      />

      <button
        onClick={handleDonate}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Donate ₹{amount}
      </button>
    </div>
  )
}
