import React from 'react'
import { Typography } from '@material-tailwind/react'

const TableAnalytics = () => {
    return (
        <div className='px-3 py-4 mt-3 bg-[#F5FBFD]'>
            <div className='flex items-center justify-between gap-4'>
                <div className='p-3 text-[#424750] bg-[#E6F4FA] w-[183px]'>
                    <Typography>
                        Invoices Generated.
                    </Typography>
                    <div className='flex gap-4 items-end'>
                        <Typography variant='h4'>04</Typography>
                        <Typography variant='p'>Invoices</Typography>
                    </div>
                </div>
                <div className='flex flex-col w-[622px] gap-3'>
                    <Typography>
                        Invoices Generated.
                    </Typography>
                    <img src='/assets/Svg/colorPilette.svg' />
                    <div className='flex w-full gap-2 items-end justify-between'>
                        <Typography className='flex items-center gap-2'>
                            <img src='/assets/Svg/greenSquare.svg' /> Work Done
                        </Typography>
                        <Typography className='flex items-center gap-2'>
                            <img src='/assets/Svg/blueSquare.svg' /> Mobilization Adv.
                        </Typography>
                        <Typography className='flex items-center gap-2'>
                            <img src='/assets/Svg/yellowSquare.svg' /> Adhoc Adv.
                        </Typography>
                        <Typography className='flex items-center gap-2'>
                            <img src='/assets/Svg/purpleSquare.svg' /> Material Adv.
                        </Typography>
                    </div>
                </div>
                <div className='p-3 text-[#424750] bg-[#E6F4FA] w-[183px]'>
                    <Typography>
                        Amount Received
                    </Typography>
                    <div className='flex gap-4 items-end'>
                        <Typography variant='h4'>$66,000.00</Typography>
                    </div>
                </div>
                <div className='p-3 text-[#424750] bg-[#E6F4FA] w-[183px]'>
                    <Typography>
                        Amount Due
                    </Typography>
                    <div className='flex gap-4 items-end'>
                        <Typography variant='h4'>$84,451.88</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableAnalytics