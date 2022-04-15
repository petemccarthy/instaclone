import {
  Box,
  Button,
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

import { useAuth } from '@redwoodjs/auth'
import { useEffect, useState } from 'react'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Form } from '@redwoodjs/forms'
import { toast, Toaster } from '@redwoodjs/web/toast'

import Logo from 'src/components/Logo/Logo'
import PasswordField from 'src/components/PasswordField/PasswordField'
import FacebookButton from 'src/components/FacebookButton/FacebookButton'

function SignupPage() {
  const { isAuthenticated, signUp } = useAuth()
  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const onSubmit = async () => {
    const response = await signUp({ username: email, password, fullName })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value)
  }

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
          <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
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
              <Form onSubmit={onSubmit}>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                  />
                  <FormLabel htmlFor="fullName" mt={3}>
                    Full Name
                  </FormLabel>
                  <Input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={({ target }) => setFullName(target.value)}
                  />
                  <FormLabel htmlFor="password" mt={3}>
                    Password
                  </FormLabel>
                  <PasswordField
                    id="password"
                    value={password}
                    handleChange={handlePasswordChange}
                  />
                  <Stack spacing="6">
                    <Button
                      variant="primary"
                      bg={'blue.500'}
                      textColor={'white'}
                      mt={4}
                      type="submit"
                    >
                      Sign up
                    </Button>
                  </Stack>
                </FormControl>
              </Form>
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
