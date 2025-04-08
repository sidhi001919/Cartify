// import React from "react";
// import { assets } from "../assets/assets";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       className="flex flex-col sm:flex-row border border-gray-200 bg-white shadow-sm overflow-hidden"
//     >
//       {/* Hero Left Side */}
//       <motion.div
//         initial={{ x: -50, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//         className="w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-20 px-8 sm:px-12"
//       >
//         <div className="text-primary max-w-md">
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="flex items-center gap-3 mb-4"
//           >
//             <div className="w-12 h-[2px] bg-primary"></div>
//             <p className="font-medium text-sm tracking-wider">
//               OUR BESTSELLERS
//             </p>
//           </motion.div>

//           <motion.h1
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="prata-regular text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8"
//           >
//             Latest Arrivals
//           </motion.h1>

//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="flex items-center gap-3 group cursor-pointer"
//           >
//             <p className="font-semibold text-sm tracking-wider group-hover:text-accent transition-colors duration-300">
//               SHOP NOW
//             </p>
//             <div className="w-12 h-[2px] bg-primary group-hover:bg-accent transition-colors duration-300"></div>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Hero Right Side */}
//       <motion.div
//         initial={{ x: 50, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//         className="w-full sm:w-1/2 relative overflow-hidden"
//       >
//         <motion.img
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="w-full h-full object-cover"
//           //src={assets.hero_img}
//           src="https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg"
          
//           alt="Latest Fashion Collection"
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Hero;



import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col sm:flex-row border border-gray-200 bg-white shadow-sm overflow-hidden"
    >
      {/* Hero Left Side */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-20 px-8 sm:px-12"
      >
        <div className="text-primary max-w-md">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-12 h-[2px] bg-primary"></div>
            <p className="font-medium text-sm tracking-wider">
              TRENDING THIS SEASON
            </p>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="prata-regular text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8"
          >
            Redefine  Style
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <p className="font-semibold text-sm tracking-wider group-hover:text-accent transition-colors duration-300">
              DISCOVER MORE
            </p>
            <div className="w-12 h-[2px] bg-primary group-hover:bg-accent transition-colors duration-300"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Hero Right Side */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full sm:w-1/2 relative overflow-hidden"
      >
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full object-cover"
          //src={assets.hero_img}
          src="https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg"
          alt="Elevate Your Look"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
