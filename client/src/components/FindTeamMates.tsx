"use client"
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Profile from "./Profile";
import Profile2 from "./Profile2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



const FindTeamMates: React.FC = () =>  {
  const [value, setValue] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const options = ['Gender', 'Year', 'College', 'Branch', 'Status','Skills'];

  const handleOptionClick = (option:any) => {
    setValue(option);
    setShowOptions(false);
  };

//   GET
// findUsers
// http://localhost:3000/api/user/findUsers?Text=web ﻿
// Query Params
// Text
// web
// Gender
// Male
// Role
// web
  
  return (
    <>
      <div className='w-full h-screen px-4 md:px-[250px]  bg-black'>
        {/* // find */}
        <div className='w-full h-[15%] p-4'>
          <h1 className='text-center text-3xl md:text-5xl font-bold text-white'>FIND YOUR TEAM MATES</h1>
          <h3 className='text-center text-lg md:text-xl  mt-4 text-yellow-500'>Search the role / skill / name you want in your team</h3>
        </div>

        {/* //filter */}
        <div className='w-full h-[10%] mt-[60px] mb-3 p-3'>
          <div className='w-full h-full border-4 border-zinc-100 flex rounded-xl'>
            <div className='h-full w-[10%] md:w-[5%] flex justify-center items-center'>
              <SearchIcon className='text-white' />
            </div>
            <div className='h-full w-[60%] md:w-[75%]'>
              <input
                type="text"
                className='bg-transparent text-white w-full p-2 h-full focus:outline-none text-sm md:text-xl border-none'
                placeholder='Enter your future teammate details/skills'
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className='h-full w-[30%] md:w-[20%] flex justify-center bg-white items-center'>
              <button 
                className='bg-white w-full  h-full text-lg md:text-2xl font-semibold px-3 text-black rounded-r-xl'
                onClick={() => setShowOptions(!showOptions)}
              >
                Filter
              </button>
            </div>
          </div>
          {showOptions && (
            <div className='absolute right-4 md:right-[100px] mt-2 translate-y-[-60px] text-sm md:text-xl font-medium bg-white rounded-xl px-6 shadow-lg'>
              {options.map((option, index) => (
                <div 
                  key={index}
                  className='p-2 hover:bg-gray-200 cursor-pointer'
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* // main area */}
        <div className='w-full h-[75%] bg-black px-2 md:px-8 overflow-y-auto'>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger >
                <Profile
                  name="Abhinav Gupta"
                  year="2026"
                  skills={['React', 'TypeScript', 'Node.js']}
                  gender="Male"
                  imageSrc="https://github.com/shadcn.png"
                />
              </AccordionTrigger>
              <AccordionContent>
                <Profile2
                  role="Frontend dev."
                  branch="CSE"
                  college="MAIT"
                  project="nil"
                />
              </AccordionContent>
              <br/>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>  
                <Profile
                  name="Ansh Jain"
                  year="2026"
                  skills={['React', 'TypeScript']}
                  gender="Male"
                  imageSrc="https://avatars.githubusercontent.com/u/114240845?v=4"
                />
              </AccordionTrigger>
              <AccordionContent>
                <Profile2
                  role="FullStack dev."
                  branch="CSE"
                  college="MAIT"
                  project="nil"
                />
              </AccordionContent>
            </AccordionItem>
            <br/>
            <AccordionItem value="item-3">
              <AccordionTrigger> 
                <Profile
                  name="Ashwin Bansal"
                  year="2026"
                  skills={['TypeScript']}
                  gender="Male"
                  imageSrc="https://avatars.githubusercontent.com/u/119871177?v=4"
                />
              </AccordionTrigger>
              <AccordionContent>
                <Profile2
                  role="Backend dev."
                  branch="CSE"
                  college="MAIT"
                  project="nil"
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  )
}

export default FindTeamMates;
