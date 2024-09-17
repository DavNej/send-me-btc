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

/**
 * Form schema for the payment request form
 */
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

/**
 * Type for the form values
 */
type FormValues = z.infer<typeof formSchema>

/**
 * AmountForm component
 */
export function AmountForm({
  setAmount,
}: {
  setAmount: (amount: number) => void
}) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { amount: '' },
  })

  function onSubmit(values: FormValues) {
    if (values.amount) {
      setAmount(parseFloat(values.amount))
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
