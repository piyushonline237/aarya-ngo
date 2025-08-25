import Razorpay from "razorpay"

export async function POST(req) {
  try {
    const { amount } = await req.json()

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    })

    const order = await instance.orders.create({
      amount: amount * 100, // convert to paise
      currency: "INR",
      payment_capture: 1,
    })

    return new Response(JSON.stringify(order), { status: 200 })
  } catch (error) {
    console.error("Order creation error:", error)
    return new Response(JSON.stringify({ error: "Order creation failed" }), { status: 500 })
  }
}
