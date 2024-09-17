'use client'

import { Clipboard } from 'lucide-react'
import * as React from 'react'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

export function PaymentRequestURI({ uri }: { uri: string }) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false)
      }, 2000)
    }
  }, [open])

  function handleClick() {
    navigator.clipboard.writeText(uri)
    setOpen(true)
  }

  return (
    <div className="w-full flex gap-2">
      <TooltipProvider>
        <Tooltip open={open}>
          <TooltipTrigger asChild>
            <p className="flex-grow overflow-hidden text-ellipsis rounded-md border px-4 py-3 text-xs whitespace-nowrap">
              {uri}
            </p>
          </TooltipTrigger>
          <TooltipContent className="mt-2" side="bottom">
            <p>Copied to clipboard!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Button
        variant="outline"
        size="icon"
        onClick={handleClick}
        className="w-10"
      >
        <Clipboard className="size-4" />
      </Button>
    </div>
  )
}
