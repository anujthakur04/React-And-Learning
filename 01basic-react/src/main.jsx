import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'

const reactElement = React.createElement (
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'click me to go to google'
)
ReactDOM.createRoot(document.getElementById('root')).render(

    <Chai/>
)
