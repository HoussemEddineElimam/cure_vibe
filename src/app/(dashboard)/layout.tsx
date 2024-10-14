import Link from 'next/link';
import React from 'react';
import { 
  LayoutDashboard, 
  User, 
  CalendarCheck,  // For Appointments
  Stethoscope,      // For Doctors
  Mail
} from 'lucide-react';
import Header from '@/components/ui/Header';
import Image from 'next/image';
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden flex bg-teal-700">
      <Header />
      <aside className="flex flex-col items-start py-6 px-6 text-white w-full lg:w-[17.5%] h-[100vh] fixed">
        <Link href="/" className="flex flex-col items-center h-auto bg-teal-600 rounded-md cursor-pointer w-full mb-8 transition-all hover:scale-105 hover:shadow-md">
          <Image
            src="/assets/images/logo.png"
            height={64}
            width={64}
            alt="logo"
            className="mb-2 h-14 w-14 object-contain"
          />
          <h4 className="text-2xl font-extrabold text-gray-50">CureVibe</h4>
        </Link>
        <ul className="flex flex-col gap-6 w-full">
          <li className="w-full cursor-pointer">
            <Link href="/" className="flex gap-4 items-center p-3 rounded-md transition-all hover:bg-teal-800 hover:scale-105">
              <LayoutDashboard className="text-cyan-200" />
              <span className="text-lg font-medium">Dashboard</span>
            </Link>
          </li>

          <li className="w-full cursor-pointer">
            <Link href="/patients" className="flex gap-4 items-center p-3 rounded-md transition-all hover:bg-teal-800 hover:scale-105">
              <User className="text-cyan-200" />
              <span className="text-lg font-medium">Patients</span>
            </Link>
          </li>

          {/* New Doctors Link */}
          <li className="w-full cursor-pointer">
            <Link href="/doctors" className="flex gap-4 items-center p-3 rounded-md transition-all hover:bg-teal-800 hover:scale-105">
              <Stethoscope className="text-cyan-200" />
              <span className="text-lg font-medium">Doctors</span>
            </Link>
          </li>

          {/* New Appointments Link */}
          <li className="w-full cursor-pointer">
            <Link href="/appointments" className="flex gap-4 items-center p-3 rounded-md transition-all hover:bg-teal-800 hover:scale-105">
              <CalendarCheck className="text-cyan-200" />
              <span className="text-lg font-medium">Appointments</span>
            </Link>
          </li>
          <li className="w-full cursor-pointer">
            <Link href="/message" className="flex gap-4 items-center p-3 rounded-md transition-all hover:bg-teal-800 hover:scale-105">
              <Mail className="text-cyan-200" />
              <span className="text-lg font-medium">Message</span>
            </Link>
          </li>
        </ul>
      </aside>

      <div className="flex-1 ml-[17.5%] mt-16 overflow-y-auto py-4 rounded-lg bg-teal-50">
        {children}
      </div>
    </div>
  );
};

export default Layout;
