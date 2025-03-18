import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  center?: boolean
  className?: string
  subtitleClassName?: string
}

export function SectionHeading({
  title,
  subtitle,
  center = false,
  className,
  subtitleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "max-w-3xl space-y-2 mb-12",
      center && "mx-auto text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg text-muted-foreground",
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
