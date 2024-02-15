import React from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const SideBar = ({ firstColWidth, arrow }) => {
    return (
        <div className="flex flex-col h-screen w-full bg-[#002850] text-white">
            <div className="p-4 text-xl font-bold"></div>
            <nav className="flex-1 relative">
                <ul className="space-y-4 mt-4">
                    <li className={`hover:bg-gray-700 p-4 cursor-pointer flex gap-2 items-center ${firstColWidth && 'justify-center'}`}><img src='/assets/Svg/home.svg' /> {!firstColWidth && 'Home'}</li>
                    <li className={`hover:bg-gray-700 p-4 cursor-pointer flex gap-2 items-center ${firstColWidth && 'justify-center'}`}><img src='/assets/Svg/files.svg' /> {!firstColWidth && 'File'}</li>
                    <li className={`hover:bg-gray-700 p-4 cursor-pointer flex gap-2 items-center ${firstColWidth && 'justify-center'}`}><img src='/assets/Svg/pie.svg' /> {!firstColWidth && 'Analytics'}</li>
                </ul>
                <div onClick={arrow} className='border-2 border-white rounded-full w-10 h-10 grid place-items-center bg-[#002850] absolute top-0 right-[-15px]'>
                    {firstColWidth ? <FaChevronRight /> : <FaChevronLeft />}
                </div>
            </nav>
            <div className="p-4 mt-auto">
                <div className="text-xs"></div>
                <ul className="mt-2 space-y-2">
                    <li className={`hover:bg-gray-700 p-2 cursor-pointer flex gap-2 items-center ${firstColWidth && 'justify-center'}`}><img src='/assets/Svg/settings.svg' /> {!firstColWidth && 'Setting'} </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar