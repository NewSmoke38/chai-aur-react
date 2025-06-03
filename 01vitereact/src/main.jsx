import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function myApp(){
  return (                     //isko hi parse kiya jata hai to convert in jsx
    <div>
      <h1>Custom app !</h1>
    </div>
  )
}
/*
const reactElement = {         // iss tarah se nhi likhte direct, aisa banta hai khud parse hoke
    type: 'a',                 // custom react likha tha , so it needs a boilerplate(custom render) kinda thing
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
} */
const anotherUser = "chai aur react"
const anotherElement = (
  <a href="https://google.com" target='_blank'>vsit google</a>   // this works cause opf corect syntaxxxxx
)

// react ke hissab se banate hai
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},   // no if else used here
  'click me to visit google',
  anotherUser
)


ReactDom.createRoot(document.getElementById('root')).render(
  reactElement
)         