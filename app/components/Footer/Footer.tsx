import Image from 'next/image'
import React from 'react'
import footerLogo from '@/public/images/footer_logo.png'
import { PhoneIcon } from '@/app/icons/PhoneIcon'
import { MailIcon } from '@/app/icons/MailIcon'
import { LocationIcon } from '@/app/icons/Location'
import { FbIcon } from '@/app/icons/FbIcon'
import { InstagramIcon } from '@/app/icons/InstagramIcon'
import { LinkedinIcon } from '@/app/icons/LinkedinIcon'
import NavMenuItem from '../NavBar/NavMenuItem'
import { useTranslations } from 'next-intl'
const Footer = () => {
      const t = useTranslations('')
    return (
        <div className='footer bg-[#0E0449] p-[50px] max-sm:pb-[100px] max-sm:px-[20px]'>
            <div className="container flex justify-between flex-wrap gap-[20px]">
                <div className='flex flex-col gap-[30px]'>
                    <Image src={footerLogo} alt='Webex.am' className='w-[100px]' />

                    <div className='flex items-center gap-[10px]'>
                        <PhoneIcon width={17} height={18} color="#FFFFFF" />
                        <div className='flex flex-col gap-[10px]'>
                            <a href="tel:+37496101017" className='arm_Hmks_Bebas_Neue font-normal text-[14px] text-white leading-[19.07px] underline'>+374 96-10-10-17</a>
                            <a href="tel:+37496400073" className='arm_Hmks_Bebas_Neue font-normal text-[14px] text-white leading-[19.07px] underline'>+374 96-40-00-73</a>
                        </div>
                    </div>

                    <div className='flex items-center gap-[10px]'>
                        <MailIcon width={24} height={16} color="#FFFFFF" />
                        <a href="mailto:info@webex.am" className='arm_Hmks_Bebas_Neue font-normal text-[14px] text-white leading-[19.07px] underline'>info@webex.am</a>
                    </div>

                    <div className='flex items-center gap-[10px]'>
                        <LocationIcon width={16} height={22} color="#FFFFFF" />
                        <a href="https://www.google.com/maps/search/%D4%B2%D5%A1%D5%B2%D6%80%D5%A1%D5%B4%D5%B5%D5%A1%D5%B6+%D5%BA%D5%B8%D5%B2.+79,+1%2F1/@40.1956506,44.4919674,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target='_blanc' className='arm_Hmks_Bebas_Neue font-normal text-[14px] text-white leading-[19.07px] underline'>{t('NavTop.address')}</a>
                    </div>

                    <div className='flex items-center gap-[20px]'>
                        <span className='w-[43px] h-[43px] flex justify-center items-center border border-white rounded'><FbIcon /></span>
                        <span className='w-[43px] h-[43px] flex justify-center items-center border border-white rounded'><InstagramIcon /></span>
                        <span className='w-[43px] h-[43px] flex justify-center items-center border border-white rounded'><LinkedinIcon /></span>
                    </div>
                </div>

                <ul className='flex flex-col gap-[10px]'>
                    <NavMenuItem name={t('NavMenu.home')} path="/"  color="white"/>
                    <NavMenuItem name={t('NavMenu.turnstile')} path="/turnstile"  color="white"/>
                    <NavMenuItem name={t('NavMenu.security-systems')} path="/security-systems"  color="white"/>
                    <NavMenuItem name={t('NavMenu.smart-home')} path="/smart-home"  color="white"/>
                    <NavMenuItem name={t('NavMenu.about-us')} path="/about-us" color="white" />
                    <NavMenuItem name={t('NavMenu.catalog')} path="/contact-us"  color="white"/>
                </ul>
            </div>
        </div>
    )
}

export default Footer