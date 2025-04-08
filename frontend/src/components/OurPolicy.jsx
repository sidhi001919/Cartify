import React from 'react'
import { motion } from 'framer-motion'
import { RefreshCw, ShieldCheck, HeadphonesIcon } from 'lucide-react'

const OurPolicy = () => {
  const policies = [
    {
      icon: RefreshCw,
      title: 'Easy Exchange Policy',
      description: 'We offer hassle-free exchange policy'
    },
    {
      icon: ShieldCheck,
      title: '7 Days Return Policy',
      description: 'We provide 7 days free return policy'
    },
    {
      icon: HeadphonesIcon,
      title: 'Best Customer Support',
      description: 'We provide 24/7 customer support'
    }
  ]

  return (
    <div className='container mx-auto px-4'>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='grid grid-cols-1 sm:grid-cols-3 gap-8 py-20'
      >
        {policies.map((policy, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className='flex flex-col items-center p-6 rounded-lg hover:bg-neutral-light transition-colors duration-300'
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className='mb-5 text-primary'
            >
              <policy.icon size={36} strokeWidth={1.5} />
            </motion.div>
            <h3 className='text-lg font-semibold text-primary mb-2'>{policy.title}</h3>
            <p className='text-gray-600 text-center'>{policy.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default OurPolicy
