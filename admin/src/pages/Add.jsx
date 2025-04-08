import { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { Upload, Plus } from 'lucide-react'
import PropTypes from 'prop-types'
import '../styles/dashboard.css'

const Add = ({token}) => {

  const [image1,setImage1] = useState(false)
  const [image2,setImage2] = useState(false)
  const [image3,setImage3] = useState(false)
  const [image4,setImage4] = useState(false)

   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const [price, setPrice] = useState("");
   const [category, setCategory] = useState("Men");
   const [subCategory, setSubCategory] = useState("Topwear");
   const [bestseller, setBestseller] = useState(false);
   const [sizes, setSizes] = useState([]);

   const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      
      const formData = new FormData()

      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subCategory",subCategory)
      formData.append("bestseller",bestseller)
      formData.append("sizes",JSON.stringify(sizes))

      image1 && formData.append("image1",image1)
      image2 && formData.append("image2",image2)
      image3 && formData.append("image3",image3)
      image4 && formData.append("image4",image4)

      const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
   }

  return (
    <form onSubmit={onSubmitHandler} className='dashboard-card max-w-4xl mx-auto p-6 space-y-6'>
        <div>
          <h2 className='text-xl font-semibold mb-4 text-gray-900'>Add New Product</h2>
          <p className='text-sm font-medium text-gray-700 mb-2'>Product Images</p>
          <div className='flex gap-4'>
            <label htmlFor="image1">
              <div className='upload-area'>
                {!image1 ? <Upload size={24} className='text-gray-400' /> : <img className='upload-preview' src={URL.createObjectURL(image1)} alt="Preview" />}
              </div>
              <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden accept="image/*" />
            </label>
            <label htmlFor="image2">
              <div className='upload-area'>
                {!image2 ? <Upload size={24} className='text-gray-400' /> : <img className='upload-preview' src={URL.createObjectURL(image2)} alt="Preview" />}
              </div>
              <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden accept="image/*" />
            </label>
            <label htmlFor="image3">
              <div className='upload-area'>
                {!image3 ? <Upload size={24} className='text-gray-400' /> : <img className='upload-preview' src={URL.createObjectURL(image3)} alt="Preview" />}
              </div>
              <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden accept="image/*" />
            </label>
            <label htmlFor="image4">
              <div className='upload-area'>
                {!image4 ? <Upload size={24} className='text-gray-400' /> : <img className='upload-preview' src={URL.createObjectURL(image4)} alt="Preview" />}
              </div>
              <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden accept="image/*" />
            </label>
          </div>
        </div>

        <div className='space-y-4'>
          <div className='w-full'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Product Name</label>
            <input
              onChange={(e)=>setName(e.target.value)}
              value={name}
              className='dashboard-input'
              type="text"
              placeholder='Enter product name'
              required
            />
        </div>

          <div className='w-full'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Product Description</label>
            <textarea
              onChange={(e)=>setDescription(e.target.value)}
              value={description}
              className='dashboard-input min-h-[100px]'
              placeholder='Write product description here'
              required
            />
        </div>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Category</label>
              <select onChange={(e) => setCategory(e.target.value)} className='dashboard-select'>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Sub Category</label>
              <select onChange={(e) => setSubCategory(e.target.value)} className='dashboard-select'>
                <option value="Topwear">Topwear</option>
                <option value="Bottomwear">Bottomwear</option>
                <option value="Winterwear">Winterwear</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Price</label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className='dashboard-input'
                type="number"
                min="0"
                step="0.01"
                placeholder='0.00'
                required
              />
            </div>

        </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Available Sizes</label>
            <div className='flex flex-wrap gap-3'>
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <div
                  key={size}
                  onClick={() => setSizes(prev =>
                    prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size]
                  )}
                  className={`
                    ${sizes.includes(size) ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-700'}
                    px-4 py-2 rounded-md border cursor-pointer hover:bg-blue-50 transition-colors duration-150 font-medium text-sm
                  `}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <div className='flex items-center gap-2 py-2'>
            <input
              type="checkbox"
              id='bestseller'
              checked={bestseller}
              onChange={() => setBestseller(prev => !prev)}
              className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
            />
            <label className='text-sm font-medium text-gray-700 cursor-pointer' htmlFor="bestseller">
              Add to bestseller collection
            </label>
          </div>
        </div>

        <div className='pt-4'>
          <button
            type="submit"
            className='dashboard-btn dashboard-btn-primary inline-flex items-center gap-2'
          >
            <Plus size={18} />
            Add Product
          </button>
        </div>

    </form>
  )
}

Add.propTypes = {
  token: PropTypes.string.isRequired
}

export default Add