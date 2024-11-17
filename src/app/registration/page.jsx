// components/RegistrationPage.js
"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const RegistrationPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isRegistering, setIsRegistering] = useState(false);

  // Handle form submission
  const onSubmit = (data) => {
    setIsRegistering(true);
    // Simulate an API call (replace with actual registration logic)
    setTimeout(() => {
      alert('Registration successful');
      console.log(data); // Send this data to your API for user creation
      setIsRegistering(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        {/* Registration Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              {...register('name', { required: "Name is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
          </div>

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
                  value: /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/,
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

          {/* Confirm Password Field */}
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-600">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              {...register('confirmPassword', {
                required: "Confirm password is required",
                validate: (value) => value === watch('password') || "Passwords do not match"
              })}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              disabled={isRegistering}
              className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {isRegistering ? "Registering..." : "Register"}
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
