import React, { Component } from 'react'
import {ethers} from 'ethers'
import {parseEther } from 'ethers/lib/utils'

import GETSETABI from '../abis/getSet.json'

const addressContract = '0x8183777d1a4A3027D8a04c4d22f291a154e9387F'
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
// 调用合约只读函数，使用provide
// const GetSet = new ethers.Contract(addressContract, GETSETABI, provider)
// 调用合约写函数则需要singer
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
