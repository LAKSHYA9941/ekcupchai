// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Fixed incorrect import
// import { motion } from "framer-motion";
// import "./getstarted.css";

// const scrollToSection = (sectionId: string) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };


// const GetStarted: React.FC = () => {
//     const [formData, setFormData] = useState({ fullName: "", email: "", mobile: "" });

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         alert("Sign-up successful!");
//     };

//     return (
//         <motion.div 
//             className="signup-container" 
//             initial={{ opacity: 0, y: -50 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             transition={{ duration: 0.5 }}
//         >
//             <h2 className="signup-title">Sign Up</h2>
//             <form onSubmit={handleSubmit} className="signup-form">
//                 <input 
//                     type="text" 
//                     name="fullName" 
//                     placeholder="Full Name" 
//                     value={formData.fullName} 
//                     onChange={handleChange} 
//                     className="signup-input"
//                     required
//                 />
//                 <input 
//                     type="email" 
//                     name="email" 
//                     placeholder="Email" 
//                     value={formData.email} 
//                     onChange={handleChange} 
//                     className="signup-input"
//                     required
//                 />
//                 <input 
//                     type="tel" 
//                     name="mobile" 
//                     placeholder="Mobile Number" 
//                     value={formData.mobile} 
//                     onChange={handleChange} 
//                     className="signup-input"
//                     required
//                 />
//                 <motion.button 
//                     type="submit" 
//                     className="signup-button"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                 >
//                     Sign Up
//                 </motion.button>
//             </form>
            
//             <p className="signup-footer">
//                 Already have an account? <Link to=' ' className="signup-link" onClick={() => scrollToSection("landing")}>Go to Home</Link>
//             </p>
//         </motion.div>
//     );
// };

// export default GetStarted;


//===================================================2nd==================================
import React, { useState } from "react";
import { motion } from "framer-motion";

const GetStarted = () => {
  const [formData, setFormData] = useState({ fullName: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Sign-up successful!");
  };

  return (
    <motion.div className="w-full h-screen bg-[url('/guysiptea2.jpeg')] bg-center bg-no-repeat bg-[length:100%_100%]
 p-10 rounded-lg shadow-xl backdrop-blur-md"

      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-white">Sign Up to Join the Chai Lovers! ☕</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} className="block w-40% p-2 mb-4 rounded-md" required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="block w-40% p-2 mb-4 rounded-md" required />
        <motion.button type="submit" className="bg-orange-800 text-white py-2 px-4 rounded-md"
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        >
          Sign Up
        </motion.button>
      </form>
    </motion.div>
  );
};

export default GetStarted;
//w-full h-screen bg-orange-200 p-10 rounded-lg shadow-xl backdrop-blur-md