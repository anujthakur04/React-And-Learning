import React from 'react'
import './index.css'
// import { BrowserRouter as router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LayOut from './LayOut.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'



// const routers = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path='/' element={<LayOut />}>
//             <Route path='' element={<Home />} />
//             <Route path='about' element={<About />} />
//             <Route path='contact' element={<Contact />} />
//             <Route path='user/:userid' element={<User />} />
//             <Route
//                 loader={githubInfoLoader}
//                 path='github' element={<Github />} />


//         </Route >
//     )
// )

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LayOut />}>
                    <Route path='' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='user/:userid' element={<User />} />
                    <Route
                        loader={githubInfoLoader}
                        path='github' element={<Github />} />
                </Route >
            </Routes>

        </Router>
    );
}

export default App
