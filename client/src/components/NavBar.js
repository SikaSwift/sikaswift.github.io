import {
    Box,
    Flex,
    Text,
    Button,
    Stack,
    useColorModeValue,
    useBreakpointValue,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { ColorModeSwitcher } from './ColorModeSwitcher';

export default function WithSubnavigation() {
    const navigate = useNavigate();

    return (
        <Box>
            <Flex
                bg={useColorModeValue('gray.100', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'80px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
                justify={'center'}
            >
                <Flex width={'60%'} alignItems={'center'}>
                    <Text
                        marginRight={'10'}
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'cursive'}
                        fontSize={'4xl'}
                        fontWeight={'bold'}
                        color={useColorModeValue('green.500', 'white')}
                        onClick={() => navigate('/')}
                    >
                        SikaSwift
                    </Text>
                    <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                            <DesktopNav />
                        </Flex>
                    </Flex>

                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}
                        align={'center'}
                    >
                        <Button 
                            as={'a'}
                            fontSize={'medium'}
                            fontWeight={500}
                            fontFamily={'sans-serif'}
                            variant={'link'}
                            href={'#'}
                        >
                            Sign In
                        </Button>
                        <Button
                            as={'a'}
                            paddingY={'6'}
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={'medium'}
                            fontWeight={500}
                            fontFamily={'sans-serif'}
                            color={'white'}
                            bg={'green.400'}
                            href={'#'}
                            _hover={{
                                bg: 'green.300',
                            }}
                        >
                            Sign Up
                        </Button>
                        <ColorModeSwitcher justifySelf="flex-end" />
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    )
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Box
                        as="a"
                        p={2}
                        href={navItem.href ?? '#'}
                        fontSize={'medium'}
                        fontWeight={500}
                        fontFamily={'sans-serif'}
                        color={linkColor}
                        _hover={{
                            textDecoration: 'none',
                            color: linkHoverColor,
                        }}>
                        {navItem.label}
                    </Box>
                </Box>
            ))}
        </Stack>
    )
}

const NAV_ITEMS = [
    {
        label: 'About',
    },
    {
        label: 'Services',
    },
]