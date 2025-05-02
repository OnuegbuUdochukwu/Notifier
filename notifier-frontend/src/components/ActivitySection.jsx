import React, { useEffect, useState} from 'react'
import data from '@/constant'
import { GoPulse } from "react-icons/go";
import ActivityCard from './ActivityCard';
import axios from 'axios';
import useAuthStore from '@/hooks/useAuthStore';
import { useNavigate } from 'react-router-dom';


const ActivitySection = () => {
    const navigate = useNavigate();
    const logout = useAuthStore((state) => state.logout);
    const handleLogout = async () => {
        try{
            await logout();
            navigate('/auth')
        }
        catch(error){
            console.error('logout failed',error)
            alert("logout failed please kill yourself")
        }
    }
    const [user, setUser] = useState("");
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data } = await axios.get("http://localhost:5000/api/user/username", {
                    withCredentials: true
                  });
                setUser(data.username);
            } catch (error) {
                alert("Error")
                console.log(error);
            }
        };
    
        fetchUser();
    }, []);
  return (
    <section className='flex w-[300px] flex-col mt-16 mr-1 bg-[F8F8F8] p-4 rounded-lg gap-6 shadow-md'>
        <div className='flex items-center gap-4'>
            
            <h3 className='text-lg text-[#09455D] font-medium'>
            {user}
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
        <button className='bg-red-700 rounded-lg shadow-sm hover:bg-red-800 transition-all duration-300 px-3 py-2 text-white' onClick={handleLogout}>logout</button>
    </section>

  )
}


export default ActivitySection