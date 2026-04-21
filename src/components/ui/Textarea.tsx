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
          "flex min-h-[120px] w-full rounded-none border border-charcoal bg-charcoal/5 px-4 py-4 text-base transition-colors placeholder:text-charcoal/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-charcoal disabled:cursor-not-allowed disabled:opacity-50 font-sans text-charcoal",
          error && "border-red-500 focus-visible:ring-red-500 text-red-900",
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
