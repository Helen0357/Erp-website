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
function Prices() {
  const [pop , setPop] = useState(false);

  return (
    <section className='sales'>
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
    المبيعات
    <IconButton onClick={()=> window.history.back()}>
    <ArrowBackIosNewIcon color='' />
</IconButton>
</h3>
</Container>
</section>
</div>

<section className='type-1'>
    <Container>
        <section className='py-9 flex flex-row-reverse items-center justify-between gap-14 text-white'>
            <div className='text-sm sa-p' style={{ lineHeight: '2'}}>
            <p className='mb-3'>عزيزي مستخدم الموقع أهلاً بك على الموقع الالكتروني لشركة الملاذ الأول لتطبيقات الهواتف المتنقلة (و يشار إليه بـ"الشركة"). الرجاء قراءة شروط وأحكام استخدام الموقع والتطبيق الإلكتروني (https://ma3aak.app) موقع وتطبيق معاك هذه ("الشروط والأحكام") بعناية. الرجاء عدم الاستمرار في استخدام الموقع و/ أو الخدمات في حال عدم موافقتك على الشروط والأحكام. يعتبر استمرارك باستخدام الموقع و/ أو الخدمات موافقة من قبلك على الشروط والأحكام .</p>
            <p>عزيزي مستخدم الموقع أهلاً بك على الموقع الالكتروني لشركة الملاذ الأول لتطبيقات الهواتف المتنقلة (و يشار إليه بـ"الشركة"). الرجاء قراءة شروط وأحكام استخدام الموقع والتطبيق الإلكتروني (https://ma3aak.app) موقع وتطبيق معاك هذه ("الشروط والأحكام") بعناية. الرجاء عدم الاستمرار في استخدام الموقع و/ أو الخدمات في حال عدم موافقتك على الشروط والأحكام. يعتبر استمرارك باستخدام الموقع و/ أو الخدمات موافقة من قبلك على الشروط والأحكام .</p>
            </div>
            <Image src='/assets/ill-4.png' alt='' width={450} height={300} style={{flexBasis: '43%'}}  />
        </section>
        <section className='py-6 flex  items-center justify-between gap-14 text-white'>
       <div>
       <h3 className='mb-3 font-bold'>الخدمات التي نقدمها في هذا البرنامج:</h3>
        <div className='flex mt-6 items-start gap-28 lists'>
          
        <ul className='text-sm'> 
          <li className='flex items-center gap-3'>
          <Image alt='' src='/assets/clipboard-svgrepo-com 1.png' width={20} height={20} />
          <span>البنود</span>
          </li>
           <li className='flex items-center gap-3'>
          <Image alt='' src='/assets/clipboard-list-svgrepo-com 2.png' width={20} height={20} />
          <span>المواد المركبة</span>
          </li>
          <li className='flex items-center gap-3'>
          <Image alt='' src='/assets/clipboard-svgrepo-com 1.png' width={20} height={20} />
          <span>المجموعات</span>
          </li>
          <li className='flex items-center gap-3'>
          <Image alt='' src='/assets/beware-of-fragile-items-5-svgrepo-com 1.png' width={20} height={20} />
          <span>المتغيرات</span>
          </li>
          <li className='flex items-center gap-3'>
          <Image alt='' src='/assets/clipboard-list-svgrepo-com 2.png' width={20} height={20} />
          <span>المواد المركبة</span>
          </li>
         
        </ul>
        <ul  className='text-sm'>
          <li className='flex items-center gap-3'>
          <Image alt='' src='/assets/clipboard-svgrepo-com 1.png' width={20} height={20} />
          <span>طلبات نقل</span>
          </li>
           <li className='flex items-center gap-3'>
          <Image alt='' src='/assets/clipboard-list-svgrepo-com 2.png' width={20} height={20} />
          <span>تعديلات</span>
          </li>
          <li className='flex items-center gap-3'>
          <Image alt='' src='/assets/clipboard-svgrepo-com 1.png' width={20} height={20} />
          <span>المستودعات</span>
          </li>
          <li className='flex items-center gap-3'>
          <Image alt='' src='/assets/beware-of-fragile-items-5-svgrepo-com 1.png' width={20} height={20} />
          <span>الوحدات</span>
          </li>
          <li className='flex items-center gap-3'>
          <Image alt='' src='/assets/clipboard-list-svgrepo-com 2.png' width={20} height={20} />
          <span>المواد المركبة</span>
          </li>
        </ul>
      </div>
       </div>
            <Image src='/assets/ill-1.png' alt='' width={450} height={300} style={{flexBasis: '43%'}}  />
        </section>

  
    </Container>
</section>



<Footer />

    </section>
  )
}

export default Prices