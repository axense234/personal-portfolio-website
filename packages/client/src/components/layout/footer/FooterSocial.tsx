// SCSS
import { socialMediaIcons } from "@/data";
import footerSocialStyles from "@/scss/components/layout/footer/FooterSocial.module.scss";
// Next
import Image from "next/image";
import Link from "next/link";

const FooterSocial = () => {
  return (
    <div className={footerSocialStyles.container}>
      {socialMediaIcons.map((smIcon) => {
        return (
          <Link href={smIcon.dest} target="_blank" key={smIcon.id}>
            <Image
              src={smIcon.rel}
              alt={smIcon.label}
              title={smIcon.label}
              aria-label={smIcon.label}
              width={48}
              height={48}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default FooterSocial;
