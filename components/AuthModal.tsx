'use client'

import React, { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { 
  useSessionContext, 
  useSupabaseClient
} from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';

import useAuthModal from "@/hooks/useAuthModal";

import Modal from './Modal';

const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter()
    const { session } = useSessionContext()
    const { onClose , isOpen } = useAuthModal()

    const onChange = (open: boolean) => {
        if(!open){
            onClose()
        }
    }

    useEffect(() => {
        if(session){
            router.refresh()
            onClose()
        }
    },[session , router , onClose])

  return (
    <Modal
        title='Welcome Back'
        description='Login to your account'
        isOpen={isOpen}
        onChange={onChange}
    >
        <Auth
            theme='dark'
            magicLink
            providers={["github"]}
            supabaseClient={supabaseClient}
            appearance={{
                theme: ThemeSupa,
                variables: {
                    default: {
                        colors: {
                            brand: '#404040',
                            brandAccent: '#22c55e'
                        }
                    }
                }
            }}
        >

        </Auth>
    </Modal>
  )
}

export default AuthModal
