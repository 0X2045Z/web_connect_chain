// connector.js

import { InjectedConnector } from '@web3-react/injected-connector'

// 创建连接器对象 并指定了支持的链 id 以包含 Clover 链 id 【1, 3, 4, 5, 42】
export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42 ],
})