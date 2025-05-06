import React, { useMemo } from 'react';
import axios from 'axios';
import ReminderCard from './ReminderCard';
import EmptyReminder from './EmptyReminder';
import useFilterStore from '@/hooks/useFilterStore';


const ReminderSection = ({fetchBirthdays, birthdays}) => {
    const { filter } = useFilterStore();

    const sortedBirthdays = useMemo(() => {
        if (!birthdays || birthdays.length === 0) return [];

        const sorted = [...birthdays];

        switch (filter) {
            case 'month':
                return sorted.sort((a, b) => {
                    const monthA = new Date(a.birthday).getMonth();
                    const monthB = new Date(b.birthday).getMonth();
                    return monthA - monthB;
                });

            case 'name':
                return sorted.sort((a, b) =>
                    a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase())
                );

            case 'recorded':
            default:
                return sorted.sort((a, b) =>
                    new Date(a.createdAt) - new Date(b.createdAt)
                );
        }
    }, [birthdays, filter]);

  
  return (
    <section className="grid grid-cols-1 justify-items-center sm:grid-cols-2 gap-5">
          <EmptyReminder  onUpdate={fetchBirthdays} />
          {sortedBirthdays.map((person) => (
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
