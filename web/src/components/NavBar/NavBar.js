import { Box, Flex, HStack, useColorModeValue } from '@chakra-ui/react'

import MenuToggle from '../MenuToggle/MenuToggle'

export default function NavBar({ logo, currentUser }) {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          py={8}
        >
          <HStack spacing={8} alignItems={'center'} mt={2}>
            {logo}
          </HStack>
          <Flex alignItems={'center'}>
            <MenuToggle currentUser={currentUser} />
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
