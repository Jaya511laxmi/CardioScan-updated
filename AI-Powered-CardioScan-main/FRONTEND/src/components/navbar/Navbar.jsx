
// import React, { useState, useEffect } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { PiNotepadBold } from 'react-icons/pi';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { FaHandHoldingHeart } from "react-icons/fa";
// // import Tippy from '@tippyjs/react';
// // import 'tippy.js/dist/tippy.css';
// import toast from 'react-hot-toast';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     // Check if the user is authenticated
// //     const checkAuth = () => {
// //       const client = localStorage.getItem('client');
// //       const manager = localStorage.getItem('manager');
// //       setIsAuthenticated(!!client || !!manager); // set true if either client or manager is present
// //     };

// //     checkAuth();

// //     // Listen for storage changes to update authentication status
// //     const handleStorageChange = () => {
// //       checkAuth();
// //     };

// //     window.addEventListener('storage', handleStorageChange);

// //     return () => {
// //       window.removeEventListener('storage', handleStorageChange);
// //     };
// //   }, []);

//   const toggleNav = () => {
//     setIsOpen(!isOpen);
//   };

// //   const handleLogout = () => {
// //     localStorage.clear();
// //     toast.error('Logged out');
// //     setIsAuthenticated(false);
// //     navigate('/');
// //   };

//   return (
//     <nav className="w-full flex flex-wrap justify-between items-center p-7 top-0 bg-blue-950">
//         <Link to="/">
//           <div className="flex">
//             <FaHandHoldingHeart
//  className="text-white text-3xl" />
//             <h2 className="text-white font-bold ml-2 text-xl tracking-wider">CardioScan</h2>
//           </div>
//         </Link>
//       <button
//         onClick={toggleNav}
//         className="text-white md:hidden block focus:outline-none"
//       >
//         {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//       </button>
//       <div
//         className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto`}
//       >
//         <ul className="text-white font-semibold md:flex flex-col md:flex-row gap-5 text-[18px] w-full md:w-auto">
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `${isActive ? 'underline text-white' : 'text-slate-300'} hover:underline hover:border-white cursor-pointer`
//               }
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 `${isActive ? 'underline text-white' : 'text-slate-300'} hover:underline hover:border-white cursor-pointer`
//               }
//             >
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 `${isActive ? 'underline text-white' : 'text-slate-300'} hover:underline hover:border-white cursor-pointer`
//               }
//             >
//               Add-Testimonial
//             </NavLink>
//           </li>
//           <li>
           
//           </li>
//           <li>
//             {/* {!isAuthenticated ? (
//               <NavLink to="/loginsignup" className="bg-pink-800 p-2 rounded-lg hover:bg-pink-500 hover:text-black">
//                 Signin/Signup
//               </NavLink>
//             ) : (
//               <button onClick={handleLogout} className="bg-pink-800 p-2 rounded-lg hover:bg-pink-500 hover:text-black">
//                 Logout
//               </button>
//             )} */}
           
//               <NavLink to="/loginsignup" className="bg-red-800 p-2 pl-4 pr-4 border-2 border-white rounded-lg hover:bg-red-500 hover:text-white">
//                 {localStorage.getItem('auth')?`Login`:'Logout'}
//               </NavLink>
           
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;






import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaHandHoldingHeart } from "react-icons/fa";
import toast from 'react-hot-toast';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check authentication status
  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('auth'));
  }, [localStorage.getItem('auth')]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    toast.error('Logged out');
    // navigate('/loginsignup'); // Redirect to login
  };

  return (
    <nav className="w-full flex flex-wrap justify-between items-center p-7 top-0 bg-blue-950">
      <Link to="/">
        <div className="flex">
          <FaHandHoldingHeart className="text-white text-3xl" />
          <h2 className="text-white font-bold ml-2 text-xl tracking-wider">CardioScan</h2>
        </div>
      </Link>

      <button onClick={toggleNav} className="text-white md:hidden block focus:outline-none">
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto`}>
        <ul className="text-white font-semibold md:flex flex-col md:flex-row gap-5 text-[18px] w-full md:w-auto">
          <li>
            <NavLink to="/" className={({ isActive }) => `${isActive ? 'underline text-white' : 'text-slate-300'} hover:underline hover:border-white cursor-pointer`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `${isActive ? 'underline text-white' : 'text-slate-300'} hover:underline hover:border-white cursor-pointer`}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `${isActive ? 'underline text-white' : 'text-slate-300'} hover:underline hover:border-white cursor-pointer`}>
              Add-Testimonial
            </NavLink>
          </li>
          <li>
            {isAuthenticated ? (
              <button onClick={handleLogout} className="bg-red-800 p-2 pl-4 pr-4 border-2 border-white rounded-lg hover:bg-red-500 hover:text-white">
                Logout
              </button>
            ) : (
              <NavLink to="/loginsignup" className="bg-red-800 p-2 pl-4 pr-4 border-2 border-white rounded-lg hover:bg-red-500 hover:text-white">
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


