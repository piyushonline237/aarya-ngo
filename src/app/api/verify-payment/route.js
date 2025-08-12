import crypto from "crypto"
import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, donorInfo } = await request.json()

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ success: false, message: "Missing required payment parameters" }, { status: 400 })
    }

    if (!process.env.RAZORPAY_KEY_SECRET) {
      console.error("Razorpay key secret not configured")
      return NextResponse.json({ success: false, message: "Payment service not configured" }, { status: 500 })
    }

    // Create signature
    const body = razorpay_order_id + "|" + razorpay_payment_id
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex")

    const isAuthentic = expectedSignature === razorpay_signature

    if (isAuthentic) {
      // Payment is verified
      console.log("Payment verified successfully", {
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        donorName: donorInfo?.name || "Anonymous",
        donorEmail: donorInfo?.email || "Not provided",
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json({
        success: true,
        message: "Payment verified successfully",
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
      })
    } else {
      console.error("Payment verification failed", {
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        expectedSignature,
        receivedSignature: razorpay_signature,
      })

      return NextResponse.json({ success: false, message: "Payment verification failed" }, { status: 400 })
    }
  } catch (error) {
    console.error("Error verifying payment:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Payment verification failed",
        message: process.env.NODE_ENV === "development" ? error.message : "Internal server error",
      },
      { status: 500 },
    )
  }
}
