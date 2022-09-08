import { useWeb3React } from '@web3-react/core'
import { injected } from './utils/connector'

function App() {
  const { chainId, active, account, library, connector, activate, deactivate } = useWeb3React()
  return (
    <div>
      <button 
        onClick={() => {
          activate(injected)
        }}
      >点击链接</button>
    </div>
  );
}

export default App;
