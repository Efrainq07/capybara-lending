import { Image, Link, HStack ,StackDivider, Button, Center, Box, Flex, Heading, Stack, UnorderedList, ListItem} from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react'

function App() {
  return (
    <Box minH={'100vh'} bg={"#2B2D3C"}>
      {/* Navbar */}
      <Box minH={'5rem'} bg='#FEFEFE'>
        <Flex>
          <Image boxSize='4.5rem' objectFit='cover' src='./capybaralogo-white-bg.png' id='capybaraLogo'/>
          <Heading>Capybara - Lending</Heading>
          <Heading as='h5' size='sm'>Powered by</Heading>
          <Stack direction={'row'} spacing={4} >
          <UnorderedList>
            <ListItem>Menu</ListItem>
            <ListItem>Delegate</ListItem>
          </UnorderedList>
          </Stack>
          <Button color={'#FEFEFE'} bg={'#2B2D3C'}>Connect  Wallet</Button>
        </Flex>
      </Box>
      {/* Main Content */}
      <Box>
        <Center pt={"1.5rem"} >
          <Grid width={'75%'} templateColumns='repeat(2, 1fr)' gap={12}>
            <GridItem w='100%' h='10' bg='#FEFEFE' borderRadius={45} minH="50rem">
              <Box bg={"#A09C9C"} borderTopRadius={45}>
                <Center>
                  <Grid p={"1rem"} templateColumns='repeat(2, 1fr)' gap={12}>
                    <GridItem>
                      <Button>
                        Your supplies
                      </Button>
                    </GridItem>
                    <GridItem>
                      <Button>
                        Your Delegations
                      </Button>
                    </GridItem>
                  </Grid>
                </Center>
              </Box>
            </GridItem>
            <GridItem w='100%' h='10' bg='#00501E' borderRadius={45} minH="50rem">
              <Box bg={"#ABFE2C"} borderTopRadius={45}>
                <Center>
                  <Grid p={"1rem"} templateColumns='repeat(2, 1fr)' gap={12}>
                    <GridItem>
                      <Button bg={'#00501E'} color="#FEFEFE" >
                        Your supplies
                      </Button>
                    </GridItem>
                    <GridItem>
                      <Button bg={'#00501E'} color="#FEFEFE" >
                        Your Delegations
                      </Button>
                    </GridItem>
                  </Grid>
                </Center>
              </Box>
            </GridItem>
          </Grid>
        </Center>
      </Box>
    </Box>
  );
}

export default App;
