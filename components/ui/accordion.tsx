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
    <AccordionPrimitive.Header className="flex w-full">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 flex w-full items-start justify-between rounded-md py-4 md:py-5 px-4 md:px-6 text-left text-sm md:text-base font-medium transition-colors duration-150 outline-none hover:text-primary focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 min-h-[3rem] md:min-h-[3.5rem]',
          className,
        )}
        {...props}
      >
        <div className="flex-1 min-w-0 pr-3">
          <span className="leading-relaxed block break-words hyphens-auto">{children}</span>
        </div>
        <div className="flex-shrink-0 ml-3 mt-0.5">
          <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 md:size-5 transition-transform duration-150 ease-out" />
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
