import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-indigo-900 text-white">
          <div className="container flex flex-col items-center py-12">
            <p className='text-xl font-bold'>Blog pessoal Generation | Copyright: </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-1'>
              <LinkedinLogo size={36} weight='fill' />
              <InstagramLogo size={36} weight='fill' />
              <FacebookLogo size={36} weight='fill' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer