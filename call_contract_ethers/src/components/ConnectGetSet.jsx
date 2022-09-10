import React, { Component } from 'react'

export default class ConnectGetSet extends Component {

  callContract = ()=>{
	
  }

  render() {
    return (
      <div>
        <Button onClick={this.callContract}>点击连接测试连接合约并获取合约数据</Button>
      </div>
    )
  }
}
