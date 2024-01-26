import './App.css'
import { useAccount } from 'wagmi'
import { SendTransaction } from './components/SendTransaction';
import { Account } from './components/Account';
import { Connectors } from './components/Connectors';

function App() {
  const { status } = useAccount()

  return (
    <>
      <h1>ERC-20 Transfer App</h1>

      <div className='account'>
        {status === 'connected' && (
          <>
            <Account />
            <br />
            <br />
            <SendTransaction />
          </>
        )}
        {status === 'disconnected' && <p className='emptyState'>No wallet connected</p>}
        {['connecting', 'reconnecting'].includes(status) && <div className='loaderWrapper'> <div className="loader" /></div>}
      </div>

      <hr className="divider"></hr>

      <Connectors />

    </>
  )
}

export default App
