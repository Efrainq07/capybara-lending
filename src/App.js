import logo from './logo.svg';
import './App.css';
import {Layout} from 'antd';
import { Image, Link, HStack ,StackDivider, Button} from '@chakra-ui/react';



const { Content, Sider, Footer, Header } = Layout;


function App() {
  return (
    <Layout>
      <Header>
        <div  className='capHeader'>
        <Image boxSize='100px' objectFit='cover' src='./capybaralogo-white-bg.png' id='capybaraLogo'/>
        <Button id={'connectWalletButton'}>
            Connect Wallet
        </Button>
        </div>
      </Header>
      <Content id={'capContent'}>
        
      </Content>
    </Layout>
  );
}

export default App;
