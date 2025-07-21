import React from 'react'
import { Youtube, Facebook, Linkedin, Instagram } from 'lucide-react';


const page = () => {
    return (
        <div className='container  max-w-5xl h-screen m-auto flex flex-col items-center justify-center text-center'>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cosmic-deep via-cosmic-royal to-cosmic-deep bg-clip-text mb-3 leading-tight">
                Thank you!</h1>
            <p className="text-lg md:text-xl">
                You'll receive a confirmation email shortly with all the details. In the meantime, if you wish to reach me with any queries or questions, here are my contacts. Alternatively, you can fill out this form, and I'll get back to you.
            </p>
            <div className="flex flex-col sm:flex-row items-center mt-8 gap-6">
                <p className='m-0'>
                    <span className='font-normal'>WhatsApp</span><br />
                    <a href="tel:+919843948288">+91 - 984 394 8288</a>
                </p>
                <p>
                    <span className='font-normal'>Email</span><br />
                    <a href="mailto:info@allthingsvedic.in">info@allthingsvedic.in</a>
                </p>
            </div>
            <div className="flex items-center mt-8 gap-6">
                <a href="https://youtube.com/@allthingsvedic"><Youtube strokeWidth={1.5} /></a>
                <a href="https://www.facebook.com/allthingsvedic"><Facebook strokeWidth={1.5} /></a>
                <a href="https://linkedin.com/in/vikramdevatha"><Linkedin strokeWidth={1.5} /></a>
                <a href="https://www.instagram.com/allthingsvedic.in/"><Instagram strokeWidth={1.5} /></a>
            </div>
        </div>
    )
}

export default page