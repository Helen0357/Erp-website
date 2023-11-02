'use client';
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { Container, IconButton } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
function ContactUs() {
  const [pop , setPop] = useState(false);

  return (
    <section className=''>
        <div className='main-bg'>
<NavBar />
<section className='landingNav py-3 text-white text-center'>
<Container >
<div className='flex items-center gap-8 relative cont'>
<Image src='/assets/logo.png' alt='' width={100} height={85} />
<ul className='flex items-center gap-16 text-white lista'>
<li><Link href='/'>الرئيسية</Link></li>
  <li><Link href='/software'>البرامج</Link></li>
  <li><Link href='/systems'>الانظمة</Link></li>
  <li><Link href='/prices'>الاسعار</Link></li>
  <li><Link href='/contactus'>اتصل بنا</Link></li>
</ul>
<IconButton className='pop-btn' onClick={()=> setPop(prev => !prev)}>
<MenuIcon />
</IconButton>
{pop && <div className=' absolute menu-ul'>
<ul className='flex flex-col  items-center gap-5'>
<li><Link href='/'>الرئيسية</Link></li>
  <li><Link href='/software'>البرامج</Link></li>
  <li><Link href='/systems'>الانظمة</Link></li>
  <li><Link href='/prices'>الاسعار</Link></li>
  <li><Link href='/contactus'>اتصل بنا</Link></li>
<li  className='flex items-center gap-3 hg'>

<a href=''> <img alt='' src='/assets/linkedin.png' className='inline' /></a>
  <a href=''> <img alt='' src='/assets/insta.png' className='inline' /></a>
  <a  href=""
> <img alt='' src='/assets/whatsapp.png' className='inline' /></a>
  <a href=''> <img alt='' src='/assets/facebook.png' className='inline' /></a>

</li>
</ul>
</div>}
</div>
<br />
<h3 className='py-8 text-2xl font-bold block text-white hdn'> 
    اتصل بنا
    <IconButton onClick={()=> window.history.back()}>
    <ArrowBackIosNewIcon color='' />
</IconButton>
</h3>
</Container>
</section>
</div>

<section className='my-20 type-1'>
    <Container>
        <section className='contact  relative py-12 pr-12 flex items-center gap-10 justify-between'>
            <div className='cont-one' >
            <h1 className='text-2xl text-white font-bold mb-3' >تواصل معنا الان!</h1>
                    <p className='text-base mb-5' style={{color : '#818181'}}>للاستفسار تواصل معنا الان وارسل لنا تساؤولاتك</p>

                    <form className='flex flex-col  gap-6 w-full'>
                        <input type='text' placeholder='الاسم الثلاثي' />
                        <input type='email' placeholder='الايميل' />
                        <textarea rows={7} placeholder='ادخل استفسارتك هنا'></textarea>

                        <button className='start-visit-btn w-full' style={{marginTop: '10px'}}>ارسال</button>
                    </form>
            </div>
                    

            <div className='cont-two'  >

                <Image src='/assets/contact.png' width={510} height={400} alt='' style={{marginRight: '0px' }} />
                <ul className='mt-5 fef mr-40' >
          <li className='flex items-center gap-2 ml-4 text-sm'>
             <LocationOnIcon />
                <span className='text-sm'>Syria , Tartus</span>
            </li>
          <li className='flex items-center gap-2 ml-4 text-sm'>
                <PhoneEnabledIcon />
                <span className='text-sm'>+987524234</span>
            </li>
          <li className='flex items-center gap-2 ml-4'>
              <EmailIcon />
                <span className='text-sm'>Info@matrix-erp.net</span>
            </li>        
            
            
            </ul>
            </div>
<ul className='co-social'>
    <li><Link href=''><Image src='/assets/co1.png' alt='' width={20} height={20}  /></Link></li>
    <li><Link href=''><Image src='/assets/co2.png' alt='' width={20} height={20}  /></Link></li>
    <li><Link href=''><Image src='/assets/co3.png' alt='' width={20} height={20}  /></Link></li>
    <li><Link href=''><Image src='/assets/co4.png' alt='' width={10} height={10}  /></Link></li>
</ul>
        </section>
    </Container>
</section>



<Footer />

    </section>
  )
}

export default ContactUs