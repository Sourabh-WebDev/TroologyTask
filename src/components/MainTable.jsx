import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { TableData } from '../Data/Data'
import { CgChevronDoubleLeftO, CgChevronDoubleRightO, CgChevronLeftO, CgChevronRightO } from "react-icons/cg";
import TableAnalytics from './TableAnalytics';
import TableHeader from './TableHeader';


const MainTable = () => {
    return (
        <div className='p-2'>

            <div className='flex w-full gap-2 text-[#256EB5]'>
                <Button variant='text' className='flex gap-2 items-center pl-2 text-[#256EB5]'><img src='/assets/Svg/filter.svg' /> Filter</Button>
                <Button variant='text' className='flex gap-2 items-center pl-2 text-[#256EB5]'><img src='/assets/Svg/sync.svg' /> Sync +</Button>
            </div>

            {/* Table Analytics */}

            <TableAnalytics />

            {/* Table Header */}

            <div className='border border-[#E0E0E0]'>
                <TableHeader />

                {/* Table Data */}

                {
                    TableData?.map((item, index) => (

                        <div className='bg-[#F5FBFD] grid grid-cols-6 w-full p-4 gap-4'>
                            <div className='flex gap-5'>
                                {index + 1}<Typography>{item.invoiceNo}</Typography>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Typography>{item.billType}</Typography>
                            </div>
                            <div className='text-white'>
                                {
                                    item.paymentStatus === 'Full' ? (
                                        <div className='text-center mx-10 bg-[#10B970] items-center'>
                                            Full
                                        </div>
                                    ) : item.paymentStatus === 'Partial' ? (
                                        <div className='text-center mx-10 bg-[#AB41ED] items-center'>
                                            Partial
                                        </div>
                                    ) : (
                                        <div className='text-center mx-10 bg-[#7C7D7E] items-center'>
                                            NA
                                        </div>
                                    )
                                }
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Typography>{item.amountReceived}</Typography>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Typography>{item.amountDue}</Typography>
                            </div>
                            <div className='flex gap-2 items-center justify-end'>
                                <img src='/assets/Svg/printer.svg' />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='mt-10 grid grid-cols-2 '>
                <div className='text-left'>
                    <Typography>Showing <b>1 to 4</b> 0f 4 entries</Typography>
                </div>
                <div className='text-right flex justify-end'>
                    <div className='flex items-center'>
                        <CgChevronDoubleLeftO size={25} color='#D9D9D9' />
                        <CgChevronLeftO size={25} color='#D9D9D9' />
                        <Typography> <b>1</b> out of 1 </Typography>
                        <CgChevronRightO size={25} color='#256EB5' />
                        <CgChevronDoubleRightO size={25} color='#256EB5' />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default MainTable