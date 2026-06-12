import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon, ChevronDownIcon, SunIcon } from '@heroicons/react/24/outline'
import { Popover, Transition } from '@headlessui/react'

export default function Layout({ children }) {
  const categories = [
    {
      name: 'Solar Panels',
      subcategories: [
        { name: 'Monocrystalline', href: '#' },
        { name: 'Polycrystalline', href: '#' },
        { name: 'Thin Film', href: '#' },
      ],
    },
    {
      name: 'Energy Storage',
      subcategories: [
        { name: 'Solar Batteries', href: '#' },
        { name: 'Power Stations', href: '#' },
        { name: 'Battery Accessories', href: '#' },
      ],
    },
    {
      name: 'Inverters',
      subcategories: [
        { name: 'String Inverters', href: '#' },
        { name: 'Microinverters', href: '#' },
        { name: 'Hybrid Inverters', href: '#' },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <SunIcon className="h-8 w-8 text-yellow-500" />
              <h1 className="ml-2 text-xl font-bold text-gray-900">SolarShop</h1>
            </div>
            
            {/* Desktop Navigation with Mega Menu */}
            <nav className="hidden md:flex space-x-8">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className="flex items-center text-gray-900 hover:text-yellow-600 focus:outline-none">
                      <span>Shop</span>
                      <ChevronDownIcon className={`ml-1 h-5 w-5 transition-transform ${open ? 'transform rotate-180' : ''}`} />
                    </Popover.Button>
                    
                    <Transition
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 left-0 mt-2 w-96 rounded-md shadow-lg bg-white p-4">
                        <div className="grid grid-cols-3 gap-4">
                          {categories.map((category) => (
                            <div key={category.name}>
                              <h3 className="font-medium text-gray-900 mb-2">{category.name}</h3>
                              <ul className="space-y-2">
                                {category.subcategories.map((subcategory) => (
                                  <li key={subcategory.name}>
                                    <a href={subcategory.href} className="text-gray-600 hover:text-yellow-600">
                                      {subcategory.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              
              <a href="#" className="text-gray-500 hover:text-yellow-600">Solutions</a>
              <a href="#" className="text-gray-500 hover:text-yellow-600">About</a>
              <a href="#" className="text-gray-500 hover:text-yellow-600">Contact</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="p-1 text-gray-500 hover:text-gray-900">
                <MagnifyingGlassIcon className="h-6 w-6" />
              </button>
              <button className="p-1 text-gray-500 hover:text-gray-900">
                <UserIcon className="h-6 w-6" />
              </button>
              <button className="p-1 text-gray-500 hover:text-gray-900 relative">
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main>{children}</main>
      
      {/* Footer remains the same as previous example */}
    </div>
  )
}