import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { Avatar, Button, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react';



const Header = () => {
    return (
        <div className='grid grid-cols-2 items-center p-2'>
            <div>
                <img src='/assets/Logo/Logo.svg' />
            </div>
            <div className='flex justify-end'>
                <div className='flex gap-2 items-center'>
                    <img src='/assets/Svg/search.svg' />
                    <img src='/assets/Svg/question.svg' />
                    <img src='/assets/Svg/notification.svg' />
                    <img src='/assets/Svg/chat.svg' />
                    <div className='flex items-center gap-2'>
                        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
                        <div>
                            <Typography variant='h6'>John Smith</Typography>
                            <Typography variant='small'>Super Admin</Typography>
                        </div>
                        <Menu>
                            <MenuHandler>
                                <Button variant='text' className='flex items-center'>
                                    <FaChevronDown />
                                </Button>
                            </MenuHandler>
                            <MenuList>
                                <MenuItem>Menu Item 1</MenuItem>
                                <MenuItem>Menu Item 2</MenuItem>
                                <MenuItem>Menu Item 3</MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header