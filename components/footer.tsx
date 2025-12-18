"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUpRight,
  Shield,
  Award,
  CheckCircle,
} from "lucide-react"

const footerLinks = {
  products: [
    { label: "Personal Loans", href: "/products#personal" },
    { label: "Home Loans", href: "/products#home" },
    { label: "Business Loans", href: "/products#business" },
    { label: "Credit Cards", href: "/products#credit" },
    { label: "Car Loans", href: "/products#car" },
    { label: "Education Loans", href: "/products#education" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/about#careers" },
    { label: "Press & Media", href: "/about#press" },
    { label: "Partners", href: "/about#partners" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "EMI Calculator", href: "/eligibility" },
    { label: "Check Eligibility", href: "/eligibility" },
    { label: "FAQs", href: "/about#faq" },
    { label: "Customer Support", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

const trustBadges = [
  { icon: Shield, label: "RBI Registered" },
  { icon: Award, label: "ISO Certified" },
  { icon: CheckCircle, label: "100% Secure" },
]

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden">
      {/* Top CTA Section - improved mobile layout */}
      <div className="bg-gradient-to-r from-[#0064D6] to-[#002E9C] py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1.5 sm:mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                Apply now and get instant approval on your loan application
              </p>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <Link href="/eligibility">
                <motion.button
                  className="bg-white text-[#0064D6] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Check Eligibility
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="bg-[#12D6E7] text-[#002E9C] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply Now
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content - improved mobile padding */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-16 pb-6 sm:pb-8">
        {/* Grid Layout - improved mobile grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10 lg:mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Image
                src="/logo.png"
                alt="Finonest"
                width={45}
                height={45}
                className="object-contain w-10 h-10 sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px]"
              />
              <div>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#0064D6] to-[#002E9C] bg-clip-text text-transparent">
                  Finonest
                </span>
                <span className="block text-[8px] sm:text-xs text-[#008B96] font-medium tracking-wider">
                  SMART FINANCE
                </span>
              </div>
            </Link>

            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">
              Your trusted partner for smart financial solutions. We make loans and credit accessible, transparent, and
              hassle-free for everyone.
            </p>

            {/* Contact Info - improved spacing */}
            <div className="space-y-2 sm:space-y-3">
              <a
                href="tel:1800-123-4567"
                className="flex items-center gap-2 sm:gap-3 text-gray-600 hover:text-[#0064D6] transition-colors"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#0064D6]/10 to-[#12D6E7]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0064D6]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-medium block">1800-123-4567</span>
                  <span className="text-[10px] sm:text-xs text-gray-400">Toll Free</span>
                </div>
              </a>
              <a
                href="mailto:support@finonest.com"
                className="flex items-center gap-2 sm:gap-3 text-gray-600 hover:text-[#0064D6] transition-colors"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#0064D6]/10 to-[#12D6E7]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0064D6]" />
                </div>
                <span className="text-xs sm:text-sm truncate">support@finonest.com</span>
              </a>
              <div className="flex items-center gap-2 sm:gap-3 text-gray-600">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#0064D6]/10 to-[#12D6E7]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0064D6]" />
                </div>
                <span className="text-xs sm:text-sm">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-[#002E9C] mb-3 sm:mb-5 text-xs sm:text-sm uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.products.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#0064D6] transition-colors text-xs sm:text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-[#002E9C] mb-3 sm:mb-5 text-xs sm:text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#0064D6] transition-colors text-xs sm:text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources - hidden on smallest screens, shown on sm+ */}
          <div className="hidden sm:block">
            <h4 className="font-semibold text-[#002E9C] mb-3 sm:mb-5 text-xs sm:text-sm uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#0064D6] transition-colors text-xs sm:text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App Download & Social - full width on mobile */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-semibold text-[#002E9C] mb-3 sm:mb-5 text-xs sm:text-sm uppercase tracking-wider">
              Download App
            </h4>
            <div className="flex sm:flex-col gap-2 sm:gap-3 mb-4 sm:mb-6">
              <a href="#" className="block flex-1 sm:flex-none">
                <div className="bg-black text-white px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 sm:gap-3 hover:bg-gray-800 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div>
                    <span className="text-[8px] sm:text-[10px] block opacity-70">Download on the</span>
                    <span className="text-xs sm:text-sm font-medium">App Store</span>
                  </div>
                </div>
              </a>
              <a href="#" className="block flex-1 sm:flex-none">
                <div className="bg-black text-white px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 sm:gap-3 hover:bg-gray-800 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <div>
                    <span className="text-[8px] sm:text-[10px] block opacity-70">Get it on</span>
                    <span className="text-xs sm:text-sm font-medium">Google Play</span>
                  </div>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <h4 className="font-semibold text-[#002E9C] mb-2 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex items-center gap-1.5 sm:gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-[#0064D6]/10 to-[#12D6E7]/10 hover:from-[#0064D6] hover:to-[#002E9C] rounded-lg flex items-center justify-center text-[#0064D6] hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges - improved mobile layout */}
        

        {/* Bottom Section */}
        
      </div>
    </footer>
  )
}
