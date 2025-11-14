import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const Services = () => {
    const servicesData = [
        {
            title: "Web Development",
            description: "We turn amateurs and beginners into professionals.",
            icon: "🌐"
        },
        {
            title: "Mobile App Development",
            description: "We guide to build mobile applications from scratch.",
            icon: "📱"
        },
        {
            title: "UI/UX Design",
            description: "We empower you to create stunning and user-friendly designs.",
            icon: "🎨"
        },
        {
            title: "Digital Marketing",
            description: "We turn amateurs and beginners into professionals.",
            icon: "📈"
        },
    ]
  return (
    <motion.div 
    initial="hidden"
    whileInView={{ once: true }}
    transition={{ staggerChildren: 0.2 }}

    id="services" className='relative flex flex-col items-center gap-7 px-4
    sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

        <img src={assets.bgImage2} alt="" className='absolute 
        -top-110 -left-70 -z-1 dark:hidden'/>

        <Title title='Our Services' desc='Explore the range of services we offer to help you succeed.'/>
        
        <div className='flex flex-col md:grid grid-cols-2'>
            {servicesData.map((service, index) => ( 
                <ServiceCard key={index} service={service} index={index} />
            ))}
        </div>
    </motion.div>
  )
}

export default Services