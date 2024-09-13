import * as React from 'react'

import { cn } from '@/lib/utils'

const H2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0',
      className
    )}
    {...props}
  />
))

H2.displayName = 'H2'

const H4 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn(
      'scroll-m-20 text-sm tracking-tight first:mt-0 text-muted-foreground',
      className
    )}
    {...props}
  />
))

H4.displayName = 'H4'

const Typography = { H2, H4 }

export default Typography
