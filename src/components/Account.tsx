import { useAccount, useDisconnect, useBalance } from 'wagmi'

function shortenAddress(address: `0x${string}` | undefined, charsToShow = 6) {
  if (!address) return '';
  return `${address.slice(0, charsToShow)}...${address.slice(-charsToShow)}`;
}


export function Account() {
  const { connector, address } = useAccount()
  const { data: balance, status: balanceStatus, error: balanceError } = useBalance({ address: address });

  const { disconnect } = useDisconnect()

  if (connector) {
    return (
      <div className='accountContent'>
        <div className='connectorName'>
          <b>Connected:</b>
          {connector.icon && <img width={20} height={20} src={connector.icon}></img>}
          {shortenAddress(address)},&nbsp;
          {connector.name}
        </div>

        <span><b>Balance: </b>
          {balanceStatus === 'pending' && "Loading"}
          {balanceStatus === 'success' && <>{balance.formatted} {balance.symbol}</>}
          {balanceStatus === 'error' && `Error ${balanceError.message}`}
        </span>

        <button type="button" className="disconnectButton" onClick={() => disconnect()}>
          Disconnect
        </button>
      </div>
    )
  } else {
    return null
  }
}
