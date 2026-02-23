"use client"
// Components
import Navbar from "@/components/layout/navbar/Navbar"

const PagesLayout = ({children}:{children: React.ReactNode}) => {
  return (
   <>
   <Navbar/>
   {children}
   </>
  )
}

export default PagesLayout