'use server'

import { generateHDWallet } from '@/lib/wallet'

export async function generateBitcoinPaymentRequestURI(amount: string) {
  const { address } = generateHDWallet()

  if (!address) return null

  return `bitcoin:${address}?amount=${amount}`
}
