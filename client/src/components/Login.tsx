import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from './ui/use-toast';

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
  
  // Correctly destructure the toast function
  const { toast } = useToast();

  const validate = (): boolean => {
    const errors: Partial<FormState> = {};
    if (!formState.Username) { errors.Username = 'Username is required'; }
    if (!formState.Password) { errors.Password = 'Password is required'; }

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
    if (!validate()) { return; }

    try {
      const response = await fetch('http://localhost:3000/api/user/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
        credentials: 'include'
      });

      if (response.ok) {
        setMessage('Login successful');
        toast({
          title: "Logged In Successfully",
          description: message,
        });
  
        setTimeout(() => {
          navigate('/Home'); // Redirect to home page
        }, 2000);
        
      } else {
        const errorData = await response.json();
        setMessage(`Login failed: ${errorData.msg}`);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: 'Login failed: Network error',
      });
    }
    if (message) {
      // Call the toast function correctly
      toast({
        variant: "destructive",
        title: "Error",
        description: message,
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <div className="text-white flex flex-col md:flex-row w-full items-center justify-center gap-8 md:gap-16">
        <img className="w-40 h-40 md:w-60 md:h-60 object-cover" src="hat.jpg" alt="Hat" />
        <div className="flex flex-col items-center text-center md:text-left gap-6">
          <h1 className="text-4xl md:text-7xl font-bold">
            WELCOME <span className="text-yellow-500">BACK</span>
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold">
            TO <span className="text-yellow-500">CODECAP</span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-5xl mt-8 md:mt-16">
        {/* Sign-in Form Section */}
        <div className="p-6 md:p-10 bg-gray-100 rounded-md border-gray-300 relative">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-7xl font-bold">
              LOGIN <span className="text-yellow-500">YOUR</span> ACCOUNT
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
            <img className="absolute bottom-4 left-4 h-12 md:h-24" src="rocket.png" alt="Rocket" />
            <img className="absolute top-4 right-4 h-12 md:h-24" src="rocket2.png" alt="Rocket2" />

            <div className="w-full max-w-sm md:max-w-md">
              <div className="mb-4">
                <input
                  type="text"
                  id="Username"
                  name="Username"
                  placeholder="Username"
                  value={formState.Username}
                  onChange={handleChange}
                  className="w-full bg-gray-100 px-4 py-3 placeholder-gray-500 border-2 border-gray-700 rounded-2xl focus:outline-none focus:border-indigo-500"
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
                  className="w-full bg-gray-100 px-4 py-3 placeholder-gray-500 border-2 border-gray-700 rounded-2xl focus:outline-none focus:border-indigo-500"
                />
                {errors.Password && <p className="text-red-500 text-sm">{errors.Password}</p>}
              </div>
              <button
                type="submit"
                className="w-full md:w-1/2 md:ml-28 px-4 py-3 text-white bg-black rounded-full focus:bg-indigo-600 focus:outline-none"
              >
                Login
              </button>
            </div>
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
