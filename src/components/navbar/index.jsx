import React from 'react'

const Navbar = () => {
    return (
        <div className='h-[80px] bg-white px-12 py-[10px] mt-[60px] flex items-center justify-between '>
            <div className='flex items-center gap-8'>
                <img src='https://accredian.com/Rcimages/logo.png' style={{ width: "150px", height: "40px" }} />
                <div className='h-10 rounded-md flex py-[8px] px-[18px] bg-[#1A73E8] hover:bg-[#1557b6] gap-1 items-center'>
                    <p className='text-white font-medium text-base text-nowrap'>Courses</p>
                    <img src='/arrow.svg' />
                </div>
            </div>
            <div className='flex items-center gap-8'>
                <p className='font-medium cursor-pointer'>Refer & Earn</p>
                <p className='font-medium cursor-pointer'>About Us</p>
                <p className='font-medium cursor-pointer'>Resources</p>

                <div className='h-10 rounded-md flex py-[8px] px-[18px] bg-[#94A3B833] gap-1 items-center cursor-pointer'>
                    <p className=' font-medium text-base text-nowrap'>Courses</p>
                </div>
                <div className='h-10 rounded-md flex py-[8px] px-[18px] bg-[#1A73E8] hover:bg-[#1557b6] gap-1 items-center'>
                    <p className='text-white font-medium text-base text-nowrap'>Try For Free</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar