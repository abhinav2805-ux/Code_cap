import React from 'react';

const SignupForm = () => {
  return (
    <div className="flex  items-center justify-center min-h-screen bg-black">
      <div className="flex w-full max-w-7xl">
        {/* Sign-up Form Section */}
        <div className="w-1/2 p-10 bg-gray-100 rounded-md border-gray-300 ">
          <div className="text-center ">
            <h1 className="text-7xl font-bold text-yellow-600">WELCOME<br />
              <span className='text-3xl text-black'>TO CODECAP COMMUNITY</span>
            </h1>
          </div>
          <form action="" className="mt-10 flex flex-col  justify-center">
            <div className="mb-6">
              <input type="text" id="fullname" name="fullname" placeholder="Full Name" required
                className="w-full  bg-gray-200 px-3 py-4 placeholder-gray-500 border-2 border-gray-700 rounded-2xl focus:outline-none focus:border-indigo-500"/>
            </div>
            <div className="mb-6">
              <input type="email" id="email" name="email" placeholder="Email" required
                className="w-full bg-gray-200 px-3 py-4 placeholder-gray-500 border-2 border-gray-700 rounded-2xl focus:outline-none focus:border-indigo-500"/>
            </div>
            <div className="mb-6">
              <input type="text" id="username" name="username" placeholder="Username" required
                className="w-full bg-gray-200 px-3 py-4 placeholder-gray-500 border-2 border-gray-700 rounded-2xl focus:outline-none focus:border-indigo-500"/>
            </div>
            <div className="mb-6">
              <input type="password" id="password" name="password" placeholder="Password" required
                className="w-full bg-gray-200 px-3 py-4 placeholder-gray-500 border-2 border-gray-700 rounded-2xl focus:outline-none focus:border-indigo-500"/>
            </div>
            <button type="submit" className="w-1/2 mx-auto px-3 py-4  text-white bg-black rounded-full focus:bg-indigo-600 focus:outline-none">
              Register Now
            </button>
            <p className="mt-4 text-lg text-center text-gray-400">
              Already registered? <a href="#" className="text-blue-500 bg-white p-2 rounded-xl border border-gray-500 focus:underline">Login</a>
            </p>
          </form>
        </div>
        
        {/* Promotional Section */}
        <div className="flex items-center justify-center w-1/2 bg-black text-white text-center">
          <div className='flex flex-col items-center justify-center gap-4'>
            <img className=' w-1/2' src="hat.jpg" alt="" />
            <h2 className="text-7xl font-bold">BOOST YOUR <span className='text-yellow-500'>HACKATHON JOURNEY</span></h2>
            <img className='' src="Vector(2).png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
