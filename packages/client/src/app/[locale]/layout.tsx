// SCSS
import "@/scss/abstracts/globals.scss";
// Next Intl
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
// Zustand Providers
import { GeneralStoreProvider } from "@/zustand/general/context";
// Data
import {
  APP_KEYWORDS,
  APP_NAME,
  APP_DEFAULT_TITLE,
  APP_TITLE_TEMPLATE,
  APP_DESCRIPTION,
  APP_LOGO,
} from "@/data";
// Next
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  icons: APP_LOGO,
  keywords: APP_KEYWORDS,
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  const messages = await getMessages();
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <>
          <NextIntlClientProvider messages={messages}>
            <GeneralStoreProvider>{children}</GeneralStoreProvider>
          </NextIntlClientProvider>
        </>
      </body>
    </html>
  );
};

export default RootLayout;
