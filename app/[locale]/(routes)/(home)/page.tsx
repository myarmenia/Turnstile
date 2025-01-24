import React from 'react';
import HomePageBanner from '@/app/components/HomePageBanner/HomePageBanner';
import InfoServices from '@/app/components/InfoServices/InfoServices';
import CategorySection from '@/app/components/CategorySection/CategorySection';
import OurProductsSection from '@/app/components/OurProductsSection/OurProductsSection';
import DeviceSection from '@/app/components/DeviceSection/DeviceSection';
import ContactSection from '@/app/components/ContactSection/ContactSection';


const HomePage = async() => {
  return (
    <div>
      <HomePageBanner />
      <InfoServices/>
      <CategorySection/>
      <OurProductsSection title="title2"/>
      <DeviceSection title="titleHomePage" description="descriptionHomePage"/>
      <ContactSection/>
    </div>
  )
}

export default HomePage