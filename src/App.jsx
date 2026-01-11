import React, { useState } from 'react'        // use rafce 

const App = () => {
  const [num,setNum] = useState(0)    //use useStatesnippet -> use state hook to manage state

  const changeA = ()=> {
    console.log("Chal Gya")
    setNum(num+10);
  }

  const changeB = () => {
    console.log("chal gya B")
    setNum(num-10)
  }

  return (
    <div>
      <h3>Number is {num}</h3>
      <button onClick={changeA}>Increment</button>
      <button onClick={changeB}>Decrement</button>
    </div>
  )
}
 
export default App;
