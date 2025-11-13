import { UserContext } from "@/09-useContext/context/userContext"
import { Button } from "@/components/ui/button"
import { useContext } from "react"
import { useNavigate } from "react-router"


export const ProfilePage = () => {
  const {user,logout} = useContext(UserContext)

  const navigation = useNavigate()




  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Perfil del usuario</h1>

      <hr />

      <pre className="my-4">
        {JSON.stringify({user}, null, 2)}
      </pre>

      <Button variant={ 'destructive'} 
      onClick={logout}>Salir</Button>

    </div>
    
    
  )
}
