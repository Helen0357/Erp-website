import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Container } from '@mui/material';
function Footer() {
  return (
   <footer className='text-white'>
     <section style={{borderBottom: '1px solid #BCBCBCAD'}}>
      <Container>
       <section className='flex justify-between py-10 foterBasis'>
       <div>
          <Image src='/assets/logo.png' alt='' width={90} height={60} />

          <p className='mt-7 text-sm mb-7' style={{lineHeight: '1.9'}}>عمل فريدة من نوعها بمردود مالي مميز ونسب في صناعة التسويق والترويج حيث تتيح لك فرصة تطرح شركة ماتريكس الخيار الامثل بيعة محفزة تطرح شركة ماتريكس الخيارالامثل
          </p>
          <ul className='flex items-center gap-14'>
            <li>
              <Link href=''><Image src='/assets/facebook (2).png' alt='' width={11} height={11} /></Link>
            </li>
            <li>
              <Link href=''><Image src='/assets/whatsapp (2).png' alt='' width={22} height={22} /></Link>
            </li>
            <li>
              <Link href=''><Image src='/assets/insta (2).png' alt='' width={22} height={22} /></Link>
            </li>
            <li>
              <Link href=''><Image src='/assets/linked.png' alt='' width={22} height={22} /></Link>
            </li>
          </ul>

        </div>
        <div>
          <h3 className='font-bold text-xl mb-6'>تواصل معنا</h3>
          <ul>
          <li className='flex items-center gap-2 ml-4 text-sm'>
             <LocationOnIcon />
                <span className='text-sm'>Syria , Tartus</span>
            </li>
          <li className='flex items-center gap-2 ml-4 text-sm'>
                <Image width={15} height={15} alt='' src='/assets/phone.png' />
                <span className='text-sm'>+987524234</span>
            </li>
          <li className='flex items-center gap-2 ml-4'>
                <Image width={17} height={17} alt='' src='/assets/email.png' />
                <span className='text-sm'>Info@matrix-erp.net</span>
            </li>        
            
            
            </ul>
            <div className=''>
              <h3 className='font-bold text-xl mt-12'>تطبيقات الهواتف الذكية</h3>
              <div className='flex  gap-4 mt-3'>
              <button className='download flex items-center gap-2'> <Image src='/assets/fot2.png' width={16} height={16} alt='' />
                 <p> Download on the <br />
                  <b>App Store</b></p></button>
                <button className='download flex items-center gap-2'> <Image src='/assets/fot1.png' width={13} height={13} alt='' />
                  Google Play</button>
                 
              </div>
            </div>
        </div>
        <div>
        <h3 className='font-bold text-xl mb-6'>وصول سريع</h3>
        <ul>
          <li><Link href=''> ألرئيسية</Link>  </li>
          <li><Link href=''> من نحن</Link>  </li>
          <li><Link href=''> المنتجات</Link>  </li>
          <li><Link href=''> الميزات</Link>  </li>
          <li><Link href=''> حول المنصة</Link>  </li>
        </ul>
        </div>
        <div>
        <h3 className='font-bold text-xl mb-6'>الانظمة</h3>
        <ul>
          <li><Link href=''> جرد</Link>  </li>
          <li><Link href='/sales'> المبيعات</Link>  </li>
          <li><Link href='/purchases'> المشتريات</Link>  </li>
          <li><Link href=''> الموارد البشرية</Link>  </li>
          <li><Link href=''> الخدمات المصرفية</Link>  </li>
          <li><Link href=''> دخول مزدوج</Link>  </li>
          <li><Link href=''>تقارير  </Link>  </li>
        </ul>
        </div>
       </section>
        </Container>
 </section>
 <h4 className='text-center py-4 text-sm'>Copyright 2023 Matrix ERP All Rights Reserved</h4>
   </footer>
  )
}

export default Footer