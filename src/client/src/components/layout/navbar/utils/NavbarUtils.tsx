// React
import { FC } from "react"
// SCSS
import navbarUtilsStyles from "@/scss/components/layout/navbar/utils/NavbarUtils.module.scss"
// Components
import LanguageSwitcher from "./lang/LanguageSwitcher"
import ColorSchemeToggle from "./ColorSchemeToggle"

const NavbarUtils: FC = () => {
  return (
    <div className={navbarUtilsStyles.navbarUtilsContainer}>
      <LanguageSwitcher/>
      <ColorSchemeToggle/> 
    </div>
  )
}

export default NavbarUtils