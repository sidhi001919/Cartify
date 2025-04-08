import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProductItem = ({id, image, name, price}) => {
    const {currency} = useContext(ShopContext);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -5 }}
            className="group"
        >
            <Link 
                onClick={() => scrollTo(0,0)} 
                className='block text-gray-700 cursor-pointer' 
                to={`/product/${id}`}
            >
                <div className='overflow-hidden rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300'>
                    <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className='w-full object-cover aspect-[3/4]' 
                        src={image[0]} 
                        alt={name} 
                    />
                </div>
                <motion.div className='mt-4 space-y-2'>
                    <h3 className='text-sm font-medium text-gray-800 line-clamp-1 group-hover:text-primary transition-colors duration-200'>
                        {name}
                    </h3>
                    <p className='text-sm font-semibold text-primary'>
                        {currency}{price}
                    </p>
                </motion.div>
            </Link>
        </motion.div>
    )
}


export default ProductItem
