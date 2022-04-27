import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { AuthContext } from 'src/context/AuthContext'
import { Link, routes } from '@redwoodjs/router'

import { RiHeartLine, RiHeartFill } from 'react-icons/ri'

const FavoriteMenu = () => {
  const { currentUser, logOut } = useContext(AuthContext)
  let iconStyles = {
    width: 'white',
    fontSize: '1.8em',
    backgroundColor: 'white',
    margin: 0,
    padding: 0,
  }
  console.log(currentUser)
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        minW={0}
        aria-label="Favorite Menu"
        bg={'white'}
        icon={<RiHeartLine style={iconStyles} />}
        _hover={{ bg: 'white' }}
        _focus={{ bg: 'white' }}
        _active={{ bg: 'white' }}
        color={'black.500'}
      />
      <MenuList>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuDivider />
      </MenuList>
    </Menu>
  )
}

export default FavoriteMenu
