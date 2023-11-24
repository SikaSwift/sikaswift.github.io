import { Box, Button, Code, Flex, Grid, GridItem, Link, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import WithSubnavigation from "../components/NavBar";

const LandingPage = () => {
    return (
        <Box>
            <WithSubnavigation />
            <Flex justify={'center'} marginTop={'150'}>
                <Box textAlign="center" fontSize="xl" width={'60%'}>
                    <Grid p={3}>
                        <VStack spacing={8}>
                            <Text
                                bgGradient='linear(to-br, #00FF1A, #0085FF)'
                                bgClip='text'
                                fontSize='5xl'
                                fontWeight='extrabold'
                                width={'80%'}
                            >
                                Bringing Accessible and Convenient Financial Products to Africa
                            </Text>
                            <Text width={'70%'} align={'left'} marginBottom={'6'}>
                                SikaSwift aims to revolutionize the financial landscape in Africa by providing 
                                an integrated, efficient, and accessible digital financial ecosystem. We 
                                empower individual consumers and small businesses with innovative financial 
                                solutions that enable seamless transactions, enhance business performance, 
                                and foster personal financial growth. Join us in shaping a more inclusive 
                                financial future!
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
                                More info coming soon
                            </Button>
                        </VStack>
                    </Grid>
                </Box>
            </Flex>
        </Box>
    );
};

export default LandingPage;