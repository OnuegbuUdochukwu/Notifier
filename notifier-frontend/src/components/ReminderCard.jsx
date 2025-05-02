import React from 'react'
import { MdDeleteOutline } from "react-icons/md";

const ReminderCard = ({birthday}) => {
    const date = birthday.date;
    const msPerDay = 1000 * 60 * 60 * 24;
    const daysLeft = Math.ceil((new Date(birthday.date) - new Date()) / msPerDay);    
    const readableDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric'
    });

  return (
    <div className =" w-[175px]  flex flex-col rounded-2xl justify-center items-center  shadow-xl bg-white  h-[195px] ">
        <img src={birthday.pic} className='w-[80px] h-[80px] aspect-auto rounded-full mt-1 mb-4' />
        <h3 className='text-lg text-[#09455D]'>{ ` ${birthday.fName} ${birthday.lName}`}</h3>
        <p className='text-sm text-[#09455D]'>
            { birthday.age ?
                `Turns ${birthday.age} on ${readableDate}`:
                `${readableDate}`}
        </p>
        <p className='text-base text-[#AAAAAA]' >{`${daysLeft} days left`}</p>
        <div className='flex justify-end items-end w-full pr-2'>
            <MdDeleteOutline className="text-xl text-red-400 cursor-pointer" />
        </div>
    </div>
  )
}

export default ReminderCard