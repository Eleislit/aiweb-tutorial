import React from 'react'
import Title from './Title.jsx'
import assets from '../assets/assets.js'
import toast from 'react-hot-toast'
import {motion} from 'motion/react'

const ContactUs = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    formData.append("access_key", "cbd1f8bd-10c1-40c6-b3fd-21c509254c7b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
     toast.success("Message sent successfully!");
      event.target.reset();
    } else {
      toast.error(data.message);
    }
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }

    
  }
  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.2 }}
    id='contactus' className='py-20 px-6 sm:px-12 lg:px-24 xl:px-40 bg-gray-100 dark:bg-gray-800'>
        <Title title='Contact Us' desc='Get in touch with us for any inquiries or support.' />
        <motion.form 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        onSubmit={onSubmit} className='flex flex-col gap-6 max-w-2xl mx-auto'>
            <div className='flex items-center gap-3'>
            <img src={assets.person_icon} alt="" />
            <input name='name' type="text" placeholder='Your Name' className='p-3 rounded border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
            </div>
            <div className='flex items-center gap-3'>
            <img src={assets.email_icon} alt="" />
            <input name="email" type="email" placeholder='Your Email' className='p-3 rounded border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
            </div>

            <div className='sm:col-span-2'>
            <textarea name="message" placeholder='Your Message' rows='5' className='w-full p-3
            text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
            </div>
            <button type='submit' className='bg-blue-600 text-white py-3 rounded hover:bg-blue-700
            transition duration-300'>Send Message</button>
        </motion.form>

    </motion.div>
  )
}

export default ContactUs