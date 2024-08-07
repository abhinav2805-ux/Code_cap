import  { useState } from 'react'
import Card from './FeaturedCard'
import { SearchIcon } from 'lucide-react';
function Hackathons() {

    const [value, setValue] = useState('');
    const [showOptions, setShowOptions] = useState(false);

    const options = ['Venue', 'Fees', 'Team Size', 'Date', 'Name'];

    const handleOptionClick = (option:any) => {
      setValue(option);
      setShowOptions(false);
    };
  
    const cardsData = [
        {
          imageUrl: '/public/hacks/hack1.jpg',
          name: 'Event 1',
          host: 'Host 1',
          date: '2024-07-22',
          teamSize: '4',
          registrationPrice: '$50',
        },
        {
          imageUrl: '/public/hacks/hack2.jpg',
          name: 'Event 2',
          host: 'Host 2',
          date: '2024-08-15',
          teamSize: '6',
          registrationPrice: '$75',
        },
        {
          imageUrl: '/public/hacks/hack3.jpg',
          name: 'Event 3',
          host: 'Host 3',
          date: '2024-08-15',
          teamSize: '6',
          registrationPrice: '$75',
        },
        {
          imageUrl: '/public/hacks/hack4.jpg',
          name: 'Event 4',
          host: 'Host 4',
          date: '2024-08-15',
          teamSize: '6',
          registrationPrice: '$75',
        },
        {
          imageUrl: '/public/hacks/hack5.jpg',
          name: 'Event 5',
          host: 'Host 5',
          date: '2024-08-15',
          teamSize: '6',
          registrationPrice: '$75',
        },
    ];
    
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
            {cardsData.map((card) => (
                <Card 
                    imageUrl={card.imageUrl}
                    name={card.name}
                    host={card.host}
                    date={card.date}
                    teamSize={card.teamSize}
                    registrationPrice={card.registrationPrice}
                />
                
            ))}
        </div>
    </div>
  )
}

export default Hackathons