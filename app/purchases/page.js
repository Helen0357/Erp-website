'use client';
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { Container, IconButton } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

// import required modules
import { Pagination } from 'swiper/modules';
function Purchases() {
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
    المشتريات
    <IconButton onClick={()=> window.history.back()}>
    <ArrowBackIosNewIcon color='' />
</IconButton>
</h3>
</Container>
</section>
</div>

<section className='type-1'>
    <Container>
        <section className='py-9 type-1 flex items-center justify-between gap-14 text-white'>
            <div className='text-sm' style={{ lineHeight: '2'}}>
            <p>عزيزي مستخدم الموقع أهلاً بك على الموقع الالكتروني لشركة الملاذ الأول لتطبيقات الهواتف المتنقلة (و يشار إليه بـ"الشركة"). الرجاء قراءة شروط وأحكام استخدام الموقع والتطبيق الإلكتروني (https://ma3aak.app) موقع وتطبيق معاك هذه ("الشروط والأحكام") بعناية. الرجاء عدم الاستمرار في استخدام الموقع و/ أو الخدمات في حال عدم موافقتك على الشروط والأحكام. يعتبر استمرارك باستخدام الموقع و/ أو الخدمات موافقة من قبلك على الشروط والأحكام .</p>
            <p>عزيزي مستخدم الموقع أهلاً بك على الموقع الالكتروني لشركة الملاذ الأول لتطبيقات الهواتف المتنقلة (و يشار إليه بـ"الشركة"). الرجاء قراءة شروط وأحكام استخدام الموقع والتطبيق الإلكتروني (https://ma3aak.app) موقع وتطبيق معاك هذه ("الشروط والأحكام") بعناية. الرجاء عدم الاستمرار في استخدام الموقع و/ أو الخدمات في حال عدم موافقتك على الشروط والأحكام. يعتبر استمرارك باستخدام الموقع و/ أو الخدمات موافقة من قبلك على الشروط والأحكام .</p>
            </div>
            <Image src='/assets/ill-1.png' alt='' width={450} height={300} style={{flexBasis: '47%'}}  />
        </section>
        <section className='py-6 flex type-1 flex-row-reverse items-center justify-between gap-14 text-white'>
            <div className='text-sm' style={{ lineHeight: '2'}}>
            <p>عزيزي مستخدم الموقع أهلاً بك على الموقع الالكتروني لشركة الملاذ الأول لتطبيقات الهواتف المتنقلة (و يشار إليه بـ"الشركة"). الرجاء قراءة شروط وأحكام استخدام الموقع والتطبيق الإلكتروني (https://ma3aak.app) موقع وتطبيق معاك هذه ("الشروط والأحكام") بعناية. الرجاء عدم الاستمرار في استخدام الموقع و/ أو الخدمات في حال عدم موافقتك على الشروط والأحكام. يعتبر استمرارك باستخدام الموقع و/ أو الخدمات موافقة من قبلك على الشروط والأحكام .</p>
            <p>عزيزي مستخدم الموقع أهلاً بك على الموقع الالكتروني لشركة الملاذ الأول لتطبيقات الهواتف المتنقلة (و يشار إليه بـ"الشركة"). الرجاء قراءة شروط وأحكام استخدام الموقع والتطبيق الإلكتروني (https://ma3aak.app) موقع وتطبيق معاك هذه ("الشروط والأحكام") بعناية. الرجاء عدم الاستمرار في استخدام الموقع و/ أو الخدمات في حال عدم موافقتك على الشروط والأحكام. يعتبر استمرارك باستخدام الموقع و/ أو الخدمات موافقة من قبلك على الشروط والأحكام .</p>
            </div>
            <Image src='/assets/ill-2.png' alt='' width={450} height={300} style={{flexBasis: '47%'}}  />
        </section>

        <section className='flex items-center justify-between gap-6 my-16  prices-subscribe'>
            <div className='text-white text-center prres' >
                <h2 className='font-bold text-xl mb-6'>سعر الاشتراك</h2>
                <div className='sp-pric'>
                    <div>
                        <span className='underline'>شهر</span>
                        <span>140$</span>
                    </div>
                    <div>
                    <span className='underline'>3 اشهر</span>
                        <span>150$</span>
                    </div>
                    <div>
                    <span className='underline'>6 اشهر</span>
                        <span>150$</span>
                        </div>
                    </div>  

                    <button className='start-visit-btn'>ابدا الاستخدام مجانا</button>            
            </div>

            <div className='text-white pric-img' >
                <h3>قم باللغاء حسابك في اي وقت</h3>
                <p>ينكنك ترقية الحساب الى الباقة المناسبة لك و ستيم منحك مسخة تجريبية دتها 14 يوم و بعد ذلك قم بلتفعيل</p>
            <Image src='/assets/pricee.png' alt='' width={440} height={100}  />

            </div>
        </section>


        <section className='carousel pt-20 last-sec relative'>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true} 
        pagination={{
          clickable: true,
        }}
        
        modules={[Pagination , Navigation]}
     
        className="mySwiper  mb-10"
      
      >
        <SwiperSlide>  <div className=''>
          <Image src='/assets/purchSlider.png' alt='' width={600} height={50} />
            </div></SwiperSlide>
    
            <SwiperSlide>  <div className=''>
          <Image src='/assets/purchSlider.png' alt='' width={600} height={50} />
            </div></SwiperSlide>
            <SwiperSlide>  <div className=''>
          <Image src='/assets/purchSlider.png' alt='' width={600} height={50} />
            </div></SwiperSlide>
            <SwiperSlide>  <div className=''>
          <Image src='/assets/purchSlider.png' alt='' width={600} height={50} />
            </div></SwiperSlide>
      
      
      </Swiper>
        </section>
    </Container>
</section>



<Footer />

    </section>
  )
}

export default Purchases