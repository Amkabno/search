"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NameStep } from "@/steps/NameStep";
import { InfoStep } from "@/steps/InfoStep";
import { ProfileStep } from "@/steps/ProfileStep";
import { useState } from "react";
import { initialFormValues } from "@/utils/constants";

export default function Home() {
  const [stepCount, setStepCount] = useState(0);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormValues);

  const handleNextStep = (event) => {
    event.preventDefault();

    if (stepCount >= 2) {
      return;
    }
    setStepCount(stepCount + 1);
  };
  const handlePreviousStep = () => {
    if (stepCount <= 0) {
      return;
    }
    setStepCount(stepCount - 1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  const CurrentStep = [NameStep, InfoStep, ProfileStep][stepCount];

  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center bg-[#f4f4f4]  ">
      <div className="w-[448px] h-[623px] p-[32px] bg-white flex rounded-[8px] flex-col justify-between">
        <div className="flex flex-col gap-7 h-full">
          <Header />

          <CurrentStep
            handleSubmit={handleNextStep}
            stepCount={stepCount}
            handleInput={handleInputChange}
            handlePreviousStep={handlePreviousStep}
          />
          <Footer />
        </div>
      </div>
    </div>
  );
}
