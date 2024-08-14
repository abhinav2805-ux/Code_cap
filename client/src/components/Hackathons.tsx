import  { useState,useEffect } from 'react'
import Card from './FeaturedCard'
import { SearchIcon } from 'lucide-react';
function Hackathons() {

    const [value, setValue] = useState('');
    const [showOptions, setShowOptions] = useState(false);

    const options = ['Venue', 'Fees', 'Team Size', 'Date', 'Name'];

    const  [cardsData,setCardsData] = useState([]);

    const handleOptionClick = (option:any) => {
      setValue(option);
      setShowOptions(false);
    };
    
    useEffect(() => {
      // Fetch default profiles when the component mounts
      const fetchDefaultProfiles = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/events/getAllEvents", {
            credentials: "include",
          });
          if (response.ok) {
            const data = await response.json();
            setCardsData(data);
            console.log(cardsData);            
          } else {
            console.error("Failed to fetch default profiles", response);
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      };
  
      fetchDefaultProfiles();
    }, []);
    
    
  return (
    <div className='mx-auto flex flex-col justify-center items-center  bg-black min-h-screen space-y-8 px-auto py-16'>
        <div className='flex flex-col justify-center space-y-2'>
            <h1 className='text-white font-bold text-5xl text-center'>HACKATHON ALERTS</h1>
            <h3 className=' font-semibold text-yellow-500 text-2xl text-center'>Search Hackathons According To Your Preference</h3>
        </div>
        <div className='w-full md:w-3/4 h-[10%] p-3'>
  <div className='w-full h-full border-4 border-zinc-100 flex rounded-xl'>
    <div className='h-full w-[10%] md:w-[5%] flex justify-center items-center mt-2 md:mt-4'>
      <SearchIcon className='text-white' />
    </div>
    <div className='h-full w-[65%] md:w-[75%]'>
      <input
        type="text"
        className='bg-transparent text-white w-full p-2 h-full focus:outline-none text-base md:text-lg lg:text-xl border-none'
        placeholder='Enter your future teammate details/skills'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
    <div className='h-full w-[25%] md:w-[20%] flex justify-center bg-white items-center'>
      <button 
        className='bg-white w-full text-base md:text-2xl font-semibold py-3 text-black rounded-r-xl'
        onClick={() => setShowOptions(!showOptions)}
      >
        Filter
      </button>
    </div>
  </div>
  {showOptions && (
    <div className='absolute right-4 md:right-[100px] mt-2 translate-y-[-60px] text-base md:text-xl font-medium bg-white rounded-xl px-2 shadow-lg'>
      {options.map((option, index) => (
        <div 
          key={index}
          className='p-2 hover:bg-gray-200 cursor-pointer border-2 border-black rounded-xl my-2' 
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </div>
      ))}
    </div>
  )}
  </div>
    <div className="w-full md:w-3/4  px-4 md:px-0   space-y-6 ">
            {cardsData.map((card:any) => (
                <Card 
                    imageUrl={card.Image}
                    name={card.Name}
                    mode={card.Mode}
                    date={card.lastDate}
                    teamSize={card.teamSize}
                    hackURL={card.hackURL} 
                />

            ))}
        </div>
    </div>
  )
}

export default Hackathons