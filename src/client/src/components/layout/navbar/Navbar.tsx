// React
import { FC } from "react"
// SCSS
import navbarStyles from "@/scss/components/layout/navbar/Navbar.module.scss"
// Components
import NavbarLogo from "./NavbarLogo"
import NavbarLinks from "./NavbarLinks"
import NavbarUtils from "./NavbarUtils"

const Navbar: FC = () => {
  return (
    <header className={navbarStyles.navbarContainer}>
        <NavbarLogo/>
        <NavbarLinks/>
        <NavbarUtils/>
    </header>
  )
}

export default Navbar