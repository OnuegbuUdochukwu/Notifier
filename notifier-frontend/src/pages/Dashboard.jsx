import React from 'react'
import {useState, useCallback, useEffect} from 'react'
import logo from "../assets/icons/Vector.png";
import { LiaBirthdayCakeSolid } from "react-icons/lia"
import { MdOutlineCelebration } from "react-icons/md";
import ReminderSection from '../components/ReminderSection';
import Filter from "../components/Filter"
import ActivitySection from '@/components/ActivitySection';
import axios from 'axios';

const Dashboard = () => {
    const [isMenu,setIsMenu] = useState(false);
    const [birthdays, setBirthdays] = useState([]);

    const handleMenu = ()=>{
            setIsMenu(!isMenu)
    }

    const fetchBirthdays = useCallback(async () => {
        try {
          const { data } = await axios.get("http://localhost:5000/api/birthday/", {
            withCredentials: true,
          });
          setBirthdays(data.birthdayAll || []);
        } catch (error) {
          console.error("Fetch error:", error);
          // alert("Error loading birthdays");
        } 
      },[]);
    
      useEffect(() => {
        fetchBirthdays();
      }, [fetchBirthdays]);

  return (
    <div  className="h-full w-full relative bg-gradient-to-r from-white to-[#F8F8F8] flex  justify-center flex-row gap-24 p-5  " >
        <div className='flex flex-col  h-full '>
            <div className='flex gap-1.5 mb-10 justify-between items-center'>
                <div className='flex gap-2'>
                    <img src={logo} alt="notifier logo" className="w-7 h-8 aspect-auto " />
                    <h1 className="text-3xl text-black">Notifier</h1>

                </div>
                <div onClick={handleMenu} className='space-y-1 md:hidden'>
               <div className={`w-5 h-1 rounded-full bg-black ${isMenu ? "rotate-45 transition-all": ""}`}></div>
               <div className={`w-5 h-1 rounded-full bg-black ${isMenu? "hidden":""}`} ></div>
               <div className={`w-5 h-1 rounded-full bg-black ${isMenu ? "-rotate-45 -translate-y-2 transition-all":""}`}></div>
                </div>
               
            </div>
            <div className=' flex flex-col justify-center max-w-[570px] bg-[#B4E5F8] rounded-3xl py-3 px-5 w-full mb-8'>
                <h1 className='text-3xl text-[#09455D] mb-4'>Birthday Planner</h1>
                <div className=' flex flex-row gap-1'>
                    <p className='text-sm text-[#09455D]' >Never miss out on the birthday of your friends & family!</p>
                    <LiaBirthdayCakeSolid className='text-red-400 text-lg' />
                    <MdOutlineCelebration className='text-purple-400 text-lg'/>
                </div>
                <p className='text-sm text-[#09455D]'>Get reminded days prior and plan ahead!</p>
            </div>
            <div className='flex flex-row justify-between items-center max-w-[730px] mb-3'>
                <h2 className='text-2xl  text-[#09455D]'>My reminders</h2>
                <Filter />
            </div>
            <ReminderSection fetchBirthdays={fetchBirthdays} birthdays={birthdays}/>
        </div>
        {
           <div  className={`fixed top-0 left-0 h-screen  bg-white shadow-lg w-[300px] transform transition-transform duration-300 ease-in-out ${
            isMenu ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}>
                <ActivitySection fetchBirthdays={fetchBirthdays} birthdays={birthdays} />
           </div>
        }
        <div className= "hidden md:block">
        <ActivitySection fetchBirthdays={fetchBirthdays} birthdays={birthdays}/>
        </div>
       
    </div>
  )
}

export default Dashboard