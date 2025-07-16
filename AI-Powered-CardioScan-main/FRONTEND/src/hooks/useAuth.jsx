import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const signup = async (credentials) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          username:credentials.name,
          email:credentials.email, 
          password:credentials.password, 
          profession:credentials.profession,
          gender:credentials.gender
        }),
      });

      const data = await response.json();
      console.log("data",data)
      if(data.error){
        return toast.error(data.error);
      //  return alert(data.error)
      }

      if (data.token) {
        localStorage.setItem("auth", data.token);
        toast.success(data.message);
        navigate("/");
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };


  const login = async (credentials) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          // username:credentials.username,
          email:credentials.email, 
          password:credentials.password, 
          // profession:credentials.profession 
        }),
      });

      const data = await response.json();
      console.log("data",data)
      if(data.error){
        return toast.error(data.error);
      //  return alert(data.error)
      }

      if (data.token) {
        localStorage.setItem("auth", data.token);
        toast.success(data.message);
        navigate("/");
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading,login };
};

export default useAuth;
