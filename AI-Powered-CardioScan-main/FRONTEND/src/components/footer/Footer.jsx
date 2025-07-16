import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  
  return (
    <>
      <footer className='text-center bg-blue-950 text-white p-5'>
        <div className='flex flex-col justify-center items-center'>

            <h1 className='text-2xl font-bold m-3 '>CardioScan</h1>
            <p>CardioScan is your AI-powered heart health companion, providing fast and accurate ECG analysis for early detection and peace of mind. Upload your ECG, get instant results, and take charge of your heart’s well-being—anytime, anywhere.</p>
        </div>
        <div className="container  text-center">
      {/* <img src="heartp.png" className='w-full h-48  m-5' alt="" /> */}
     
          
          {/* <p className="mt-5 text-sm">Contact: tanishasaxena2412@gmail.com | Phone: 9997377223</p> */}
        </div>
        
      </footer>
      <div className='bg-red-950 text-center  text-white p-3'>

<p>&copy; 2025 CardioScan. All rights reserved.</p>
<p>Designed and developed by "Group 13 of SRMSCET CSE Final Year"</p>
</div>
    </>
  );
};

export default Footer;
