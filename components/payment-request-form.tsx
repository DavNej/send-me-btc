'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { toast } from '@/hooks/use-toast'
import { generateBitcoinPaymentRequestURI } from '@/actions/create-payment-request-uri'

const formSchema = z.object({
  amount: z.string().refine(
    (val) => {
      const num = parseFloat(val)
      return !isNaN(num) && num >= 0.00000001 && num <= 21000000
    },
    {
      message: 'must be between 1 sat (0.00000001 BTC) and 21,000,000 BTC',
    }
  ),
})

type FormValues = z.infer<typeof formSchema>

export function PaymentRequestForm({
  setPaymentRequestURI,
}: {
  setPaymentRequestURI: (uri: string) => void
}) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { amount: '' },
  })

  async function onSubmit(values: FormValues) {
    const uri = await generateBitcoinPaymentRequestURI(values.amount)

    if (uri) {
      setPaymentRequestURI(uri)
      return
    }

    toast({
      title: 'Error creating payment request',
      description: 'An error occurred while creating the payment request',
      variant: 'destructive',
    })
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    className="pr-12"
                    placeholder="0.00"
                    type="number"
                    min={0}
                    step={0.00000001}
                    {...field}
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                    BTC
                  </span>
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Create</Button>
      </form>
    </Form>
  )
}
