import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormState {
  Username: string;
  Password: string;
}

const LoginForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    Username: '',
    Password: '',
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate();

  
  const validate = (): boolean => {
    const errors: Partial<FormState> = {};
    if (!formState.Username) {errors.Username = 'Username is required';}
    if (!formState.Password) {errors.Password = 'Password is required';}

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {return;}

    try {
      const response = await fetch('http://localhost:3000/api/user/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setMessage('Login successful');
        navigate('/'); // Redirect to home page
      } else {
        const errorData = await response.json();
        setMessage(`Login failed: ${errorData.msg}`);
      }
    } catch (error) {
      setMessage('Login failed: Network error');
    }
  };

  return (
    <div className="flex gap-11 flex-col items-center justify-center min-h-screen bg-black">
      <div className='text-white flex w-full items-center justify-center'>
        <img className='w-60 h-1/2' src="hat.jpg" alt="" />
        <div className='flex flex-col gap-6 justify-center items-center'>
          <h1 className='text-7xl font-bold'>
            WELCOME <span className='text-yellow-500'>BACK</span>
          </h1>
          <h1 className='text-4xl font-bold'>
            TO <span className='text-yellow-500'>CODECAP</span>
          </h1>
        </div>
      </div>
      <div className="flex w-full max-w-7xl">
        {/* Sign-in Form Section */}
        <div className="p-10 bg-gray-100 rounded-md border-gray-300">
          <div className="text-center">
            <h1 className="text-7xl font-bold">LOGIN <span className='text-yellow-500'>YOUR</span> ACCOUNT<br /></h1>
          </div>
          <form onSubmit={handleSubmit} className="relative mt-10 flex px-24 flex-col justify-center">
            <img className='h-24 absolute bottom-0 left-0' src="rocket.jpg" alt="" />
            <img className='h-24 absolute top-0 right-0' src="rocket2.png" alt="" />
            
            <div className="mb-6">
              <input
                type="text"
                id="Username"
                name="Username"
                placeholder="Username"
                value={formState.Username}
                onChange={handleChange}
                className="w-full bg-gray-100 px-3 py-4 placeholder-gray-500 border-2 border-gray-700 rounded-2xl focus:outline-none focus:border-indigo-500"
              />
              {errors.Username && <p className="text-red-500 text-sm">{errors.Username}</p>}
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="Password"
                name="Password"
                placeholder="Password"
                value={formState.Password}
                onChange={handleChange}
                className="w-full bg-gray-100 px-3 py-4 placeholder-gray-500 border-2 border-gray-700 rounded-2xl focus:outline-none focus:border-indigo-500"
              />
              {errors.Password && <p className="text-red-500 text-sm">{errors.Password}</p>}
            </div>
            <button
              type="submit"
              className="w-1/2 mx-auto px-3 py-4 text-white bg-black rounded-full focus:bg-indigo-600 focus:outline-none"
            >
              Login
            </button>
            {message && <p className="mt-4 text-lg text-center text-red-500">{message}</p>}
            <p className="mt-4 text-lg text-center text-gray-400">
              Not registered? <a href="/register" className="text-blue-500 bg-white p-2 rounded-xl border border-gray-500 focus:underline">Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
