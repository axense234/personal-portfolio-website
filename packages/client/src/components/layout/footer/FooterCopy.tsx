// SCSS
import footerCopyStyles from "@/scss/components/layout/footer/FooterCopy.module.scss";
// Translations
import { useTranslations } from "next-intl";

const FooterCopy = () => {
  const translations = useTranslations("layout.footer");

  return (
    <div className={footerCopyStyles.container}>
      <p>{translations("copy")}</p>
    </div>
  );
};

export default FooterCopy;
