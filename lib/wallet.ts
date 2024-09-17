import { BIP32Factory } from 'bip32'
import * as bip39 from 'bip39'
import * as bitcoin from 'bitcoinjs-lib'
import * as ecc from 'tiny-secp256k1'

export function generateHDWallet() {
  // Generate a mnemonic (BIP39)
  const mnemonic = bip39.generateMnemonic()
  const seed = bip39.mnemonicToSeedSync(mnemonic)

  const root = BIP32Factory(ecc).fromSeed(seed)

  // Derive the first Bitcoin address to receive funds (BIP44)
  const path = "m/44'/0'/0'/0/0"
  const child = root.derivePath(path)

  // Get the address from the child node
  const { address } = bitcoin.payments.p2pkh({ pubkey: child.publicKey })

  if (!address) {
    throw new Error('Failed to generate address')
  }

  return { mnemonic, address }
}
