import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom'
import Home from './002-home/home'
import Portofolio from './003-portofolio/Portofolio'
import About from './004-about/About'
import Contact from './005-contact/Contact'
import Layout from './000-layout/Layout'


function App() {

  const router = createHashRouter([
    {path:"" ,element:<Layout/>, children:[
      { path: "", element: <Home /> },
      { path: "/home", element: <Navigate to={"/"} /> },
      { path: "/portofolio", element: <Portofolio /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> }
    ]}
  ])

  return (
    <>
      <RouterProvider router={router}> </RouterProvider>
    </>
  )
}

export default App