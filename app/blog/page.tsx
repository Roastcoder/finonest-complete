"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight, Search, Tag } from "lucide-react"

const categories = ["All", "Personal Finance", "Home Loans", "Business", "Credit Score", "Investment", "Tax Planning"]

const blogPosts = [
  {
    id: 1,
    title: "10 Smart Ways to Improve Your Credit Score in 2024",
    excerpt:
      "Learn proven strategies to boost your credit score and unlock better loan rates. From payment habits to credit utilization, we cover it all.",
    image: "/credit-score-improvement-tips.jpg",
    category: "Credit Score",
    author: "Priya Sharma",
    date: "Dec 1, 2024",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Complete Guide to Home Loan Eligibility in India",
    excerpt:
      "Everything you need to know about home loan eligibility criteria, documentation, and how to maximize your approval chances.",
    image: "/home-loan-guide-india.jpg",
    category: "Home Loans",
    author: "Rahul Verma",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 3,
    title: "Personal Loan vs Credit Card: Which is Right for You?",
    excerpt:
      "A comprehensive comparison to help you choose the right financing option based on your needs and financial situation.",
    image: "/personal-loan-credit-card-comparison.jpg",
    category: "Personal Finance",
    author: "Anita Desai",
    date: "Nov 25, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "How to Start a Business with Limited Capital",
    excerpt:
      "Practical tips and financing options for aspiring entrepreneurs looking to launch their business journey.",
    image: "/startup-entrepreneur.png",
    category: "Business",
    author: "Vikram Singh",
    date: "Nov 22, 2024",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Tax Saving Strategies for Salaried Employees",
    excerpt: "Maximize your tax savings with these legal and effective strategies designed for working professionals.",
    image: "/tax-saving-strategies-india.jpg",
    category: "Tax Planning",
    author: "Neha Gupta",
    date: "Nov 18, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Investment Options for First-Time Investors",
    excerpt: "A beginner's guide to various investment options in India, from mutual funds to fixed deposits.",
    image: "/investment-options-beginners.jpg",
    category: "Investment",
    author: "Amit Kumar",
    date: "Nov 15, 2024",
    readTime: "9 min read",
    featured: false,
  },
]

export default function BlogPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true })
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section ref={headerRef} className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f4f7fa] via-white to-[#e8f4ff]" />

        {/* Floating shapes */}
        <motion.div
          className="absolute top-20 left-[10%] w-64 h-64 bg-[#12D6E7]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-[10%] w-80 h-80 bg-[#0064D6]/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#0064D6]/10 text-[#0064D6] rounded-full text-sm font-medium mb-4">
              Finance Blog
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#111111] mb-6 text-balance">
              Insights for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0064D6] to-[#12D6E7]">
                Smarter Finances
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Expert advice, tips, and guides to help you make informed financial decisions
            </p>

            {/* Search Bar */}
            <motion.div
              className="max-w-xl mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white shadow-lg shadow-black/5 focus:outline-none focus:ring-2 focus:ring-[#0064D6]/20 focus:border-[#0064D6] transition-all duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 horizontal-scroll">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#0064D6] text-white shadow-lg shadow-[#0064D6]/25"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-2xl font-bold text-[#111111] mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured Articles
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8 }}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="inline-block px-3 py-1 bg-[#12D6E7] text-white text-xs font-medium rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-[#12D6E7] transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-white/70">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl font-bold text-[#111111] mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Latest Articles
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-[#0064D6]" />
                    <span className="text-sm text-[#0064D6] font-medium">{post.category}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#111111] mb-3 group-hover:text-[#0064D6] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <motion.div
                    className="mt-4 pt-4 border-t border-gray-100"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-[#0064D6] font-medium text-sm group-hover:gap-3 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white rounded-full font-semibold shadow-lg shadow-[#0064D6]/25"
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px -10px rgba(0, 100, 214, 0.35)" }}
              whileTap={{ scale: 0.97 }}
            >
              Load More Articles
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative bg-gradient-to-br from-[#0064D6] to-[#002E9C] rounded-3xl p-8 sm:p-12 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#12D6E7]/20 rounded-full blur-2xl" />

            <div className="relative text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get Financial Tips in Your Inbox</h2>
              <p className="text-white/80 mb-8">
                Subscribe to our newsletter for weekly insights, tips, and exclusive offers
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <motion.button
                  className="px-8 py-4 bg-white text-[#0064D6] rounded-full font-semibold shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
