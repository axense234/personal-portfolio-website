// SCSS
import "@/scss/abstracts/globals.scss"
// Fonts
import { Manrope } from "next/font/google"
// Next Intl
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
// Zustand Providers
import { CounterStoreProvider } from "@/zustand/provider-test";

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

// Global Font (Headings)
const manrope = Manrope({})


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
        <div className={`app-container ${manrope.className}`}>
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
