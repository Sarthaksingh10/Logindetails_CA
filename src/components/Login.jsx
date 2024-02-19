import React, { useContext } from "react";

import userContext from "../Usercontext/Context";
function Login() {
  const [username, setusername] = React.useState("");
  const [password, setpassword] = React.useState("");
  const {setUser}= useContext(userContext)
 
  const Handlesubmit=(e)=>{
        e.preventDefault()
        setUser({username,password});
  }
  return (
    < >
    <div className="border-2 border-black  w-1/4 relative left-1/3 top-10  flex flex-col text-center">
      <h2 className="text-3xl font-serif text-amber-800 bg-orange-400 ">Login Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        required
        className="border-black border-2 p-2 m-2"
      />
      {"  "}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        required
        className="border-black border-2 p-2 m-2"
      />
      <button onClick={Handlesubmit} className="w-full bg-blue-400 hover:bg-blue-700 text-3xl p-2 font-serif text-white">Submit</button>
    </div>
    </>
  );
}

export default Login;
