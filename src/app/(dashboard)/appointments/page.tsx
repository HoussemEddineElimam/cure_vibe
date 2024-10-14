import { Search } from 'lucide-react';
import React from 'react';

const AppointmentsPage = () => {
  return (
    <div className="appointments-page min-h-screen p-10 bg-gray-50 text-gray-900"> {/* Light background and dark text */}
      {/* Header Section */}
      <header className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold">Appointments</h2>
        <div className="relative w-[300px]">
          <input
            type="search"
            className="w-full h-12 pl-10 pr-4 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Search by name"
          />
          <Search className="absolute text-gray-400 top-3 left-3 h-5 w-5" />
        </div>
      </header>

      {/* Button Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <button className="py-2 px-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
            Clinic Consulting
          </button>
        </div>

        <div className="flex gap-4">
          <button className="py-2 px-4 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition"> {/* Light buttons */}
            List
          </button>
          <button className="py-2 px-4 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition">
            Week
          </button>
          <button className="py-2 px-4 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition">
            Day
          </button>
        </div>
      </div>

      {/* Appointment Cards */}
      <div className="space-y-4">
        {[1, 2, 3, 4].map((appointment) => (
          <div key={appointment} className="flex justify-between items-center p-6 bg-white rounded-lg shadow-md"> {/* Light card with shadow */}
            <div className="flex items-center gap-4">
              {false ? (
                <img
                  src={`https://i.pravatar.cc/150?img=${appointment}`}
                  alt="Patient Avatar"
                  className="w-14 h-14 rounded-full"
                />
              ) : (
                <span className="w-14 h-14 rounded-full text-2xl font-extrabold bg-teal-500 text-white flex items-center justify-center">
                  H
                </span>
              )}
              <div>
                <h3 className="text-lg font-bold text-gray-900">Patient Name</h3> {/* Darker text for contrast */}
                <p className="text-gray-500">Clinic Consultation</p>
                <p className="text-gray-500">9:30 am, Jun 24, 2021</p>
              </div>
            </div>

            {/* Appointment Details */}
            <div className="flex flex-col items-start">
              <p className="text-gray-500">
                Infectious Diseases Hub aims to provide up-to-date, essential research.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button className="text-white bg-red-700 px-2 py-2 rounded-lg">Cancel</button>
              <button className="text-white bg-blue-700 px-2 py-2 rounded-lg">Reschedule</button>
              <button className="bg-teal-500 py-2 px-3 text-white rounded-lg">Confirm</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsPage;
