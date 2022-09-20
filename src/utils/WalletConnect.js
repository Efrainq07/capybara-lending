import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import Web3 from "web3"
// import { ethers } from "ethers" ;

// import { handleAuth  } from './WalletConnect';

const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, 
      options: {
        infuraId: "", 
        rpc: {
          4: "https://dimensional-omniscient-hexagon.rinkeby.discover.quiknode.pro/abacea936acca49fe5a95e58e1db2bad0fed7855/"
          },
      }
    }
  };

const web3modal = new Web3Modal(
    {
        network : "rinkeby",
        theme : "dark",
        cacheProvider : false,
        providerOptions
    }
);

// export const handleConnectWallet = async function connectWallet({setAccount,setWeb3modal,setProvider, setCanMint, canMint}) {
export const handleConnectWallet = async function connectWallet({setAccount,setWeb3modal,setProvider}) {
  try {
    var provider = await web3modal.connect()

    await provider.enable();
    var web3 = new Web3(provider)
    const acc = await web3.eth.getAccounts(); 
    
    setAccount(acc[0]);
    setWeb3modal(web3modal);
    setProvider(provider);

    var userNetworkId = await web3.eth.net.getId();
    console.log(userNetworkId);

    // if ( userNetworkId !== 4) {
    //   setCanMint(false);
    // } else {
    //   setCanMint(true);
    // }
    // console.log(canMint);

  } catch (error) {
    console.log(error);
  }
};