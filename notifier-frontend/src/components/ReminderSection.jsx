import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import ReminderCard from './ReminderCard';
import EmptyReminder from './EmptyReminder';

const ReminderSection = ({fetchBirthdays, birthdays}) => {
  
  return (
    <section className="grid grid-cols-1 justify-items-center sm:grid-cols-2 gap-5">
          <EmptyReminder  onUpdate={fetchBirthdays} />
          {birthdays.map((person) => (
            <ReminderCard
              key={person._id}
              birthday={person}
              onUpdate={fetchBirthdays}
            />
          ))}
    </section>
  );
};

export default ReminderSection;
