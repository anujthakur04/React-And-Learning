import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('target')).render(
    <Router>
        <App />
    </Router>

)

// ReactDOM.render(<Router>
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>

// </Router>, document.getElementById('target'));
