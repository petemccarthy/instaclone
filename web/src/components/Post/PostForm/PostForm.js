import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import { useDisclosure, Button } from '@chakra-ui/react'
import { useState, useContext } from 'react'
import { AuthContext } from 'src/context/AuthContext'

import FilePickerModal from 'src/components/FilePickerModal/FilePickerModal'

const PostForm = (props) => {
  const [imageUrl, setImageUrl] = useState(props.post?.imageUrl)
  const { currentUser } = useContext(AuthContext)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const onSubmit = (data) => {
    props.onSave({ ...data, imageUrl, userId: currentUser.id }, props?.post?.id)
  }

  const onFileUpload = (res) => {
    setImageUrl(res.filesUploaded[0].url)
    onClose()
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="caption"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Caption
        </Label>

        <TextField
          name="caption"
          defaultValue={props.post?.caption}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="caption" className="rw-field-error" />

        {!imageUrl && (
          <Button w="xxl" onClick={onOpen} mt={8}>
            Upload Post Image
          </Button>
        )}
        {imageUrl && (
          <div>
            <img src={imageUrl} alt="this" style={{ marginTop: '2rem' }} />
            <button
              onClick={() => setImageUrl(null)}
              className="rw-button rw-button-blue"
            >
              Replace Image
            </button>
          </div>
        )}
        <FilePickerModal
          isOpen={isOpen}
          onClose={onClose}
          // transformations={{ circle: true, force: true }}
          header="Upload Post Image"
          handleSuccess={onFileUpload}
        />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PostForm
