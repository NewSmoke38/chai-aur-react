import { useState } from 'react'
import './App.css'




function App() {
const [color, setColor] = useState("lavender")
  return (
    <>
<div className='w-full min-h-screen h-full duration-200 fixed top-0 left-0'
      style={{backgroundColor: color}}
    >
<div>
               <div className='fixed flex flex-wrap flex-col left-5 top-1/2 transform
         -translate-y-1/2 gap-3 px-2 shadow-lg bg-amber-50 py-2 rounded-3xl'>
                     <button 
                     onClick={() => setColor("red")} 
                      className='outline-none px-3 py-1 
                      rounded-full text-amber-50'
                      style={{backgroundColor: "red"}}
                      >Red</button>
                      <button 
                      onClick={() => setColor("green")} 
                      className='outline-none px-3 py-1 
                      rounded-full text-amber-50'
                      style={{backgroundColor: "green"}}
                      >Green</button>
                     <button 
                     onClick={() => setColor("olive")}         // onclick ko function hi chahiye hota hai
                      className='outline-none px-3 py-1 
                      rounded-full text-amber-50'
                      style={{backgroundColor: "olive"}}
                      >Olive</button>
                     <button 
                     onClick={() => setColor("blue")} 
                      className='outline-none px-3 py-1 
                      rounded-full text-amber-50'
                      style={{backgroundColor: "blue"}}
                      >Blue</button>
                     <button 
                     onClick={() => setColor("orange")} 
                      className='outline-none px-3 py-1 
                      rounded-full text-amber-50'
                      style={{backgroundColor: "orange"}}
                      >Orange</button>

              </div>
        </div>    
</div>
    </>
  )
}

export default App
