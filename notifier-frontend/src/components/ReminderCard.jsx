import React from 'react';
import axios from 'axios';
import { MdDeleteOutline } from 'react-icons/md';

const ReminderCard = ({ birthday, onUpdate }) => {
  const birthdayDate = new Date(birthday.birthday);
  const today = new Date();


  today.setHours(0, 0, 0, 0);
  birthdayDate.setFullYear(today.getFullYear());

  
  if (birthdayDate < today) {
    birthdayDate.setFullYear(today.getFullYear() + 1);
  }

  const msPerDay = 1000 * 60 * 60 * 24;
  const daysLeft = Math.ceil((birthdayDate - today) / msPerDay);

  const readableDate = new Date(birthday.birthday).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  });

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/birthday/delete/${birthday._id}`, {
        withCredentials: true,
      });
      alert("Deleted successfully!");
      onUpdate();
    } catch (err) {
      console.error(err);
      alert("Failed to delete.");
    }
  };
  

  return (
    <div className="w-[175px] flex flex-col rounded-2xl justify-center items-center shadow-xl bg-white h-[195px]">
      <img
        src={birthday.image}
        alt={`${birthday.firstName}'s avatar`}
        className="w-[80px] h-[80px] object-cover rounded-full mt-2 mb-3"
      />
      <h3 className="text-lg text-[#09455D] font-medium">{`${birthday.firstName} ${birthday.lastName}`}</h3>
      <p className="text-sm text-[#09455D]">
        {birthday.age
          ? `Turns ${birthday.age} on ${readableDate}`
          : `${readableDate}`}
      </p>
      <p className="text-sm text-[#AAAAAA]">{`${daysLeft} day${daysLeft !== 1 ? 's' : ''} left`}</p>
      <div className="flex justify-end items-end w-full pr-2" onClick={handleDelete}>
        <MdDeleteOutline className="text-xl text-red-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default ReminderCard;
