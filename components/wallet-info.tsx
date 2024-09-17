'use client'

import * as React from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { bitcoinBalanceOptions } from '@/lib/get-balance'
import { toast } from '@/hooks/use-toast'
import { Card, CardContent } from '@/components/ui/card'

export function WalletInfo({ address }: { address: string }) {
  const [pollIsActive, setPollIsActive] = React.useState(true)

  const { data, isFetching, error, isError } = useSuspenseQuery(
    bitcoinBalanceOptions({ address, enabled: pollIsActive })
  )

  const balance = data?.balance || 0
  const lastBalanceRef = React.useRef(balance)

  React.useEffect(() => {
    if (balance > lastBalanceRef.current) {
      setPollIsActive(false)

      toast({
        title: 'Success 🎉',
        description: 'Payment successfully received',
        variant: 'success',
      })
    }

    lastBalanceRef.current = balance
  }, [data?.balance])

  React.useEffect(() => {
    if (isError) {
      toast({
        title: 'Something went wrong',
        description: error?.message,
        variant: 'destructive',
      })
    }
  }, [isError, error])

  return (
    <Card className="my-4 pt-6 w-[512px] max-w-full drop-shadow-md">
      <CardContent>
        <p className="flex justify-between">
          <span className="whitespace-nowrap">Wallet address:</span>
          <span className="ml-2 overflow-hidden text-ellipsis">{address}</span>
        </p>
        <p className="flex justify-between">
          <span className="whitespace-nowrap">Current balance:</span>
          <span className=" ml-2 text-ellipsis overflow-hidden">
            {isFetching ? 'Loading...' : (balance * 1e-8).toFixed(8)}
          </span>
        </p>
      </CardContent>
    </Card>
  )
}
