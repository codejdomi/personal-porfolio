import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Works from '../assets/works2.jpg';
import Fitness from '../assets/Fitness.jpg';
import { motion } from "framer-motion"


const Work = () => {

  return (
    <div>
       <div 
          className="text-blckgray dark:text-whitetext bg-whiteez dark:bg-blckgray font-poppins"
       >
        <Navbar/>
          <div 
            className="w-full h-screen flex items-center justify-center"
          >
            <div 
              className="lg:w-3/5 md:w-3/5 p-4 absolute xs:-bottom-10 sm:-bottom-20 md:bottom-36 lg:bottom-36 font-bold flex xs:flex-col"
            >
              <div>
                <motion.h1 
                  initial={{ opacity: 0, y:40 }}
                  animate={{opacity: 1, y: 50, }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="lg:text-2xl p-2 lg:mb-10 xs:mb-4 xs:text-lg"
                >
                    My Works
                </motion.h1>    
              </div>
                  <motion.div 
                    initial={{ opacity: 0, y:40 }}
                    animate={{opacity: 1, y: 50, }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="border-2 rounded-xl dark:border-gray-700 shadow-lg shadow-gray-400 dark:shadow-gray-600 flex md:flex-row lg:flex-row xs:flex-col"
                  >
                    <div 
                      className="lg:border-r-2  lg:border-b-0 md:border-r-2 xs:border-b-2  border-gray-300 flex justify-center"
                    >
                      <img 
                        className="lg:w-72 xs:w-44 " 
                        src={Fitness} 
                        alt="Fitness" 
                      />
                  </div>
                    <div 
                      className="lg:ml-4 flex flex-col lg:gap-2 xs:text-sm"
                    >
                      <h1 
                        className="p-2 lg:text-2xl xs:text-sm"
                      >
                        Fitness Workouts
                      </h1>
                      <p 
                        className="p-2 lg:text-sm xs:text-xs"
                      >
                        an website add or list workout
                      </p> 
                    <div 
                      className="flex lg:flex-row flex-wrap gap-2 p-2 list-none"
                    >
                      <li 
                        className="text-sm p-2 border-2 dark:border-gray-800 shadow-md shadow-gray-400 dark:shadow-gray-500 rounded-full lg:text-sm xs:text-xs"
                      >
                        React JS
                      </li>
                      <li 
                        className="text-sm p-2 border-2 dark:border-gray-800 shadow-md shadow-gray-400 dark:shadow-gray-500 rounded-full lg:text-sm xs:text-xs"
                      >
                        Node JS
                      </li>
                      <li 
                        className="text-sm p-2 border-2 dark:border-gray-800 shadow-md shadow-gray-400 dark:shadow-gray-500 rounded-full lg:text-sm xs:text-xs"
                      >
                        Express
                      </li>
                      <li 
                        className="text-sm p-2 border-2  dark:border-gray-800 shadow-md shadow-gray-400 dark:shadow-gray-500 rounded-full lg:text-sm xs:text-xs"
                      >
                        CSS
                      </li>
                      <li 
                        className="text-sm p-2 border-2  dark:border-gray-800 shadow-md shadow-gray-400 dark:shadow-gray-500 rounded-full lg:text-sm xs:text-xs"
                      >
                        MongoDB
                      </li>
                    </div>
                  </div>
                </motion.div>          
                  <motion.div 
                    initial={{ opacity: 0, y:40 }}
                    animate={{opacity: 1, y: 50, }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="border-2 rounded-xl dark:border-gray-700 shadow-lg shadow-gray-400 dark:shadow-gray-600 flex  md:flex-row lg:flex-row xs:flex-col lg:mt- xs:mt-8"
                  >
                  <div 
                    className="xs:border-b-2 lg:border-b-0 lg:border-r-2 md:border-r-2 border-gray-300 flex justify-center"
                  >
                      <img 
                        className="lg:w-72 xs:w-44 " 
                        src={Works} 
                        alt="Works" 
                      />
                  </div>
                    <div 
                      className="lg:ml-4 flex flex-col lg:gap-2 xs:text-sm"
                    >
                      <h1 
                        className="p-2 lg:text-2xl xs:text-sm"
                      >
                        TICKETS View
                      </h1>
                      <p 
                        className="p-2 lg:text-sm xs:text-xs"
                      >
                        Ticket viewing and availability
                      </p> 
                    <div 
                      className="flex lg:flex-row flex-wrap gap-2 p-2 list-none"
                    >
                      <li 
                        className="text-sm p-2 border-2 dark:border-gray-800 shadow-md shadow-gray-400 dark:shadow-gray-500  rounded-full lg:text-sm xs:text-xs"
                      >
                        Next JS
                      </li>
                      <li 
                        className="text-sm p-2 border-2 dark:border-gray-800 shadow-md shadow-gray-400 dark:shadow-gray-500 rounded-full lg:text-sm xs:text-xs"
                      >
                        CSS
                      </li>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="w-full h-44">
          </div>
        <Footer />
      </div>
    </div>
  )
}

export default Work
