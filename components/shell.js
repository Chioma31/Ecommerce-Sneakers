import { Fragment, useContext, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AppContext } from '@/pages/_app'

const user = {
  name: 'Chioma Cook',
  email: 'chi@example.com',
}
const navigation = [
  { name: 'Collections', href: '/', current: true },
  { name: 'Men', href: '/#', current: false },
  { name: 'Women', href: '/women', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'contact', href: '/contact', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Shell(props) {

  const {cart, setCart, amount, setAmount} = useContext(AppContext);

  const deleteOrder = () => {
    setCart({name:"", amount: 0}) 
    setAmount(0)  
  }

  const router = useRouter();
  const [currentMenu, setCurrentMenu] = useState(router.pathname);

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className=" bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto lg:max-w-7xl  px-2 lg:px-6  font-font">
                <div className="flex h-16 justify-between pb-3 lg:pb-9 mt-6 lg:border-b border-gray-300">
                  <div className="flex lg:gap-14 gap-20">
                    <div className='flex flex-row items-center gap-5'>
                      <div className="-mr-2 flex items-center lg:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400  focus:ring-offset-2">
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <Image
                            className=" "
                            height={20}
                            width={20}
                            src="/icon-close.svg"
                            alt=" Logo"
                            />
                          ) : (
                            <Image
                              className=" "
                              height={20}
                              width={20}
                              src="/icon-menu.svg"
                              alt=" Logo"
                              />
                          )}
                        </Disclosure.Button>
                      </div>
                      <div className="flex flex-shrink-0 items-center">
                        <Link href="/">
                          <Image
                            className=" "
                            height={80}
                            width={140}
                            src="/logo.svg"
                            alt=" Logo"
                          />
                        </Link>
                        
                      </div>
                    </div>
                    
                    <div className="hidden lg:-my-9 lg:ml-6 lg:flex lg:gap-5  sm:space-x-8">
                      {navigation.map((item) => (
                        <Link
                          onClick={() => {
                          setCurrentMenu(item.href);
                          }}
                          key={item.name}
                          href={item.href}
                          className={classNames(
                              currentMenu === item.href
                              ? 'border-primary border-b-4 text-gray-800 font-medium'
                              : 'border-transparent text-gray-400 hover:border-primary hover:text-gray-700',
                            'inline-flex items-center border-b-2 px-1 pt-1 text-[16px] font-normal'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className=" ml-6 flex gap-5 items-center">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <Menu.Button
                        type="button"
                        className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500  focus:ring-offset-2"
                      >
                        <span className="sr-only">View notifications</span>
                          <Image
                            className=" "
                            height={20}
                            width={25}
                            src="/icon-cart.svg"
                            alt=" Logo"
                          />
                          {
                            cart?.amount ? 
                            <span className=' absolute top-[-5px] text-[13px] text-center h-5 w-5 rounded-full bg-primary text-white'>{cart.amount}</span>
                            : null
                          }
                          
                      </Menu.Button>
                      
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-3 w-[350px] -mr-16 lg:-mr-28 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 
                        focus:outline-none">
                          <div>
                            <div className='px-6 py-3 font-bold font-font border-b'>Cart</div>
                            {
                            cart?.amount ? 
                            <div className='px-6 py-6 font-font flex flex-col gap-5'>
                              <div className='flex justify-between items-center'>
                                <div>
                                  <Image
                                    className=" "
                                    height={20}
                                    width={45}
                                    src="/image-product-1.jpg"
                                    alt=" Logo"
                                  />
                                </div>
                                <div className='text-[14px]'>
                                  <div>Fall Limited Edition Sneakers</div>
                                  <div> $125.00 × 1 <span className='font-bold'>$125</span> </div>
                                </div>
                                <div>
                                  <Image
                                    onClick={deleteOrder}
                                    className=" "
                                    height={20}
                                    width={30}
                                    src="/icon-delete.svg"
                                    alt=" Logo"
                                  />
                                </div>
                                      

                              </div>
                              <button className=" hover:bg-[#f1995f]  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 px-14 py-3 bg-[#F37B2C] rounded-lg text-white shadow-2xl  shadow-secondary text-center">Checkout</button>
                            </div>
                            : 
                            <div className='px-6 py-10 font-font flex justify-center'>Your cart is empty</div>
                            }
                            
                          </div>
                          
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    <div>
                        <button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:ring-2 focus:ring-primary focus:ring-offset-2">
                          <span className="sr-only">Open user menu</span>
                            <Image
                              className="h-12 w-12 rounded-full"
                              height={20}
                              width={25}
                              src="/image-avatar.png"
                              alt=" image"
                            />    
                        </button>
                      </div>

                    
                  </div>
                  
                </div>
              </div>

              
              <Disclosure.Panel focus="true" className="fixed inset-0 z-10 mr-28 sm:mr-60 overflow-y-auto bg-[#fefefe] px-6 py-6 lg:hidden">
              <Transition.Child
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Disclosure.Button className="inline-flex mt-4 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2  focus:ring-offset-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <Image
                    className=" "
                    height={20}
                    width={20}
                    src="/icon-close.svg"
                    alt=" Logo"
                    />
                  ) : null}
                </Disclosure.Button>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          activeClass="active"
                          to={item.to}
                          spy
                          smooth
                          offset={-100}
                          duration={900}
                          className="-mx-3 block rounded-lg py-2 px-3 text-xl font-font font-bold leading-7 text-black hover:bg-gray-400/10"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                  </div>
                </div>
              </Transition.Child>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="lg:py-10">
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{props.children}</div>
          </main>
        </div>
      </div>
    </>
  )
}
