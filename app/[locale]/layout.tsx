import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Metadata } from "next";
import "../globals.css";
import NavTop from "../components/NavTop/NavTop";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import StoreProvider from "../StoreProvider/StoreProvider";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import BottomMenu from "../components/BottomMenu/BottomMenu";
import ConsultingModal from "../components/ConsultingModal/ConsultingModal";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for the page
export const metadata: Metadata = {
  title: "Turnstile",
  description: "Created by Webex.am",
};

// Root layout component
export default async function RootLayout({
  children,
  params, // Access route parameters, including `locale`
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string}; // Ensure `locale` is part of the structure
}>) {
  const  {locale}  = await params;


   // Await the params to ensure they are resolved

  // Get the messages for the current locale
  const messages = await getMessages({locale:locale}); // Fetch messages for the given locale
    
  return (
    <html>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <StoreProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ConsultingModal/>
            <NavTop />
            <NavBar />
            <BurgerMenu/>
            <BottomMenu/>
              {children} 
            <Footer/>
          </NextIntlClientProvider>
      </StoreProvider>
      </body>
    </html>
  );
}
