// React
import { FC } from "react";
// SCSS
import footerLinksStyles from "@/scss/components/layout/footer/FooterLinks.module.scss";
// Data
import { navLinks } from "@/data";
// i18n
import { Link } from "@/i18n/navigation";
// Translations
import { useTranslations } from "next-intl";

const FooterLinks: FC = () => {
  const translations = useTranslations("layout.navigation.pageLinks");

  return (
    <nav className={footerLinksStyles.container}>
      <ul className={footerLinksStyles.links}>
        {navLinks.map((navLink) => {
          const translatedLabel = translations(navLink.dest);

          return (
            <li
              key={navLink.id}
              title={translatedLabel}
              aria-label={translatedLabel}
            >
              <Link href={navLink.dest}>{translatedLabel}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default FooterLinks;
