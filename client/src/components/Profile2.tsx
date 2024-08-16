
import React from 'react';
import Github from '@mui/icons-material/Github';

interface ProfileProps {
  role: string;
  branch: string;
  college: string;
  status: string;
  github: string; // LinkedIn URL
}

const Profile2: React.FC<ProfileProps> = ({ role, branch, college, status,github}) => {
  return (
    <div className="w-full translate-y-[-15px] flex flex-col md:flex-row font-semibold bg-gray-600 rounded-b-xl p-2">
      <div className="hidden md:flex justify-center items-center md:w-[10%]"></div>
      <div className="flex flex-col justify-center w-full md:w-[40%] pl-2">
        <div className="flex items-center pt-4 mb-2">
          <p className="text-lg md:text-xl text-yellow-500">Role :</p>
          <p className="text-lg md:text-xl ml-1 text-white">{role}</p>
          <div className="block ml-48 md:hidden">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-black-500">
          <Github />
        </a>
        </div>
        </div>
        <div className="flex items-center mb-2">
          <p className="text-lg md:text-xl text-yellow-500">College :</p>
          <p className="text-lg md:text-xl ml-1 text-white">{college}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full md:w-[40%] pl-2">
        <div className="flex items-center mb-2">
          <p className="text-lg md:text-xl text-yellow-500">Branch :</p>
          <p className="text-lg md:text-xl ml-1 text-white">{branch}</p>
        </div>
        <div className="flex items-center mb-2">
          <p className="text-lg md:text-xl text-yellow-500">Status :</p>
          <p className="text-lg md:text-xl ml-1 text-white">{status}</p>
        </div>
      </div>
      <div className="hidden md:flex justify-center  items-center md:w-[10%]"> <div className="hidden md:flex justify-center items-center w-full md:w-[10%] h-[50px] md:h-full">
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-black-500 ">
          <Github />
        </a>
      </div></div>
    </div>
  );
};

export default Profile2;
