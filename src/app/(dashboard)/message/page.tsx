import React from 'react';

const Page = () => {
  return (
    <div className="flex h-[100%] bg-white">
      <div className="w-1/4 p-4 bg-gray-100">
        <h2 className="text-gray-800 text-xl font-bold mb-4">Messages</h2>
        <input
          type="text"
          placeholder="Search for message"
          className="w-full p-2 rounded bg-white border border-gray-300 text-gray-800 mb-4"
        />
        <h3 className="text-gray-600 mb-2">Recent Chat</h3>
        <div className="space-y-2 overflow-y-auto">
          {["Jone Martin", "Jhon Smith", "Jhon Smith"].map((name, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-200 p-2 rounded cursor-pointer hover:bg-gray-300"
            >
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/40"
                  alt="avatar"
                  className="rounded-full w-10 h-10 mr-3"
                />
                <div>
                  <p className="text-gray-800">{name}</p>
                  <p className="text-sm text-gray-600">I hope you get well soon</p>
                </div>
              </div>
              <div className="text-gray-600 text-sm">17:10</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex-1 flex flex-col p-6 bg-gray-50">
        {/* Chat Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-300">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="avatar"
              className="rounded-full w-10 h-10 mr-3"
            />
            <div>
              <p className="text-gray-800">Jone Martin</p>
              <p className="text-sm font-bold text-green-500">Online</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 mt-4">
          <div className="flex">
            <img
              src="https://via.placeholder.com/40"
              alt="avatar"
              className="rounded-full w-10 h-10 mr-3"
            />
            <div>
              <p className="text-gray-800 bg-gray-200 p-3 rounded-lg">Hi Doctor, I am not fine...</p>
              <p className="text-xs text-gray-500 mt-1">Today 7:45 am</p>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-md">
              <p className="text-white bg-teal-500 p-3 rounded-lg">Good Morning! Let me know...</p>
              <p className="text-xs text-gray-400 mt-1 text-right">Today 7:55 am</p>
            </div>
            <img
              src="https://via.placeholder.com/40"
              alt="avatar"
              className="rounded-full w-10 h-10 ml-3"
            />
          </div>

          <div className="flex">
            <img
              src="https://via.placeholder.com/40"
              alt="avatar"
              className="rounded-full w-10 h-10 mr-3"
            />
            <div>
              <p className="text-gray-800 bg-gray-200 p-3 rounded-lg">Hi Doctor, I am not fine...</p>
              <p className="text-xs text-gray-500 mt-1">Today 7:45 am</p>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-md">
              <p className="text-white bg-teal-500 p-3 rounded-lg">Good Morning! Let me know...</p>
              <p className="text-xs text-gray-400 mt-1 text-right">Today 7:55 am</p>
            </div>
            <img
              src="https://via.placeholder.com/40"
              alt="avatar"
              className="rounded-full w-10 h-10 ml-3"
            />
          </div>
        </div>

        {/* Message Input */}
        <div className="flex items-center mt-4 border-t border-gray-300 pt-4">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 bg-gray-100 text-gray-800 p-3 rounded-lg border border-gray-300"
          />
          <button className="bg-teal-500 p-3 rounded-full text-white ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9-7-9-7-9 7 9 7z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-1/4 bg-gray-100 p-4">
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/60"
            alt="avatar"
            className="rounded-full w-16 h-16 mr-3"
          />
          <div>
            <p className="text-gray-800 text-lg">Mr. Jone Martin</p>
            <p className="text-sm text-gray-600">30 Years, Male</p>
          </div>
        </div>

        {/* Personal Info */}
        <div className="space-y-4 text-sm text-gray-600">
          <p>Phone: <span className="text-gray-800">(704) 555-0127</span></p>
          <p>Last Appointment: <span className="text-gray-800">14 February 2021</span></p>
        </div>
        <div className="mt-6">
          <h4 className="text-gray-600 mb-2">Shared Images</h4>
          <div className="grid grid-cols-3 gap-2">
            {/* Placeholder for images */}
            {Array(6).fill(0).map((_, idx) => (
              <img
                key={idx}
                src="https://via.placeholder.com/50"
                alt="shared"
                className="w-full h-full object-cover rounded"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page;
