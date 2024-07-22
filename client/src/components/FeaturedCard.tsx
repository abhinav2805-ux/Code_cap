import React from 'react'
import { Button } from './ui/button';
import { Link } from 'lucide-react';

interface CardProps {
    imageUrl: string;
    name: string;
    host: string;
    date: string;
    teamSize: string;
    registrationPrice: string;
}


const Card: React.FC<CardProps> = ({ imageUrl, name, host, date, teamSize, registrationPrice }) => {
    return (
      <div className="bg-gray-900 border-2 border-spacing-2 border-white text-yellow-400  rounded-lg shadow-lg flex justify-around">
        <div className=' flex items-center px-8 py-8'>
            <img src={imageUrl} alt="Event" className="w-1/3 rounded-md" />
            <div className="ml-6 space-y-6 flex-grow">
            <div className=" text-xl"><strong>Name:</strong> {name}</div>
            <div className=" text-xl"><strong>Host by:</strong> {host}</div>
            <div className=" text-xl"><strong>Hosted on:</strong> {date}</div>
            <div className=" text-xl"><strong>Team Size:</strong> {teamSize}</div>
            <div className=" text-xl"><strong>Registration Price:</strong> {registrationPrice}</div>
            </div>
        </div>
        <div className="flex items-center">
          <a href="">
            <Button variant={'outline'} className="bg-yellow-500 text-black p-2 rounded-full">
            <Link/>
            </Button>
          </a>
        </div>
      </div>
    );
  };
  
  export default Card;
  