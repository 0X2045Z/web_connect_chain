import React from 'react'
import { useWeb3React } from '@web3-react/core'

export default function ChainId() {
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