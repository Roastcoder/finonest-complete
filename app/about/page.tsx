"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ParallaxCard } from "@/components/parallax-card"
import { Shield, Target, Award, Heart, CheckCircle2, Building2, Globe, Sparkles, Linkedin } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "We believe in complete transparency with no hidden charges or surprises.",
    color: "#0064D6",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make is centered around our customers' best interests.",
    color: "#12D6E7",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We continuously innovate to make financial services more accessible.",
    color: "#008B96",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every interaction and service we provide.",
    color: "#002E9C",
  },
]

const milestones = [
  { year: "2017", title: "Founded", description: "Started operations in Jaipur, Rajasthan" },
  { year: "2018", title: "Incorporated", description: "Finonest India Pvt Ltd registered" },
  { year: "2020", title: "Expansion", description: "Expanded partner network across Rajasthan" },
  { year: "2022", title: "Digital Launch", description: "Launched digital loan application platform" },
  { year: "2023", title: "Growth", description: "Achieved 60%+ YoY growth" },
  { year: "2024", title: "10 Cr Turnover", description: "Projected annual turnover milestone" },
]

const team = [
  {
    name: "Surya Mohan Roy",
    role: "Managing Director & Founder",
    image: "/images/surya-roy.png",
    linkedin: "#",
    bio: "Visionary leader behind the company's purpose, culture, and long-term strategy. Oversees strategic planning, business development, and operational execution.",
  },
  {
    name: "Atishay Jain",
    role: "Co-Founder & Director",
    image: "/images/atishay-jain.png",
    linkedin: "#",
    bio: "Plays a pivotal role in shaping the organization's vision and strategy. Oversees key operations, drives innovation, and ensures seamless execution across teams.",
  },
  {
    name: "Sanam Makkar",
    role: "Director & CTO",
    image: "/images/sanam-makkar.png",
    linkedin: "#",
    bio: "Leads the company's technology vision, product innovation, and digital transformation. Oversees product development, system architecture, and IT operations.",
  },
  {
    name: "CA Prateek Somani",
    role: "Chief Financial Officer",
    image: "/images/prateek-somani.png",
    linkedin: "#",
    bio: "Leads financial strategy with precision and vision. Oversees budgeting, financial planning, compliance, and risk management.",
  },
]

const services = [
  { name: "Personal Loans", description: "Unsecured personal finance options" },
  { name: "Business & MSME Loans", description: "Working capital, term loans, cash-flow support" },
  { name: "Home Loans", description: "Purchase, construction, balance-transfer options" },
  { name: "Vehicle & Auto Finance", description: "New and used car financing" },
  { name: "Loan Against Property", description: "Secured funding against property" },
  { name: "Credit Lines", description: "Flexible unsecured credit limits" },
]

export default function AboutPage() {
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

        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-[#0064D6]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span
                className="inline-block px-4 py-2 bg-[#0064D6]/10 rounded-full text-[#0064D6] text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                About Finonest
              </motion.span>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111] mb-6 text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Your Trusted{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0064D6] to-[#12D6E7]">
                  Financial
                </span>{" "}
                Partner in India
              </motion.h1>

              <motion.p
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Finonest India Private Limited operates as a financial intermediary based in Jaipur, Rajasthan. We help
                customers compare and apply for various loan products across multiple partner banks and NBFCs, making
                financial services accessible, transparent, and hassle-free.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#008B96]" />
                  <span className="text-gray-700">DSA Network Partner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#008B96]" />
                  <span className="text-gray-700">Multiple Bank Partners</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#008B96]" />
                  <span className="text-gray-700">Since 2017</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative bg-gradient-to-br from-[#0064D6] to-[#002E9C] rounded-3xl p-8 text-white">
                <div className="absolute inset-0 bg-white/10 rounded-3xl blur-xl scale-95" />
                <div className="relative grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold mb-1">₹10 Cr</div>
                    <div className="text-white/70 text-sm">Annual Turnover (FY24)</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold mb-1">60%+</div>
                    <div className="text-white/70 text-sm">YoY Growth</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold mb-1">50+</div>
                    <div className="text-white/70 text-sm">Bank Partners</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold mb-1">4.8★</div>
                    <div className="text-white/70 text-sm">Customer Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#f4f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ParallaxCard glowColor="#0064D6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#0064D6]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-[#0064D6]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111111] mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To become India's most trusted and accessible financial services platform, empowering every
                    individual and business to achieve their financial goals with confidence and ease.
                  </p>
                </div>
              </div>
            </ParallaxCard>

            <ParallaxCard glowColor="#12D6E7">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#12D6E7]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-7 h-7 text-[#12D6E7]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111111] mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To democratize access to financial services through convenience, transparency, and customer-centric
                    innovation, making loan comparison and application simple, fast, and fair for everyone.
                  </p>
                </div>
              </div>
            </ParallaxCard>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block px-4 py-2 bg-[#0064D6]/10 rounded-full text-[#0064D6] text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-[#111111] text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Comprehensive Financial Solutions
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-[#111111] mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f4f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block px-4 py-2 bg-[#008B96]/10 rounded-full text-[#008B96] text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Values
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-[#111111] text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              What Drives Us Every Day
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ParallaxCard key={value.title} index={index} glowColor={value.color}>
                <div className="text-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${value.color}15` }}
                  >
                    <value.icon className="w-7 h-7" style={{ color: value.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </ParallaxCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-r from-[#0064D6] to-[#002E9C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Journey
            </motion.h2>
            <motion.p
              className="text-lg text-white/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Building trust since 2017
            </motion.p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-white/20 -translate-y-1/2" />

            <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                    <div className="text-2xl font-bold text-[#12D6E7] mb-2">{milestone.year}</div>
                    <div className="text-white font-semibold mb-1">{milestone.title}</div>
                    <div className="text-white/60 text-sm">{milestone.description}</div>
                  </div>
                  <div className="hidden lg:block absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#12D6E7] rounded-full border-4 border-[#002E9C]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block px-4 py-2 bg-[#0064D6]/10 rounded-full text-[#0064D6] text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Leadership Team
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-[#111111] text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Meet the People Behind Finonest
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative mb-4 mx-auto w-44 h-44">
                  <div className="absolute inset-0 rounded-full border-4 border-[#12D6E7]" />
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={176}
                    height={176}
                    className="relative w-full h-full object-cover rounded-full bg-gray-100"
                  />
                  <div className="absolute inset-0 bg-[#0064D6]/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a href={member.linkedin} className="p-2 bg-white rounded-full">
                      <Linkedin className="w-5 h-5 text-[#0064D6]" />
                    </a>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#111111]">{member.name}</h3>
                <p className="text-[#0064D6] font-medium text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed px-2">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-[#f4f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4">Registered & Compliant</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Finonest India Private Limited is a registered company operating as a financial services intermediary
                  (DSA) connecting borrowers to banks & NBFCs. We maintain the highest standards of business ethics and
                  customer service.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#008B96]" />
                    <span className="text-gray-700">CIN: U74999RJ2018PTC060491</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#008B96]" />
                    <span className="text-gray-700">Headquarters: Jaipur, Rajasthan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#008B96]" />
                    <span className="text-gray-700">Authorized DSA Partner</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#008B96]" />
                    <span className="text-gray-700">Multiple Bank & NBFC Partnerships</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <Building2 className="w-16 h-16 text-[#0064D6] mx-auto mb-2" />
                  <span className="text-sm text-gray-500">Registered Company</span>
                </div>
                <div className="text-center">
                  <Shield className="w-16 h-16 text-[#008B96] mx-auto mb-2" />
                  <span className="text-sm text-gray-500">Trusted Partner</span>
                </div>
                <div className="text-center">
                  <Globe className="w-16 h-16 text-[#12D6E7] mx-auto mb-2" />
                  <span className="text-sm text-gray-500">Pan India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
