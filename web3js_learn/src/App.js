// 使用@web3-react链接MetaMask
// https://juejin.cn/post/6973973235700334606
// https://learnblockchain.cn/article/4446

import React from 'react'
import { Web3ReactProvider, useWeb3React, } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { useEagerConnect, useInactiveListener } from './hooks'

import { Spinner } from './Spiner'
import { injected } from './connectors/connector.js'

import './App.css';

function getLibrary(provider) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 5000
  return library
}

function ChainId() {
  const { chainId, active, account, library, connector, activate, deactivate } = useWeb3React()

  return (
    <div className="ChainIdWrapper">
      <span>Chain Id</span>
      <span role="img" aria-label="chain">
        ⛓
      </span>
      <span className="ChainIdText">{chainId ?? 'Not Connected'}</span><br/>
      {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
    </div>
  )
}

function ConnectChain(props) {
  const context = useWeb3React()
  const { connector, library, chainId, account, activate, deactivate, active, error } = context
  console.log("@@@connector @ " + connector)

  const [activatingConnector, setActivatingConnector] = React.useState()
  console.log("@@@activatingConnector @ " + activatingConnector)
  React.useEffect(() => {
    console.log(activatingConnector && activatingConnector === connector)
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  const activating = injected === activatingConnector
  const connected = injected === connector
  const disabled = !props.triedEager || !!activatingConnector || !!error

  useInactiveListener(!props.triedEager || !!activatingConnector)

  let isDisconnect = !error && chainId
  const buttonText = isDisconnect ? 'Disconnect' : (activating ? 'Connectting' : 'Connect' )

  return (
    <button
      style={{
        borderColor: activating ? 'orange' : connected ? 'green' : 'unset',
        cursor: disabled ? 'unset' : 'pointer',
        position: 'relative',
      }}
      className="ConnectButton"
      disabled={disabled}
      onClick={() => {
        if (!isDisconnect) {
          setActivatingConnector(injected)
          activate(injected)
        } else {
          deactivate()
        }
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          color: 'black',
          margin: '0 0 0 1rem'
        }}
      >
        {activating && <Spinner color={'red'} style={{ height: '50%', marginLeft: '-1rem' }} />}
      </div>
      { buttonText }
    </button>
  )
}

function App() {
  const triedEager = useEagerConnect()

  return (
      <div className="App">
        <header className="App-header">
          <h1>Counter Example </h1>
          <ChainId/>
          <ConnectChain triedEager={triedEager} />
        </header>
      </div>
  );
}


export default function() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  )
}

// import React, { Component } from 'react'

// import ConnentButton from './components/page'

// export default class App extends Component {

//   render(){
//     return(
//       <div>
//         <ConnentButton/>
//       </div>
//     )
//   }
// }

// App.js