'use client'

import * as React from 'react'
import { QRCodeSVG } from 'qrcode.react'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AmountForm } from '@/components/amount-form'
import { PaymentRequestURI } from './payment-request-uri'

function makePaymentRequestUri(address: string, amount: number) {
  return `bitcoin:${address}?amount=${amount.toFixed(8).replace(/(0|\.)*$/, '')}`
}

export default function PaymentRequestCard({ address }: { address: string }) {
  const [amount, setAmount] = React.useState(0)
  const [uri, setUri] = React.useState('')

  React.useEffect(() => {
    if (!address || !amount) return

    setUri(makePaymentRequestUri(address, amount))
  }, [address, amount])

  return (
    <Card className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 max-w-[512px] drop-shadow-md">
      <CardHeader>
        <CardTitle>Create a payment request</CardTitle>
      </CardHeader>

      <CardContent>
        <AmountForm setAmount={setAmount} />
      </CardContent>
      {uri && (
        <CardFooter className="p-6 pt-2 flex flex-col items-center gap-8">
          <QRCodeSVG value={uri} size={128} />
          <PaymentRequestURI uri={uri} />
        </CardFooter>
      )}
    </Card>
  )
}
