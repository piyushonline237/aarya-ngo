"use client"
import Image from "next/image"

export default function HomeSubscribe() {
  return (
    <div className="relative w-full bg-white border-t-4 border-[rgb(255,183,11)] py-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative">
        
        {/* Left Section - Heading */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[rgb(255,183,11)]">
            Don’t miss out on more good news.
          </h2>
          <p className="mt-3 text-[rgb(1,23,40)] font-medium">
            Sign up today and get life transforming stories and event announcements.
          </p>
        </div>

        {/* Middle Section - Form */}
        <form className="flex flex-wrap items-center gap-3">
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 min-w-[140px] px-4 py-2 border rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-[rgb(255,183,11)]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="flex-1 min-w-[180px] px-4 py-2 border rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-[rgb(255,183,11)]"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[rgb(255,183,11)] text-[rgb(1,23,40)] font-semibold rounded-full 
                       hover:bg-[rgb(230,165,10)] transition"
          >
            Subscribe Now
          </button>
          <p className="text-xs text-gray-500 w-full mt-2">
            * We won’t share your email and you can unsubscribe at any time.
          </p>
        </form>

        {/* Right Section - Sticky Image */}
        <div className="relative flex justify-end">
          <Image
            src="/images/subscribe-girl.png" // replace with actual path
            alt="Child"
            width={260}
            height={260}
            className="object-contain relative -mb-10" 
          />
        </div>
      </div>
    </div>
  )
}
