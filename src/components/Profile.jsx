import { useContext } from "react"
import userContext from "../Usercontext/Context"


function Profile() {
    const {user}=useContext(userContext)
  
 if (!user) {
    return(
    <div className="text-4xl text-white font-bold flex justify-center relative top-16 right-16">
      <h2 className="bg-red-500 w-fit">Please Login</h2>
      </div>
  )}
  
  return(
    <div className="text-4xl text-white font-bold flex justify-center relative top-16 right-16">
       <h2 className="bg-green-600 w-fit">Welcome {user.username}</h2> 
    </div>
  )
}

export default Profile
