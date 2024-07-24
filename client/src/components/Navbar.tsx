import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white flex justify-around items-center p-4">
      <div className="text-2xl font-bold text-yellow-500">
      <img src="/logoofnavbar.jpg" className='w-[250px]' alt="LOGO" />
      </div>
      <div className="flex translate-x-[-80px] space-x-8">
        <a href="/" className="text-yellow-500 text-xl font-medium">HOME</a>
        <a href="/buildteam" className="hover:text-yellow-500 text-xl font-medium">TEAM</a>
        <a href="#" className="hover:text-yellow-500 text-xl font-medium">HACKATHONS</a>
        <a href="#" className="hover:text-yellow-500 text-xl font-medium">ABOUT</a>
      </div>
      <div className="w-10 h-10 rounded-full overflow-hidden flex justify-center items-center border-2 border-green-500">
        <PersonOutlineIcon/>
      </div>
    </nav>
  );
}

export default Navbar;
