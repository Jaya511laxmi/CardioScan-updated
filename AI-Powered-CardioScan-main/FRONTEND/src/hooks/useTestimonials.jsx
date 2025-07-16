import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useTestimonials = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [testimonials, setTestimonials] = useState([]);

    const addTestimonials = async (comment) => {
        setLoading(true);
        try {
            const response = await fetch("http://localhost:5000/api/testimonials/", {
                method: "POST",
                headers: { "Content-Type": "application/json", auth: localStorage.getItem('auth') },
                body: JSON.stringify({
                    comment: comment
                }),
            });

            const data = await response.json();
            console.log("data", data)
            if (data.message) {
                setSubmitted(true)
                return toast.success(data.message);

                //  return alert(data.error)
            } else {
                return toast.error(data.error)
            }
        } catch (error) {
            console.log("error", error)
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };


    const getTestimonials = async () => {
        setLoading(true);
        try {
            const response = await fetch("http://localhost:5000/api/testimonials/", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            const data = await response.json();
            console.log("data", data)
            setTestimonials(data.getTestinmonials)
            //   if(data.message){
            //     setSubmitted(true)
            //     return toast.success(data.message);

            //   //  return alert(data.error)
            //   }else{
            //     return toast.error(data.error)
            //   }
        } catch (error) {
            console.log("error", error)
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return { loading, addTestimonials, submitted, getTestimonials,testimonials };
};

export default useTestimonials;
