import Razorpay from "razorpay"
import { NextResponse } from "next/server"

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
})

export async function POST(request) {
  try {
    const { amount, currency = "INR", donorInfo } = await request.json()

    if (!amount || amount < 1) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 })
    }

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error("Razorpay credentials not configured")
      return NextResponse.json({ error: "Payment service not configured" }, { status: 500 })
    }

    // Create order with additional metadata
    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100), // Convert to paise and ensure integer
      currency,
      receipt: `donation_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      notes: {
        donor_name: donorInfo?.name || "Anonymous",
        donor_email: donorInfo?.email || "",
        donation_type: "website_donation",
        timestamp: new Date().toISOString(),
      },
    })

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    })
  } catch (error) {
    console.error("Error creating Razorpay order:", error)
    return NextResponse.json(
      {
        error: "Failed to create order",
        message: process.env.NODE_ENV === "development" ? error.message : "Internal server error",
      },
      { status: 500 },
    )
  }
}
