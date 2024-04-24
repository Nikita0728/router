import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
// const router = createBrowserRouter(
//   [{
//     path:'/',
//     element:<Layout/>,
//      children:[
//       {
//         path:'home',
//         element :<Home/>
//       },
//       {
//         path:'about',
//         element :<About/>
//       }
//      ]
  
//   },

//   ]
// )

// ANOTHER WAY
const router = createBrowserRouter(
  <Route path ='' element={<Layout/>}> 
        <Route path ='home' element={<Home/>}/> 
        <Route path ='about' element={<About/>}/>
        <Route path='contact' element ={<Contact/>}/>
    
     </Route>

)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router}/>
  </React.StrictMode>,
)
