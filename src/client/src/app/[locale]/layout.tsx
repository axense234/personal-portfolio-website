// Next Intl
import { routing } from "@/src/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";


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
        <div className="app-container">
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
