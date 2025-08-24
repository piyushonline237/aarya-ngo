import crypto from "crypto"

export async function POST(req) {
  try {
    const body = await req.json()
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body

    const sign = razorpay_order_id + "|" + razorpay_payment_id
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex")

    if (expectedSign === razorpay_signature) {
      return new Response(JSON.stringify({ success: true }), { status: 200 })
    } else {
      return new Response(JSON.stringify({ success: false }), { status: 400 })
    }
  } catch (error) {
    console.error("Payment verification error:", error)
    return new Response(JSON.stringify({ error: "Verification failed" }), { status: 500 })
  }
}
