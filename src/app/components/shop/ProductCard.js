import Link from 'next/link'
import { StarIcon, HeartIcon, EyeIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Wishlist button */}
      <button 
        className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-md"
        onClick={() => setIsWishlisted(!isWishlisted)}
      >
        {isWishlisted ? (
          <HeartIconSolid className="h-5 w-5 text-red-500" />
        ) : (
          <HeartIcon className="h-5 w-5 text-gray-400 hover:text-red-500" />
        )}
      </button>

      {/* Product image with link */}
      <Link href={`/shop/products/${product.id}`} passHref>
        <div className="block relative overflow-hidden rounded-t-md">
          <Image 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-cover"
          />
          
          {/* Quick view on hover */}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
            >
              <span className="bg-white text-gray-800 px-4 py-2 rounded-md flex items-center">
                <EyeIcon className="h-5 w-5 mr-2" />
                Quick View
              </span>
            </motion.div>
          )}
        </div>
      </Link>

      {/* Product info */}
      <div className="p-4">
        <Link href={`/products/${product.id}`} passHref>
          <div className="font-medium text-gray-900 mb-1 hover:text-yellow-600">{product.name}</div>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={`h-4 w-4 ${product.rating > rating ? 'text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button className="text-sm bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}