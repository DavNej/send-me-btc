import { queryOptions } from '@tanstack/react-query'

export function bitcoinBalanceOptions({
  address,
  enabled,
}: {
  address: string
  enabled: boolean
}) {
  return queryOptions<{ balance: number }>({
    queryKey: ['bitcoin-balance', address],
    enabled,
    placeholderData: { balance: 0 },
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://api.blockcypher.com/v1/btc/test3/addrs/${address}/balance`
        )
        return response.json()
      } catch (error) {
        throw new Error('Failed to fetch balance: ' + (error as Error).message)
      }
    },
    refetchInterval: enabled ? 60 * 1000 : false, // Refetch every 1 minute if query is enabled
  })
}
