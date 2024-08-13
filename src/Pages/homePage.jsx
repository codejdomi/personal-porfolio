import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"


const Home = () => {

  return (
    <div>
      <div className="text-blckgray dark:text-whitetext bg-whiteez dark:bg-blckgray font-poppins">
        <Navbar/>
          <div className="w-full h-screen flex items-center justify-center -z-10">
            <div 
              className="text-center p-3 absolute xs:bottom-60 sm:bottom-44 md:bottom-34 lg:bottom-60 font-bold">
              <motion.h2
                initial={{ opacity: 0, y:30 }}
                animate={{opacity: 1, y: 50, }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:text-4xl xs:text-xl leading-normal">
                  Hi, I'm
              </motion.h2>
              <motion.h1 
                initial={{ opacity: 0, y:30 }}
                animate={{opacity: 1, y: 50, }}
                transition={{ duration:0.5, delay: 0.5 }}
                className="lg:text-5xl xs:text-2xl leading-normal">
                  Jhon Francis Dela Torre
              </motion.h1>
              <motion.h1 
                initial={{ opacity: 0, y:30 }}
                animate={{opacity: 1, y: 50, }}
                transition={{ duration:0.5, delay: 0.5 }}
                className="lg:text-4xl xs:text-xl leading-normal">
                  BS-IT Student
              </motion.h1>
                <div className="lg:p-4 xs:p-2 xs:text-xs leading-normal">
                  <motion.p
                  initial={{ opacity: 0, y:30 }}
                  animate={{opacity: 1, y: 50, }}
                  transition={{ duration:0.5, delay: 0.5 }}
                  className="m-auto"
                  >
                  Aspiring Web Developer and i have a  <br /> 
                  strong desire to improve my skills and thrive on challenges <br />
                  I'm thrilled to contribute to the future of the web.</motion.p>
                </div>
                    <div className="lg:mt-2 xs:mt-4">
                      <Link to="/Contact">
                        <motion.button 
                          initial={{ opacity: 0, y:30 }}
                          animate={{opacity: 1, y: 50, }}
                          transition={{ duration:0.5, delay: 0.5 }}
                          className="lg:border-2 p-2 rounded-lg bg-blckgray text-whitetext dark:bg-whiteez dark:text-blckgray hover:bg-slate-600 hover:dark:bg-slate-400">
                            Let's work
                        </motion.button>
                      </Link> 
                    </div>
                </div>
            </div>
          <Footer />
        </div>
    </div>
  )
}

export default Home
