// React
import { FC } from "react";
// SCSS
import footerLinksStyles from "@/scss/components/layout/footer/FooterLinks.module.scss";
// Data
import { navLinks } from "@/data";
// i18n
import { Link } from "@/i18n/navigation";

const FooterLinks: FC = () => {
  return (
    <nav className={footerLinksStyles.container}>
      <ul className={footerLinksStyles.links}>
        {navLinks.map((navLink) => {
          return (
            <li
              key={navLink.id}
              title={navLink.label}
              aria-label={navLink.label}
            >
              <Link href={navLink.dest}>{navLink.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default FooterLinks;
