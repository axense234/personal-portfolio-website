// SCSS
import "@/scss/abstracts/globals.scss"
import rootLayoutStyles from "@/scss/components/layout/RootLayout.module.scss"
// Next Intl
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
// Zustand Providers
import { CounterStoreProvider } from "@/zustand/practice/provider-test";
// Fonts <3
import { manrope } from "../fonts";

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};


const RootLayout = async ({
  children,
  params,
}: RootLayoutProps) => {
  const messages = await getMessages();
  const { locale } = await params;


    if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  

  return (
    <html lang={locale}>
      <body>
        <div data-theme="dark" className={`${rootLayoutStyles.appContainer} ${manrope.className}`}>
          <NextIntlClientProvider messages={messages}>
            <CounterStoreProvider>
              {children}
            </CounterStoreProvider>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
