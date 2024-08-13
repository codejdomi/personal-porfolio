import logo from "../assets/react.svg"
import { Link } from "react-router-dom"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useDarkMode } from '../Components/darkmode';
import { useState } from "react";

const Navbar = () => {

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const [open, setOpen] = useState(false);

   const togglebtn = () => {
      setOpen(!open);
    };

  return (
    <div>
        <div className="w-full flex justify-between lg:p-6 xs:p-4 fixed z-10 bg-whiteez dark:bg-blckgray">
            <div className="relative xs:left-8 lg:left-52 p-6 abs">
                <Link to="/Home"><h2 className="font-poppins lg:text-3xl sm:text-2xl xs:text-2xl font-bold ">JFD</h2></Link> 
            </div>
            <div className="flex items-center relative xs:right-3">
                 <button onClick={togglebtn} className='p-2 text-blckgray dark:text-whitetext transition-all duration-200 rounded-md lg:hidden'>
                  {open ? <CloseIcon/>  : <MenuIcon/> }
                 </button>
            </div>

            <nav className="lg:flex relative right-2 p-6 gap-20 text-blckgray dark:text-whitetext text-base font-medium hidden">
                <Link to="/Home" className="inline-block dark:text-whitetext no-underline relative after:content-[''] after:block after:w-0 after:h-0.5 after:dark:bg-whiteez after:bg-blckgray after:transition-width after:duration-300 hover:after:w-full">HOME</Link>
                <Link to="/Works" className="inline-block dark:text-whitetext no-underline relative after:content-[''] after:block after:w-0 after:h-0.5 after:dark:bg-whiteez after:bg-blckgray after:transition-width after:duration-300 hover:after:w-full">WORKS</Link>
                <Link to="/About" className="inline-block dark:text-whitetext no-underline relative after:content-[''] after:block after:w-0 after:h-0.5 after:dark:bg-whiteez after:bg-blckgray after:transition-width after:duration-300 hover:after:w-full">ABOUT</Link>
                <Link to="/Contact" className="inline-block dark:text-whitetext no-underline relative after:content-[''] after:block after:w-0 after:h-0.5 after:dark:bg-whiteez after:bg-blckgray after:transition-width after:duration-300 hover:after:w-full">CONTACT</Link>
              <div className="text-blckgray dark:text-whitetext">
                <button onClick={toggleDarkMode}>{isDarkMode ? <LightModeIcon/> : <DarkModeIcon/>}</button>
              </div>
            </nav>
        </div>

            {open && (
            <nav className="flex fixed w-full top-20 flex-col items-center pt-4 gap-7 rounded-xl border-2 bg-whiteez dark:bg-blckgray text-blckgray dark:text-whitetext text-base font-medium lg:hidden z-10">
                 <Link to="/Home" className="inline-block dark:text-whitetext no-underline relative after:content-[''] after:block after:w-0 after:h-0.5 after:dark:bg-whiteez after:bg-blckgray after: after:transition-width after:duration-300 hover:after:w-full">HOME</Link>
                <Link to="/Works" className="inline-block dark:text-whitetext no-underline relative after:content-[''] after:block after:w-0 after:h-0.5 after:dark:bg-whiteez after:bg-blckgray after:transition-width after:duration-300 hover:after:w-full">WORKS</Link>
                <Link to="/About" className="inline-block dark:text-whitetext no-underline relative after:content-[''] after:block after:w-0 after:h-0.5 after:dark:bg-whiteez  after:bg-blckgray after:transition-width after:duration-300 hover:after:w-full">ABOUT</Link>
                <Link to="/Contact" className="inline-block dark:text-whitetext no-underline relative after:content-[''] after:block after:w-0 after:h-0.5 after:dark:bg-whiteez after:bg-blckgray after:transition-width after:duration-300 hover:after:w-full">CONTACT</Link>
              <div className="text-blckgray dark:text-whitetext mb-6">
                <button onClick={toggleDarkMode}>{isDarkMode ? <LightModeIcon/> : <DarkModeIcon/>}</button>
              </div>
            </nav>
            )}
    </div>
  )
}

export default Navbar
