import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { AuthContext } from 'src/context/AuthContext'

const MenuToggle = () => {
  const { currentUser, logOut } = useContext(AuthContext)
  console.log(currentUser)
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        minW={0}
      >
        <Avatar
          size={'sm'}
          // src={
          //   'https://images.unsplash.com/photo-149366643881-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
          // }
          name={currentUser.fullName}
        />
      </MenuButton>
      <MenuList>
        <MenuItem>Profile</MenuItem>

        <MenuDivider />
        <MenuItem onClick={() => logOut()}>Log out</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default MenuToggle
