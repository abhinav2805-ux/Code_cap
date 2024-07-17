function HeroSection() {
  return (
    <>
    <div className="w-full md:flex p-12 bg-black">
        <div className="w-[50%] h-[500px] p-8 px-24 bg-fixed bg-cover bg-center rounded-2xl border-2 " style={{ backgroundImage: "url('./public/backgroung.jpg')" }}>
        <div className="w-full h-[55%] text-white text-5xl  font-extrabold tracking-wider leading-normal ">
            WANT TO BUILD <br></br> A HACKATHON <br></br> TEAM ?
        </div>
        <div className="w-full flex text-xl text-yellow-400 items-center h-[17%] ">
            WE GOT YOU :)
        </div>
        <div className="w-full h-[28%] flex text-lg text-gray-300 items-center ">
            A platform where you can find suitable teammates in your college of specific skillset and make your hackathon journey smooth
        </div>
        </div>
        
        
        <div className="w-[50%] h-[500px] px-[120px] bg-black">
            <div className="w-full h-[50%] py-4 flex translate-x-[70px] ">
                <img src="./public/hat.jpg" className="h-[100%] "/>
            </div>
            <div className="w-full h-[30%]  text-5xl font-extrabold text-white leading-tight ">
                CODECAP IS HERE <br></br> TO HELP!
            </div>
            <div className="w-full h-[20%]  flex translate-x-[100px]">
                <img src="./public/arrow.jpg" className="h-full" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default HeroSection
