"use client"

import dynamic from "next/dynamic"

export const ExitIntentPopup = dynamic(
  () => import("@/components/exit-intent-popup").then((mod) => ({ default: mod.ExitIntentPopup })),
  {
    ssr: false,
  },
)
