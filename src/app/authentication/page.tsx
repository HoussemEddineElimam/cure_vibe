"use client"
import Image from "next/image";
import { PatientForm } from "../../components/forms/PatientForm"; // Make sure this path is correct
import { useState } from "react";

const Page = () => {
  const [isLogin , setIsLogin] = useState(false)
  return (
    <div className="flex h-screen max-h-screen overflow-hidden">

      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[496px]">
          <div className="flex items-center gap-2"> <Image
            src="/assets/images/logo.png"
            height={800}
            width={800}
            alt="logo"
            className="mb-6 h-16 w-16"
          />
          <h1 className="text-3xl font-bold text-gray-50">CureVibe</h1>
          </div>
          <PatientForm isLogin={isLogin} />
          <div className="text-14-regular mt-2 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CureVibe
            </p>
            <span onClick={()=>{setIsLogin(!isLogin)}} className="text-green-500 cursor-pointer">
              {isLogin?"Register":"Login"}
            </span>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.webp"
        height={1000}
        width={1000}
        alt="onboarding"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default Page;
