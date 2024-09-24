import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ setIsLoggedIn }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    gender: '',
    city: '',
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const handleInput = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate('/home', { state: formData });
    console.log(formData)
  };

  return (
    <div className="flex font-primary bg-white">
      <div className='flex justify-center items-center h-screen w-full sm:w-[50%]'>
      {step === 1 && (
        <div className='bg-white flex flex-col gap-10 px-10 py-8 rounded-xl shadow-lg sm:shadow-none'>
          <div>
            <h2 className='text-center text-xl font-semibold tracking-wide'>Welcome</h2>
            <h3 className='text-center opacity-70'>Please enter your details</h3>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="gender" className='text-lg'>Gender:</label>
            <input id='gender' type="text" name="gender" placeholder='Gender' value={formData.gender} onChange={handleInput} className="border rounded-lg p-2 outline-blue-500" />
          </div>
          <div  className='flex flex-col'>
            <label htmlFor="City" className='text-lg'>City:</label>
            <input id='City' type="text" name="city" placeholder='City' value={formData.city} onChange={handleInput} className="border rounded-lg p-2 outline-blue-500" />
          </div>
          <button onClick={nextStep} className="bg-blue-500 hover:bg-blue-800 rounded-md duration-200 text-white p-2">Next</button>
        </div>
      )}
      {step === 2 && (
        <div className='bg-white flex flex-col gap-10 px-10 py-8 rounded-xl shadow-lg sm:shadow-none'>
          <h2 className='text-center text-xl font-semibold tracking-wide'>Welcome</h2>
          <div className='flex flex-col'>
            <label htmlFor="firstname">Firstname:</label>
            <input id='firstname' type="text" name="firstname" placeholder='John' value={formData.firstname} onChange={handleInput} className="border rounded-lg p-2  outline-blue-500" />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="lastname">Lastname:</label>
            <input id='lastname' type="text" name="lastname" placeholder='Doe' value={formData.lastname} onChange={handleInput} className="border rounded-lg p-2  outline-blue-500" />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="email">Email:</label>
            <input id='email' type="email" name="email" placeholder='example@example.com' value={formData.email} onChange={handleInput} className="border rounded-lg px-2 pr-8 py-2 outline-blue-500" />
          </div>
          <div className='flex justify-between'>
            <button onClick={prevStep} className="bg-gray-500 hover:bg-gray-800 text-white px-6 rounded-md py-2">Back</button>
            <button onClick={nextStep} className="bg-blue-500 hover:bg-blue-800 px-6 rounded-md text-white py-2">Next</button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className='bg-white flex flex-col gap-10 px-10 py-8 rounded-xl shadow-lg sm:shadow-none'>
          <h2 className='text-center text-xl font-semibold tracking-wide'>Welcome</h2>
          <div className='flex flex-col'>
            <label htmlFor="password">Password:</label>
            <input id='password' placeholder='Password' type="password" name="password" value={formData.password} onChange={handleInput} className="border rounded-lg px-2 pr-8 py-2 outline-blue-500" />
          </div>
          <div className='flex justify-between'>
            <button onClick={prevStep} className="bg-gray-500  hover:bg-gray-800 px-6 rounded-md text-white py-2">Back</button>
            <button onClick={handleSubmit} className="bg-blue-500  hover:bg-blue-800 px-6 rounded-md text-white py-2">Sign Up</button>
          </div>
        </div>
      )}
      </div>
      <div className='h-screen w-[50%] hidden sm:flex justify-center relative items-center bg-blue-50'>
        <img src="./Assets/FormImage.png" className='border-[2px] border-black rounded-[3rem] ml-[10vh]' width={1000} alt="" />
      </div>
    </div>
  );
};

export default Signup;
