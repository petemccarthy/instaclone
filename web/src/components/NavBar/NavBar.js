import { Box, Flex, HStack, Container } from '@chakra-ui/react'
import { routes, Link } from '@redwoodjs/router'
import { IconButton } from '@chakra-ui/react'
import {
  RiHomeLine,
  RiHomeFill,
  RiHeartLine,
  RiHeartFill,
} from 'react-icons/ri'

import { BsPlusSquare, BsPlusSquareFill } from 'react-icons/bs'

import MenuToggle from '../MenuToggle/MenuToggle'

export default function NavBar({ logo, currentUser }) {
  let iconStyles = {
    width: 'white',
    fontSize: '1.8em',
    backgroundColor: 'white',
    margin: 0,
    padding: 0,
  }
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
              <HStack spacing={3} alignItems={'center'}>
                <Link to={routes.home()}>
                  <IconButton
                    aria-label="Navigate home"
                    bg={'white'}
                    icon={<RiHomeLine style={iconStyles} />}
                    _hover={{ bg: 'white' }}
                    _focus={{ bg: 'white' }}
                    _active={{ bg: 'white' }}
                  />
                </Link>

                <IconButton
                  aria-label="New Post"
                  bg={'white'}
                  icon={<BsPlusSquare style={iconStyles} />}
                  _hover={{ bg: 'white' }}
                  _focus={{ bg: 'white' }}
                  _active={{ bg: 'white' }}
                />
                <IconButton
                  aria-label="Make favorite"
                  bg={'white'}
                  icon={<RiHeartLine style={iconStyles} />}
                  _hover={{ bg: 'white' }}
                  _focus={{ bg: 'white' }}
                  _active={{ bg: 'white' }}
                />
                <MenuToggle currentUser={currentUser} />
              </HStack>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  )
}
