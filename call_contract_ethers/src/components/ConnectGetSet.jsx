import React, { Component } from 'react'
import {ethers} from 'ethers'
import {parseEther } from 'ethers/lib/utils'

import GETSETABI from '../abis/getSet.json'

const addressContract = '0x1eE325Ab6F30E1FB5E636e701f5B36102f9bC61C'
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
// const GetSet = new ethers.Contract(addressContract, GETSETABI, provider)
const GetSet = new ethers.Contract(addressContract, GETSETABI, signer)

export default class ConnectGetSet extends Component {

  callContractA = ()=>{

    GetSet.a().then((result)=>{
      console.log(ethers.utils.formatEther(result))
    }).catch('error', console.error)

  }

  callContractSetA = ()=>{
    const {input1} = this.refs
    GetSet.setA(parseEther(input1.value))
      .then((tr) => {
        console.log(`TransactionResponse TX hash: ${tr.hash}`)
        tr.wait().then((receipt)=>{console.log("transfer receipt",receipt)})
      })
      .catch((e)=>console.log(e))

  }

  callContractGetA = ()=>{
    GetSet.getA().then((result)=>{
      console.log(ethers.utils.formatEther(result))
    }).catch('error', console.error)

  }

  render() {
    return (
      <div>
        <h2>Connect GetSet Contract</h2>
        <button onClick={this.callContractA}>点击获取合约a的值</button><br/>
        <button onClick={this.callContractSetA}>SetA</button><input type="text" ref="input1"/><br/>
        <button onClick={this.callContractGetA}>GetA</button><br/>
      </div>
    )
  }
}
