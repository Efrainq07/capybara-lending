import React from "react";
import { Box, Center, SimpleGrid, GridItem, Table, TableContainer, Thead, Tr, Th, Button, Grid, Divider } from "@chakra-ui/react";

function MainContent() {
    return(
        <Box>
            <Center pt={"1.5rem"} >
                <SimpleGrid minChildWidth={{sm: "29rem" , md:"20rem", lg: "25rem"}} width={{ base: '95%', lg: "75%" }} margin={{base: 'auto' }}  gap={12}>
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
                        <Box>
                            <TableContainer>
                            <Table>
                                <Thead>
                                <Tr>
                                    <Th>Asset</Th>
                                    <Th>Balance</Th>
                                    <Th>Borrowable</Th>
                                </Tr>
                                <Divider />

                                </Thead>
                            </Table>
                            </TableContainer>
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
                        <Box>
                            <TableContainer>
                            <Table>
                                <Thead>
                                <Tr>
                                    <Th color={"#FEFEFE"}>Pool User</Th>
                                    <Th color={"#FEFEFE"}>Score</Th>
                                    <Th color={"#FEFEFE"}>APY</Th>
                                    <Th color={"#FEFEFE"}>Description</Th>
                                </Tr>
                                </Thead>
                                <Divider />
                            </Table>
                            </TableContainer>
                        </Box>
                    </GridItem>
                </SimpleGrid>
            </Center>
        </Box>
    );
}
export default MainContent;