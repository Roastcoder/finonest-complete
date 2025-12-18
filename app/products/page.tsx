"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ParallaxCard } from "@/components/parallax-card"
import { useParallax } from "@/components/parallax-provider"
import Link from "next/link"
import {
  Home,
  User,
  Briefcase,
  CreditCard,
  Car,
  GraduationCap,
  ArrowRight,
  Check,
  Calculator,
  FileText,
  Shield,
  Clock,
} from "lucide-react"

const products = [
  {
    id: "personal",
    icon: User,
    title: "Personal Loans",
    tagline: "For all your personal needs",
    description:
      "Get quick personal loans with minimal documentation. Whether it's for a wedding, medical emergency, or travel, we've got you covered.",
    rate: "10.5%",
    maxAmount: "₹25 Lakhs",
    tenure: "1-5 Years",
    processingFee: "1%",
    color: "#0064D6",
    features: [
      "Instant approval in 24 hours",
      "Minimal documentation required",
      "No collateral needed",
      "Flexible EMI options",
      "Prepayment without penalty",
    ],
    eligibility: [
      "Age: 21-60 years",
      "Minimum income: ₹25,000/month",
      "Employment: Salaried or Self-employed",
      "Credit score: 650+",
    ],
  },
  {
    id: "home",
    icon: Home,
    title: "Home Loans",
    tagline: "Make your dream home a reality",
    description:
      "Affordable home loans with the longest tenure and lowest interest rates. Turn your dream of owning a home into reality.",
    rate: "8.5%",
    maxAmount: "₹5 Crores",
    tenure: "5-30 Years",
    processingFee: "0.5%",
    color: "#12D6E7",
    features: [
      "Lowest interest rates in market",
      "Up to 90% financing",
      "Balance transfer facility",
      "Top-up loan available",
      "Tax benefits under Section 80C",
    ],
    eligibility: [
      "Age: 23-65 years",
      "Minimum income: ₹40,000/month",
      "Employment: 2+ years experience",
      "Property: Within city limits",
    ],
  },
  {
    id: "business",
    icon: Briefcase,
    title: "Business Loans",
    tagline: "Fuel your business growth",
    description:
      "Flexible business loans to help you expand operations, manage working capital, or invest in new equipment.",
    rate: "12%",
    maxAmount: "₹50 Lakhs",
    tenure: "1-7 Years",
    processingFee: "1.5%",
    color: "#008B96",
    features: [
      "Quick disbursement",
      "Collateral-free up to ₹25L",
      "Overdraft facility available",
      "Working capital financing",
      "Equipment financing",
    ],
    eligibility: ["Business age: 2+ years", "Annual turnover: ₹10L+", "ITR for last 2 years", "GST registration"],
  },
  {
    id: "credit",
    icon: CreditCard,
    title: "Credit Cards",
    tagline: "Exclusive rewards & benefits",
    description:
      "Premium credit cards with cashback, travel rewards, and exclusive lifestyle benefits tailored for your spending habits.",
    rate: "0%",
    maxAmount: "₹10 Lakhs",
    tenure: "Lifetime",
    processingFee: "₹0",
    color: "#002E9C",
    features: [
      "Up to 5% cashback",
      "Airport lounge access",
      "Travel insurance cover",
      "Fuel surcharge waiver",
      "EMI conversion on purchases",
    ],
    eligibility: [
      "Age: 21-65 years",
      "Minimum income: ₹30,000/month",
      "Good credit history",
      "No defaults in last 6 months",
    ],
  },
  {
    id: "vehicle",
    icon: Car,
    title: "Vehicle Loans",
    tagline: "Drive your dream car home",
    description:
      "Easy vehicle loans for new and used cars with competitive rates and quick processing. Get on the road faster.",
    rate: "9.5%",
    maxAmount: "₹1 Crore",
    tenure: "1-7 Years",
    processingFee: "0.5%",
    color: "#0064D6",
    features: [
      "Up to 100% on-road funding",
      "New & used car financing",
      "Quick 1-day approval",
      "Doorstep document pickup",
      "Insurance assistance",
    ],
    eligibility: [
      "Age: 21-65 years",
      "Minimum income: ₹25,000/month",
      "Employment: Stable job/business",
      "Valid driving license",
    ],
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education Loans",
    tagline: "Invest in your future",
    description:
      "Comprehensive education loans covering tuition, living expenses, and more for studies in India and abroad.",
    rate: "7.5%",
    maxAmount: "₹75 Lakhs",
    tenure: "5-15 Years",
    processingFee: "0%",
    color: "#12D6E7",
    features: [
      "Zero processing fee",
      "Moratorium during study",
      "Covers all expenses",
      "No collateral up to ₹7.5L",
      "Tax benefits under 80E",
    ],
    eligibility: [
      "Age: 18-35 years",
      "Admission to recognized institution",
      "Co-applicant required",
      "Academic merit considered",
    ],
  },
]

export default function ProductsPage() {
  const { setIsHoveringCTA } = useParallax()
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <div ref={sectionRef} className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section className="relative pt-32 pb-20 overflow-hidden" style={{ y: heroY, opacity: heroOpacity }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f7fa] to-white" />

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-[#0064D6]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-0 right-10 w-96 h-96 bg-[#12D6E7]/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            className="inline-block px-4 py-2 bg-[#0064D6]/10 rounded-full text-[#0064D6] text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Products
          </motion.span>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111] mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Financial Products{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0064D6] to-[#12D6E7]">
              Built for You
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Explore our comprehensive range of financial products designed to meet every need. Competitive rates, quick
            approvals, and transparent processes.
          </motion.p>
        </div>
      </motion.section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                id={product.id}
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Product Card */}
                  <ParallaxCard className="lg:sticky lg:top-24" glowColor={product.color}>
                    <div className="relative">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center"
                          style={{ backgroundColor: `${product.color}15` }}
                        >
                          <product.icon className="w-8 h-8" style={{ color: product.color }} />
                        </div>
                        <div
                          className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{ backgroundColor: `${product.color}15`, color: product.color }}
                        >
                          From {product.rate} p.a.
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold text-[#111111] mb-2">{product.title}</h2>
                      <p className="text-gray-500 mb-4">{product.tagline}</p>
                      <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                      {/* Quick stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="p-4 bg-[#f4f7fa] rounded-xl">
                          <div className="text-2xl font-bold" style={{ color: product.color }}>
                            {product.maxAmount}
                          </div>
                          <div className="text-sm text-gray-500">Max Amount</div>
                        </div>
                        <div className="p-4 bg-[#f4f7fa] rounded-xl">
                          <div className="text-2xl font-bold text-[#111111]">{product.tenure}</div>
                          <div className="text-sm text-gray-500">Tenure</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <Link href="/contact">
                        <motion.button
                          className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2"
                          style={{ background: `linear-gradient(135deg, ${product.color}, #002E9C)` }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onMouseEnter={() => setIsHoveringCTA(true)}
                          onMouseLeave={() => setIsHoveringCTA(false)}
                        >
                          Apply Now
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </Link>
                    </div>
                  </ParallaxCard>

                  {/* Details */}
                  <div className="space-y-6">
                    {/* Features */}
                    <motion.div
                      className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 border border-gray-100"
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-lg font-bold text-[#111111] mb-4 flex items-center gap-2">
                        <Check className="w-5 h-5" style={{ color: product.color }} />
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: product.color }} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Eligibility */}
                    <motion.div
                      className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 border border-gray-100"
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <h3 className="text-lg font-bold text-[#111111] mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5" style={{ color: product.color }} />
                        Eligibility Criteria
                      </h3>
                      <ul className="space-y-3">
                        {product.eligibility.map((item) => (
                          <li key={item} className="flex items-center gap-3 text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: product.color }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Quick info */}
                    <motion.div
                      className="grid grid-cols-3 gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="bg-[#f4f7fa] rounded-xl p-4 text-center">
                        <Calculator className="w-5 h-5 mx-auto mb-2 text-gray-400" />
                        <div className="text-sm text-gray-500">Processing Fee</div>
                        <div className="font-bold text-[#111111]">{product.processingFee}</div>
                      </div>
                      <div className="bg-[#f4f7fa] rounded-xl p-4 text-center">
                        <Clock className="w-5 h-5 mx-auto mb-2 text-gray-400" />
                        <div className="text-sm text-gray-500">Approval Time</div>
                        <div className="font-bold text-[#111111]">24-48 hrs</div>
                      </div>
                      <div className="bg-[#f4f7fa] rounded-xl p-4 text-center">
                        <Shield className="w-5 h-5 mx-auto mb-2 text-gray-400" />
                        <div className="text-sm text-gray-500">Insurance</div>
                        <div className="font-bold text-[#111111]">Optional</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0064D6] to-[#002E9C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Not Sure Which Product Is Right for You?
          </motion.h2>
          <motion.p
            className="text-lg text-white/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Take our quick eligibility check to find the perfect financial product for your needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/eligibility">
              <motion.button
                className="bg-white text-[#0064D6] px-8 py-4 rounded-full font-semibold text-lg shadow-xl inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setIsHoveringCTA(true)}
                onMouseLeave={() => setIsHoveringCTA(false)}
              >
                Check Your Eligibility
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
