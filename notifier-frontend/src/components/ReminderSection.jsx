import React from 'react'
import data from '../constant.js'
import ReminderCard from './ReminderCard.jsx'
import EmptyReminder from './EmptyReminder.jsx'

const ReminderSection = () => {
  return (
   <section className="grid grid-cols-3 gap-10 justify-center mt-6 w-full h-full  px-4 pb-4">
        <EmptyReminder />
        {data.map((person) => (
            <ReminderCard id={person.id} birthday={person}/>
        ))}
    </section>
  )
}

export default ReminderSection