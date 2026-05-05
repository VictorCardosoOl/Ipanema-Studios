import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const headingVariants = cva(
  "font-serif tracking-tight",
  {
    variants: {
      size: {
        huge: "text-[clamp(3rem,10vw,8rem)] leading-[0.9]", // Footer, Contact
        h1: "text-[clamp(3rem,8vw,8rem)] leading-[1.1]", // Hero
        h2: "text-[clamp(2.5rem,5vw,5rem)] leading-[1.1]", // Mission, Portfolio
        h3: "text-[clamp(1.5rem,3vw,3rem)] leading-[1.2]", // Section headers
        h4: "text-[clamp(1.25rem,2vw,2rem)] leading-[1.3]", // Cards
      },
      weight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        bold: "font-bold",
      },
      themeColor: {
        default: "text-charcoal",
        cream: "text-cream",
        white: "text-white",
      }
    },
    defaultVariants: {
      size: "h2",
      weight: "normal",
      themeColor: "default",
    },
  }
)

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, weight, themeColor, as: Comp = "h2", ...props }, ref) => {
    return (
      <Comp
        ref={ref}
        className={cn(headingVariants({ size, weight, themeColor, className }))}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

export { Heading, headingVariants }
