import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest",
  {
    variants: {
      variant: {
        default: "bg-charcoal text-cream hover:bg-charcoal/90",
        outline: "border border-charcoal/20 bg-transparent hover:bg-charcoal hover:text-cream text-charcoal",
        ghost: "hover:bg-charcoal/10 text-charcoal",
        link: "text-charcoal underline-offset-4 hover:underline",
        white: "bg-white text-charcoal hover:bg-white/90",
        whiteOutline: "border border-white/30 bg-transparent hover:border-white text-white outline-none",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-9 px-6 text-xs",
        lg: "h-14 px-12 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
