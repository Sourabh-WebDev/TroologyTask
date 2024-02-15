import React from 'react'
import { Typography } from '@material-tailwind/react'

const TableHeader = () => {
    return (
        <div>
            <div className='bg-[#F5FBFD] flex w-full p-4 gap-4'>
                <img src='/assets/Svg/keyboard-fill.svg' /> Drag here to set row groups
            </div>
            <div className='bg-[#CDE9F6] grid grid-cols-6 w-full p-4 gap-4'>
                <div className='flex gap-5'>
                    #<Typography className='text-[#424750]' variant='h6'>Invoice No.</Typography>
                </div>
                <div className='flex gap-5 text-[#256EB5]'>
                    |<Typography className='text-[#424750]' variant='h6'>Bill Type</Typography>
                </div>
                <div className='flex gap-5 text-[#256EB5]'>
                    |<Typography className='text-[#424750]' variant='h6'>Payment Status</Typography>
                </div>
                <div className='flex gap-5 text-[#256EB5]'>
                    |<Typography className='text-[#424750]' variant='h6'>Amount Received</Typography>
                </div>
                <div className='flex gap-5 text-[#256EB5]'>
                    | <Typography className='text-[#424750]' variant='h6'>Amount Due</Typography>
                </div>
            </div>
            <div className='bg-[#F5FBFD] grid grid-cols-6 w-full p-4 gap-4'>
                <div className='flex gap-5'>
                    <div className='flex gap-2 items-center'>
                        <input placeholder='Search' className='border p-1 border-[#E0E0E0] w-[161px]' label="Username" /><img src='/assets/Svg/filter.svg' />
                    </div>
                </div>
                <div className='flex gap-2 items-center text-[#256EB5]'>
                    |
                    <div className='flex gap-2 items-center'>
                        <input placeholder='Search' className='border p-1 border-[#E0E0E0] w-[161px]' label="Username" /><img src='/assets/Svg/filter.svg' />
                    </div>
                </div>
                <div className='flex gap-2 items-center text-[#256EB5]'>
                    |
                    <div className='flex gap-2 items-center'>
                        <input placeholder='Search' className='border p-1 border-[#E0E0E0] w-[161px]' label="Username" /><img src='/assets/Svg/filter.svg' />
                    </div>
                </div>
                <div className='flex gap-2 items-center text-[#256EB5]'>
                    |
                    <div className='flex gap-2 items-center'>
                        <input placeholder='Search' className='border p-1 border-[#E0E0E0] w-[161px]' label="Username" /><img src='/assets/Svg/filter.svg' />
                    </div>
                </div>
                <div className='flex gap-2 items-center text-[#256EB5]'>
                    |
                    <div className='flex gap-2 items-center'>
                        <input placeholder='Search' className='border p-1 border-[#E0E0E0] w-[161px]' label="Username" /><img src='/assets/Svg/filter.svg' />|
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableHeader