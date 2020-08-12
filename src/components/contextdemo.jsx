import React , { Component } from 'react'
const MyContext = React.createContext();
export default function  contextdemo() {
return(
    <div>
        <MyContext.Provider value='suraj'>
        <Coder/>
        </MyContext.Provider>
    </div>
)
      
}
function Coder(){
    return(<Coder2/>)
}
function Coder2(){
    return(<Coder3/>)
}
function Coder3(){
    return(
 <MyContext.Consumer>
     {value=><h1>my name is {value}</h1>}
 </MyContext.Consumer>
    )
}

