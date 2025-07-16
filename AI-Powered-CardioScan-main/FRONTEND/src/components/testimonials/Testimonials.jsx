import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useTestimonials from '../../hooks/useTestimonials';

const Testimonial = () => {

  const { getTestimonials, testimonials } = useTestimonials()

  useEffect(() => {
    getTestimonials()
  }, [])

  // const testimonials = [
  //   {
  //     id: 1,
  //     name: 'Mr. Anurag',
  //     text: 'CardioScan is a game-changer in early heart disease detection. It helps me assess patients quickly!',
  //     profession: 'Doctor',
  //     imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  //   },
  //   {
  //     id: 2,
  //     name: 'Mrs. Shweta',
  //     text: 'I uploaded my ECG and got instant results—fast and stress-free! CardioScan gave me peace of mind.',
  //     profession: 'Patient',
  //     imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg', 
  //   },
  //   {
  //     id: 3,
  //     name: 'Mr. Suresh',
  //     text: 'The AI-powered ECG analysis is impressively precise. A reliable tool for monitoring heart health with ease!',
  //     profession: 'Cardiologist',
  //     imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg', 
  //   },
  //   {
  //     id: 4,
  //     name: 'Mrs. Saroj',
  //     text: 'This platform helped me detect an abnormality early. Thanks to CardioScan, I got timely medical attention!',
  //     profession: 'Patient',
  //     imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg', 
  //   },
  // ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display three testimonials at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Display two testimonials at a time on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Display one testimonial at a time on small screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Display one testimonial at a time on very small screens
        },
      },
    ],
  };

  return (
    <div className="w-full md:w-3/4 mx-auto mb-44 overflow-hidden">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial._id} className="px-4">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col items-center">
              <img src={testimonial?.user?.profilePic} alt={testimonial.user?.username} className="w-20 h-20 rounded-full mb-4" />


              {/* <p className="text-lg mb-4">{testimonial?.comment}</p> */}

              <div className="max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 p-2">
                <p className="text-lg">{testimonial.comment}</p>
              </div>


              <p className="text-lg font-semibold text-red-900">{testimonial.user?.username}</p>
              <p className="text-red-900">{testimonial?.user?.profession}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;

