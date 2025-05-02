import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import ReminderCard from './ReminderCard';
import EmptyReminder from './EmptyReminder';

const ReminderSection = () => {
  const [birthdays, setBirthdays] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBirthdays = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("http://localhost:5000/api/birthday/", {
        withCredentials: true,
      });
      setBirthdays(data.birthdayAll || []);
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Error loading birthdays");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBirthdays();
  }, [fetchBirthdays]);

  return (
    <section className="grid grid-cols-1 justify-items-center sm:grid-cols-2 gap-5">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <EmptyReminder  onUpdate={fetchBirthdays} />
          {birthdays.map((person) => (
            <ReminderCard
              key={person._id}
              birthday={person}
              onUpdate={fetchBirthdays}
            />
          ))}
        </>
      )}
    </section>
  );
};

export default ReminderSection;
