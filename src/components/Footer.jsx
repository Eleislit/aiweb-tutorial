import React from 'react'
import assets from '../assets/assets'
import {motion} from 'motion/react'

const Footer = ({ theme }) => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40
    px-4 sm:px-10 lg:px-24 xl:px-40'>
        {/* footer top */}
        <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
        <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
            <img src={assets.New_logo} className='w-32 sm:w-44' alt="" />
            <p className='max-w-md text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-4'>
            Ai Tech Mentors is your trusted partner in navigating the world of AI. We provide expert guidance, resources, and support to help you harness the power of artificial intelligence for your personal and professional growth.
            </p>

            <ul className='flex gap-8'>
                <li><a className='hover:text-blue-500' href="#hero">Home</a></li>
                <li><a className='hover:text-blue-500' href="#services">Services</a></li>
                <li><a className='hover:text-blue-500' href="#ourwork">Our Work</a></li>
                <li><a className='hover:text-blue-500' href="#teams">Teams</a></li>
                <li><a className='hover:text-blue-500' href="#contactus">Contact Us</a></li>
            </ul>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className='text-sm text-gray-600 dark:text-gray-400'>
            <h3 className='font-semibold'>Subscribe to our newsletter</h3>
            <p className='mt-2'>Get the latest updates and insights from Ai Tech Mentors.</p>
           <div className='flex gap-2 text-sm'>
            <input type="email" placeholder='Enter your email' className='p-2 rounded border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-blue-500 mt-3 text-sm
            dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500' />
            <button className='bg-blue-500 text-white rounded-md px-4 py-2 mt-2'>Subscribe</button>
           </div>
        </motion.div>
        </div>
        <hr className='my-10 border-gray-300 dark:border-gray-700' />
        {/* footer bottom */}
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className='flex flex-col sm:flex-row justify-between text-sm
        text-gray-600 dark:text-gray-400 pb-10'>
        <p>© 2024 Ai Tech Mentors. All rights reserved.</p>
        <div className='flex items-center justify-between gap-4'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.instagram_icon} alt="" />

        </div>
            </motion.div>
    </motion.div>
  )
}

export default Footer