import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AvatarFallback, AvatarImage, Avatar } from './ui/avatar';
import { useToast } from './ui/use-toast';

interface FormData {
  username: string;
  fullName: string;
  email: string;
  gender: string;
  skills: string[];
  college: string;
  year: string;
  branch: string;
  linkedin: string;
  github: string;
  role: string;
  password: string;
  confirmPassword: string;
  avatar: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

function EditProfile() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    fullName: '',
    email: '',
    gender: '',
    skills: [''], // Initialize with an empty skill
    college: '',
    year: '',
    branch: '',
    linkedin: '',
    github: '',
    role: '',
    password: '',
    confirmPassword: '',
    avatar: '',
  });
  const [avatarUrl, setAvatarUrl] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({});
  const navigate = useNavigate();
  const { toast } = useToast();
  const [typingTimer, setTypingTimer] = useState<NodeJS.Timeout | null>(null); // For debouncing

  function getCookieValue(name: string) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }

  useEffect(() => {
    const username = getCookieValue('user');
    fetch(`http://localhost:3000/api/user/getProfile/${username}`, {
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          username: data[0].Username,
          fullName: data[0].Name,
          email: data[0].Email,
          gender: data[0].Gender,
          skills: data[0].Skill || [''], // Ensure skills are set correctly
          college: data[0].College,
          year: data[0].Year,
          branch: data[0].Branch,
          linkedin: data[0].LinkedIn,
          github: data[0].Github,
          role: data[0].Role,
          password: '',
          confirmPassword: '',
          avatar: data.avatar,
        });
        setAvatarUrl(`https://avatars.githubusercontent.com/${data[0].Github}`);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'github') {
      if (typingTimer) {
        clearTimeout(typingTimer);
      }

      const newTimer = setTimeout(() => {
        // Update avatar URL based on GitHub username after 5 seconds
        if (value.trim() === '') {
          setAvatarUrl('https://github.com/shadcn.png'); // Set default avatar if GitHub username is empty
        } else {
          setAvatarUrl(`https://avatars.githubusercontent.com/${value}`);
        }
      }, 3000); // 3-second delay

      setTypingTimer(newTimer);
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSkillChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newSkills = [...formData.skills];
    newSkills[index] = e.target.value;
    setFormData({ ...formData, skills: newSkills });
  };

  const addSkill = () => {
    setFormData({ ...formData, skills: [...formData.skills, ''] });
  };

  const removeSkill = (index: number) => {
    const newSkills = formData.skills.filter((_, i) => i !== index);
    setFormData({ ...formData, skills: newSkills });
  };

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        setFormData({
          ...formData,
          avatar: event.target.result,
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const validate = () => {
    const errors: FormErrors = {};
    if (!formData.fullName) {errors.fullName = 'Full Name is required';}
    if (!formData.email){ errors.email = 'Email is required';}
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {errors.email = 'Email address is invalid';}
    if (!formData.password) {errors.password = 'Password is required';}
    if (formData.password !== formData.confirmPassword) {errors.confirmPassword = 'Passwords do not match';}

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = {
      Name: formData.fullName,
      Username: formData.username,
      Email: formData.email,
      Gender: formData.gender,
      College: formData.college,
      Branch: formData.branch,
      Github: formData.github,
      LinkedIn: formData.linkedin,
      Role: formData.role,
      Skill: formData.skills,
      Year: formData.year,
      // Password: formData.password,
    };
    console.log(userData);

    if (validate()) {
      fetch(`http://localhost:3000/api/user/editProfile/${formData.username}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Form submitted successfully:', data);
          toast({
            title: 'Profile updated successfully',
          });
          setTimeout(() => {
            window.location.href = '/Home';
            navigate('/Home');
          }, 2000);
        })
        .catch((error) => {
          console.error('Error submitting form:', error);
        });
    }
  };

  const handleBackClick = () => {
    navigate('/Home'); // Navigate to the home page
  };

  return (
    <div className="bg-black flex flex-col justify-center items-center space-y-4 min-h-screen p-6">
      <div className="flex flex-row text-white gap-2 mb-4">
        <h1 className="text-white text-5xl font-semibold">EDIT</h1>
        <h1 className="text-yellow-500 text-5xl font-semibold">PROFILE</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 flex flex-col items-center w-full max-w-md md:max-w-2xl shadow-lg space-y-4">
        <div className="relative w-24 h-24 mb-4">
          <Avatar className="w-full h-full rounded-full object-cover border-4 border-green-500">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>GitHub</AvatarFallback>
          </Avatar>
          <label htmlFor="avatarInput" className="absolute right-0 bottom-0 w-6 h-6 bg-black text-white rounded-full flex justify-center items-center border border-white cursor-pointer">
            ✎
          </label>
          <input
            id="avatarInput"
            type="file"
            className="hidden"
            onChange={handleAvatarChange}
            accept="image/*"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
        <div className="">
            <label htmlFor="username" className="block text-gray-700 font-semibold">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border-2 border-black  bg-white   text-black  rounded-xl"
            />
            {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
          </div>

          <div className="">
            <label htmlFor="fullName" className="block text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border-2 border-black  bg-white   text-black  rounded-xl"
            />
            {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border-2 border-black  bg-white   text-black  rounded-xl"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="gender" className="block text-gray-700 font-semibold">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border-2 border-black  bg-white   text-black  rounded-xl"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="college" className="block text-gray-700 font-semibold">College</label>
            <input
              type="text"
              id="college"
              name="college"
              value={formData.college}
              onChange={handleChange}
              className="w-full p-2 border-2 border-black  bg-white   text-black  rounded-xl"
            />
          </div>

          <div>
            <label htmlFor="year" className="block text-gray-700 font-semibold">Year</label>
            <input
              type="text"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full p-2 border-2 border-black  bg-white   text-black  rounded-xl"
            />
          </div>

          <div>
            <label htmlFor="branch" className="block font-semibold text-gray-700 ">Branch</label>
            <input
              type="text"
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full p-2 border-2 border-black  bg-white   text-black  rounded-xl"
            />
          </div>

          <div>
            <label htmlFor="linkedin" className="block text-gray-700 font-semibold">LinkedIn</label>
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full p-2 border-2 border-black  bg-white   text-black  rounded-xl"
            />
          </div>

          <div>
            <label htmlFor="github" className="block text-gray-700 font-semibold">GitHub Username</label>
            <input
              type="text"
              id="github"
              name="github"
              value={formData.github}
              onChange={handleChange}
              className="w-full p-2 border-2 border-black  bg-white   text-black  rounded-xl"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-gray-700 font-semibold">Role</label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border-2 border-black  bg-white   text-black  rounded-xl"
            />
          </div>

          <div className="w-full">
              <label className="block text-gray-700 mb-2 font-semibold">Skills</label>
              {formData.skills.map((skill, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillChange(e, index)}
                    className="w-full p-2 border-2 border-black  bg-white   text-black  rounded-xl"
                  />
                  <button type="button" onClick={() => removeSkill(index)} className="ml-2 text-red-500">✖</button>
                </div>
              ))}
              <button type="button" onClick={addSkill} className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Skill
              </button>
          </div>
          
        </div>
        <div className='grid grid-cols-2 gap-4 w-full'>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border-2 border-black  bg-white   text-black  rounded-xl"
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border-2 border-black  bg-white   text-black  rounded-xl"
            />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
          </div>
          </div>

        

        <div className="flex gap-4">
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Save Changes
          </button>
          <button type="button" onClick={handleBackClick} className="bg-gray-500 text-white px-4 py-2 rounded">
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
