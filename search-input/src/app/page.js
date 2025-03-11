"use client";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { FormInput } from "@/components/FormInput";

import { useState } from "react";

export default function Home() {
  const [stepCount, setStepCount] = useState(1);
  const handleNextStep = () => {
    if (stepCount >= 3) {
      return;
    }
    setStepCount(stepCount + 1);
  };
  const handlePreviousStep = () => {
    if (stepCount <= 1) {
      return;
    }
    setStepCount(stepCount - 1);
  };
  return (
    <div className="flex h-[100vh] justify-center items-center bg-[#f4f4f4]  ">
      <div className="w-[448px] h-[623px] p-[32px] bg-white flex rounded-[8px] flex-col">
        <img src="pinecone.svg" className="w-[60px]"></img>
        <div className="flex flex-col">
          <h1 className="text-[26px] font-[600] ">Join Us! 😎 </h1>
          <p className="text-[#8E8E8E] text-[17px] font-[400] ">
            {" "}
            Please provide all current information accurately.
          </p>
        </div>
        <div className="flex flex-col gap-[8px] py-[25px]">
          {" "}
          <FormInput Name="First Name " />
          <FormInput Name="Last Name " />
          <FormInput Name="User Name " />
        </div>
        <div className="flex h-full items-end">
          <Footer />
        </div>
      </div>
    </div>
  );
}
