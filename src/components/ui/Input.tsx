import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-none border border-charcoal bg-charcoal/5 px-4 py-4 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-charcoal/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-charcoal disabled:cursor-not-allowed disabled:opacity-50 font-sans text-charcoal",
          error && "border-red-500 focus-visible:ring-red-500 text-red-900",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
