import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormState {
  Name: string;
  Email: string;
  Username: string;
  Password: string;
}

const SignupForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    Name: '',
    Email: '',
    Username: '',
    Password: '',
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate();

  const validate = (): boolean => {
    const errors: Partial<FormState> = {};
    if (!formState.Name) {errors.Name = 'Full name is required';}
    if (!formState.Email) {
      errors.Email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.Email)) {
      errors.Email = 'Email is invalid';
    }
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
      const response = await fetch('http://localhost:3000/api/user/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setMessage('Registration successful');
        setFormState({ Name: '', Email: '', Username: '', Password: '' });
        navigate('/'); // Redirect to home page
      } else {
        const errorData = await response.json();
        setMessage(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      setMessage('Registration failed: Network error');
    }
  };

  return (
    <div className="flex p-8 flex-col md:flex-row items-center justify-center min-h-screen bg-black">
    <div className="flex flex-col md:flex-row w-full max-w-7xl">
      {/* Sign-up Form Section */}
      <div className="w-full md:w-1/2 p-6 md:p-10 bg-gray-100 rounded-md border-gray-300">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-600">
            WELCOME<br />
            <span className="text-xl md:text-2xl text-black">TO CODECAP COMMUNITY</span>
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col justify-center">
          <div className="mb-4">
            <input
              type="text"
              id="Name"
              name="Name"
              placeholder="Full Name"
              value={formState.Name}
              onChange={handleChange}
              className="w-full bg-gray-200 px-4 py-2 placeholder-gray-500 border-2 border-gray-700 rounded-2xl focus:outline-none focus:border-indigo-500"
            />
            {errors.Name && <p className="text-red-500 text-sm">{errors.Name}</p>}
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="Email"
              value={formState.Email}
              onChange={handleChange}
              className="w-full bg-gray-200 px-4 py-2 placeholder-gray-500 border-2 border-gray-700 rounded-2xl focus:outline-none focus:border-indigo-500"
            />
            {errors.Email && <p className="text-red-500 text-sm">{errors.Email}</p>}
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="Username"
              name="Username"
              placeholder="Username"
              value={formState.Username}
              onChange={handleChange}
              className="w-full bg-gray-200 px-4 py-2 placeholder-gray-500 border-2 border-gray-700 rounded-2xl focus:outline-none focus:border-indigo-500"
            />
            {errors.Username && <p className="text-red-500 text-sm">{errors.Username}</p>}
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="Password"
              name="Password"
              placeholder="Password"
              value={formState.Password}
              onChange={handleChange}
              className="w-full bg-gray-200 px-4 py-2 placeholder-gray-500 border-2 border-gray-700 rounded-2xl focus:outline-none focus:border-indigo-500"
            />
            {errors.Password && <p className="text-red-500 text-sm">{errors.Password}</p>}
          </div>
          <button
            type="submit"
            className="w-full md:w-1/2 mx-auto px-4 py-3 text-white bg-black rounded-full focus:bg-indigo-600 focus:outline-none"
          >
            Register Now
          </button>
          {message && <p className="mt-4 text-lg text-center text-red-500">{message}</p>}
          <p className="mt-4 text-lg text-center text-gray-400">
            Already registered?{' '}
            <a href="/" className="text-blue-500 bg-white p-2 rounded-xl border border-gray-500 focus:underline">
              Login
            </a>
          </p>
        </form>
      </div>
  
      {/* Promotional Section */}
      <div className="flex items-center justify-center w-full md:w-1/2 bg-black text-white text-center">
        <div className="flex flex-col items-center justify-center gap-4 p-4 md:p-8">
          <img className="w-2/4 md:w-2/3" src="hat.jpg" alt="Hat" />
          <h2 className="text-3xl md:text-5xl font-bold">
            BOOST YOUR <span className="text-yellow-500">HACKATHON JOURNEY</span>
          </h2>
          <img className="w-1/4 md:w-1/2" src="Vector(2).png" alt="Vector" />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default SignupForm;



