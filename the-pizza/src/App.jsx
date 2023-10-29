import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { Header } from "./Components/Navbar/Navbar"
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import About from "./pages/About/About";
import Contact from './pages/Contact/Contact'
import Gallery from "./pages/Gallery/Gallery";
import Footer from "./Components/Footer/Footer";

const Layout = () =>{
  return (
    <div className="app">
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/", 
        element: <Home />
      },
      {
        path: "/menu", 
        element: <Menu />
      },
      {
        path: "/about", 
        element: <About/>
      },
      {
        path: "/contact", 
        element: <Contact />
      },
      {
        path: '/gallery',
        element: <Gallery/>
      }
     
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
