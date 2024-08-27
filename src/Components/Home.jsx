import React,{useContext, useState} from "react";
import UserContext from "../Context/UserContext";
import About from "./About";

const Home = () => {
    let [test , setTest] = useState('');;
    let {name , setname} = useContext(UserContext);
    let handelinput =(e)=>{
        setTest (e.target.value)
    }
    let handelsubmit= () => {
        setname(test)
    }
  return (
    <div className=" h-screen flex justify-center items-center">

    <div className="w-[400px] h-[400px] bg-gradient-to-r from-blue-400 to-red-600/70 ... text-center rounded-[20px] " >
      <div className="text-center ">

        <input onChange={handelinput} className=' w-[300px] h-[50px] border  border-black  rounded-[30px] text-center inline-block mt-6' type="text"  />
        
      </div>
        <button className=" w-[100px] h-[30px] mt-6 rounded-[10px] bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...  " onClick={handelsubmit}> Submit</button>
    <div className=""><About/></div>
    </div>
    </div>
  );
};

export default Home;