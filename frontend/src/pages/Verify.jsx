import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { motion } from 'framer-motion'

const Verify = () => {
    const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext)
    const [searchParams] = useSearchParams()
    const [isLoading, setIsLoading] = useState(true)
    
    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const verifyPayment = async () => {
        try {
            if (!token) {
                toast.error('Authentication required')
                navigate('/login')
                return
            }

            const response = await axios.post(
                backendUrl + '/api/order/verifyStripe', 
                { success, orderId }, 
                { headers: { token } }
            )

            if (response.data.success) {
                setCartItems({})
                toast.success('Payment verified successfully!')
                navigate('/orders')
            } else {
                toast.error('Payment verification failed')
                navigate('/cart')
            }
        } catch (error) {
            console.error('Payment verification error:', error)
            toast.error(error.response?.data?.message || 'Payment verification failed')
            navigate('/cart')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        verifyPayment()
    }, [token])

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-[60vh] flex items-center justify-center px-4"
        >
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center bg-white p-8 rounded-lg shadow-sm max-w-md w-full"
            >
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-12 h-[2px] bg-primary"></div>
                    <p className="font-medium text-lg tracking-wider text-primary">
                        PAYMENT VERIFICATION
                    </p>
                    <div className="w-12 h-[2px] bg-primary"></div>
                </div>
                
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-4"
                    >
                        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                        <p className="text-gray-600">Verifying your payment...</p>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    )
}

export default Verify