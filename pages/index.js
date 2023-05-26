import Image from "next/image"
import Shell from "../components/shell"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Dialog, Transition } from '@headlessui/react'
import { useState, Fragment, useContext } from "react";
import { AppContext } from "./_app";

export default function Home() {

  const {cart, setCart, amount, setAmount} = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false)


  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 40,
    height: 40,
    cursor: 'pointer',
  };


  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const increment = () => {
    setAmount(amount + 1)
  }


  

  const decrement = () => {
    setAmount(amount - 1)
  } 
  const saveToCart = () => {
    setCart(prev=>({...prev, amount } ))
  }



  const renderArrowPrev =(onClickHandler, hasPrev, label) =>
  hasPrev && (
      <button type="button" onClick={onClickHandler} className="p-3 rounded-full bg-white flex items-center" title={label} style={{ ...arrowStyles, left: 1 }}>
          <img src="/icon-previous.svg" className=" hover:text-red-600" />
      </button>
  )
  const renderArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
        <button type="button" onClick={onClickHandler} title={label} className="p-3 rounded-full bg-white flex items-center" style={{ ...arrowStyles, right: 1 }}>
            <img src="/icon-next.svg" />
        </button>
  )



  return (
    <>
    <Shell />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <div className="hidden lg:flex lg:flex-row  lg:gap-24 2xl:gap-40 items-center">
        <div>
          <Carousel showArrows={false} emulateTouch={true} infiniteLoop={true}  width={500} thumbWidth={110} onClickThumb={onClickThumb} showIndicators={false} >
            <div onClick={openModal}>
                <img src="/image-product-1.jpg"  className="rounded-2xl  hover:opacity-60 " />
            </div>
            <div onClick={openModal}>
              <img src="/image-product-2.jpg"  className="rounded-2xl" />
            </div>
            <div onClick={openModal}>
              <img src="/image-product-3.jpg" className="rounded-2xl" />
            </div>
            <div onClick={openModal}>
              <img src="/image-product-4.jpg" className="rounded-2xl" />
            </div>
          </Carousel>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-75" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-transparent  p-6 align-middle shadow-2xl transition-all">
                      <Dialog.Title>
                        <div className="flex justify-end mr-4 mb-6">
                          <Image
                          onClick={closeModal}
                          className=" "
                          height={10}
                          width={20}
                          src="/icon-close.svg"
                          alt=" close"
                          />

                        </div>
                        
                      </Dialog.Title>
                      
                      <div>
                        <Carousel showArrows={true} emulateTouch={true} infiniteLoop={true}  width={520} thumbWidth={110} renderArrowNext={renderArrowNext} renderArrowPrev={renderArrowPrev} onClickThumb={onClickThumb} showIndicators={false} >
                        <div>
                            <img src="/image-product-1.jpg"  className="rounded-2xl  hover:opacity-60 " />
                        </div>
                        <div>
                          <img src="/image-product-2.jpg"  className="rounded-2xl" />
                        </div>
                        <div>
                          <img src="/image-product-3.jpg" className="rounded-2xl" />
                        </div>
                        <div>
                          <img src="/image-product-4.jpg" className="rounded-2xl" />
                        </div>
                      </Carousel>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
        <div className="-mt-14">
          <div className="text-primary font-bold text-lg my-2  tracking-wide font-font">SNEAKER COMPANY</div>
          <div className=" font-bold  text-5xl tracking-normal mt-3  leading-tight font-font">Fall Limited Edition Sneakers</div>
          <div className="text-gray-500 font-normal text-lg mt-10 font-font">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</div>
          <div className="flex gap-6 items-center mt-8">
            <div className="font-bold  text-3xl  tracking-normal mt-3  leading-tight ">$125.00 </div>
            <div className="text-primary font-medium text-lg  px-2 py-1 bg-secondary">50%</div>
          </div>
          <div className="text-gray-400 line-through font-medium text-xl mt-6 mb-10 ">$250.00</div>
          <div className="flex gap-8 items-center">
            <div className="flex gap-8 px-4 py-3 rounded-md bg-[#F7F9FD] items-center">
              <div>
                <Image
                  onClick={decrement}
                  className=" "
                  height={20}
                  width={15}
                  src="/icon-minus.svg"
                  alt=" minus"
                />
                </div>
              <div className="text-gray-900 font-normal text-lg ">{amount}</div>
              <div>
                <Image
                  onClick={increment}
                  className=" "
                  height={20}
                  width={15}
                  src="/icon-plus.svg"
                  alt=" plus"
                />
              </div>
            </div>
            <div>
              <button className="flex gap-4 items-center hover:bg-[#f1995f]  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 px-14 py-3 bg-[#F37B2C] rounded-lg text-white shadow-2xl  shadow-secondary" onClick={saveToCart}>
                <Image
                  className=" "
                  height={20}
                  width={25}
                  src="/icon-cart.svg"
                  alt=" Logo"
                />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden flex-col  gap-8 m-3 items-center">
        <div>
          <Carousel showArrows={true} emulateTouch={true} infiniteLoop={true}  width={380} showThumbs={false} renderArrowNext={renderArrowNext} renderArrowPrev={renderArrowPrev}  >
          <div>
              <img src="/image-product-1.jpg"  className="rounded-2xl  hover:opacity-60 " />
          </div>
          <div>
            <img src="/image-product-2.jpg"  className="rounded-2xl" />
          </div>
          <div>
            <img src="/image-product-3.jpg" className="rounded-2xl" />
          </div>
          <div>
            <img src="/image-product-4.jpg" className="rounded-2xl" />
          </div>
          </Carousel>
        </div>
        <div className="">
          <div className="text-primary font-bold text-lg my-2  tracking-wide font-font">SNEAKER COMPANY</div>
          <div className=" font-bold  text-2xl tracking-normal mt-3  leading-tight font-font">Fall Limited Edition Sneakers</div>
          <div className="text-gray-500 font-normal text-[16px] mt-6 font-font">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</div>
          <div className="flex items-center justify-between my-6">
            <div className="flex gap-6 items-center ">
              <div className="font-bold  text-2xl  tracking-normal   leading-tight ">$125.00 </div>
              <div className="text-primary font-medium text-lg  px-2 py-1 bg-secondary">50%</div>
            </div>
            <div className="text-gray-400 line-through font-medium text-xl mt-3 mb-4 ">$250.00</div>

          </div>
          
          <div className="flex flex-col w-full gap-6 items-center">
            <div className="flex sm:gap-16 px-4 w-full  justify-between sm:justify-center py-3 rounded-md bg-[#F7F9FD] items-center">
              <div>
                <Image
                  onClick={decrement}
                  className=" "
                  height={20}
                  width={15}
                  src="/icon-minus.svg"
                  alt=" minus"
                />
                </div>
              <div className="text-gray-900 font-normal text-lg ">{amount}</div>
              <div>
                <Image
                  onClick={increment}
                  className=" "
                  height={20}
                  width={15}
                  src="/icon-plus.svg"
                  alt=" plus"
                />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button className="flex w-full text-center justify-center gap-4 items-center hover:bg-[#f1995f]  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 px-6 sm:px-10 py-3 bg-[#F37B2C] rounded-lg text-white shadow-2xl  shadow-secondary" onClick={saveToCart}>
                <Image
                  className=" "
                  height={20}
                  width={25}
                  src="/icon-cart.svg"
                  alt=" Logo"
                />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}
