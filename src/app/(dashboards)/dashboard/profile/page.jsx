"use client"
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';  // Import React Hook Form

const Profile = () => {
  // State to store user data and manage edit mode
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // State for edit mode

  // React Hook Form setup
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  // Fetch user data on mount
  useEffect(() => {
    // Simulate fetching user data
    const fetchedUser = {
      name: "John Doe",
      email: "john.doe@example.com",
      bio: "A passionate TVET student focused on technical skills and career growth.",
    };
    setUser(fetchedUser);

    // Pre-fill form with existing data
    setValue("name", fetchedUser.name);
    setValue("email", fetchedUser.email);
    setValue("bio", fetchedUser.bio);
  }, [setValue]);

  // Handle form submission
  const onSubmit = (data) => {
    // Handle form submission (e.g., save the updated user data)
    setUser(data);  // Update user data with the form input
    setIsEditing(false); // Exit edit mode after saving
    alert('Profile updated!');
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Your Profile</h2>

      {/* Toggle between viewing and editing the profile */}
      {!isEditing ? (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Name</h3>
            <p className="text-gray-600">{user.name}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">Email</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">Bio</h3>
            <p className="text-gray-600">{user.bio}</p>
          </div>

          {/* Edit Button */}
          <div className="mt-8">
            <button 
              onClick={() => setIsEditing(true)} 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-8">
          <div>
            <label htmlFor="name" className="text-xl font-semibold text-gray-700">Name</label>
            <input
              id="name"
              name="name"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="text-xl font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="bio" className="text-xl font-semibold text-gray-700">Bio</label>
            <textarea
              id="bio"
              name="bio"
              rows="4"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              {...register("bio", { required: "Bio is required" })}
            ></textarea>
            {errors.bio && <p className="text-red-500">{errors.bio.message}</p>}
          </div>

          <div className="mt-8">
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;
