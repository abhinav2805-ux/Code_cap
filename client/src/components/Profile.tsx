import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LinkedIn from '@mui/icons-material/LinkedIn';


interface ProfileProps {
  name: string;
  year: string;
  skills: string[];
  gender: string;
  imageSrc: string;
  linkedIn: string; // LinkedIn URL
}

const Profile: React.FC<ProfileProps> = ({ name, year, skills, gender, imageSrc, linkedIn }) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:h-[100px] bg-gray-600 rounded-t-xl p-2 md:p-0">
      <div className="flex justify-between md:justify-center items-center w-full md:w-[10%] h-[50px] md:h-full">
        <Avatar>
          <AvatarImage src={`https://avatars.githubusercontent.com/${imageSrc}`} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="block md:hidden">
        <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          <LinkedIn />
        </a>
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
        <div className="flex items-center mb-2 overflow-hidden md:overflow-auto">
          <p className="text-lg md:text-xl text-yellow-500">Skills :</p>
          <div className="relative text-lg md:text-xl ml-1 text-white flex flex-wrap">
            <div className="hidden md:flex overflow-x-auto">
              {skills.slice(0, 3).map((skill, index) => (
                <span key={index} className="inline-block mr-2">{skill}</span>
              ))}
              {skills.length > 5 && <span className="inline-block mr-2 text-white">...</span>}
            </div>
            <div className="flex md:hidden flex-wrap">
              {skills.slice(0, 3).map((skill, index) => (
                <span key={index} className="inline-block mr-2">{skill}</span>
              ))}
              {skills.length > 5 && <span className="inline-block mr-2 text-yellow-500">...</span>}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center w-full md:w-[10%] h-[50px] md:h-full">
        <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          <LinkedIn />
        </a>
      </div>
    </div>
  );
};

export default Profile;
