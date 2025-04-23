import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import AddBirthday from './AddBirthday';

const EmptyReminder = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="w-[175px] flex flex-col rounded-2xl justify-center items-center shadow-xl bg-[#D7F4FF] h-[195px]"
    >
      <div className='w-[80px] h-[80px] rounded-full bg-white flex justify-center items-center' onClick={() => setShowModal(true)}>
        <FaPlus className='text-3xl cursor-pointer' />
      </div>
      <p className='text-[#09455D] text-base'>Add new reminder</p>
      <AddBirthday open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default EmptyReminder;
