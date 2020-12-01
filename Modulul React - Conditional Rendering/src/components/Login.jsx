import React from "react";
import Input from "./Input"

function Login (){
    return (
        <form className="form">
            <Input 
                type="text"
                placeholder = "UserName"
            />
            <Input 
                type = "text"
                placeholder = "password"
            />
            <button type="submit">Login</button>
        </form>)
}


export default Login