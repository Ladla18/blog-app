import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function App() {
  const [error,setError] = useState("")
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
   try{
    const response = await axios.post(
      "https://blog-backend-27u2.onrender.com/adminlogin",
      data
    );
    if(response.data.message == "success"){
      navigate("/admin");
    }else{
      navigate("/adminlogin")
      setError("")
    }
   }catch(e){
    console.log(e);
    setError("Wrong Credentials")
   }
  };

  console.log(watch("username")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="" onSubmit={handleSubmit(onSubmit)}>
    <div className="form-container flex mt-10 flex-col items-center gap-10">
      <p className="text-center bg-red-700 text-white w-50">{error}</p>
      <div>
        <label>Username : </label>
        <input className="border p-2 mx-5 border-black" placeholder="Enter Your Username" {...register("username", { required: true })} />

      </div>
      <div>
        <label>Password : </label>
        <input  className="border p-2 mx-5 border-black" placeholder="Enter Your Password" type="password" {...register("password", { required: true })} />

      </div>
      <div className="w-2/6"> 
        <input type="submit" value="Login" className="bg-black text-white px-10 mb-10 w-full" />


      </div>
    </div>

     
    </form>
  );
}
