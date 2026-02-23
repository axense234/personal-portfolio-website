// React
import { FC } from "react"
// SCSS
import navbarLinksStyles from "@/scss/components/layout/navbar/NavbarLinks.module.scss"
// Nav Link
import { Link } from "@/i18n/navigation"
// Data
import { navLinks } from "@/data"

const NavbarLinks:FC = () => {
  return (
    <nav className={navbarLinksStyles.navbarLinksContainer}>
      <ul className={navbarLinksStyles.navbarLinks}>
        {navLinks.map((navLink)=>{
          return (
            <li key={navLink.id} title={navLink.label} aria-label={navLink.label}>
              <Link href={navLink.dest}>
                {navLink.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavbarLinks