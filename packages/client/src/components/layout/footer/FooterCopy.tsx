// Data
import { footerCopyright } from "@/data";
// SCSS
import footerCopyStyles from "@/scss/components/layout/footer/FooterCopy.module.scss";

const FooterCopy = () => {
  return (
    <div className={footerCopyStyles.container}>
      <p>{footerCopyright}</p>
    </div>
  );
};

export default FooterCopy;
