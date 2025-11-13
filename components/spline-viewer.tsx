"use client"

import { useEffect, useRef, useState } from "react"
import React from "react"

interface SplineViewerProps {
  url: string
  className?: string
  title?: string
  loading?: "eager" | "lazy"
  backgroundMode?: boolean
  style?: React.CSSProperties
}

export function SplineViewer({
  url,
  className = "",
  title = "3D Scene",
  loading = "lazy",
  backgroundMode = false,
  style = {},
}: SplineViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Robustly load the Spline web component once across the app
    if (typeof window === "undefined") return

    const SCRIPT_ID = "splinetool-viewer-script"

    // If custom element already registered, we're good
    if ((window as any).customElements && customElements.get("spline-viewer")) {
      setIsLoaded(true)
      return
    }

    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null
    if (existing) {
      if (existing.dataset.loaded === "true") {
        setIsLoaded(true)
      } else {
        existing.addEventListener(
          "load",
          () => {
            existing.dataset.loaded = "true"
            setIsLoaded(true)
          },
          { once: true }
        )
        existing.addEventListener(
          "error",
          () => {
            console.error("[v0] Failed to load Spline viewer script (existing)")
            setHasError(true)
          },
          { once: true }
        )
      }
      return
    }

    const script = document.createElement("script")
    script.id = SCRIPT_ID
    script.type = "module"
    script.src = "https://unpkg.com/@splinetool/viewer@1.11.2/build/spline-viewer.js"
    script.async = true

    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true"
        setIsLoaded(true)
      },
      { once: true }
    )

    script.addEventListener(
      "error",
      () => {
        console.error("[v0] Failed to load Spline viewer script")
        setHasError(true)
      },
      { once: true }
    )

    document.head.appendChild(script)

    // Do not remove the script on unmount so other routes/components can reuse it
    return () => {}
  }, [])

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-[#1a1a1a] rounded-lg ${className}`}>
        <p className="text-white/50 text-center">Failed to load 3D scene</p>
      </div>
    )
  }

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Loading skeleton with smooth fade */}
      {!isLoaded && <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] animate-pulse" />}

      {/** Use a typed alias so TS doesn't complain about the web component */}
      {React.createElement(
        "spline-viewer" as any,
        {
          url,
          loading,
          title,
          style: {
            width: "100%",
            height: "100%",
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            objectFit: backgroundMode ? "cover" : "contain",
            objectPosition: "center center",
            background: "transparent",
            display: "block",
            willChange: "opacity, transform",
            ...style,
          } as React.CSSProperties,
        },
        null
      )}

      {/* Badge masking for background mode */}
      {backgroundMode && <div className="spline-badge-mask" />}
    </div>
  )
}

export const MemoizedSplineViewer = React.memo(SplineViewer)
