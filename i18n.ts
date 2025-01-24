import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

const locales = ["am", "en"];


export default getRequestConfig(async ({ locale }: { locale: string } ) => {
    if (!locales.includes(locale as any)) {
        notFound();
      }
    return {
        messages: (await import(`/messages/${locale}.json`)).default,
    };
});
