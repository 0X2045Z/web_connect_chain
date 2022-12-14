import React, { Component } from 'react'

import { useEagerConnect } from './hooks/hooks'
import ChainId from './components/ChainId'
import ConnectChain from './components/ConnectChain'
import ConnectGetSet from './components/ConnectGetSet'

import './App.css'

function App() {
  const triedEager = useEagerConnect()

  return (
      <div className="App">
        <header className="App-header">
          <h1>Counter Example </h1>
          <ChainId/>
          <ConnectChain triedEager={triedEager} />
          <ConnectGetSet />
        </header>
      </div>
  );
}


export default function() {
  return (
    <App />
  )
}
