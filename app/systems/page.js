'use client';
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { Container, IconButton } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
function Systems() {
  const [pop , setPop] = useState(false);

  return (
    <section>
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
    الانظمة
    <IconButton onClick={()=> window.history.back()}>
    <ArrowBackIosNewIcon color='' />
</IconButton>
</h3>
</Container>
</section>
</div>

<section className='sys-cards py-14'>
    <Container>
        <section className='flex gap-10 justify-between flex-wrap'>
            <Link href='/purchases' className='scard py-8 px-12 text-center'>
                <Image width={90} height={80} src='/assets/scard1.png' alt='' style={{margin: '3px auto'}} />
                <h3 className='text-white font-bold text-lg py-4'>المشتريات</h3>
                <p className='text-xs' style={{lineHeight: '1.9' , color : '#C4C4C4'}}>
        امكانية تخصيص نظام دفترة حساب مجال عملك بما في ذلك التصميمات المضنة و الواجهات لتحقيق اهداف عمل               
        امكانية تخصيص نظام دفترة حساب مجال عملك بما في ذلك التصميمات المضنة و الواجهات لتحقيق اهداف عمل  
              </p>
            </Link>

            <Link href='' className='scard py-8 px-12 text-center'>
                <Image width={90} height={80} src='/assets/scard2.png' alt='' style={{margin: '3px auto'}} />
                <h3 className='text-white font-bold text-lg py-4'>المبيعات</h3>
                <p className='text-xs' style={{lineHeight: '1.9' , color : '#C4C4C4'}}>
        امكانية تخصيص نظام دفترة حساب مجال عملك بما في ذلك التصميمات المضنة و الواجهات لتحقيق اهداف عمل               
        امكانية تخصيص نظام دفترة حساب مجال عملك بما في ذلك التصميمات المضنة و الواجهات لتحقيق اهداف عمل  
              </p>
            </Link>

          
            <Link  href='' className='scard py-8 px-12 text-center'>
                <Image width={90} height={80} src='/assets/scard3.png' alt='' style={{margin: '3px auto'}} />
                <h3 className='text-white font-bold text-lg py-4'>جرد</h3>
                <p className='text-xs' style={{lineHeight: '1.9' , color : '#C4C4C4'}}>
        امكانية تخصيص نظام دفترة حساب مجال عملك بما في ذلك التصميمات المضنة و الواجهات لتحقيق اهداف عمل               
        امكانية تخصيص نظام دفترة حساب مجال عملك بما في ذلك التصميمات المضنة و الواجهات لتحقيق اهداف عمل  
              </p>
            </Link>
            <Link  href='' className='scard py-8 px-12 text-center'>
                <Image width={90} height={80} src='/assets/scard4.png' alt='' style={{margin: '3px auto'}} />
                <h3 className='text-white font-bold text-lg py-4'>دخول مزدوج</h3>
                <p className='text-xs' style={{lineHeight: '1.9' , color : '#C4C4C4'}}>
        امكانية تخصيص نظام دفترة حساب مجال عملك بما في ذلك التصميمات المضنة و الواجهات لتحقيق اهداف عمل               
        امكانية تخصيص نظام دفترة حساب مجال عملك بما في ذلك التصميمات المضنة و الواجهات لتحقيق اهداف عمل  
              </p>
            </Link>
            <Link  href='' className='scard py-8 px-12 text-center'>
                <Image width={90} height={80} src='/assets/scard5.png' alt='' style={{margin: '3px auto'}} />
                <h3 className='text-white font-bold text-lg py-4'>الخدمات المصرفية</h3>
                <p className='text-xs' style={{lineHeight: '1.9' , color : '#C4C4C4'}}>
        امكانية تخصيص نظام دفترة حساب مجال عملك بما في ذلك التصميمات المضنة و الواجهات لتحقيق اهداف عمل               
        امكانية تخصيص نظام دفترة حساب مجال عملك بما في ذلك التصميمات المضنة و الواجهات لتحقيق اهداف عمل  
              </p>
            </Link>
            <Link  href='' className='scard py-8 px-12 text-center'>
                <Image width={90} height={80} src='/assets/scard6.png' alt='' style={{margin: '3px auto'}} />
                <h3 className='text-white font-bold text-lg py-4'>الموارد البشرية</h3>
                <p className='text-xs' style={{lineHeight: '1.9' , color : '#C4C4C4'}}>
        امكانية تخصيص نظام دفترة حساب مجال عملك بما في ذلك التصميمات المضنة و الواجهات لتحقيق اهداف عمل               
        امكانية تخصيص نظام دفترة حساب مجال عملك بما في ذلك التصميمات المضنة و الواجهات لتحقيق اهداف عمل  
              </p>
            </Link>
        </section>
    </Container>
</section>
<Footer />
    </section>
  )
}

export default Systems