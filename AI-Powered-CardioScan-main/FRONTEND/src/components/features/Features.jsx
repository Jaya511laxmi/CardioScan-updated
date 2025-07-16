import React from 'react'

function Features() {
  return (
    <div>
       <div className="h-screen overflow-hidden">
              <h1 className="bg-blue-950 p-4 text-center text-white m-8 text-xl md:text-2xl rounded-lg font-bold ">
                      Why CardioScan ?
                    </h1>
                <div className='flex  flex-col justify-center items-center'>
                    <img src="h4.jpg" className='h-96 mb-5' alt="" />
                    <p className='p-4 m-8 font-semibold text-center text-base md:text-lg '>CardioScan offers a fast, accurate, and AI-powered ECG analysis to help detect heart abnormalities early. With just a simple image upload, you get instant predictions-normal or abnormal-allowing you to take proactive steps for your heart health. Designed for ease of use and peace of mind, CardioScan empowers you with timely insights, ensuring better heart care anytime, anywhere. ❤️</p>
                </div>
              </div>
    </div>
  )
}

export default Features
