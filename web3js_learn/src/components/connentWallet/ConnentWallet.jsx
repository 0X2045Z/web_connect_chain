import React, { Component } from 'react'
import './connentWallet.css'

export default class ConnentWallet extends Component {

    connentWallet = ()=>{
        console.log("@@ ...")
    }

    render(){
        return(
            <div>
                <button className='btn connentWallet' onClick={this.connentWallet}>Connent Wallet</button>
                <p>Not connected</p>
            </div>
        )
    }
}