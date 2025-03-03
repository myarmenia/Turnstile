import Banner from '@/app/components/Banner/Banner'
import catalogBanner from "@/public/images/catalogBanner.jpeg"
import React from 'react'
import { useTranslations } from 'next-intl'
import CatalogItem from '@/app/components/CatalogItem/CatalogItem';



interface IBannerContent {
  title: string;
  description: string;
  btn: string;
}

 const CatalogPage = () => {
   const t = useTranslations('');
    const bannerContent: IBannerContent = {
        title: t('TurnstileBanner.title'),
        description: t('TurnstileBanner.content'),
        btn: t('TurnstileBanner.see_more_btn')
    };
    

  return (
    <div className='turnstile_page'>
        <Banner  bg={catalogBanner.src} content={bannerContent} page="catalog" />
        <CatalogItem/>
    </div>
  )
}

export default CatalogPage