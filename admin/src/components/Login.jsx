import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

const Login = ({setToken}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            setIsLoading(true);
            const response = await axios.post(backendUrl + '/api/user/admin', {email, password})
            if (response.data.success) {
                toast.success('Login successful!')
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        } finally {
            setIsLoading(false);
        }
    }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='min-h-screen flex items-center justify-center w-full bg-gray-50 px-4'
    >
      <motion.div 
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className='bg-white shadow-lg rounded-xl px-8 py-10 w-full max-w-md'
      >
        <div className='text-center mb-8'>
          <motion.h1 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className='text-3xl font-bold text-gray-900'
          >
            Welcome Back
          </motion.h1>
          <p className='text-gray-500 mt-2'>Login to access admin dashboard</p>
        </div>

        <form onSubmit={onSubmitHandler} className='space-y-6'>
          <div className='space-y-2'>
            <label className='text-sm font-medium text-gray-700' htmlFor='email'>
              Email Address
            </label>
            <input
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all'
              placeholder='your@email.com'
              required
            />
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-medium text-gray-700' htmlFor='password'>
              Password
            </label>
            <input
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all'
              placeholder='Enter your password'
              required
            />
          </div>

          <button
            type='submit'
            disabled={isLoading}
            className='w-full py-3 px-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center'
          >
            {isLoading ? (
              <>
                <Loader2 className='animate-spin -ml-1 mr-2 h-5 w-5' />
                Signing in...
              </>
            ) : (
              'Sign in'
            )}
          </button>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default Login