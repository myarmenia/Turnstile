
import Image from 'next/image'
import React from 'react'
import logo from "../../../public/images/logo.png"
import NavMenu from './NavMenu'
import SelectLng from '../SelectLng/SelectLng'
import BurgerMenuIcon from './BurgerMenuIcon'
const NavBar = () => {
    return (
        <div className=' bg-white h-[96px] sticky top-0 z-50 border-b border-gray-200'>
            <div className='container flex justify-between items-center h-full max-lg:px-[20px] xl:px-[40px]'>
                <div className='h-full flex items-center gap-[40px]'>
                    {/* Logo */}
                    <div className="flex items-center w-[80px]">
                        <Image src={logo} alt="Webex" className='w-full'/>
                    </div>

                    {/* Nav Menu */}
                    <NavMenu />
                </div>

                <div className='hidden lg:block'>
                    <SelectLng/>
                </div>

                <BurgerMenuIcon/>
            </div>
        </div>
    )
}

export default NavBar