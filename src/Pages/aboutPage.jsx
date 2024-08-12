import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import profile from "../assets/profile.jpg"
import mui from "../assets/mui.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import next from "../assets/next.png"
import nodeexpress from "../assets/nodeexpress.png"
import framer from "../assets/framer.png"
import tailwind from "../assets/tailwind.png"
import react from "../assets/react.svg"
import monggo from "../assets/monggo.png"
import { motion } from "framer-motion"

const About = () => {

  const events = [
    {
      year: '2021 - 2024',
      title: '4th year BS-IT',
      description: `Current 4th year in ICCT colleges and pursuing a bachelor of science in information technology (BS-IT)`,
    },
    {
      year: '2019 - 2020',
      title: 'Grade 11-12 TVL-ICT',
      description: `I graduated with honors from the Arellano University Andres Bonifacio campus.`,
    },
    {
      year: '2015 - 2019',
      title: 'Grade 7-10',
      description: `I graduated from Nagpayong High School.`,
    },
    {
      year: '2009 - 2015',
      title: 'Grade 1-6',
      description: `I graduated from Nagpayong Elementary School.`,
    },
  ];

  return (
    <div>
       <div 
          className=" text-blckgray dark:text-whitetext bg-whiteez dark:bg-blckgray font-poppins -z-10"
       >
         <Navbar />
           <div 
              className="w-full h-screen flex items-center justify-center"
           >
            <div 
              className="p-3 absolute xs:-bottom-64 sm:-bottom-28 md:-bottom-12 lg:-bottom-2 font-bold"
            >
              <motion.div 
                initial={{ opacity: 0, y:40 }}
                animate={{opacity: 1, y: 50, }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex justify-center p-2"
              >
                <img 
                   className="lg:w-52 rounded-full xs:w-36 p-2"
                   src={profile} 
                   alt="profile" 
                />
              </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y:40 }}
                    animate={{opacity: 1, y: 50, }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                     
                     <h1 
                        className="p-2 lg:text-3xl mt-4"
                     >
                        A little about on me
                    </h1>
                    <p 
                      className="lg:text-sm xs:text-xs mx-auto font-normal p-2"
                    >
                       I am 21 years old and current 4th-year BS-IT Student in ICCT Colleges.<br/>
                       I have a knowledge of making web application. My primary tool for web <br/> 
                       development is React JS and that i use to create interactive and responsive <br/> 
                       user interface. I'm excited to learn more about advanced subjects like state <br/> 
                       management, performance optimization, and full-stack development as I pursue <br/> 
                       my education. I'm also keen to expand my knowledge of React. My objective is <br/> 
                       to keep learning new things
                    </p>
                  </motion.div>   
                      <motion.div
                          initial={{ opacity: 0, y:40 }}
                          animate={{opacity: 1, y: 50, }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                      >
                          <h1 
                            className="p-2 lg:text-3xl mt-4"
                          >
                            Technology Skills
                          </h1>
                          <div 
                            className="p-2 list-none flex flex-row flex-wrap lg:gap-4 xs:gap-2"
                          >
                          <div 
                            className="text-center xs:text-xs"
                          >
                            <li>
                               <img 
                                  className="lg:w-20 xs:w-16 p-2"
                                  src={html} 
                                  alt="logo" 
                                />
                            </li>
                            <p>
                              Html
                            </p>
                          </div>
                             <div 
                                className="text-center xs:text-xs"
                             >
                              <li>
                                 <img 
                                   className="lg:w-20 xs:w-16 p-2"
                                   src={css} 
                                   alt="css" 
                                 />
                              </li>
                            <p>
                              Css
                            </p>
                          </div>
                             <div 
                                className="text-center xs:text-xs"
                             >
                              <li>
                                 <img 
                                   className="lg:w-20 xs:w-16 p-2"
                                   src={javascript} 
                                   alt="javascript" 
                                 />
                              </li>
                            <p>Javascript</p>
                          </div>
                            <div 
                              className="text-center xs:text-xs"
                            >
                              <li>
                                <img 
                                  className="lg:w-20 p-2"
                                  src={react} 
                                  alt="react" 
                                />
                              </li>
                            <p>React JS</p>
                          </div>
                            <div 
                              className="text-center xs:text-xs"
                            >
                              <li>
                                <img 
                                  className="lg:w-20 xs:w-16 p-2"
                                  src={next} 
                                  alt="next" 
                                />
                              </li>
                            <p>Next JS</p>
                          </div>
                            <div 
                              className="text-center xs:text-xs"
                            >
                              <li>
                                <img 
                                  className="lg:w-28 xs:w-16 p-2"
                                  src={nodeexpress} 
                                  alt="nodeexpress" 
                                />
                              </li>
                            <p>Node & Express JS</p>
                          </div>
                            <div 
                              className="text-center xs:text-xs"
                            >
                              <li>
                                <img 
                                  className="lg:w-20  xs:w-16 p-2"
                                  src={tailwind} 
                                  alt="tailwind" 
                                />
                              </li>
                            <p>Tailwind Css</p>
                          </div>
                            <div 
                              className="text-center xs:text-xs"
                            >
                              <li>
                                <img 
                                  className="lg:w-20 p-2 xs:w-16 rounded-full"
                                  src={mui} 
                                  alt="mui" 
                                />
                              </li>
                            <p>Material Ui</p>
                          </div>
                            <div 
                              className="text-center xs:text-xs"
                            >
                              <li>
                                <img 
                                  className="lg:w-20 p-2 xs:w-16 rounded-full"
                                  src={framer} 
                                  alt="framer" 
                                />
                              </li>
                            <p>Framer Motion</p>
                          </div>
                          <div 
                              className="text-center xs:text-xs"
                            >
                              <li>
                                <img 
                                  className="lg:w-20 p-2 xs:w-16 rounded-full"
                                  src={monggo} 
                                  alt="monggo" 
                                />
                              </li>
                            <p>MonggoDB</p>
                          </div>
                        </div>
                    </motion.div>

              </div>
          </div>
          <div 
            className="w-full h-screen"
          >
              <motion.div 
                 initial={{ opacity: 0, y:40 }}
                 animate={{opacity: 1, y: 50, }}
                 transition={{ duration: 0.8, delay: 0.5 }}
                 className="flex justify-center lg:mt-24 xs:mt-72 sm:mt-44 md:mt-28 p-4"
              >
                 <h1 
                    className="lg:text-3xl xs:text-xl font-bold"
                 >
                    Education background
                 </h1>
              </motion.div>
            <motion.div
               initial={{ opacity: 0, y:40 }}
               animate={{opacity: 1, y: 50, }}
               transition={{ duration: 0.8, delay: 0.5 }}  
               className="relative max-w-md mx-auto mt-8"
            >
               <div 
                  className="absolute border-l-2 border-blue-600 dark:text-blckgray h-full left-4"
               >
               </div>
                  {events.map((event, index) => (
               <div 
                  key={index} 
                  className="relative mb-8 pl-12"
               >
               <div 
                  className="absolute lg:left-0 lg:top-0 lg:w-8 lg:h-8 xs:w-5 xs:h-5 xs:left-2 sm:top-3 bg-blue-600 dark:bg-blue-600 rounded-full border-3 "
               >
               </div>
                  <h3 
                    className="lg:text-lg xs:text-sm font-bold"
                  >
                    {event.year}
                  </h3>
                  <h4 
                    className="lg:text-lg xs:text-sm font-bold text-blckgray dark:text-whitetext "
                  >
                    {event.title}
                  </h4>
                  <p 
                    className="dark:text-whitetext text-blckgray text-sm xs:text-xs"
                  >
                    {event.description}
                  </p>
               </div>
                   ))}
              </motion.div>
          </div>
            <div 
               className="w-full h-24"
            >
            </div>
        <Footer />
      </div>
    </div>
  )
}

export default About
