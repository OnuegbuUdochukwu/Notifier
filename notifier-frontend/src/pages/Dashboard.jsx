import React from 'react'
import logo from "../assets/icons/Vector.png";
import { LiaBirthdayCakeSolid } from "react-icons/lia"
import { MdOutlineCelebration } from "react-icons/md";
import ReminderSection from '../components/ReminderSection';
import Filter from "../components/Filter"

const Dashboard = () => {
  return (
    <div  className="h-full w-full bg-gradient-to-r from-white to-[#F8F8F8] flex  justify-center flex-row gap-10 pl-24 pr-14 py-10  " >
        <div className='flex flex-col w-[75%] h-full '>
            <div className='flex gap-1.5 mb-10 '>
                <img src={logo} alt="notifier logo" className="w-7 h-8 aspect-auto " />
                <h1 className="text-3xl text-black">Notifier</h1>
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
            <ReminderSection />
        </div>
        <div className='flex flex-row  w-[25%] h-full'>
            Hey
        </div>
    </div>
  )
}

export default Dashboard