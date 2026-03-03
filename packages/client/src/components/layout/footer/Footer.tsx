// React
import { FC } from "react";
// SCSS
import footerStyles from "@/scss/components/layout/footer/Footer.module.scss";
// Components
import FooterLinks from "./FooterLinks";
import FooterInfo from "./FooterInfo";

const Footer: FC = () => {
  return (
    <footer className={footerStyles.container}>
      <FooterLinks />
      <FooterInfo />
    </footer>
  );
};

export default Footer;
