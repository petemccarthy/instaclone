import { Box, Flex, HStack, Container } from '@chakra-ui/react'
import { routes, Link } from '@redwoodjs/router'

import MenuToggle from '../MenuToggle/MenuToggle'

export default function NavBar({ logo, currentUser }) {
  return (
    <>
      <Box
        bg={'white'}
        px={4}
        w={'full'}
        borderBottom={'1px'}
        borderBottomColor={'gray.300'}
      >
        <Container maxW={'container.lg'}>
          <Flex
            h={16}
            alignItems={'center'}
            justifyContent={'space-between'}
            py={8}
          >
            <HStack spacing={8} alignItems={'center'} mt={2}>
              <Box w={'30px'}>
                <Link to={routes.home()}>{logo}</Link>
              </Box>
            </HStack>
            <Flex alignItems={'center'}>
              <MenuToggle currentUser={currentUser} />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  )
}
