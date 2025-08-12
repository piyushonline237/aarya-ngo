import { GeistSans } from "geist/font/sans"

export const metadata = {
  title: "Prayas by Aarya Foundation - Making a Difference",
  description:
    "Join Prayas by Aarya Foundation in creating positive change in communities worldwide. Donate, volunteer, and help us build a better tomorrow.",
  generator: "Next.js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
}
        `}</style>
      </head>
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  )
}


import './globals.css'