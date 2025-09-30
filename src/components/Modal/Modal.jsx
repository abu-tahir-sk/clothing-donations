import { AnimatePresence, motion } from "framer-motion";

import { Check } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Modal = ({  setIsOpen }) => {
  return (
    <div className=" flex justify-center items-center bg-gray-100">
      <Helmet>
        <title>
          Success donate || Cloth For All 
        </title>
      </Helmet>
      <AnimatePresence>
       
          <motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
             <motion.div
              className="bg-white rounded-2xl p-6 shadow-xl w-96 flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
            <motion.div
               initial={{ rotate: 0, scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`p-4  rounded-full mb-4 border-4 border-green-100`}
            >
              <Check size={48} className="text-green-500"></Check>
            </motion.div>
             <h2 className="text-2xl font-bold mb-2">Thank you !</h2>
              <p className="text-gray-600 mb-6 text-center">
                ✅ We will reach your destination soon
              </p>
            <button className="btn rounded-md bg-sky-500 font-bold text-white" onClick={() => setIsOpen(false)}>Ok</button>
            </motion.div>
          </motion.div>
       
      </AnimatePresence>
    </div>
  );
};

export default Modal;
