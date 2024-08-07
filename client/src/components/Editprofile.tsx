import  { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AvatarFallback, AvatarImage, Avatar } from './ui/avatar';

interface FormData {
  fullName: string;
  email: string;
  gender: string;
  skills: string[];  // Changed from single skill to an array of skills
  college: string;
  year: string;
  branch: string;
  linkedin: string;
  github: string;
  role: string;
  password: string;
  confirmPassword: string;
  avatar: string;  // Avatar field remains the same
}

function EditProfile() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    gender: '',
    skills: [''],  // Initialize with an empty string for the first skill
    college: '',
    year: '',
    branch: '',
    linkedin: '',
    github: '',
    role: '',
    password: '',
    confirmPassword: '',
    avatar: 'https://avatars.githubusercontent.com/u/114240845?s=400&u=c23a378d6835e8379337c1e3be9a6ff61cf7aa71&v=4',
});

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

  const [errors, setErrors] = useState<FormErrors>({});
  const navigate = useNavigate(); // React Router's navigate function

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.password) {errors.password = 'Password is required';}
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      // Handle successful form submission
      console.log('Form submitted successfully:', formData);
    }
  };

  const handleBackClick = () => {
    navigate('/'); // Navigate to the home page
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
  
                                      // Fetching data from API
  
  fetch(`http://localhost:3000/api/user/editProfile/${Username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  



  return (
    <div className="bg-black flex flex-col justify-center items-center space-y-4 min-h-screen p-6">
      {/* Header */}
      <div className="flex flex-row text-white gap-2 mb-4">
        <h1 className="text-white text-5xl font-semibold">EDIT</h1>
        <h1 className="text-yellow-500 text-5xl font-semibold">PROFILE</h1>
      </div>

      {/* Profile Edit Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 flex flex-col items-center w-full max-w-md md:max-w-2xl shadow-lg space-y-4">
        
        <div className="relative w-24 h-24 mb-4">
          <Avatar className="w-full h-full rounded-full object-cover border-4 border-green-500">
            <AvatarImage src={formData.avatar} />
            <AvatarFallback>CN</AvatarFallback>
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

        {/* Input Fields */}
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="col-span-2 md:col-span-1">
            <input
              className={`w-full border-2 ${errors.fullName ? 'border-red-500' : 'border-black'} bg-white text-black rounded-xl px-3 py-2 outline-none`}
              name="Name"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              className={`w-full border-2 ${errors.email ? 'border-red-500' : 'border-black'} bg-white text-black rounded-xl px-3 py-2 outline-none`}
              name="Email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              className="w-full border-2 bg-white text-black rounded-xl px-3 py-2 outline-none border-black"
              name="Gender"
              value={formData.gender}
              onChange={handleChange}
              placeholder="Gender"
              required
            />
          </div>
                  <div className="col-span-2 md:col-span-1">
                    {formData.skills.map((skill, index) => (
                    <div key={index} className="flex items-center mb-2">
                    <input
                    className="w-full border-2 bg-white text-black rounded-xl px-3 py-2 outline-none border-black"
                    name={`skill-${index}`}
                    value={skill}
                    onChange={(e) => handleSkillChange(e, index)}
                    placeholder={`Skill ${index + 1}`}
                    required
              />
              {formData.skills.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                  className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addSkill}
            className="mt-2 bg-blue-500 text-white px-3 py-2 rounded"
          >
            Add Skill
          </button>
</div>
          <div className="col-span-2 md:col-span-1">
            <input
              className="w-full border-2 bg-white text-black rounded-xl px-3 py-2 outline-none border-black"
              name="College"
              value={formData.college}
              onChange={handleChange}
              placeholder="College"
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              className="w-full border-2 bg-white text-black rounded-xl px-3 py-2 outline-none border-black"
              name="Year"
              value={formData.year}
              onChange={handleChange}
              placeholder="Year"
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              className="w-full border-2 bg-white text-black rounded-xl px-3 py-2 outline-none border-black"
              name="Branch"
              value={formData.branch}
              onChange={handleChange}
              placeholder="Branch"
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              className="w-full border-2 bg-white text-black rounded-xl px-3 py-2 outline-none border-black"
              name="LinkedIn"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="LinkedIn"
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              className="w-full border-2 bg-white text-black rounded-xl px-3 py-2 outline-none border-black"
              name="Github"
              value={formData.github}
              onChange={handleChange}
              placeholder="Github"
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              className="w-full border-2 bg-white text-black rounded-xl px-3 py-2 outline-none border-black"
              name="Role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Role"
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              className={`w-full border-2 ${errors.password ? 'border-red-500' : 'border-black'} bg-white text-black rounded-xl px-3 py-2 outline-none`}
              name="Password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              type="password"
              required
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              className={`w-full border-2 ${errors.confirmPassword ? 'border-red-500' : 'border-black'} bg-white text-black rounded-xl px-3 py-2 outline-none`}
              name="ConfirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              type="password"
              required
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>
        </div>

        {/* Back and Save Button */}
        <div className="flex justify-between flex-row w-full mt-8">
          <button type="button" onClick={handleBackClick} className="bg-black text-white rounded-full px-6 py-2 hover:bg-gray-800">
            BACK
          </button>
          <button type="submit" className="bg-black text-white rounded-full px-6 py-2 hover:bg-gray-800">
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
