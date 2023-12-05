import React, { useState } from 'react'
import SimpleSignIn from'./SimpleSignIn'
import SimpleSignUp from './SimpleSignUp'

const ConditionalRendering = () => {
    const[state,setState]=useState({login:true})
    return(
    state.login?<SimpleSignIn/>:<SimpleSignUp/>
    );
}

export default ConditionalRendering