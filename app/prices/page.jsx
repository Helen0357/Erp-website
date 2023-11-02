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
    الاسعار
    <IconButton onClick={()=> window.history.back()}>
    <ArrowBackIosNewIcon color='' />
</IconButton>
</h3>
</Container>
</section>
</div>


<section className=' type-1'>
  <Container>
    <section className='flex items-center justify-between gap-14 pt-7 type-1'>
      <div style={{ lineHeight: '2'}} className='text-white'>
        <h2 className='text-3xl font-bold mb-5'>
          ابدأ مجانا <br /> 
          واختر خطتك لاحقا! 
        </h2>
        <p>لا حاجة لبطاقة ائتمان ، قم بإلغاء الحساب في أي وقت.
ستمنحك نسخة تجريبية مدتها  14 يومًا حسابًا مجانيًا ، وعندما تنتهي الفترة التجريبية ، يمكنك ترقية نفس الحساب إلى الباقة المناسبة لك</p>
      </div>
      <Image src='/assets/plan.png' alt='' width={650} height={400} style={{flexBasis: '43%'}} />
    </section>



    <section className='price-card py-12'>
      <div className='ps_card ' style={{backgroundColor:'#BCCBFF'}}>
<h3 className='font-bold mb-7'>الاساسية</h3>
<h1 className='text-5xl font-bold mb-7'>99.0$ <span className='text-xl'>شهريا</span></h1>
<p className='font-bold'>الدفع 120$ سنويا</p>
      </div>
      <div className='ps_card ' style={{backgroundColor:'#C5FFE0'}}>
<h3 className='font-bold mb-7'>ألمتقدمة</h3>
<h1 className='text-5xl font-bold mb-7'>99.0$ <span className='text-xl'>شهريا</span></h1>
<p className='font-bold'>الدفع 120$ سنويا</p>  
    </div>
      <div className='ps_card ' style={{backgroundColor:'#ffffff'}}>
<h3 className='font-bold mb-7'>الشاملة</h3>
<h1 className='text-5xl font-bold mb-7'>99.0$ <span className='text-xl'>شهريا</span></h1>
<p className='font-bold'>الدفع 120$ سنويا</p>
      </div>
    </section>


    <section className='table-sec text-white py-7 mb-9'>
    <h3 className='font-bold text-xl text-center mb-12'>ادارة المبيعات</h3>
    <table className='w-full '>
      <thead>
        <tr>
          <th>الفواتير و عروض الاسعار</th>
          <th>100 <span> / شهريا</span></th>
          <th>500 <span> / شهريا</span></th>
          <th>غير محدود</th>
        </tr>
      
      </thead>
      <tbody className='text-center'>
        <tr>
          <td>نقاط بيع سحابية</td>
          <td><Image src='/assets/true.png' alt='' width={20} height={20} /></td>
          <td><Image  src='/assets/false.png' alt='' width={24} height={20} /></td>
          <td><Image  src='/assets/true.png' alt='' width={20} height={20} /></td>
        </tr>
        <tr>
          <td>نقاط بيع سحابية</td>
          <td><Image src='/assets/true.png' alt='' width={20} height={20} /></td>
          <td><Image  src='/assets/false.png' alt='' width={24} height={20} /></td>
          <td><Image  src='/assets/true.png' alt='' width={20} height={20} /></td>
        </tr>
        <tr>
          <td>نقاط بيع سحابية</td>
          <td><Image src='/assets/true.png' alt='' width={20} height={20} /></td>
          <td><Image  src='/assets/false.png' alt='' width={24} height={20} /></td>
          <td><Image  src='/assets/true.png' alt='' width={20} height={20} /></td>
        </tr>
        <tr>
          <td>نقاط بيع سحابية</td>
          <td><Image src='/assets/true.png' alt='' width={20} height={20} /></td>
          <td><Image  src='/assets/false.png' alt='' width={24} height={20} /></td>
          <td><Image  src='/assets/true.png' alt='' width={20} height={20} /></td>
        </tr>
        <tr>
          <td>نقاط بيع سحابية</td>
          <td><Image src='/assets/true.png' alt='' width={20} height={20} /></td>
          <td><Image  src='/assets/false.png' alt='' width={24} height={20} /></td>
          <td><Image  src='/assets/true.png' alt='' width={20} height={20} /></td>
        </tr>
        <tr>
          <td>نقاط بيع سحابية</td>
          <td><Image src='/assets/true.png' alt='' width={20} height={20} /></td>
          <td><Image  src='/assets/false.png' alt='' width={24} height={20} /></td>
          <td><Image  src='/assets/true.png' alt='' width={20} height={20} /></td>
        </tr>
      </tbody>
    </table>
    </section>
    <section className='table-sec text-white py-7 mb-9'>
    <h3 className='font-bold text-xl text-center mb-12'>ادارة المخزون والمشتريات</h3>
    <table className='w-full '>
      <thead>
        <tr>
          <th>الفواتير و عروض الاسعار</th>
          <th>100 <span> / شهريا</span></th>
          <th>500 <span> / شهريا</span></th>
          <th>غير محدود</th>
        </tr>
      
      </thead>
      <tbody className='text-center'>
        <tr>
          <td>نقاط بيع سحابية</td>
          <td><Image src='/assets/true.png' alt='' width={20} height={20} /></td>
          <td><Image  src='/assets/false.png' alt='' width={24} height={20} /></td>
          <td><Image  src='/assets/true.png' alt='' width={20} height={20} /></td>
        </tr>
        <tr>
          <td>نقاط بيع سحابية</td>
          <td><Image src='/assets/true.png' alt='' width={20} height={20} /></td>
          <td><Image  src='/assets/false.png' alt='' width={24} height={20} /></td>
          <td><Image  src='/assets/true.png' alt='' width={20} height={20} /></td>
        </tr>
        <tr>
          <td>نقاط بيع سحابية</td>
          <td><Image src='/assets/true.png' alt='' width={20} height={20} /></td>
          <td><Image  src='/assets/false.png' alt='' width={24} height={20} /></td>
          <td><Image  src='/assets/true.png' alt='' width={20} height={20} /></td>
        </tr>
        <tr>
          <td>نقاط بيع سحابية</td>
          <td><Image src='/assets/true.png' alt='' width={20} height={20} /></td>
          <td><Image  src='/assets/false.png' alt='' width={24} height={20} /></td>
          <td><Image  src='/assets/true.png' alt='' width={20} height={20} /></td>
        </tr>
        <tr>
          <td>نقاط بيع سحابية</td>
          <td><Image src='/assets/true.png' alt='' width={20} height={20} /></td>
          <td><Image  src='/assets/false.png' alt='' width={24} height={20} /></td>
          <td><Image  src='/assets/true.png' alt='' width={20} height={20} /></td>
        </tr>
        <tr>
          <td>نقاط بيع سحابية</td>
          <td><Image src='/assets/true.png' alt='' width={20} height={20} /></td>
          <td><Image  src='/assets/false.png' alt='' width={24} height={20} /></td>
          <td><Image  src='/assets/true.png' alt='' width={20} height={20} /></td>
        </tr>
      </tbody>
    </table>
    </section>
    <section className='table-sec text-white py-7 text-center mb-10'>
    <h3 className='font-bold text-xl text-center mb-12'>ادارة المخزون والمشتريات</h3>
    <table className='w-full mb-14'>
      <thead>
        <tr>
          <th>الفواتير و عروض الاسعار</th>
          <th>100 <span> / شهريا</span></th>
          <th>500 <span> / شهريا</span></th>
          <th>غير محدود</th>
        </tr>
      
      </thead>
      <tbody className='text-center'>
        <tr>
          <td>نقاط بيع سحابية</td>
          <td><Image src='/assets/true.png' alt='' width={20} height={20} /></td>
          <td><Image  src='/assets/false.png' alt='' width={24} height={20} /></td>
          <td><Image  src='/assets/true.png' alt='' width={20} height={20} /></td>
        </tr>
        <tr>
          <td>نقاط بيع سحابية</td>
          <td><Image src='/assets/true.png' alt='' width={20} height={20} /></td>
          <td><Image  src='/assets/false.png' alt='' width={24} height={20} /></td>
          <td><Image  src='/assets/true.png' alt='' width={20} height={20} /></td>
        </tr>
        <tr>
          <td>نقاط بيع سحابية</td>
          <td><Image src='/assets/true.png' alt='' width={20} height={20} /></td>
          <td><Image  src='/assets/false.png' alt='' width={24} height={20} /></td>
          <td><Image  src='/assets/true.png' alt='' width={20} height={20} /></td>
        </tr>
        <tr>
          <td>نقاط بيع سحابية</td>
          <td><Image src='/assets/true.png' alt='' width={20} height={20} /></td>
          <td><Image  src='/assets/false.png' alt='' width={24} height={20} /></td>
          <td><Image  src='/assets/true.png' alt='' width={20} height={20} /></td>
        </tr>
        <tr>
          <td>نقاط بيع سحابية</td>
          <td><Image src='/assets/true.png' alt='' width={20} height={20} /></td>
          <td><Image  src='/assets/false.png' alt='' width={24} height={20} /></td>
          <td><Image  src='/assets/true.png' alt='' width={20} height={20} /></td>
        </tr>
        <tr>
          <td>نقاط بيع سحابية</td>
          <td><Image src='/assets/true.png' alt='' width={20} height={20} /></td>
          <td><Image  src='/assets/false.png' alt='' width={24} height={20} /></td>
          <td><Image  src='/assets/true.png' alt='' width={20} height={20} /></td>
        </tr>
      </tbody>
    </table>

    <button className='start-visit-btn mt-12 '>ابدا الاستخدام مجانا</button>

    </section>

  </Container>
</section>


<Footer />

    </section>
  )
}

export default Prices