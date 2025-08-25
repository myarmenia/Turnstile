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
import { Toaster } from "sonner";
import Analytics from '../components/Analytics' // Импорт
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params; 

 
  const messages = await getMessages({ locale });

  const metaObj = messages.metadata as {
    title?: string;
    description?: string;
  };

  return {
    title: metaObj.title || "Default Title",
    description: metaObj.description || "Default Description",
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
  };
}

// Root layout component
export default async function RootLayout({
  children,
  params, // Access route parameters, including `locale`
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }; // Ensure `locale` is part of the structure
}>) {
  const { locale } = params; // Destructure params here

  // Get the messages for the current locale
  const messages = await getMessages({ locale });



  return (
    <html>
      <head>
        <Script
            src={`https://www.googletagmanager.com/gtag/js?id=G-XGYTB9SK6C`}
            strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XGYTB9SK6C', {
                  page_path: window.location.pathname,
                });
            `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <StoreProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Analytics />
            <Toaster />
            <ConsultingModal />
            <NavTop />
            <NavBar />
            <BurgerMenu />
            <BottomMenu />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
