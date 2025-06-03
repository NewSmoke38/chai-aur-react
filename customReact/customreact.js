function customRender(reactElement, container){       // DOM apne new banaye hue elements ko inject krta hai in these containers
    /*
    const domElement = document.createElement
    (reactElement.type)     // element create hogya
    domElement.innerHTML = reactElement.children     // element ke andar children add hogya
    domElement.setAttribute('href', reactElement.props.
    href)
    domElement.setAttribute('target', reactElement.props.
    target)

    container.appendChild(domElement)    
    */

    // custom render
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props
        [prop])
    }
container.appendChild(domElement)
   }


const reactElement = {         // react inn cheezo ko tree me dekhta hai or maybe compile tree flow me krta hai (virtual dom thingy)
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)

