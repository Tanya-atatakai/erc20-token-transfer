import { useSendTransaction } from 'wagmi'
import { parseEther, isAddress } from 'viem'

export function SendTransaction() {
  const { data: hash, sendTransaction, status: transactionStatus, error: transactionError } = useSendTransaction()

  function onTransfer(e: React.FormEvent<HTMLFormElement>) {

    const formData = new FormData(e.target as HTMLFormElement)
    const to = formData.get('address') as `0x${string}`
    const value = formData.get('value') as string

    if (!isAddress(to)) {
      alert('Invalid recipient address');
    }

    if (isNaN(+value) || +value <= 0) {
      alert('Invalid amount');
    }

    e.preventDefault()
    sendTransaction({ to, value: parseEther(value) })
  }

  return (
    <>
      <b>Transfer: </b>
      <form onSubmit={onTransfer}>
        <label htmlFor="address">Address:</label>
        <input name="address" id="address" placeholder="0xA0Cf…251e" required />

        <label htmlFor="value">Amount:</label>
        <input name="value" id="value" placeholder="0.05" required />

        <button type="submit">Send</button>

        <div className='transferStatus'>
          {transactionStatus === 'pending' && "Confirming"}
          {transactionStatus === 'success' && "Sent"}
          {transactionStatus === 'error' && <><b>Error </b> {transactionError?.message}</>}
        </div>

        {hash && <div><b>Transaction Hash:</b> <a href={`https://etherscan.io/tx/${hash}`}>{hash}</a></div>}
      </form>
    </>
  )
}