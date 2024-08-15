function HeroSection() {
    return (
      <>
        <div className="w-full md:flex p-6 md:p-12 bg-black">
          <div className="w-full md:w-[50%] h-[300px] md:h-[500px] p-4 md:p-8 md:px-24 bg-fixed bg-cover bg-center rounded-2xl border-2" style={{ backgroundImage: "url('./public/backgroung.jpg')" }}>
            <div className="w-full h-[55%] text-white text-2xl md:text-5xl font-extrabold tracking-wider leading-normal ">
              WANT TO BUILD <br /> A HACKATHON <br /> TEAM ?
            </div>
            <div className="w-full flex text-xl md:text-3xl text-yellow-400 font-bold items-center h-[17%]">
              WE GOT YOU :)
            </div>
            <div className="w-full h-[28%] flex text-lg md:text-xl text-gray-300 items-center">
              A platform where you can find suitable teammates in your college with specific skillsets and make your hackathon journey smooth.
            </div>
          </div>
          
          
          
          <div className="w-full md:w-[50%] h-[300px] md:h-[500px] px-[60px] md:px-[90px] bg-black">
            <div className="w-full h-[50%] py-4 mt-2 md:mt-0 flex justify-center md:translate-x-[70px]">
              <img src="./public/hat.jpg" className="h-full" />
            </div>
            <div className="w-full h-[30%] md:pt-6 pt-2  md:mt-0 text-xl md:text-5xl  font-extrabold flex justify-center md:justify-end text-white leading-tight">
              CODECAP IS HERE <br /> TO HELP!
            </div>
            <div className="w-full h-[20%] flex justify-center pt-0 md:translate-x-[70px]">
              <img src="./public/arrow-removebg-preview.png" className="h-full" alt="" />
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default HeroSection;
  