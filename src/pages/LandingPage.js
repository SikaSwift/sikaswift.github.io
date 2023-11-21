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
                            <Text width={'75%'} align={'left'}>
                                SikaSwift is a South African financial services startup, aiming to revolutionize 
                                the way consumers and businesses conduct payments and receive loans. We plan 
                                to offer a variety of products, such as fast and secure payments, instant loans, 
                                buy now pay later, and paycheck advances.
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