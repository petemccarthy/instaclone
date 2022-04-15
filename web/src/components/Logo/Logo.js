import logo from './logo.png'
import { Image, Box } from '@chakra-ui/react'

const Logo = () => {
  const property = {
    src: logo,
    alt: 'facebook logo',
  }
  return (
    <Box w={44}>
      <Image src={property.src} alt={property.alt} />
    </Box>
  )
}

export default Logo
