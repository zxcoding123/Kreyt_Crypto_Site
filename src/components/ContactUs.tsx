'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedContent from '../../components/bits/Animations/AnimatedContent/AnimatedContent'
import logo from "../assets/logo.png";
import Magnet from '../../components/bits/Animations/Magnet/Magnet';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sent!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Blur Circles */}
      <div className="absolute -top-40 -left-20 w-96 h-96 bg-white rounded-full opacity-20 blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white rounded-full opacity-20 blur-3xl animate-pulse" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row gap-10">
         <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          duration={1.5}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={0.9}
          threshold={0.2}
          delay={0.2}
        >  
        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex-1 text-white"
        >
                        <div className="flex justify-between h-16 items-center">
          <div className="flex flex-column gap-4">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <div className=" text-xl font-bold ">
              <h1>KREYT</h1>
            </div>
          </div>
             </div>
             <h1 className="text-5xl font-bold mb-4">We are always ready to help you and answer your questions.</h1>
        
          <h6 className="text-4xl font-light mb-4 italic">Get in Touch</h6>
          <p className="text-white/80 mb-6">
            Have questions or need help? Reach out to the Kreyt team using the form, or drop us a message at:
          </p>
          <ul className="space-y-3 text-white/70">
            <li><strong>Email:</strong> support@kreyt.io</li>
            <li><strong>Phone:</strong> +1 (555) 123-4567</li>
            <li><strong>Location:</strong> Distributed Worldwide 🌍</li>
          </ul>
          <div className="mt-6 text-sm text-white/50">
            We typically respond within 24–48 hours.
          </div>
        </motion.div>
        </AnimatedContent>

      <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.5}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.2}
        > 
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex-1 backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-8"
        >
          <h2 className="text-white text-2xl font-bold mb-6 text-center">
            Mail Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white resize-none"
            />
               
            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-lg bg-black text-white hover:bg-white hover:text-black font-semibold transition duration-200"
            >
               <Magnet padding={100} disabled={false} magnetStrength={20}> 
              Send Message
                </Magnet>
            </button>
          
          </form>
        </motion.div>
        </AnimatedContent>
      </div>
    </div>
  )
}
