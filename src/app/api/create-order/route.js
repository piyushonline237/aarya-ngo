import Razorpay from "razorpay"

export async function POST(req) {
  try {
    const { amount } = await req.json()

    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    })

    const options = {
      amount: amount * 100, // paise
      currency: "INR",
      receipt: "donation_rcpt_" + Date.now(),
    }

    const order = await razorpay.orders.create(options)
    return new Response(JSON.stringify(order), { status: 200 })
  } catch (err) {
    console.error("Order creation failed:", err)
    return new Response(JSON.stringify({ error: "Order creation failed" }), { status: 500 })
  }
}
