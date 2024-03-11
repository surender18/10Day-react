function customRendner(reactElement,Container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHtml=reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // Container.appendChild(domElement)

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(const prop in reactElement.props){
        if(prop==='children')continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    Container.appendchild(domElement)
}

const reactElement= {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click to visit google'
}
const Container =document.querySelector('#root')

customRendner(reactElement,Container)
