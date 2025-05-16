import React from 'react';
const Profile = () => {
  const img = localStorage.getItem("usrimg");
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-purple-400">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full text-center">
        <img
          className="w-24 h-24 rounded-full mx-auto mb-4"
          src={img}
          alt="User Avatar"
        />
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">{email}</p>
        <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;