"use client"
import Layout from '../../components/shop/Layout'
import { BoltIcon, ShieldCheckIcon, TruckIcon } from '@heroicons/react/24/outline'
import ProductCard from '../../components/shop/ProductCard'
import sp from "../../../../public/shop/sp.jpg"
import b from "../../../../public/shop/b.png"
import hi from "../../../../public/shop/hi.jpg"
import smk from "../../../../public/shop/smk.webp"
import Image from 'next/image'

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Solar Panel 300W',
      price: 249.99,
      image: sp,
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Solar Battery 5kWh',
      price: 1999.99,
      image: b,
      rating: 4.6,
    },
    {
      id: 3,
      name: 'Hybrid Inverter 5kW',
      price: 1499.99,
      image: hi,
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Solar Mounting Kit',
      price: 199.99,
      image: smk,
      rating: 4.5,
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Power Your Home with Solar Energy</h1>
              <p className="text-xl mb-6">High-quality solar products for residential and commercial use.</p>
              <button className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                Shop Now
              </button>
            </div>
            <div className="md:w-1/2">
              <img src="/solar-hero.png" alt="Solar Panels" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="mx-auto h-12 w-12 flex items-center justify-center bg-yellow-100 rounded-full mb-4">
                <BoltIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">High Efficiency</h3>
              <p className="text-gray-600">Our solar panels convert more sunlight into usable energy.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="mx-auto h-12 w-12 flex items-center justify-center bg-yellow-100 rounded-full mb-4">
                <ShieldCheckIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">25-Year Warranty</h3>
              <p className="text-gray-600">Industry-leading warranty on all our solar products.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="mx-auto h-12 w-12 flex items-center justify-center bg-yellow-100 rounded-full mb-4">
                <TruckIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free delivery on all orders over $500.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Go Solar?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Get a free consultation from our solar experts to find the perfect solution for your home.</p>
          <button className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Schedule Consultation
          </button>
        </div>
      </section>
    </Layout>
  )
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}