import { Web3Provider, JsonRpcProvider } from '@ethersproject/providers'

export default function getLibrary(provider) {
    const library = new Web3Provider(provider)
    //const library = new JsonRpcProvider('https://bsc-dataseed.binance.org/', 56)
    library.pollingInterval = 5000
    return library
}