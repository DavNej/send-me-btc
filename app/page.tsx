import * as React from 'react'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

import { getQueryClient } from '@/lib/get-query-client'
import { bitcoinBalanceOptions } from '@/lib/get-balance'
import { generateHDWallet } from '@/lib/wallet'

import Typography from '@/components/ui/typography'
import PaymentRequestCard from '@/components/payment-request-card'
import { WalletInfo } from '@/components/wallet-info'

export default async function Home() {
  const { address } = generateHDWallet()

  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(
    bitcoinBalanceOptions({ address, enabled: true })
  )

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="p-4">
        <div className="flex justify-between">
          <Typography.H2 className="mb-2">Send me BTC</Typography.H2>
          <Typography.H2 className="mb-2">🤑</Typography.H2>
        </div>
        <Typography.H4>
          Generate a payment request on bitcoin testnet
        </Typography.H4>

        <div className="py-8 md:py-12 lg:py-16 flex flex-col items-center">
          <WalletInfo address={address} />

          <PaymentRequestCard address={address} />
        </div>
      </main>
    </HydrationBoundary>
  )
}
