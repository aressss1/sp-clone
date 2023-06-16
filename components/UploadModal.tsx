'use client'

import useUploadModal from "@/hooks/useUploadModal"
import Modal from "./Modal"

const UploaMdodal = () => {
  const uploadModal = useUploadModal()

  const onChange = (open: boolean) => {
    if(!open) {
      //Reset The form

      uploadModal.onClose()
    }
  }

  return (
    <Modal
        title="Upload modal title"
        description="Upload modal description"
        isOpen={uploadModal.isOpen}
        onChange={onChange}
    >
        Upload Modal
    </Modal>
  )
}

export default UploaMdodal
