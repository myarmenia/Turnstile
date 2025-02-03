import { LineIcon } from '@/app/icons/LineIcon'
import React from 'react'
import Pz3Img from '@/public/images//PZ-3.png'
import ourWorksBackground from '@/public/images/our_works_sectionBackground.png'
import VideoComponent from '../VideoComonent/VideoComonent'
import { useTranslations } from 'next-intl'
import { StaticImageData } from 'next/image'

interface IOurWorksItem {
    id: string,
    title: string,
    img: StaticImageData,
    video:string,
}
const OurWorksSection = () => {
    const t = useTranslations('OurWorksSection')
    const our_works_data: IOurWorksItem[] = [
        {
            id: '1',
            title: t('items.0'),
            img: Pz3Img,
            video: '/videos/example.mp4'
        },

        {
            id: '2',
            title: t('items.1'),
            img: Pz3Img,
            video: '/videos/example.mp4'
        },

        {
            id: '3',
            title: t('items.2'),
            img: Pz3Img,
            video: '/videos/example.mp4'
        },

        {
            id: '4',
            title: t('items.3'),
            img: Pz3Img,
            video: '/videos/example.mp4'
        },

        {
            id: '5',
            title: t('items.4'),
            img: Pz3Img,
            video: '/videos/example.mp4'
        },

        {
            id: '6',
            title:t('items.5'),
            img: Pz3Img,
            video: '/videos/example.mp4'
        },

        {
            id: '7',
            title: t('items.6'),
            img: Pz3Img,
            video: '/videos/example.mp4'
        },

        {
            id: '8',
            title: t('items.7'),
            img: Pz3Img,
            video: '/videos/example.mp4'
        }
    ]
    return (
        <div className='our_works_section pt-[50px] flex flex-col gap-[50px] justify-center items-center'>
            <div className="container flex flex-col gap-[50px] justify-center items-center">
                <div className='flex items-center justify-center gap-3'>
                    <LineIcon width={27} height={2} color='#5939F5' />
                    <h2 className='text-[24px] font_color font-normal arm_Hmks_Bebas_Neue leading-[28.8px]'>{t('title')}</h2>
                    <LineIcon width={27} height={2} color='#5939F5' />
                </div>
            </div>

            <div style={{ backgroundImage: `url(${ourWorksBackground.src})` }} className='bg-cover bg-center bg-no-repeat px-[50px] max-sm:px-[10px] py-[70px] w-full'>
                <div className="container w-full flex flex-wrap justify-center gap-[20px]">
                    {
                        our_works_data.map((work) => (
                            <div key={work.id} className='flex flex-col gap-[10px] w-[300px] justify-center rounded overflow-hidden'>
                                <div className='w-full h-[212px]'>
                                    <VideoComponent path={work.video} thumb={work.img.src} />
                                </div>
                                <p className='text-white font-normal text-[16px] leading-[24px] freeSans'>{work.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurWorksSection