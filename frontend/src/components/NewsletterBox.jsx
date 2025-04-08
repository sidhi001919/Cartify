import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

const NewsletterBox = () => {
    const [email, setEmail] = useState('')

    const onSubmitHandler = (event) => {
        event.preventDefault()
        // Handle newsletter subscription here
        setEmail('')
    }

    return (
        <div className='container mx-auto px-4 py-16'>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 sm:p-12 text-center shadow-lg'
            >
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className='text-3xl sm:text-4xl font-bold text-primary mb-4'
                >
                    Subscribe now & get 20% off
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className='text-gray-600 text-lg mb-8'
                >
                    Join our newsletter for exclusive offers, new arrivals, and fashion tips.
                </motion.p>
                <motion.form 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    onSubmit={onSubmitHandler} 
                    className='flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto'
                >
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your email address'
                        className='flex-1 px-6 py-4 rounded-lg border border-gray-200 focus:border-primary focus:outline-none transition-colors duration-200'
                        required
                    />
                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type='submit' 
                        className='bg-primary text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors duration-200'
                    >
                        Subscribe
                        <Send size={18} />
                    </motion.button>
                </motion.form>
            </motion.div>
        </div>
    )
}

export default NewsletterBox
