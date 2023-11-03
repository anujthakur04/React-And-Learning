
function customRender(reactElement, Container) {
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('href', reactElement.props.target);
    Container.appendChild(domElement);
    */
   const domElement = document.createElement(reactElement.type);
   domElement.innerText = reactElement.children;
   for(let prop in reactElement.props) {
    if(prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop])
   }
   Container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com/',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
