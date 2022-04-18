import NavBar from 'src/components/NavBar/NavBar'
import Footer from 'src/components/Footer/Footer'
import Logo from 'src/components/Logo/Logo'
import { Container, VStack } from '@chakra-ui/react'

const MainLayout = ({ children }) => {
  return (
    <>
      <VStack bg={'whitesmoke'}>
        <NavBar logo={<Logo />} />
        <Container maxW={'container.lg'}>
          <main>{children}</main>
        </Container>
        <Footer />
      </VStack>
    </>
  )
}

export default MainLayout
