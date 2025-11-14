import { CustomMenu } from "@/components/custom/CustomMenu"
import { Outlet, useLocation } from "react-router"


export const HeroesLayout = () => {

  const {pathname} = useLocation()

  console.log({pathname})

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto p-6"></div>
      <CustomMenu/>
      <Outlet/>
    </div>

    
    
  )
}
