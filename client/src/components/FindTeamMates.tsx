"use client"
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Check, ChevronsUpDown } from "lucide-react"
 import Profile from "./Profile";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]
 
const FindTeamMates: React.FC = () =>  {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
  return (
    <>
    
    <div className='w-full h-screen px-[250px] bg-black '>
    {/* // find */}
    <div className='w-full h-[15%] p-4'>

    <h1 className='text-center text-5xl font-bold text-white'>FIND YOUR TEAM MATES</h1>
    <h3 className='text-center text-xl mt-1 text-yellow-500'>Search the role / skill / name you want in your team</h3>
    </div>
    
    {/* //filter */}
    <div className='w-full h-[10%] p-3'>

    <div className='w-full h-full border-4 border-zinc-100 flex rounded-[40px] '>
    <div className='h-full w-[5%] flex justify-center items-center'>
      <SearchIcon className='text-white' />
    </div>
    <div className='h-full w-[75%]'>
      <input
        type="text"
        className='bg-transparent text-white w-full p-2 h-full focus:outline-none text-xl border-none'
        placeholder='Enter your future teammate details/skills'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
    <div className='h-full w-[20%] bg-white rounded-r-[40px]'>
   <h1 className="text-center text-3xl font-bold mt-1">Filter</h1>
    </div>
    </div>

    </div>
    {/* // main area */}
    <div className='w-full h-[75%] bg-black px-8'>

    <Accordion  type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
            <Profile/>
            
        </AccordionTrigger>
        <AccordionContent>
         <Profile/>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    </div>

    </div>

    </>
  )
}

export default FindTeamMates;
