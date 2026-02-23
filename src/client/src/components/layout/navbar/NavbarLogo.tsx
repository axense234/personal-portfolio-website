// React
import { FC } from "react"
// SCSS
import navbarLogoStyles from "@/scss/components/layout/navbar/NavbarLogo.module.scss"

const NavbarLogo:FC = () => {
  return (
    <div className={navbarLogoStyles.navbarLogoContainer}>
      <h6 title="Comanescu Andrei" aria-label="Comanescu Andrei">Comanescu Andrei</h6>
    </div>
  )
}

export default NavbarLogo