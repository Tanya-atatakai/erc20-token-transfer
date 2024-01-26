import { useConnect } from 'wagmi'

export function Connectors() {
  const { connectors, connect } = useConnect()

  return (
    <div className='connectors'>
      {connectors.map((connector) =>
        <button key={connector.id} type="button" role="button" onClick={() => connect({ connector })}>Connect {connector.name}</button>
      )}
    </div>
  )
}

