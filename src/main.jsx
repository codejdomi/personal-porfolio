import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './Pages/homePage.jsx';
import Work from './Pages/workPage.jsx';
import About from './Pages/aboutPage.jsx';
import Contact from './Pages/contactPage.jsx';
import { DarkModeProvider } from './Components/darkmode';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'Home',
    element: <Home />,
  },
  {
    path: 'Works',
    element: <Work />,
  },
  {
    path: 'About',
    element: <About />,
  },
  {
    path: 'Contact',
    element: <Contact />,
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
       <RouterProvider router={router}/>
    </DarkModeProvider>
  </StrictMode>,
)
