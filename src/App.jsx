import Provider from "./Usercontext/Provider"
import Login from "./components/Login"
import Profile from "./components/Profile"


function App() {


  return (
    <>
    <Provider>
      <h3 style={{fontSize:50, textAlign:"center"}} className="bg-black text-white">Understanding Custom Api</h3>
      <Login/>
      <Profile/>
    </Provider>
    </>
  )
}

export default App
