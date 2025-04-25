import React from 'react'
import data from '../constant.js'
import ReminderCard from './ReminderCard.jsx'
import EmptyReminder from './EmptyReminder.jsx'

const ReminderSection = () => {
  return (
   <section className="grid grid-cols-1 justify-items-center sm:grid-cols-2  gap-5">
        <EmptyReminder />
        {data.map((person) => (
            <ReminderCard id={person.id} birthday={person}/>
        ))}
    </section>
  )
}

export default ReminderSection