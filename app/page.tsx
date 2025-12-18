import { Suspense } from "react"
import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"
import { MarketingBanner3D } from "@/components/marketing-banner-3d"
import { ProductsSection } from "@/components/products-section"
import { ExitIntentPopup } from "./client-components"

const VideoSection = dynamic(
  () => import("@/components/video-section").then((mod) => ({ default: mod.VideoSection })),
  {
    loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  },
)

const StatsSection = dynamic(
  () => import("@/components/stats-section").then((mod) => ({ default: mod.StatsSection })),
  {
    loading: () => <div className="h-64 bg-[#002E9C] animate-pulse" />,
  },
)

const ProcessSection = dynamic(
  () => import("@/components/process-section").then((mod) => ({ default: mod.ProcessSection })),
  {
    loading: () => <div className="h-96 bg-white animate-pulse" />,
  },
)

const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then((mod) => ({ default: mod.TestimonialsSection })),
  {
    loading: () => <div className="h-96 bg-[#f4f7fa] animate-pulse" />,
  },
)

const CTASection = dynamic(() => import("@/components/cta-section").then((mod) => ({ default: mod.CTASection })), {
  loading: () => <div className="h-64 bg-white animate-pulse" />,
})

const FloatingBackground = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#12D6E7]/10 to-[#0064D6]/5 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#0064D6]/5 rounded-full blur-3xl" />
  </div>
)

export default function HomePage() {
  return (
    <>
      <FloatingBackground />
      <HeroSection />
      <MarketingBanner3D />
      <ProductsSection />
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <VideoSection />
      </Suspense>
      <Suspense fallback={<div className="h-64 bg-[#002E9C] animate-pulse" />}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
        <ProcessSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-[#f4f7fa] animate-pulse" />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<div className="h-64 bg-white animate-pulse" />}>
        <CTASection />
      </Suspense>
      <ExitIntentPopup />
    </>
  )
}
