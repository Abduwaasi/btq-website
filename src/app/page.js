"use client"
import { useState } from 'react'

import Header from '@/components/Header'
import LinkButton from '@/components/LinkButton'
import Input from '@/components/Input'
import MyMap from '@/components/MyMap'
import Image from 'next/image'
import location from "../../public/images/location.png"
import location2 from "../../public/images/location2.png"
import star from "../../public/images/star.png"
import btqLogo from "../../public/images/btq-logo.png"
import cart from "../../public/images/cart.png"
import phone2 from "../../public/images/phone2.png"
import email2 from "../../public/images/email2.png"


import categories from "../data"
import AppCarousel from '@/components/AppCarousel'
import ContactForm from '@/components/ContactForm'


function Home() {
  const [showToast, setShowToast] = useState(false)
  const [showError, setShowError] = useState(false)
  const [message, setMessage] = useState("")
  return <>
    {showToast && <div className='bg-green px-4 py-2 fixed max-w-[300px] right-0 top-[70px] z-50'>
      <span className='text-white text-lg font-bold '>{message}</span>
    </div>}
    {showError && <div className='bg-red px-4 py-2 fixed max-w-[300px] right-0 top-[70px] z-50'>
      <span className='text-white text-lg font-bold '>{message}</span>
    </div>}

    <Header />
    <section className={`w-full flex flex-col items-center justify-center py-20 px-4 bg-left-top bg-[url('../../public/images/cart.png')]  bg-no-repeat bg-cover `}>
      <div className='w-full max-w-[1900px]'>
        <div className=' flex flex-col items-center text-center'>
          <Image src={btqLogo} alt='BTQ store logo' width={300} height={146} />
          <h1 className='font-normal text-dark leading-none text-center text-[40px] lg:text-6xl xl:text-[84px]'>Quality products <br /> at affordable prices</h1>
          <div className=' py-8 flex flex-col md:flex-row items-center justify-center gap-4'>
            <LinkButton text="Locate our store" href="#location" icon={location} color="white" bg="red" />
            <LinkButton text="Popular categories" href="#category" icon={star} color="black" />
          </div>
        </div>
        <div className='mt-10'>
          <AppCarousel />
        </div>
      </div>
    </section>
    <section className='bg-white py-8 px-4 lg:px-8 xl:px-32 flex items-center justify-center' id='category'>
      <div className='w-full max-w-[1900px]'>
        <h2 className='text-lg lg:text-[45px] font-bold leading-snug text-dark mb-8'>Popular Products Categories</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {categories.map(cat => (
            <div key={cat.id} className='bg-white'>
              <Image src={cat.image} className='w-full' alt={`${cat.category} image`} width="auto" height="auto" />
              <h6 className='text-black text-xl font-bold leading-snug my-4'>{cat.category}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className='relative w-full flex items-center justify-center h-auto px-4 ' id="location">
      <div className='absolute bg-gradient-to-b from-light-yellow to-dark-yellow w-3/4  -z-10 left-0 h-full' ></div>
      <div className='absolute bg-red w-1/4  -z-10 left-3/4 h-full'></div>
      <div className='w-full xl:w-[84%] max-w-[1900px] bg-white  rounded-xl flex flex-col lg:flex-row lg:my-20'>
        <div className='py-8 px-4 w-full'>
          <h3 className='text-[45px] font-extrabold text-dark leading-normal mb-4'>Get in <span className='text-red'>Touch</span></h3>
          <p className='text-base font-normal leading-snug text-dark'>Your feedback matters. Whether you have a question, suggestion, or just want to say hello, we'd love to hear from you. Get in touch and let us make your shopping experience even better</p>
          <ContactForm setShowToast={setShowToast} setMessage={setMessage} setShowError={setShowError} />
          <div className='flex flex-row justify-between items-start md:items-center'>
            <div className='flex items-center gap-4'>
              <Image src={phone2} width={25} height={25} alt='' className='hidden md:block' />
              <span>
                <h6 className='text-base uppercase font-bold text-black'>PHONE</h6>
                <p className='text-base font-normal text-red'> 08101411444  | 08134291031</p>
              </span>
            </div>
            <div className='flex items-center gap-4'>
              <Image src={email2} width={25} height={25} alt='' className='hidden md:block' />
              <span>
                <h6 className='text-base uppercase font-bold text-black'>EMAIL</h6>
                <p className='text-base font-normal text-red'>hello@btqonline.com</p>
              </span>
            </div>
          </div>
        </div>
        <div className='w-full h-[500px] lg:h-auto '>
          <MyMap />
        </div>
      </div>
    </section>
    <section className='flex items-center justify-center py-8 '>
      <div className='flex flex-col items-center max-w-[1900px]'>
        <Image src={btqLogo} alt='BTQ Logo' width={300} height={146} />
        <span className='flex items-center gap-2 justify-center' >
          <Image src={location2} width={16} height={16} alt='' />
          <p className='text-base text-black'>No 2, California Junction, Testing Ground, Osogbo, Nigeria.</p>
        </span>
      </div>
    </section>

    <footer className='w-full bg-red flex flex-col md:flex-row items-center justify-center py-8 px-4 lg:px-8 xl:px-32'>
      <div className='w-full max-w-[1900px] flex justify-between'>
        <span className=' text-sm md:text-base text-white font-normal'>Copyright © {new Date().getFullYear()} BTQ Superstore</span>
        <span className='text-sm md:text-base text-white font-normal'>All Rights Reserved</span>
      </div>
    </footer>
  </>

}


export default Home