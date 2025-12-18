"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useParallax } from "@/components/parallax-provider"
import Link from "next/link"
import {
  ArrowRight,
  ArrowLeft,
  User,
  Briefcase,
  IndianRupee,
  Home,
  CreditCard,
  CheckCircle2,
  Calculator,
  Sparkles,
} from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Personal Details",
    icon: User,
  },
  {
    id: 2,
    title: "Employment Info",
    icon: Briefcase,
  },
  {
    id: 3,
    title: "Financial Details",
    icon: IndianRupee,
  },
  {
    id: 4,
    title: "Loan Requirement",
    icon: Home,
  },
]

const loanTypes = [
  { id: "personal", label: "Personal Loan", icon: User },
  { id: "home", label: "Home Loan", icon: Home },
  { id: "business", label: "Business Loan", icon: Briefcase },
  { id: "credit", label: "Credit Card", icon: CreditCard },
]

const employmentTypes = [
  { id: "salaried", label: "Salaried" },
  { id: "self-employed", label: "Self Employed" },
  { id: "business", label: "Business Owner" },
  { id: "professional", label: "Professional" },
]

export default function EligibilityPage() {
  const { setIsHoveringCTA } = useParallax()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    employmentType: "",
    monthlyIncome: "",
    existingEMI: "",
    creditScore: "",
    loanType: "",
    loanAmount: "",
    tenure: "",
  })
  const [showResult, setShowResult] = useState(false)
  const [eligibilityResult, setEligibilityResult] = useState<{
    eligible: boolean
    maxAmount: string
    rate: string
    emi: string
  } | null>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1)
    } else {
      calculateEligibility()
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const calculateEligibility = () => {
    // Simulated eligibility calculation
    const income = Number.parseInt(formData.monthlyIncome) || 0
    const existingEMI = Number.parseInt(formData.existingEMI) || 0
    const availableIncome = income - existingEMI
    const maxEMI = availableIncome * 0.5
    const maxAmount = Math.round(maxEMI * 60) // Assuming 5 year tenure

    setEligibilityResult({
      eligible: income >= 25000,
      maxAmount: `₹${(maxAmount / 100000).toFixed(1)} Lakhs`,
      rate: formData.loanType === "home" ? "8.5%" : formData.loanType === "personal" ? "10.5%" : "12%",
      emi: `₹${Math.round(maxEMI).toLocaleString()}`,
    })
    setShowResult(true)
  }

  const resetForm = () => {
    setCurrentStep(1)
    setShowResult(false)
    setEligibilityResult(null)
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      employmentType: "",
      monthlyIncome: "",
      existingEMI: "",
      creditScore: "",
      loanType: "",
      loanAmount: "",
      tenure: "",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4f7fa] to-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            className="inline-block px-4 py-2 bg-[#12D6E7]/10 rounded-full text-[#008B96] text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Quick Eligibility Check
          </motion.span>
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Check Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0064D6] to-[#12D6E7]">
              Loan Eligibility
            </span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Answer a few simple questions to find out how much you can borrow and at what rate.
          </motion.p>
        </div>

        {!showResult ? (
          <>
            {/* Progress Steps */}
            <motion.div
              className="flex items-center justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <motion.div
                    className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${
                      currentStep >= step.id
                        ? "bg-[#0064D6] border-[#0064D6] text-white"
                        : "bg-white border-gray-200 text-gray-400"
                    }`}
                    animate={{
                      scale: currentStep === step.id ? 1.1 : 1,
                    }}
                  >
                    {currentStep > step.id ? <CheckCircle2 className="w-6 h-6" /> : <step.icon className="w-5 h-5" />}
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 sm:w-24 h-1 mx-2 rounded-full transition-colors ${
                        currentStep > step.id ? "bg-[#0064D6]" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </motion.div>

            {/* Form Card */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl shadow-black/5 p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <AnimatePresence mode="wait">
                {/* Step 1: Personal Details */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-[#111111] mb-6">Personal Details</h2>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0064D6] focus:ring-2 focus:ring-[#0064D6]/20 outline-none transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                        <input
                          type="number"
                          value={formData.age}
                          onChange={(e) => handleInputChange("age", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0064D6] focus:ring-2 focus:ring-[#0064D6]/20 outline-none transition-all"
                          placeholder="Your age"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0064D6] focus:ring-2 focus:ring-[#0064D6]/20 outline-none transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0064D6] focus:ring-2 focus:ring-[#0064D6]/20 outline-none transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Employment Info */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-[#111111] mb-6">Employment Information</h2>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Employment Type</label>
                      <div className="grid grid-cols-2 gap-4">
                        {employmentTypes.map((type) => (
                          <motion.button
                            key={type.id}
                            onClick={() => handleInputChange("employmentType", type.id)}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${
                              formData.employmentType === type.id
                                ? "border-[#0064D6] bg-[#0064D6]/5"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span
                              className={`font-medium ${
                                formData.employmentType === type.id ? "text-[#0064D6]" : "text-gray-700"
                              }`}
                            >
                              {type.label}
                            </span>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Income (₹)</label>
                      <input
                        type="number"
                        value={formData.monthlyIncome}
                        onChange={(e) => handleInputChange("monthlyIncome", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0064D6] focus:ring-2 focus:ring-[#0064D6]/20 outline-none transition-all"
                        placeholder="e.g., 50000"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Financial Details */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-[#111111] mb-6">Financial Details</h2>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Existing Monthly EMIs (₹)</label>
                      <input
                        type="number"
                        value={formData.existingEMI}
                        onChange={(e) => handleInputChange("existingEMI", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0064D6] focus:ring-2 focus:ring-[#0064D6]/20 outline-none transition-all"
                        placeholder="Total of all existing EMIs"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Credit Score (if known)</label>
                      <input
                        type="number"
                        value={formData.creditScore}
                        onChange={(e) => handleInputChange("creditScore", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0064D6] focus:ring-2 focus:ring-[#0064D6]/20 outline-none transition-all"
                        placeholder="e.g., 750"
                      />
                      <p className="text-sm text-gray-500 mt-2">Leave blank if you don't know your credit score</p>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Loan Requirement */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-[#111111] mb-6">Loan Requirement</h2>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Type of Loan</label>
                      <div className="grid grid-cols-2 gap-4">
                        {loanTypes.map((type) => (
                          <motion.button
                            key={type.id}
                            onClick={() => handleInputChange("loanType", type.id)}
                            className={`p-4 rounded-xl border-2 flex items-center gap-3 transition-all ${
                              formData.loanType === type.id
                                ? "border-[#0064D6] bg-[#0064D6]/5"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <type.icon
                              className={`w-5 h-5 ${
                                formData.loanType === type.id ? "text-[#0064D6]" : "text-gray-400"
                              }`}
                            />
                            <span
                              className={`font-medium ${
                                formData.loanType === type.id ? "text-[#0064D6]" : "text-gray-700"
                              }`}
                            >
                              {type.label}
                            </span>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount Required (₹)</label>
                        <input
                          type="number"
                          value={formData.loanAmount}
                          onChange={(e) => handleInputChange("loanAmount", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0064D6] focus:ring-2 focus:ring-[#0064D6]/20 outline-none transition-all"
                          placeholder="e.g., 500000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Tenure (Years)</label>
                        <select
                          value={formData.tenure}
                          onChange={(e) => handleInputChange("tenure", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0064D6] focus:ring-2 focus:ring-[#0064D6]/20 outline-none transition-all"
                        >
                          <option value="">Select tenure</option>
                          <option value="1">1 Year</option>
                          <option value="2">2 Years</option>
                          <option value="3">3 Years</option>
                          <option value="5">5 Years</option>
                          <option value="7">7 Years</option>
                          <option value="10">10 Years</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
                <motion.button
                  onClick={prevStep}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                    currentStep === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:bg-gray-100"
                  }`}
                  disabled={currentStep === 1}
                  whileHover={currentStep > 1 ? { scale: 1.02 } : {}}
                  whileTap={currentStep > 1 ? { scale: 0.98 } : {}}
                >
                  <ArrowLeft className="w-5 h-5" />
                  Previous
                </motion.button>

                <motion.button
                  onClick={nextStep}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white rounded-xl font-semibold shadow-lg shadow-[#0064D6]/25"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setIsHoveringCTA(true)}
                  onMouseLeave={() => setIsHoveringCTA(false)}
                >
                  {currentStep === 4 ? (
                    <>
                      Check Eligibility
                      <Calculator className="w-5 h-5" />
                    </>
                  ) : (
                    <>
                      Next Step
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </>
        ) : (
          /* Results */
          <motion.div
            className="bg-white rounded-3xl shadow-xl shadow-black/5 p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {eligibilityResult?.eligible ? (
              <div className="text-center">
                <motion.div
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </motion.div>

                <h2 className="text-3xl font-bold text-[#111111] mb-2">Congratulations!</h2>
                <p className="text-gray-600 mb-8">You are eligible for a loan. Here are your personalized offers:</p>

                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                  <motion.div
                    className="bg-gradient-to-br from-[#0064D6]/10 to-[#12D6E7]/10 rounded-2xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="text-sm text-gray-500 mb-1">Maximum Amount</div>
                    <div className="text-3xl font-bold text-[#0064D6]">{eligibilityResult.maxAmount}</div>
                  </motion.div>
                  <motion.div
                    className="bg-gradient-to-br from-[#12D6E7]/10 to-[#008B96]/10 rounded-2xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="text-sm text-gray-500 mb-1">Interest Rate</div>
                    <div className="text-3xl font-bold text-[#008B96]">{eligibilityResult.rate}</div>
                  </motion.div>
                  <motion.div
                    className="bg-gradient-to-br from-[#008B96]/10 to-[#002E9C]/10 rounded-2xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="text-sm text-gray-500 mb-1">Max EMI Capacity</div>
                    <div className="text-3xl font-bold text-[#002E9C]">{eligibilityResult.emi}</div>
                  </motion.div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact">
                    <motion.button
                      className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white rounded-full font-semibold shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onMouseEnter={() => setIsHoveringCTA(true)}
                      onMouseLeave={() => setIsHoveringCTA(false)}
                    >
                      <Sparkles className="w-5 h-5" />
                      Apply Now
                    </motion.button>
                  </Link>
                  <motion.button
                    onClick={resetForm}
                    className="px-8 py-4 text-gray-600 hover:bg-gray-100 rounded-full font-medium transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Check Again
                  </motion.button>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <motion.div
                  className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Calculator className="w-10 h-10 text-amber-500" />
                </motion.div>

                <h2 className="text-3xl font-bold text-[#111111] mb-2">Let's Talk!</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Based on your inputs, we'd like to discuss your options with you personally. Our experts can help find
                  the right solution.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact">
                    <motion.button
                      className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white rounded-full font-semibold shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Contact Us
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                  <motion.button
                    onClick={resetForm}
                    className="px-8 py-4 text-gray-600 hover:bg-gray-100 rounded-full font-medium transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Try Again
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
}
