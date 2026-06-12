'use client'

import { StarIcon, ArrowLeftIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Tab } from '@headlessui/react'
import Layout from '../../../components/shop/Layout'
import Link from 'next/link'
import Image from 'next/image'
import sp from "../../../../../public/shop/sp.jpg"
import b from "../../../../../public/shop/b.png"
import hi from "../../../../../public/shop/hi.jpg"
import smk from "../../../../../public/shop/smk.webp"

export default function ProductPage() {
  const product = {
    id: 1,
    name: 'Premium Solar Panel 300W',
    price: 249.99,
    description: 'Our high-efficiency monocrystalline solar panel delivers exceptional performance with a sleek, all-black design. Perfect for residential rooftops.',
    features: [
      '300W power output',
      'High-efficiency monocrystalline cells',
      'All-black design for aesthetic appeal',
      '25-year linear power output warranty',
      'Corrosion-resistant aluminum frame',
      'Easy installation with pre-drilled holes'
    ],
    details: 'This solar panel features PERC cell technology for improved efficiency in low-light conditions. The tempered glass provides durability against harsh weather conditions.',
    specifications: [
      { name: 'Maximum Power', value: '300W' },
      { name: 'Efficiency', value: '19.8%' },
      { name: 'Dimensions', value: '65.6 x 39.4 x 1.4 in' },
      { name: 'Weight', value: '42.3 lbs' },
      { name: 'Warranty', value: '25 years' },
    ],
    rating: 4.8,
    reviews: 124,
    images: [sp, b, hi, smk], // Use the imported image objects directly
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <div className="flex items-center">
                <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-700">Home</Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                <Link href="/products" className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700">Products</Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm font-medium text-gray-700">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Product Gallery */}
          <div className="mb-8 lg:mb-0">
            <Tab.Group>
              <Tab.Panels className="mb-4">
                {product.images.map((image, idx) => (
                  <Tab.Panel key={idx}>
                    <div className="bg-gray-100 rounded-lg overflow-hidden h-96">
                      <Image 
                        src={image} 
                        alt={`${product.name} - View ${idx + 1}`}
                        className="w-full h-full object-contain"
                        width={500}
                        height={500}
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
              
              {/* Thumbnail Gallery */}
              <Tab.List className="grid grid-cols-4 gap-2">
                {product.images.map((image, idx) => (
                  <Tab key={idx} as="div" className="focus:outline-none">
                    {({ selected }) => (
                      <div className={`relative h-20 bg-gray-100 rounded-md overflow-hidden ${
                        selected ? 'ring-2 ring-yellow-500' : ''
                      }`}>
                        <Image 
                          src={image} 
                          alt={`${product.name} thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                          width={500}
                          height={500}
                        />
                      </div>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </Tab.Group>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={`h-5 w-5 ${product.rating > rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-gray-600 ml-2">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="text-2xl font-semibold text-gray-900 mb-6">${product.price.toFixed(2)}</p>

            {/* Add to Cart */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center border border-gray-300 rounded">
                <button 
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-3 py-2 border-x border-gray-300">1</span>
                <button 
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button 
                className="flex-1 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300 flex items-center justify-center"
                aria-label="Add to cart"
              >
                <ShoppingCartIcon className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
            </div>

            {/* Tabs */}
            <Tab.Group>
              <Tab.List className="flex border-b border-gray-200">
                <Tab
                  className={({ selected }) =>
                    `py-2 px-4 border-b-2 font-medium text-sm ${
                      selected
                        ? 'border-yellow-500 text-yellow-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`
                  }
                >
                  Description
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `py-2 px-4 border-b-2 font-medium text-sm ${
                      selected
                        ? 'border-yellow-500 text-yellow-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`
                  }
                >
                  Features
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `py-2 px-4 border-b-2 font-medium text-sm ${
                      selected
                        ? 'border-yellow-500 text-yellow-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`
                  }
                >
                  Specifications
                </Tab>
              </Tab.List>
              <Tab.Panels className="mt-4">
                <Tab.Panel className="text-gray-600">
                  <p className="mb-4">{product.description}</p>
                  <p>{product.details}</p>
                </Tab.Panel>
                <Tab.Panel>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="border border-gray-200 rounded-md overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <tbody className="divide-y divide-gray-200">
                        {product.specifications.map((spec, index) => (
                          <tr key={index}>
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 whitespace-nowrap bg-gray-50">
                              {spec.name}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}