import DoctorCard from '@/components/DoctorCard'
import React from 'react'

const page = () => {
  return (
    <div className="w-full h-full p-4 bg-gray-50"> {/* Add light background */}
      {/* Header Section */}
      <header className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Doctors</h2> {/* Darker text for light theme */}
        <button className="bg-teal-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-teal-400 transition duration-300"> {/* Lighter hover for accessibility */}
          Add Doctor
        </button>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((d) => (
          <DoctorCard key={d} />
        ))}
      </div>
    </div>
  );
}

export default page;
