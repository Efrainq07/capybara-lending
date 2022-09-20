import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { handleConnectWallet } from "../utils/WalletConnect";

const routes = [
    {
      'page': 'Menu',
      'link': '/'
    },
    {
      'page': 'Docs',
      'link': '/docs'
    },
    {
      'page': 'Delegate',
      'link': '/delegate'
    }
  ]

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={children.link}
    color="#212121">
    {children.page}
  </Link>
);

export default function Simple({ account, setAccount, web3modal, setWeb3modal, provider, setProvider }) {
  // State var for hamburger button
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          {/* Nav links mapping */}
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image src="./capybaralogo-white-bg.png" width="60px" height="60px" />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {routes.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            { account?
                <>
                  <Button bgColor={"#2B2D3C"} color="#FEFEFE" borderRadius={"2rem"} onClick={
                    async ()=>{
                      await web3modal.clearCachedProvider();
                      window.localStorage.clear();
                      setAccount(undefined);
                      setProvider();
                    }
                  }>Disconnect</Button>
                  </>:
                <>
                  <Button bgColor={"#2B2D3C"} color="#FEFEFE" borderRadius={"2rem"} onClick={
                    () => {
                      handleConnectWallet({
                        setAccount,
                        setWeb3modal,
                        setProvider,
                        // setCanMint,
                        // canMint
                      })
                    }
                  }>Connect Wallet</Button>
                </>
              }
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {routes.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}