import React from 'react';

const DoctorCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-xs text-center">
      <div className="flex justify-center">
        <img
          src="https://via.placeholder.com/100"
          alt="Doctor"
          className="w-20 h-20 rounded-full border-2 border-gray-300"
        />
      </div>
      <h2 className="mt-4 text-lg font-semibold text-gray-900">Mario Speedwagon</h2>
      <p className="text-sm text-gray-500">Cardiologist</p>
      
      <div className="flex justify-center items-center mt-3">
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <svg key={index} className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.167 3.58a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.12 2.267a1 1 0 00-.364 1.118l1.167 3.58c.3.921-.755 1.688-1.539 1.118l-3.12-2.267a1 1 0 00-1.175 0l-3.12 2.267c-.783.57-1.838-.197-1.539-1.118l1.167-3.58a1 1 0 00-.364-1.118L2.47 9.007c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.167-3.58z" />
            </svg>
          ))}
        </div>
      </div>

      <button className="mt-5 bg-teal-500 text-white font-medium py-2 px-4 rounded-lg">
        BOOK APPOINTMENT
      </button>
    </div>
  );
};

export default DoctorCard;
