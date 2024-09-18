import React, { useState } from 'react';

const Signup = ({ setIsLoggedIn }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const handleInput = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true); // simulate login
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {step === 1 && (
        <div>
          <h2>Step 1: Enter Name</h2>
          <input type="text" name="name" value={formData.name} onChange={handleInput} className="border p-2" />
          <button onClick={nextStep} className="bg-blue-500 text-white p-2">Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Step 2: Enter Email</h2>
          <input type="email" name="email" value={formData.email} onChange={handleInput} className="border p-2" />
          <button onClick={prevStep} className="bg-gray-500 text-white p-2">Back</button>
          <button onClick={nextStep} className="bg-blue-500 text-white p-2">Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Step 3: Enter Password</h2>
          <input type="password" name="password" value={formData.password} onChange={handleInput} className="border p-2" />
          <button onClick={prevStep} className="bg-gray-500 text-white p-2">Back</button>
          <button onClick={handleSubmit} className="bg-green-500 text-white p-2">Sign Up</button>
        </div>
      )}
    </div>
  );
};

export default Signup;
