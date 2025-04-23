import React from 'react'
import data from '@/constant'
import { GoPulse } from "react-icons/go";
import ActivityCard from './ActivityCard';

const ActivitySection = () => {
  return (
    <section className='w-1/4 flex flex-col mt-16 mr-1 bg-[F8F8F8] p-4 rounded-lg gap-6 shadow-md'>
        <div className='flex items-center gap-4'>
            <img
            src={data[0].pic}
            alt='profile'
            className='w-[45px] h-[45px] rounded-full object-cover'
            />
            <h3 className='text-lg text-[#09455D] font-medium'>
            {`${data[0].fName} ${data[0].lName}`}
            </h3>
        </div>

        <div className='flex items-center gap-3'>
            <GoPulse className='text-[#09455D] text-xl' />
            <h3 className='text-2xl text-[#09455D]'>Recent activity</h3>
        </div>
        <div className="flex flex-col gap-2">
            {data.map((person) => (
            <ActivityCard
                key={person.id}
                birthday={person}
            />
            ))}
        </div>
        <p className="text-sm text-gray-400 mt-3 mx-auto">More activities will show up here</p>
    </section>

  )
}

export default ActivitySection