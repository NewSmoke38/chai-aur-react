import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    u: "hitesh",
    age: 31
  }
 let newArr = [1, 2, 3]

  return (
    <>
    <h1 className='bg-amber-800 text-amber-300 p-4
    rounded-xl'>huihuihui</h1>
    <Card username="chai aur code" btnText="click me!!" />    
    <Card  username="code" btnText="yayyy!!"  />         
     
     </>
  )
}

export default App
