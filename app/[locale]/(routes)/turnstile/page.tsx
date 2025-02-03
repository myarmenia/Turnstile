import AdminPanelScreenSection from '@/app/components/AdminPanelScreenSection/AdminPanelScreenSection'
import ContactSection from '@/app/components/ContactSection/ContactSection'
import DeviceSection from '@/app/components/DeviceSection/DeviceSection'
import MadeInArmeniaSection from '@/app/components/MadeInArmeniaSection/MadeInArmeniaSection'
import OurProductsSection from '@/app/components/OurProductsSection/OurProductsSection'
import OurWorksSection from '@/app/components/OurWorksSection/OurWorksSection'
import { QrScanSection } from '@/app/components/QrScanSection/QrScanSection'
import ServicesSection from '@/app/components/ServicesSection/ServicesSection'
import Banner from '@/app/components/Banner/Banner'
import { TurnstileInfoSection } from '@/app/components/TurnstileInfoSection/TurnstileInfoSection'
import TurnstileServicesCicyleSection from '@/app/components/TurnstileServicesCicyleSection/TurnstileServicesCicyleSection'
import { TimeIcon } from '@/app/icons/TimeIcon';
import { DocumentIcon } from '@/app/icons/DocumentIcon';
import { TurnstileIcon } from '@/app/icons/TurnstileIcon';
import { SecurityIcon } from '@/app/icons/SecurityIcon';
import bannerBackground from '@/public/images/turnstileBannerBachgroundImage.png';
import React, { ReactNode } from 'react'
import { useTranslations } from 'next-intl'

interface BannerItem {
    id: string
    icon: ReactNode;
    title: string;
}

interface IBannerContent {
  title: string;
  description: string;
  btn: string;
}

 const TurnstilePage = () => {
   const t = useTranslations('');
    const bannerContent: IBannerContent = {
        title: t('TurnstileBanner.title'),
        description: t('TurnstileBanner.content'),
        btn: t('TurnstileBanner.see_more_btn')
    };
    
      const bannerItemsData: BannerItem[] = [
          {   
              id: '1',
              icon: <TimeIcon width={50} height={50} color='#5939F5'/>,
              title: t('TurnstileBanner.bannerItems.0')
          },
  
          {   id: '2',
              icon: <DocumentIcon width={38} height={48} color='#5939F5'/>,
              title: t('TurnstileBanner.bannerItems.1')
          },
  
          {   
              id: '3',
              icon: <TurnstileIcon width={48} height={48} color='#5939F5'/>,
              title: t('TurnstileBanner.bannerItems.2')
          },
  
          {
              id: '4',
              icon: <SecurityIcon width={40} height={48} color='#5939F5'/>,
              title: t('TurnstileBanner.bannerItems.3')
          },
  
          
      ];

  return (
    <div className='turnstile_page'>
        <Banner bannerData={bannerItemsData} bg={bannerBackground.src} content={bannerContent} page="turnstile"/>
        <OurProductsSection title="title"/>
        <QrScanSection/>
        <MadeInArmeniaSection/>
        <TurnstileInfoSection/>
        <ServicesSection/>
        <TurnstileServicesCicyleSection/>
        <AdminPanelScreenSection/>
        <DeviceSection title="titleTurnstilePage" description="descriptionTurnstilePage"/>
        <OurWorksSection/>
        <ContactSection/>
    </div>
  )
}

export default TurnstilePage