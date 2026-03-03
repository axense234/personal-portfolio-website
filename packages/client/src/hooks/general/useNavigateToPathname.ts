// Types
import { LinkHrefType } from "@/core/types";
// Next INTL
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
// NextJS
import { Params } from "next/dist/server/request/params";

export const useNavigateToPathname = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  return ({
    forcedPathname,
    forcedLocale,
    forcedQueryParams,
  }: {
    forcedPathname?: LinkHrefType;
    forcedLocale?: string;
    forcedQueryParams?: Params;
    forcedParams?: Params;
  }) =>
    router.replace(
      {
        pathname: forcedPathname || pathname,
        query: { ...forcedQueryParams },
      },
      { locale: forcedLocale || locale },
    );
};
