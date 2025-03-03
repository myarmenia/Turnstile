import Banner from '@/app/components/Banner/Banner'
import React from 'react'
import bannerBg from '@/public/images/security_systems_banner_bacground.png'
import OurSolutionsSection from '@/app/components/OurSolutionsSection/OurSolutionsSection';
import SecurityInfoSection from '@/app/components/SecurityInfoSection/SecurityInfoSection';
import WhyChooseUsSection from '@/app/components/WhyChooseUsSection/WhyChooseUsSection';
import MobileAppSection from '@/app/components/MobileAppSection/MobileAppSection';
import FrequentlyAsked from '@/app/components/FrequentlyAsked/FrequentlyAsked';
import ContactSection from '@/app/components/ContactSection/ContactSection';
import { useTranslations } from 'next-intl';

interface IContent {
    title: string;
    description: string;
    btn: string;
}

const SecuritySystems = () => {
    const t = useTranslations("SecuritySystemsBanner")
    const content: IContent = {
        title: t("title"),
        description: t("description"),
        btn: t("btn")
    }

    return (
        <div className='security_systems overflow-hidden'>
            <Banner bg={bannerBg.src} content={content}/>
            <OurSolutionsSection/>
            <SecurityInfoSection/>
            <WhyChooseUsSection/>
            <MobileAppSection/>
            <FrequentlyAsked/>
            <ContactSection/>
        </div>
    );
}

export default SecuritySystems;
