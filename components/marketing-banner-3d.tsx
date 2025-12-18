"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Store, TrendingUp, Shield, CheckCircle } from "lucide-react"

export function MarketingBanner3D() {
  const partnerLogos = ["HDFC Bank", "ICICI Bank", "SBI", "Axis Bank", "Kotak", "Yes Bank", "IndusInd", "Federal Bank"]

  return (
    <section className="relative py-8 sm:py-12 lg:py-16 overflow-hidden">
      {/* Soft pastel background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8F4FD] via-[#F0F9FF] to-[#E6FFFA]" />

      {/* Decorative blurred shapes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0064D6]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#12D6E7]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8 items-center">
          {/* Left Content - spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 lg:col-span-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-[#0064D6] mb-4 shadow-sm border border-[#0064D6]/10">
              <TrendingUp className="w-4 h-4" />
              Smart Financial Solutions
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#111111] leading-tight mb-4">
              Your Financial Goals,{" "}
              <span className="bg-gradient-to-r from-[#0064D6] to-[#12D6E7] bg-clip-text text-transparent">
                Made Simple
              </span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-lg leading-relaxed">
              Experience seamless loan management with our intuitive app. Track applications, manage EMIs, and unlock
              exclusive offers - all in one place.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {["Instant loan approval", "Track EMI payments", "Compare best rates", "Secure transactions"].map(
                (feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#12D6E7]/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-[#008B96]" />
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </motion.div>
                ),
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/eligibility">
                <motion.button
                  className="group bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-[#0064D6]/25 flex items-center gap-2"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,100,214,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/products">
                <motion.button
                  className="px-6 py-3 rounded-xl font-semibold text-[#0064D6] border-2 border-[#0064D6]/20 hover:bg-[#0064D6]/5 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Products
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-3 lg:order-2 hidden lg:block"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50 h-[400px] overflow-hidden">
              <h3 className="text-sm font-semibold text-gray-700 mb-4 text-center">Trusted Partners</h3>
              <div className="relative h-[340px] overflow-hidden">
                <motion.div
                  className="space-y-4"
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-center"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-[#0064D6]/10 to-[#12D6E7]/10 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-[#0064D6] font-bold text-sm">{logo.charAt(0)}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{logo}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-4 lg:order-3 hidden lg:block"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50 h-[400px] overflow-hidden">
              <h3 className="text-sm font-semibold text-gray-700 mb-4 text-center">Recent Approvals</h3>
              <div className="relative h-[340px] overflow-hidden">
                <motion.div
                  className="space-y-4"
                  animate={{ y: ["-50%", "0%"] }}
                  transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  {[
                    { name: "Rahul S.", amount: "₹5,00,000", type: "Personal Loan" },
                    { name: "Priya M.", amount: "₹25,00,000", type: "Home Loan" },
                    { name: "Amit K.", amount: "₹8,50,000", type: "Business Loan" },
                    { name: "Sneha R.", amount: "₹3,00,000", type: "Personal Loan" },
                    { name: "Vikram T.", amount: "₹12,00,000", type: "Car Loan" },
                    { name: "Neha P.", amount: "₹6,75,000", type: "Education Loan" },
                    { name: "Rahul S.", amount: "₹5,00,000", type: "Personal Loan" },
                    { name: "Priya M.", amount: "₹25,00,000", type: "Home Loan" },
                    { name: "Amit K.", amount: "₹8,50,000", type: "Business Loan" },
                    { name: "Sneha R.", amount: "₹3,00,000", type: "Personal Loan" },
                    { name: "Vikram T.", amount: "₹12,00,000", type: "Car Loan" },
                    { name: "Neha P.", amount: "₹6,75,000", type: "Education Loan" },
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                          <p className="text-xs text-gray-500">{item.type}</p>
                        </div>
                      </div>
                      <p className="text-lg font-bold text-[#0064D6] mt-2">{item.amount}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - 3D Style Illustration - Now in mobile only row */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-4 lg:col-span-4 lg:mt-8"
          >
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}
