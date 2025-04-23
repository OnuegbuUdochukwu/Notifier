import React from 'react';


const ActivityCard = ({ birthday }) => {
  const { fName, lName, date, pic } = birthday;
  const readableDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric'
    });

  return (
    <div className="bg-white rounded-lg shadow-sm px-4 py-3 flex gap-3 items-start">
      <img
        src={pic}
        className="w-[40px] h-[40px] rounded-full object-cover mt-1"
      />
      <div className="flex flex-col">
        <p className="text-[#09455D] text-sm">
          You successfully booked <span className="font-semibold">{`${fName} ${lName}`}</span>'s birthday
          for <span className="font-semibold">{readableDate}</span>
        </p>
        <div className="flex justify-between items-center text-xs text-gray-500 mt-1">
          <p>Just now</p>
          <button className="text-gray-500 hover:underline">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
