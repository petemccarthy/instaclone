import { Box, Flex, HStack, Container } from '@chakra-ui/react'
import { routes, Link } from '@redwoodjs/router'
import { IconButton, useDisclosure } from '@chakra-ui/react'
import { RiHomeLine, RiHomeFill } from 'react-icons/ri'
import { BsPlusSquare, BsPlusSquareFill } from 'react-icons/bs'

import MenuToggle from '../MenuToggle/MenuToggle'
import FilePickerModal from '../FilePickerModal/FilePickerModal'
import FavoriteMenu from '../FavoriteMenu/FavoriteMenu'

export default function NavBar({ logo, currentUser }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
                  onClick={onOpen}
                />
                <FavoriteMenu />
                <MenuToggle currentUser={currentUser} />
              </HStack>
            </Flex>
            <FilePickerModal isOpen={isOpen} onClose={onClose} />
          </Flex>
        </Container>
      </Box>
    </>
  )
}
