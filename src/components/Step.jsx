import React from 'react'
import Reveal from '../utils/Reveal'

const Step = () => {
  return (
    <Reveal>
        <div className='max-w-6xl w-full mx-auto my-10 space-y-7 px-5'>
            <div className='bg-[#C0DDFF] py-10 md:py-20 w-full p-5 rounded-2xl text-center space-y-5'>
                <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold'>Five steps to study in Indonesia?</h1>
                <p className='text-sm md:text-xl font-medium text-[#628FC4]'>Follow the steps below to start your Indonesian education journey.</p>
            </div>
            {/* Card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                <div className='border border-[#6BAFFF] rounded-xl p-6 sm:p-9 space-y-5'>
                    <div className='flex space-x-3 items-center'>
                        <div className='size-10 sm:size-14 border-[#0D4C96] border rounded-full flex items-center justify-center text-3xl font-semibold text-[#0D4C96]'>
                            1
                        </div>
                        <h3 className='text-xl sm:text-3xl font-semibold'>Find Opportunities</h3>
                    </div>
                    <div className='text-[#6BAFFF] text-md sm:text-xl font-medium underline flex justify-end cursor-pointer'>Find Now &gt;</div>
                </div>

                <div className='border border-[#6BAFFF] rounded-xl p-6 sm:p-9 space-y-5'>
                    <div className='flex space-x-3 items-center'>
                        <div className='size-10 sm:size-14 border-[#0D4C96] border rounded-full flex items-center justify-center text-3xl font-semibold text-[#0D4C96]'>
                            2
                        </div>
                        <h3 className='text-xl sm:text-3xl font-semibold'>Plan Your Budget</h3>
                    </div>
                    <div className='text-[#6BAFFF] text-md sm:text-xl font-medium underline flex justify-end cursor-pointer'>Check Now &gt;</div>
                </div>

                <div className='border border-[#6BAFFF] rounded-xl p-6 sm:p-9 space-y-5'>
                    <div className='flex space-x-3 items-center'>
                        <div className='size-10 sm:size-14 border-[#0D4C96] border rounded-full flex items-center justify-center text-3xl font-semibold text-[#0D4C96]'>
                            3
                        </div>
                        <h3 className='text-xl sm:text-3xl font-semibold'>Prepare Your Visa</h3>
                    </div>
                    <div className='text-[#6BAFFF] text-md sm:text-xl font-medium underline flex justify-end cursor-pointer'>Check Now &gt;</div>
                </div>

                <div className='border border-[#6BAFFF] rounded-xl p-6 sm:p-9 space-y-5'>
                    <div className='flex space-x-3 items-center'>
                        <div className='size-10 sm:size-14 border-[#0D4C96] border rounded-full flex items-center justify-center text-3xl font-semibold text-[#0D4C96]'>
                            4
                        </div>
                        <h3 className='text-xl sm:text-3xl font-semibold'>Living in Indonesia</h3>
                    </div>
                    <div className='text-[#6BAFFF] text-md sm:text-xl font-medium underline flex justify-end cursor-pointer'>Find Now &gt;</div>
                </div>

                <div className='border border-[#6BAFFF] rounded-xl p-6 sm:p-9 space-y-5'>
                    <div className='flex space-x-3 items-center'>
                        <div className='size-10 sm:size-14 border-[#0D4C96] border rounded-full flex items-center justify-center text-3xl font-semibold text-[#0D4C96]'>
                            5
                        </div>
                        <h3 className='text-xl sm:text-3xl font-semibold'>Getting Ready!</h3>
                    </div>
                    
                </div>

            </div>
        </div>
    </Reveal>
  )
}

export default Step