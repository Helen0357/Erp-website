'use client';
import Image from 'next/image'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Container, IconButton } from '@mui/material'
import Link from 'next/link'


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {
    const [pop , setPop] = useState(false);
    const [dimensions, setDimensions] = useState({ 
      height: window.innerHeight,
      width: window.innerWidth
    });
    const [slideshow , setSlide] = useState(3);
    useEffect(() =>  {
      function handleResize() {
        setDimensions({
          height: window.innerHeight, 
          width: window.innerWidth
        })
      
  }
  console.log(dimensions.width ,dimensions.height);
if(dimensions.width < 480){
  setSlide(1)
}
else if (dimensions.width > 481 && dimensions.width < 980){
  setSlide(2)

}
else{
  setSlide(3)

}
  
      window.addEventListener('resize', handleResize);
      return _ => {
        window.removeEventListener('resize', handleResize) }
    },[dimensions.width]);

  return (
    <>

<div className='landing'>
<NavBar />
<section className='landingNav py-3'>
<Container >
  <section className='flex items-center gap-8 cont relative'>
<Image src='/assets/logo.png' alt='' width={100} height={85} />
<ul className='flex items-center gap-16 text-white lista '>
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
</div>
}

</section>
</Container>
</section>
<section className='erp text-white'>
  <Container >
 <section className='flex items-center justify-between gap-5'>
 <div style={{ lineHeight : '1.8'}}>
    <h2 className='text-4xl font-bold mb-3' style={{lineHeight : '3rem'  }}>نظام ERP متكامل لادارة كافة اعمالك</h2>
    <p>يعد دفترة برنامج ERP متكامل يعمل على مساعدتك في إدارة كل جوانب أعمالك بواجهة سهلة الاستخدام تدعم اللغة العربية، أصدر فواتيرك وأدِر مبيعاتك ومخزونك وعملائك موظفيك وحساباتك ودورة العمل لديك،</p>
    <button className='start-visit-btn'>أبدا الاستخدام مجانا</button>
  </div>
  <div  style={{flexBasis: '34%'}}>
    <Image src='/assets/land.png' alt='' width={600} height={150} />
  </div>
 </section>
  </Container>
</section>
</div>


<section className='erp-app text-white py-10 text-center'>
  <Container>
    <section>
      <h3 className='text-xl mb-2 font-bold'>تطبيقات إدارة الأعمال المضمَّنة في نظام دفترة</h3>
      <p style={{ margin: '1px auto', fontSize: '14px '}} className='app-p'>نظام دفترة مع فعالية اكبر , فعل ماتحتاجه منها حسب احتياجات اعمالك , استخدم كافة التطبيقات المضمنة في </p>
      <Swiper
        slidesPerView={slideshow}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-20"
      
      >
        <SwiperSlide>  <div className=''>
          <Image src='/assets/svg.png' alt='' width={110} height={50} />
          <h3>المبيعات</h3>
          <p>ألمبيعات المستهدفة و العمولات , الاقساط و العروض , التامينات و الفاتورة الالكترونيةوالضريبة , نقاط البيع و المتجر الالكتروني</p>
        </div></SwiperSlide>
        <SwiperSlide>  <div className=''>
          <Image src='/assets/svg2.png' alt='' width={110} height={50} />
          <h3>المحاسبة العامة</h3>
          <p>ألمبيعات المستهدفة و العمولات , الاقساط و العروض , التامينات و الفاتورة الالكترونيةوالضريبة , نقاط البيع و المتجر الالكتروني البيع و المتجر الالكتروني البيع و المتجر الالكتروني</p>
        </div></SwiperSlide>
        <SwiperSlide>  <div className=''>
          <Image src='/assets/svg3.png' alt='' width={110} height={50} />
          <h3>المخزون</h3>
          <p>ألمبيعات المستهدفة و العمولات , الاقساط و العروض , التامينات و الفاتورة الالكترونيةوالضريبة , نقاط البيع و المتجر الالكتروني</p>
        </div></SwiperSlide>
        <SwiperSlide>  <div className=''>
          <Image src='/assets/svg.png' alt='' width={110} height={50} />
          <h3>المبيعات</h3>
          <p>ألمبيعات المستهدفة و العمولات , الاقساط و العروض , التامينات و الفاتورة الالكترونيةوالضريبة , نقاط البيع و المتجر الالكتروني</p>
        </div></SwiperSlide>
      
      
      </Swiper>
    </section>
    <section className='flex items-center justify-between com-sec mt-32 text-right relative px-10 py-10'>
      <div >
      <h3 className='text-xl font-bold '>نظام متكامل قابل للتخصيص ليناسب اكثر من 30 مجال مختلف</h3>
      <p>امكانية تخصيص نظام دفترة حساب مجال عملك بما في ذلك التصميمات المضنة و الواجهات لتحقيق اهداف عملك</p>
      </div>
      <Image src='/assets/computer.png' alt='' width={350} height={150} className='absolute left-10' />
    </section>
  </Container>
</section>

<section className='money  mn-1 type-1 text-white py-24'>
<Container>
  <section className='flex items-center gap-10 justify-between'>
    <Image alt='' src='/assets/ill-1.png' width={600} height={300} style={{flexBasis:'43%'}} />
    <div >
      <h3 className='font-bold text-3xl mb-3' >موجودات المخزون لتحقيق الارباح المستهدفة</h3>
      <p className='text-sm mb-8' style={{lineHeight: '1.8'}}>امكانية تخصيص نظام دفترة حساب مجال عملك بما في ذلك التصميمات المضنة و الواجهات لتحقيق اهداف عملك</p>

      <div className='flex items-start gap-28 lists'>
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
         
        </ul>
      </div>
    </div>
  </section>
</Container>
</section>


<section className='money type-2 text-white pt-20'>
<Container>
  <section className='flex flex-row-reverse items-center gap-10 justify-between'>
    <Image alt='' src='/assets/ill-2.png' width={500} height={300} style={{flexBasis:'40%'}} />
    <div >
      <h3 className='font-bold text-3xl mb-3' >موجودات المخزون لتحقيق الارباح المستهدفة</h3>
      <p className='text-sm mb-8' style={{lineHeight: '1.8'}}>امكانية تخصيص نظام دفترة حساب مجال عملك بما في ذلك التصميمات المضنة و الواجهات لتحقيق اهداف عملك</p>

      <div className='flex items-start gap-28 lists'>
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
         
        </ul>
      </div>
    </div>
  </section>
</Container>
</section>

<section className='pb-24 pt-28 mn-2'>
  <Container>
    <section className='center-sec text-center text-white'>
        <h3 className='text-3xl mb-3 font-bold'>ايا كان مجال عملك</h3>
        <p className='mb-20 text-sm' style={{lineHeight: '1.9' ,  margin: '2px auto 70px'}}>سنساعدك بادارته بكفاءة <br />
          نظام ماتريكس مصمم ليناسب جميع انواع المجالات من خلال العديد من البرامج الاقبلة للتخصيص الكامل
        </p>

        <section className='com-sec2 relative'>
        <Image src='/assets/ill-3.png' alt='' width={650} height={400} className='absolute' />

        </section>
    </section>
  </Container>
</section>

<section className='money type-1 mn-1 pb-20 text-white pt-32'>
<Container>
  <section className='flex flex-row-reverse items-center gap-10 justify-between'>
    <Image alt='' src='/assets/ill-4.png' width={500} height={300} style={{flexBasis:'40%'}} />
    <div >
      <h3 className='font-bold text-3xl mb-3' >المبيعات <br /> لتحقيق الارباح المستهدفة</h3>
      <p className='text-sm mb-8' style={{lineHeight: '1.8'}}>امكانية تخصيص نظام دفترة حساب مجال عملك بما في ذلك التصميمات المضنة و الواجهات لتحقيق اهداف عملك</p>

      <div className='flex items-start gap-28 lists'>
        <ul className='text-sm'> 
          <li className='flex items-center gap-3'>
          <Image alt='' src='/assets/clipboard-svgrepo-com 1.png' width={20} height={20} />
          <span>البنود</span>
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
        
         
        </ul>
      </div>
    </div>
  </section>
</Container>
</section>
<section className='money type-1  pb-20 text-white pt-20'>
<Container>
  <section className='flex flex-row items-center gap-10 justify-between'>
    <Image alt='' src='/assets/ill-5.png' width={500} height={300} style={{flexBasis:'40%'}} />
    <div >
      <h3 className='font-bold text-3xl mb-3'>الخدمات المصرفية <br /> لتحقيق الارباح المستهدفة</h3>
      <p className='text-sm mb-8' style={{lineHeight: '1.8'}}>امكانية تخصيص نظام دفترة حساب مجال عملك بما في ذلك التصميمات المضنة و الواجهات لتحقيق اهداف عملك</p>

      <div className='flex items-start gap-28 lists'>
        <ul className='text-sm'> 
          <li className='flex items-center gap-3'>
          <Image alt='' src='/assets/clipboard-svgrepo-com 1.png' width={20} height={20} />
          <span>البنود</span>
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
        
         
        </ul>
      </div>
    </div>
  </section>
</Container>
</section>

<section className='py-8'>
<Container>
  <section className='py-16 px-12 com-sec-reverse flex items-center justify-between text-white'>
    <div>
      <h3 className='font-bold text-2xl mb-3'>واجهة سهلة الاسخدام بميزات متعددة</h3>
      <p className='text-sm' style={{lineHeight: '1.9'}}>لا حاجة للمعرفة العمقيقة في طرق المحاسبة او نظم تخطيط الموارد المؤسسية لاتخدام منصة ماتريكس</p>
    </div>
    <button className='start-visit-btn'>ابدأ الاستخدام مجانا</button>
  </section>
</Container>
</section>

<section className='money type-1  pb-1 text-white pt-20'>
<Container>
  <section className='flex flex-row-reverse items-center gap-10 justify-between'>
    <Image alt='' src='/assets/ill-6.png' width={580} height={300} style={{flexBasis:'40%'}} />
    <div >
      <h3 className='font-bold text-3xl mb-3' >دخول مزدوج <br /> لتحقيق الارباح المستهدفة</h3>
      <p className='text-sm mb-8' style={{lineHeight: '1.8'}}>امكانية تخصيص نظام دفترة حساب مجال عملك بما في ذلك التصميمات المضنة و الواجهات لتحقيق اهداف عملك</p>

      <div className='flex items-start gap-28 lists'>
        <ul className='text-sm'> 
          <li className='flex items-center gap-3'>
          <Image alt='' src='/assets/clipboard-svgrepo-com 1.png' width={20} height={20} />
          <span>البنود</span>
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
        
         
        </ul>
      </div>
    </div>
  </section>
</Container>
</section>

<section className='money  mn-3 type-1 text-white pt-28 pb-24'>
<Container>
  <section className='flex items-center gap-10 justify-between'>
    <Image alt='' src='/assets/ill-7.png' width={550} height={300} style={{flexBasis:'43%' , marginRight: '-63px'}} />
    <div >
      <h3 className='font-bold text-3xl mb-3' >موجودات المخزون <br />لتحقيق الارباح المستهدفة</h3>
      <p className='text-sm mb-8' style={{lineHeight: '1.8'}}>امكانية تخصيص نظام دفترة حساب مجال عملك بما في ذلك التصميمات المضنة و الواجهات لتحقيق اهداف عملك</p>

      <div className='flex items-start gap-28 lists'>
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
         
        </ul>
      </div>
    </div>
  </section>
</Container>
</section>

<section className='py-8'>
<Container>
  <section className='py-12 px-12 com-sec-reverse2 flex items-center justify-between text-white'>
    <div>
      <h3 className='font-bold text-2xl mb-3'>احصل على تجربتك المجانية</h3>
      <p className='text-sm' style={{lineHeight: '1.9'}}>لا حاجة للمعرفة العمقيقة في طرق المحاسبة او نظم تخطيط الموارد المؤسسية لاتخدام منصة ماتريكس</p>
    <button className='start-visit-btn'>ابدأ الاستخدام مجانا</button>

    </div>
    <Image src='/assets/logo.png' alt='' width={130} height={130} className='' />

  </section>
</Container>
</section>

<section className='money type-1  pb-20 text-white pt-20'>
<Container>
  <section className='flex flex-row items-center gap-10 justify-between'>
    <Image alt='' src='/assets/ill-8.png' width={500} height={300} style={{flexBasis:'40%'}} />
    <div >
      <h3 className='font-bold text-3xl mb-3' >الخدمات المصرفية <br /> لتحقيق الارباح المستهدفة</h3>
      <p className='text-sm mb-8' style={{lineHeight: '1.8'}}>امكانية تخصيص نظام دفترة حساب مجال عملك بما في ذلك التصميمات المضنة و الواجهات لتحقيق اهداف عملك</p>

      <div className='flex items-start gap-28 lists'>
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
         
        </ul>
      </div>
    </div>
  </section>
</Container>
</section>


<section className='money type-1 mn-1 pb-20 text-white pt-20'>
<Container>
  <section className='flex flex-row-reverse items-center gap-10 justify-between'>
    <Image alt='' src='/assets/ill-p.png' width={500} height={300} style={{flexBasis:'40%'}} />
    <div>
      <h3 className='font-bold text-3xl mb-3' >الخدمات المصرفية <br /> لتحقيق الارباح المستهدفة</h3>
      <p className='text-sm mb-8' style={{lineHeight: '1.8'}}>امكانية تخصيص نظام دفترة حساب مجال عملك بما في ذلك التصميمات المضنة و الواجهات لتحقيق اهداف عملك</p>

      <div className='flex items-start gap-28 lists'>
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
         
        </ul>
      </div>
    </div>
  </section>
</Container>
</section>

<section className='py-10 last-sec relative'>

<Container>

<section>
 
<div className='text-white text-center ' style={{margin : '10px auto'}}>

<h3 className='text-3xl font-bold mb-3'>دفترة نظام تخطيط موارد مؤسسية متكامل وقابل للتخصيص لادارة كافة اعمالك</h3>

<p className='text-sm' style={{lineHeight: '1.9'}}>مع خصائص و ادوات عديدة لتلبية احتياجات عملك ومساعدتك في تحقيق اهدافك بواجهة استخدام بسيطة ودعم كامل للفى العربية</p>

</div>

<Image src='/assets/macbook.png' alt='' width={600} height={400} style={{margin: '50px auto'}} className='' />

</section>

</Container>

</section>
<Footer />
</>
)
}
