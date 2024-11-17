// components/LoginPage.js
"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Handle form submission
  const onSubmit = (data) => {
    setIsLoggingIn(true);
    // Simulate an API call (replace with actual login logic)
    setTimeout(() => {
      alert('Logged in successfully');
      console.log(data); // Send this data to your API for authentication
      setIsLoggingIn(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              {...register('email', { 
                required: "Email is required", 
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Please enter a valid email address"
                }
              })}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register('password', { 
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {isLoggingIn ? "Logging In..." : "Login"}
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="text-center">
            <a href="#" className="text-blue-600 hover:underline">
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
