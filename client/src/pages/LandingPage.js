import { Box, Button, Code, Flex, Grid, GridItem, Link, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import WithSubnavigation from "../components/NavBar";

const LandingPage = () => {
    return (
        <Box>
            <WithSubnavigation />
            <Flex justify={'center'} paddingY={'10'}>
                <Box textAlign="center" fontSize="xl" width={'60%'}>
                    <Grid p={3}>
                        <VStack spacing={8}>
                            <Text
                                bgGradient='linear(to-l, #00FF1A, #0085FF)'
                                bgClip='text'
                                fontSize='5xl'
                                fontWeight='extrabold'
                                width={'60%'}
                            >
                                Providing Industry Leading Solutions for Payments
                            </Text>
                            <Text width={'70%'} align={'left'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Viverra a morbi ut donec in. Ac diam, at sed cras nisi.
                            </Text>
                            <Button
                                fontSize={'sm'}
                                fontWeight={600}
                                color={'white'}
                                bg={'green.400'}
                                href={'#'}
                                rounded={'full'}
                                px={6}
                                paddingY={'6'}
                                _hover={{
                                    bg: 'green.500',
                                }}>
                                Learn More
                            </Button>
                        </VStack>
                    </Grid>
                </Box>
            </Flex>
            <Flex direction={'column'}>
                <Flex h={'400px'} bg={useColorModeValue('gray.100', 'gray.700')} width={'100%'} justify={'center'} align={'center'}>
                    <Box width={'60%'}>
                        <Grid templateColumns='repeat(5, 1fr)' gap={1}>
                            <GridItem colSpan={2}>
                                <Text
                                    fontSize='4xl'
                                    fontWeight={'bold'}
                                >
                                    Send money securely
                                </Text>
                            </GridItem>
                            <GridItem colStart={4} colEnd={6} h='10' bg='papayawhip' />
                        </Grid>
                    </Box>
                </Flex>
                <Flex h={'400px'} width={'100%'} justify={'center'} align={'center'}>
                    <Box width={'60%'}>
                        <Grid templateColumns='repeat(5, 1fr)' gap={1}>
                            <GridItem colSpan={2} bg='papayawhip' />
                            <GridItem colStart={4} colEnd={6} h='10' alignItems={'right'} height={'100%'}>
                                <Text
                                    fontSize='4xl'
                                    fontWeight={'bold'}
                                >
                                    Send money securely tesjeoreoidifjdsif jidsjf odsjf oidsjf oijdsoif jsifds
                                </Text>
                            </GridItem>
                        </Grid>
                    </Box>
                </Flex>
                <Flex h={'400px'} bg={useColorModeValue('gray.100', 'gray.700')} width={'100%'} justify={'center'} align={'center'}>
                    <Box width={'60%'}>
                        <Grid templateColumns='repeat(5, 1fr)' gap={1}>
                            <GridItem colSpan={2}>
                                <Text
                                    fontSize='4xl'
                                    fontWeight={'bold'}
                                >
                                    Send money securely
                                </Text>
                            </GridItem>
                            <GridItem colStart={4} colEnd={6} h='10' bg='papayawhip' />
                        </Grid>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
};

export default LandingPage;