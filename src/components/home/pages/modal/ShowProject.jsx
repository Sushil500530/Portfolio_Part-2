/* eslint-disable react/prop-types */
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const ShowProject = ({ isOpen, setIsOpen, findProject }) => {
  const { id, bgImage, showImage, liveLink, clientSite, serverSite, title, usesComponents, description } = findProject || {};
  function closeModal() {
    setIsOpen(false)
  }


  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(true)}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0" >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95" >
                <Dialog.Panel className="w-full lg:max-w-lg max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className='cursor-pointer rounded-lg w-full h-[180px] md:h-[280px] lg:h-[280px]'>
                    <img src={showImage} alt="link show" className="rounded-lg w-full h-full" />
                  </div>
                  <div className='cursor-default'>
                    <div>
                      <h1 className='text-xl lg:text-2xl font-bold my-3'>{title}</h1>
                      <p> {description?.length > 100 ? description?.slice(0, 100) + "........." : description} </p>
                    </div>
                    <div>
                      <h1 className='text-xl lg:text-2xl font-bold'>Source Code</h1>
                      <div className='flex gap-5 mt-3'>
                        <button className='btn btn-sm bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-83flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-black border-none hover:text-[#3b26a4] hover:ease-in-out'><a href={clientSite} target='_blank' rel="noreffer" className='flex items-center'>Client Site </a></button>
                        <button className='btn btn-sm bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-3 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-black border-none hover:text-[#3b26a4] hover:ease-in-out'><a href={serverSite} target='_blank' className='flex items-center'>Server Site </a></button>
                      </div>
                    </div>

                    <div className='mt-5'>
                      <h1 className='text-xl lg:text-2xl font-bold'>Use Technologies</h1>
                      <div className='flex flex-wrap mt-3 gap-3'>
                        <p className='bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-1 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium text-black border-none hover:ease-in-out cursor-default'>Tailwind</p>
                        <p className='bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-3 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium text-black border-none hover:ease-in-out cursor-default'>React </p>
                        <p className='bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-3 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium text-black border-none hover:ease-in-out cursor-default'>Nodejs </p>
                        <p className='bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-3 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium text-black border-none hover:ease-in-out cursor-default'>Expressjs </p>
                        <p className='bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-3 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium text-black border-none hover:ease-in-out cursor-default'>MongoDB </p>
                        <p className='bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-3 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium text-black border-none hover:ease-in-out cursor-default'>Firebase </p>
                        <p className='bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-3 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium text-black border-none hover:ease-in-out cursor-default'>Vercel </p>
                        <p className='bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-3 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium text-black border-none hover:ease-in-out cursor-default'>JWT </p>
                        <p className='bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-3 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium text-black border-none hover:ease-in-out cursor-default'>Axios </p>
                        <p className='bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-3 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium text-black border-none hover:ease-in-out cursor-default'>Stripe </p>
                      </div>
                    </div>
                  </div>
                 
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>

  );
};

export default ShowProject;