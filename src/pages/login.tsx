import React from "react";

//--INTERNAL IMPORTS
import MainPageLayout from "@/src/layouts/MainPageLayout";
import { LoginForm } from "@/src/components/common/Form";

const Login = () => {
  return (
    <MainPageLayout>
      <div className="bg-white py-[12rem] container page_padding grid grid-cols-2 gap-10 items-center md1000:grid-cols-1">
        <div className=" py-[5rem] flex justify-center">
          <LoginForm />
        </div>

        <div className="flex flex-col items-center px-10 py-20 text-center page_padding">
          <h2 className="font-bold text-[2.6rem] text-black md1000:text-[1.7rem]">
            New Customers
          </h2>
          <p className=" text-black text-[15px]">
            Register with Niogalia today
          </p>
          <button className="bg-black text-white font-medium text-[1.2rem] px-40 py-4 rounded-full mt-10 md1000:px-10 ">
            Register Now
          </button>
        </div>
      </div>
    </MainPageLayout>
  );
};

export default Login;
