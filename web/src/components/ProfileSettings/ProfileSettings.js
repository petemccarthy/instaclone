import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  useDisclosure,
} from '@chakra-ui/react'

import { SmallCloseIcon } from '@chakra-ui/icons'

import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'

import FilePickerModal from 'src/components/FilePickerModal'

const ProfileSettings = ({ user, onSave }) => {
  const [email, setEmail] = useState(user.email)
  const [fullName, setFullName] = useState(user.fullName)
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const onFileUpload = (res) => {
    setPhotoUrl(res.filesUploaded[0].url)
    onClose()
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('whitesmoke', 'gray.800')}
    >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        m4={'4'}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          User Profile Edit
        </Heading>
        <FormControl id="userName">
          <FormLabel>User Icon</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl" src={photoUrl} name={fullName}>
                {photoUrl && (
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="red"
                    aria-label="remove Image"
                    icon={<SmallCloseIcon />}
                    onClick={() => setPhotoUrl('')}
                  />
                )}
              </Avatar>
            </Center>
            <Center w="full">
              <Button w="full" onClick={onOpen}>
                Change Icon
              </Button>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder=""
            _placeholder={{ color: 'gray.500' }}
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </FormControl>
        <FormControl id="fullName" isRequired>
          <FormLabel>Full Name</FormLabel>
          <Input
            placeholder=""
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Link to={routes.profile()}>
            <Button
              bg={'red.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'red.500',
              }}
            >
              Cancel
            </Button>
          </Link>
          <Button
            onClick={() => {
              onSave({ email, fullName, photoUrl }, user.id)
            }}
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
      <FilePickerModal
        accept="image/*"
        maxFiles={1}
        transformations={{ circle: true, force: true }}
        handleSuccess={onFileUpload}
        header="Choose Profile Pic"
        isOpen={isOpen}
        onClose={onClose}
      />
    </Flex>
  )
}

export default ProfileSettings
