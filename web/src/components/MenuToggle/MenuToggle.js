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
import { Link, routes } from '@redwoodjs/router'

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
          src={currentUser.photoUrl}
          name={currentUser.fullName}
        />
      </MenuButton>
      <MenuList>
        <Link to={routes.profile()}>
          <MenuItem>Profile</MenuItem>
        </Link>

        <MenuDivider />
        <MenuItem onClick={() => logOut()}>Log out</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default MenuToggle
