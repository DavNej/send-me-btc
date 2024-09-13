import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { PaymentRequestForm } from '@/components/payment-request-form'
import Typography from '@/components/ui/typography'

export default function Home() {
  return (
    <main className="p-4 flex flex-col items-center gap-8">
      <div className="w-full">
        <div className="flex justify-between">
          <Typography.H2 className="mb-2">Send me BTC</Typography.H2>
          <Typography.H2 className="mb-2">🤑</Typography.H2>
        </div>
        <Typography.H4>
          Generate a payment request on bitcoin testnet
        </Typography.H4>
      </div>

      <Card className="w-[512px] max-w-full drop-shadow-md">
        <CardHeader>
          <CardTitle>Create a payment request</CardTitle>
        </CardHeader>
        <CardContent>
          <PaymentRequestForm />
        </CardContent>
      </Card>
    </main>
  )
}
