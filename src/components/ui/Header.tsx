import { Bell, Search, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  return (
    <nav className='flex items-center justify-between w-[82.5%] fixed right-0 h-16 shadow-lg px-8'>
      <div className='relative w-1/3'>
        <input
          type="text"
          placeholder="Search..."
          className='w-full p-2 pl-10 bg-teal-800 text-white rounded-md outline-none placeholder-cyan-200 focus:ring-2 focus:ring-cyan-500'
        />
        <Search className='absolute left-3 top-2 text-cyan-200' size={20} />
      </div>

      <div className='flex items-center gap-6'>
        <div className="relative cursor-pointer">
          <Bell className="text-cyan-200 hover:text-white transition-colors" size={24} />
          <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-600 rounded-full"></span>
        </div>

        <div className="relative flex items-center gap-2 cursor-pointer group">
          <Image
            src="/assets/images/admin.png" 
            alt="Profile"
            width={35}
            height={35}
            className="rounded-full border-2 border-teal-400"
          />
          <span className="text-white font-medium">Houssem Elimam</span>
          <ChevronDown className="text-cyan-200 group-hover:text-white transition-colors" size={20} />

          <div className="absolute right-0 top-[1%] mt-8 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
            <ul className="py-2 text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
