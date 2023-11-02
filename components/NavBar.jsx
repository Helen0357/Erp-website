import { Container, IconButton } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React  from 'react'

function NavBar() {  


  return (
    <section className='navBar '>
      <Container>
    <div  className='flex  items-center justify-between py-3'>
    <div>
            <Link href='' className='flex items-center gap-3 text-sm'>  
            <Image width={14} height={16} alt='' src='/assets/login.png' />

            تسجيل دخول 


            </Link>
        </div>
        <div className='flex items-center gap-3 info'>
            <div className='flex items-center gap-2 ml-4 text-sm'>
                <Image width={15} height={15} alt='' src='/assets/phone.png' />
                <span className='text-sm'>+987524234</span>
            </div>
            <div className='flex items-center gap-2 ml-4 '>
                <Image width={17} height={17} alt='' src='/assets/email.png' />
                <span className='text-sm'>Info@matrix-erp.net</span>
            </div>
            <ul className='flex items-center gap-6'>
                <li> <Image width={9} height={9} alt='' src='/assets/facebook.png' /></li>
                <li> <Image width={20} height={20} alt='' src='/assets/whatsapp.png' /></li>
                <li> <Image width={20} height={20} alt='' src='/assets/insta.png' /></li>
                <li> <Image width={20} height={20} alt='' src='/assets/linkedin.png' /></li>
            </ul>
        </div>
    </div>

      </Container>
    </section>
  )
}

export default NavBar