"use client"

import { cn } from "@/lib/utils"

interface GridPatternProps {
  className?: string
  width?: number
  height?: number
  x?: number
  y?: number
  strokeDasharray?: string | number
  squares?: Array<[x: number, y: number]>
}

export function GridPattern({
  className,
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  squares = [],
  ...props
}: GridPatternProps) {
  const id = `grid-pattern-${Math.random().toString(36).substr(2, 9)}`

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-muted/20 stroke-muted/20",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      {squares.map(([x, y], index) => (
        <rect
          key={index}
          width={width - 1}
          height={height - 1}
          x={x * width + 1}
          y={y * height + 1}
          className="fill-primary/10 stroke-primary/20"
        />
      ))}
    </svg>
  )
}
