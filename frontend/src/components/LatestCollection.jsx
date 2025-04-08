import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import { motion } from 'framer-motion';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[products])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='my-10 container mx-auto px-4'
    >
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className='text-center py-12'
      >
        <div className='flex items-center justify-center gap-3 mb-4'>
          <div className='w-12 h-[2px] bg-primary'></div>
          <p className='font-medium text-md tracking-wider text-primary'>NEW ARRIVALS</p>
          <div className='w-12 h-[2px] bg-primary'></div>
        </div>
        {/* <Title text1={'LATEST'} text2={'COLLECTIONS'} /> */}
        <motion.p 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className='w-3/4 m-auto text-sm md:text-base text-gray-600 mt-4'
        >
          Stay ahead of the trends with our latest arrivals. Each piece is carefully selected
          to bring you the most current and stylish options in fashion.
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 gap-y-8'
      >
        {
          latestProducts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <ProductItem 
                id={item._id} 
                image={item.image} 
                name={item.name} 
                price={item.price} 
              />
            </motion.div>
          ))
        }
      </motion.div>
    </motion.div>
  )
}

export default LatestCollection
