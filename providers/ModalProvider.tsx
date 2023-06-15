'use client'

import Modal from "@/components/Modal"
import { useEffect , useState } from "react"

const ModalProvider = () => {
    const [isMounted , setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    } , [])

    if(!isMounted){
        return null
    }

    return (
        <>
            <Modal 
                title="Test Modal"
                description="test Description"
                isOpen
                onChange={() => {}}
            >
                Test 
            </Modal>
        </>
    )
}

export default ModalProvider;