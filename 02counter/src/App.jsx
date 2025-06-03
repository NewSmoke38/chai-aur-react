import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)      // change states

  // let counter = 15      // this wont reflect in UI

const addValue = () => {
    if (counter < 30) {
        setCounter(counter + 1)
    }
}
const removeValue = () => {
    if (counter > 0) {
        setCounter(counter - 1)
    }
}
  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value: {counter}</h2>   
    <button
    onClick={addValue}
    >add value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >remove value {counter}</button>
    <p>footer {counter}</p>
    </>
  )
}
export default App
