import React from 'react';
import {
  Box
} from '@chakra-ui/react'
import MainContent from './sections/MainContent';
import Simple from './sections/Navbar';

function App() {

  const [account, setAccount] = React.useState(undefined);
  const [web3modal, setWeb3modal] = React.useState();
  const [provider, setProvider] = React.useState();

  return (
    <Box minH={'100vh'} bg={"#2B2D3C"}>
      <Simple account={account} setAccount={setAccount} web3modal={web3modal} setWeb3modal={setWeb3modal} provider={provider} setProvider={setProvider} />
      <MainContent />
    </Box>
  );
}
export default App;