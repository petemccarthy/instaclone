import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { PickerInline } from 'filestack-react'

const FilePickerModal = ({
  accept,
  maxFiles,
  header,
  transformations,
  handleSuccess,
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <PickerInline
            apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
            pickerOptions={{
              accept,
              maxFiles,
              transformations,
            }}
            onSuccess={handleSuccess}
          />
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default FilePickerModal
