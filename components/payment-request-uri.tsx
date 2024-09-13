'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useEffect, useState } from 'react'

export function PaymentRequestURI({ uri }: { uri: string }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false)
      }, 2000)
    }
  }, [open])

  return (
    <TooltipProvider>
      <Tooltip open={open}>
        <TooltipTrigger asChild className="overflow-hidden">
          <p
            className="w-full text-xs text-ellipsis whitespace-nowrap cursor-pointer"
            onClick={(e) => {
              navigator.clipboard.writeText(uri)

              // select the text
              const range = document.createRange()
              range.selectNodeContents(e.currentTarget)

              const selection = window.getSelection()
              selection?.removeAllRanges()
              selection?.addRange(range)

              setOpen(true)
            }}
          >
            {uri}
          </p>
        </TooltipTrigger>
        <TooltipContent className="mt-2" side="bottom">
          <p>Copied to clipboard!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
