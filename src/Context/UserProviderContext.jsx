import React, { useState } from 'react'
import UserContext from './UserContext'

const UserProviderContext = ({children}) => {
    let [name ,setname]=useState('');

return <UserContext.Provider value={{name, setname}}>{children}</UserContext.Provider>;
  
  
}

export default UserProviderContext;





