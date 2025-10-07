'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('border border-border/50 rounded-lg mb-3 md:mb-4 last:mb-0 bg-card/50 backdrop-blur-sm', className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'group relative w-full text-left outline-none transition-colors duration-150 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          className,
        )}
        {...props}
      >
        <div className="flex items-start justify-between gap-4 py-4 md:py-5 px-4 md:px-6">
          <div className="flex-1 text-sm md:text-base font-medium leading-relaxed break-words">
            {children}
          </div>
          <ChevronDownIcon className="h-4 w-4 md:h-5 md:w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180 mt-1" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm md:text-base transition-all duration-200 ease-out"
      {...props}
    >
      <div className={cn('pt-0 pb-4 md:pb-6 px-4 md:px-6', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
