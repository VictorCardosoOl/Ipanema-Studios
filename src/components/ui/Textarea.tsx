import * as React from "react"
import { cn } from "../../lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[140px] w-full rounded-none border-b border-charcoal/20 bg-transparent px-0 py-4 text-base md:text-lg transition-all placeholder:text-charcoal/40 focus-visible:outline-none focus-visible:border-charcoal disabled:cursor-not-allowed disabled:opacity-50 font-sans text-charcoal font-light resize-y",
          error && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500 text-red-900",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
