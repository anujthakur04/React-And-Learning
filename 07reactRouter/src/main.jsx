// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App.jsx';

// ReactDOM.render(<App />, document.getElementById('root'));






































import react from 'react';
import ReactDOM from 'react-dom';


let counter = 0;

const handleclick = () => {
    counter++
    console.log('Counter is :', counter)
    renderContent();
}
const renderContent = () => {
    const content = (
        <div>
            <button onClick={handleclick}>Increment </button>
            <h2>Counter is {counter}</h2>
        </div>
    );

    ReactDOM.render(content, document.getElementById('root'))
}
renderContent();