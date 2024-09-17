import * as React from 'react'

import { generateHDWallet } from '@/lib/wallet'

import Typography from '@/components/ui/typography'
import PaymentRequestCard from '@/components/payment-request-card'

export default async function Home() {
  const { address } = generateHDWallet()

  return (
    <main className="p-4 flex flex-col items-center gap-8">
      <main className="p-4">
        <div className="flex justify-between">
          <Typography.H2 className="mb-2">Send me BTC</Typography.H2>
          <Typography.H2 className="mb-2">🤑</Typography.H2>
        </div>
        <Typography.H4>
          Generate a payment request on bitcoin testnet
        </Typography.H4>

        <div className="py-8 md:py-12 lg:py-16 flex flex-col items-center">

          <PaymentRequestCard address={address} />
        </div>
      </main>
  )
}
