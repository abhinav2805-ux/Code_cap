import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
   <>
   <div className="w-full h-[100px]  bg-gray-600  rounded-t-xl flex ">
               <div className="h-full w-[10%] flex justify-center items-center">
               <Avatar>
  <AvatarImage  src={imageSrc} />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
               </div>
               <div className="h-full w-[40%] pl-2  flex flex-col">
                <div className="w-full flex  items-center  h-[50%] ">
                <p className="text-xl text-yellow-500">Name :</p>
                <p className="text-xl ml-1 text-white">{name}</p>
                
                </div>  
                
                <div className="w-full h-[50%] flex  items-center  ">
                <p className="text-xl  text-yellow-500">Year :</p>
                <p className="text-xl ml-1 text-white">{year}</p>
                </div>
               </div>
               <div className="h-full w-[40%] pl-2  ">
               <div className="w-full flex  items-center  h-[50%] ">
                <p className="text-xl text-yellow-500">Gender :</p>
                <p className="text-xl ml-1 text-white">{gender}</p>
                </div>  
                
                <div className="w-full h-[50%] flex  items-center  ">
                <p className="text-xl  text-yellow-500 ">Skills :</p>
                <p className="text-xl ml-1 text-white">{skills}</p>
                </div>
               </div>
               <div className="h-full w-[10%]  flex justify-center items-center "><PersonAddIcon className="text-yellow-500" /></div>
               </div>

   </>
  );
};

export default Profile;