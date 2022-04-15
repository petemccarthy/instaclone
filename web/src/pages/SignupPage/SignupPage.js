import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'

import Logo from 'src/components/Logo/Logo'
import PasswordField from 'src/components/PasswordField/PasswordField'
import FacebookButton from 'src/components/FacebookButton/FacebookButton'

function SignupPage() {
  return (
    <Container w="md" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            <Stack spacing="5" align={'center'}>
              <Logo />
              <Text
                fontWeight={700}
                textColor={'gray.400'}
                textAlign={'center'}
              >
                Sign up to see photos and videos from your friends.
              </Text>
              <FacebookButton />
              <HStack>
                <Divider variant={'solid'} />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
                <FormLabel htmlFor="fullName" mt={3}>
                  Full Name
                </FormLabel>
                <Input id="fullName" type="text" />
                <FormLabel htmlFor="password" mt={3}>
                  Password
                </FormLabel>
                <PasswordField id="password" />
                <Stack spacing="6">
                  <Button
                    variant="primary"
                    bg={'blue.500'}
                    textColor={'white'}
                    mt={4}
                  >
                    Sign up
                  </Button>
                </Stack>
              </FormControl>
              <Text
                fontSize={'xs'}
                textColor={'gray.500'}
                fontWeight={'semibold'}
                align={'center'}
              >
                By signing up, you agree to our Terms , Data Policy and Cookies
                Policy .
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Box
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
        boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
        borderRadius={{ base: 'none', sm: 'xl' }}
      >
        <HStack spacing="1" justify="center">
          <Text color="muted">Already have an account?</Text>
          <Button variant="link" colorScheme="blue">
            Log in
          </Button>
        </HStack>
      </Box>
    </Container>
  )
}

export default SignupPage
