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
          "flex h-14 w-full rounded-none border-b border-charcoal/20 bg-transparent px-3 py-4 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-charcoal/40 focus-visible:outline-none focus-visible:border-charcoal focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 font-sans",
          error && "border-red-500 focus-visible:border-red-500 text-red-900",
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
