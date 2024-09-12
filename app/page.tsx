import { generateHDWallet } from '@/lib/wallet'

const { address, mnemonic } = generateHDWallet()

export default function Home() {
  return (
    <main className="p-4">
      <h2 className="mb-4">Generate a payment request on bitcoin testnet</h2>
      <p>Mnemonic: {mnemonic}</p>
      <p>Address: {address}</p>
    </main>
  )
}
