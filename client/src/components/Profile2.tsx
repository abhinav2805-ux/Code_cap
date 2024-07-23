import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import PersonAddIcon from '@mui/icons-material/PersonAdd';

interface ProfileProps {
  role: string;
  branch: string;
  college: string; 
  project: string; // Image source URL
}
const Profile2: React.FC<ProfileProps> = ({ role, branch, college, project }) => {
  return (
   <>
   <div className="w-full h-[100px]  font-semibold bg-gray-600  rounded-b-xl flex ">
               <div className="h-full w-[10%] flex justify-center items-center">
               
               </div>
               <div className="h-full w-[40%] pl-2  flex flex-col">
                <div className="w-full flex  items-center  h-[50%] ">
                <p className="text-xl text-yellow-500">Role :</p>
                <p className="text-xl ml-1 text-white">{role}</p>
                
                </div>  
                
                <div className="w-full h-[50%] flex  items-center  ">
                <p className="text-xl  text-yellow-500">College :</p>
                <p className="text-xl ml-1 text-white">{college}</p>
                </div>
               </div>
               <div className="h-full w-[40%] pl-2  ">
               <div className="w-full flex  items-center  h-[50%] ">
                <p className="text-xl text-yellow-500">Branch :</p>
                <p className="text-xl ml-1 text-white">{branch}</p>
                </div>  
                
                <div className="w-full h-[50%] flex  items-center  ">
                <p className="text-xl  text-yellow-500 ">Project :</p>
                <p className="text-xl ml-1 text-white">{project}</p>
                </div>
               </div>
               <div className="h-full w-[10%]  flex justify-center items-center "></div>
               </div>

   </>
  );
};

export default Profile2;