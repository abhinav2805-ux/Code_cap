const LoginForm = () => {
  return (
    <div className="flex gap-11 flex-col items-center justify-center min-h-screen bg-gray-950">
      <div className='text-white flex w-full items-center justify-center '>
        <img className='w-60 h-1/2' src="hat.jpg" alt="" />
        <div className='flex flex-col gap-6 justify-center items-center'>
          <h1 className='text-7xl font-bold'>
        WELCOME <span className='text-yellow-500'>BACK</span>

        </h1>
        <h1 className='text-4xl font-bold '>
          TO <span className='text-yellow-500'>CODECAP
            </span>
        </h1>
        </div>
        

      </div>
      <div className="flex  w-full max-w-7xl">
        {/* Sign-up Form Section */}
        <div className=" p-10 bg-gray-100 rounded-md border-gray-300 ">
          <div className="text-center ">
            <h1 className="text-7xl font-bold ">LOGIN <span className='text-yellow-500'>YOUR 
              </span> ACCOUNT<br />
            </h1>
          </div>
          <form action="" className=" relative mt-10 flex px-24 flex-col  justify-center">
            <img className=' h-24 absolute bottom-0 left-0 ' src="rocket.jpg" alt="" />
            <img className=' h-24 absolute top-0 right-0 ' src="rocket2.png" alt="" />

            <div className="mb-6">
              <input type="text" id="username" name="username" placeholder="Username" required
                className="w-full bg-gray-100 px-3 py-4 placeholder-gray-500 border-2 border-gray-700 rounded-2xl focus:outline-none focus:border-indigo-500"/>
            </div>
            <div className="mb-6">
              <input type="password" id="password" name="password" placeholder="Password" required
                className="w-full bg-gray-100 px-3 py-4 placeholder-gray-500 border-2 border-gray-700 rounded-2xl focus:outline-none focus:border-indigo-500"/>
            </div> <div className="mb-6">
              <input type="Confirm Password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required
                className="w-full bg-gray-100 px-3 py-4 placeholder-gray-500 border-2 border-gray-700 rounded-2xl focus:outline-none focus:border-indigo-500"/>
            </div>
            <button type="submit" className="w-1/2 mx-auto px-3 py-4  text-white bg-black rounded-full focus:bg-indigo-600 focus:outline-none">
              Login
            </button>
            <p className="mt-4 text-lg text-center text-gray-400">
              Not registered? <a href="#" className="text-blue-500 bg-white p-2 rounded-xl border border-gray-500 focus:underline">Register</a>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default LoginForm;
