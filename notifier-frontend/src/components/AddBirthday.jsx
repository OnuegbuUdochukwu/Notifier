import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import FloatingInput from "./FloatingInput"; 
import { MdOutlineCelebration } from "react-icons/md";
import { LiaBirthdayCakeSolid } from "react-icons/lia"

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const days = Array.from({ length: 31 }, (_, i) => i + 1);

const AddBirthday = ({ open, onClose }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    birthdayDay: "",
    birthdayMonth: "",
    age: "",
    reminderDay: "",
    reminderMonth: "",
    reminderYear: "",
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm(prev => ({ ...prev, image: file }));
    }
  };

  useEffect(()=> {
    setForm({
        firstName: "",
        lastName: "",
        birthdayDay: "",
        birthdayMonth: "",
        age: "",
        reminderDay: "",
        reminderMonth: "",
        reminderYear: "",
        image: null
    });
  }, [open])

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-center items-center px-2  ">
      <div className="relative w-full  bg-white rounded-xl p-4 max-h-[60vh] overflow-y-auto max-w-[600px] shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-2 text-gray-700 text-2xl"
        >
          <IoClose />
        </button>

        <div className="flex flex-col items-center gap-6 mt-6">
            <div className="flex flex-row gap-2">
                <p className="text-3xl text-[#09455D]">Add a new birthday</p>
                <MdOutlineCelebration className='text-3xl text-[#09455D]'/>
            </div>
            <p className="text-base text-[#09455D] mt-[-20px]">Fill in the details and we’d be sure to do the rest!</p>
          <div className="w-24 h-24 rounded-full bg-[#D9D9D9] flex items-center justify-center cursor-pointer relative overflow-hidden">
            {form.image ? (
              <img
                src={URL.createObjectURL(form.image)}
                alt="Uploaded"
                className="object-cover w-full h-full"
              />
            ) : (
              <IoPersonOutline className="text-5xl text-white" />
            )}
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageUpload}
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          <p className=" text-[#09455D] text-lg mt-[-20px]">Upload Picture</p>

          <div className="flex gap-2 w-full">
            <FloatingInput
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              label="First Name"
              required
            />
            <FloatingInput
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              label="Last Name"
              required
            />
          </div>

          <div className="w-full">
            <div className="flex flex-row ">
                <LiaBirthdayCakeSolid className='text-red-400 text-xl mr-[-5px]' />
                <p className="text-sm font-medium mb-5 ml-2 text-[#09455D]">Birthday</p>
            </div>
            <div className="flex gap-2">
              <div className="w-1/2">
                <select
                  name="birthdayDay"
                  value={form.birthdayDay}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-2 py-2 text-sm text-gray-700"
                  required
                >
                  <option value=""> Day</option>
                  {days.map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
              </div>
              <div className="w-1/2">
                
                <select
                  name="birthdayMonth"
                  value={form.birthdayMonth}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-2 py-2 text-sm text-gray-700"
                  required
                >
                  <option value="">Month</option>
                  {months.map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="w-full">
            <p className="text-sm font-medium mb-5 ml-2 text-[#09455D]">Age</p>
            <FloatingInput
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                label="Age (Optional)"
            />
          </div>

          <div className="w-full">
          <p className="text-sm font-medium mb-1 ml-2 text-[#09455D]">Remainder</p>
            <div className="flex gap-2 items-center justify-center">
              <div className="w-1/3">
                <select
                  name="reminderDay"
                  value={form.reminderDay}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg mt-5 px-2 py-2 text-sm text-gray-700"
                  required
                >
                  <option value="">Day</option>
                  {days.map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
              </div>
              <div className="w-1/3">
                <select
                  name="reminderMonth"
                  value={form.reminderMonth}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-2 py-2 mt-5 text-sm text-gray-700"
                  required
                >
                  <option value="">Month</option>
                  {months.map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
              </div>
              <div className="w-1/3 h-5 mb-2">
                <FloatingInput
                  type="number"
                  name="reminderYear"
                  value={form.reminderYear}
                  onChange={handleChange}
                  label="Year"
                  required
                />
              </div>
            </div>
          </div>

          <button className="w-full mt-4 bg-[#09455D] text-white py-2 rounded-lg hover:bg-[#072f3f] ">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBirthday;
