import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

interface ProfileProps {
  name: string;
  year: string;
  skills: string[];
  gender: string;
  imageSrc: string; // Image source URL
}

const Profile: React.FC<ProfileProps> = ({ name, year, skills, gender, imageSrc }) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:h-[100px] bg-gray-600 rounded-t-xl p-2 md:p-0">
      <div className="flex justify-between md:justify-center items-center w-full md:w-[10%] h-[50px] md:h-full">
        <Avatar>
          <AvatarImage src={imageSrc} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="block md:hidden">
          <PersonAddIcon className="text-yellow-500 ml-2" />
        </div>
      </div>
      <div className="flex flex-col justify-center w-full md:w-[40%] pl-2">
        <div className="flex items-center mb-2">
          <p className="text-lg md:text-xl text-yellow-500">Name :</p>
          <p className="text-lg md:text-xl ml-1 text-white">{name}</p>
        </div>
        <div className="flex items-center mb-2">
          <p className="text-lg md:text-xl text-yellow-500">Year :</p>
          <p className="text-lg md:text-xl ml-1 text-white">{year}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full md:w-[40%] pl-2">
        <div className="flex items-center mb-2">
          <p className="text-lg md:text-xl text-yellow-500">Gender :</p>
          <p className="text-lg md:text-xl ml-1 text-white">{gender}</p>
        </div>
        <div className="flex items-center mb-2">
          <p className="text-lg md:text-xl text-yellow-500">Skills :</p>
          <p className="text-lg md:text-xl ml-1 text-white">{skills.join(', ')}</p>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center w-full md:w-[10%] h-[50px] md:h-full">
        <PersonAddIcon className="text-yellow-500" />
      </div>
    </div>
  );
};

export default Profile;
