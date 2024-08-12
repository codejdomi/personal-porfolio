import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { motion } from "framer-motion"

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "09e0b86e-c4b3-44e8-a472-cadfbc7cc6c4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <div className=" text-blckgray dark:text-whitetext bg-whiteez dark:bg-blckgray font-poppins -z-10">
        <Navbar />
          <div className="w-full h-screen flex items-center justify-center">
              <motion.form
                  initial={{ opacity: 0, y:40 }}
                  animate={{opacity: 1, y: 50, }}
                  transition={{ duration: 0.8, delay: 0.5 }} 
                  onSubmit={onSubmit} 
                  className="lg:w-2/5 sm:w-9/12 md:w-2/5 xs:w-11/12 p-4 bg-gray-300 dark:bg-gray-700 rounded-lg shadow-md dark:shadow-gray-200 shadow-gray-700 m-4 flex flex-col -3 absolute xs:bottom-12 sm:bottom-12 md:bottom-12 lg:bottom-36 ">
                  <h1 className="lg:text-2xl p-2 text-center font-bold">CONTACT FORM</h1>
                  <div className="flex flex-row items-center">
                      <label className="lg:text-lg p-2">Name</label>
                      <input className="lg:p-2 xs:p-1 rounded-lg lg:w-3/5 xs:w-3/4" type="text" name="name" placeholder="Enter your name" required />
                  </div>
                  <div className="flex flex-row items-center mt-2">
                      <label className="lg:text-lg p-2 ">Email</label>
                      <input className="relative left-2 lg:p-2 xs:p-1 rounded-lg lg:w-3/5 xs:w-3/4" type="text" name="email" placeholder="Enter your email" required />
                  </div>
                  <div className="flex flex-col">
                      <label className="lg:text-lg p-2">Message</label>
                      <textarea className="p-2 m-2 w-full h-52" name="message" ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button className="border-2 p-2 w-20 rounded-2xl bg-blckgray text-whitetext dark:bg-whiteez dark:text-blckgray hover:bg-blue-700 dark:hover:bg-blue-700 dark:hover:text-whitetext" type="submit">Send</button>
                  </div>
              </motion.form>
          </div>
        <Footer />
    </div>
    </div>
  )
}

export default Contact