import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    gender: "",
    city: "",
    username: "",
    password: "",
    email: "",
    additionalInfo: ""
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission (final stage)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    navigate('/home')
  };

  // Render forms for each step
  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">Step 1: Gender and City</h2>
            <label className="block text-lg font-medium mb-2">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded-md mb-4"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <label className="block text-lg font-medium mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border rounded-md mb-4"
            />
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setStep(2)}
                className="border-[1px] border-blue-500 duration-200 text-blue-500 px-6 py-2 rounded-md hover:text-white hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">Step 2: Username, Password, and Email</h2>
            <label className="block text-lg font-medium mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded-md mb-4"
            />
            <label className="block text-lg font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md mb-4"
            />
            <label className="block text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md mb-4"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setStep(1)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Previous
              </button>
              <button
                onClick={() => setStep(3)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">Step 3: Additional Information</h2>
            <label className="block text-lg font-medium mb-2">Additional Info</label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full p-2 border rounded-md mb-4"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setStep(2)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Previous
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return <div>Invalid Step</div>;
    }
  };

  return <div className="min-h-screen bg-gray-100 flex items-center justify-center">{renderForm()}</div>;
};

export default LoginForm;
