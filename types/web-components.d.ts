import type React from "react"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Typings for the Spline web component used in the project.
       * We keep attributes permissive to avoid friction during upgrades.
       */
      "spline-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        url?: string
        loading?: "eager" | "lazy"
        title?: string
        style?: React.CSSProperties
        class?: string
        [key: string]: any
      }
    }
  }
}

export {}
