
import React from "react";
import userContext from "./Context"; 
import propTypes from "prop-types"

const Provider=({children})=> {
    const [user,setUser]= React.useState(null)
  return (
<userContext.Provider value={{user,setUser }}>
{children}
</userContext.Provider>
  )
}

Provider.propTypes={
    children: propTypes.any
}

export default Provider
