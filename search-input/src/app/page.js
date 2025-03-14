"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NameStep } from "@/steps/NameStep";
import { InfoStep } from "@/steps/InfoStep";
import { ProfileStep } from "@/steps/ProfileStep";
import { LastStep } from "@/steps/LastStep";
import { useState } from "react";
import { initialFormValues } from "@/utils/constants";

export default function Home() {
  const [stepCount, setStepCount] = useState(0);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormValues);

  const handleNextStep = (event) => {
    event.preventDefault();

    if (formValues.firstName === "") {
      setFormErrors((previousValues) => ({
        ...previousValues,
        firstName: "Firstname is empty",
      }));
      return;
    }

    if (stepCount >= 3) {
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

  console.log(formValues);

  const steps = [NameStep, InfoStep, ProfileStep];
  const CurrentStep = steps[stepCount];

  return (
    <div className="flex h-screen w-screen justify-center items-center bg-[#f4f4f4]">
      {stepCount < 3 ? (
        <div className="w-[448px] h-[623px] p-[32px] bg-white flex rounded-[8px] flex-col justify-between">
          <div className="flex flex-col gap-5 h-full">
            <Header />
            <CurrentStep
              handleSubmit={handleNextStep}
              stepCount={stepCount}
              handleInput={handleInputChange}
              handlePreviousStep={handlePreviousStep}
            />
            <div className="flex h-full items-end">
              <Footer
                handleNext={handleNextStep}
                stepCount={stepCount + 1}
                handlePrevious={handlePreviousStep}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[448px] h-object-fit p-[32px] bg-white flex rounded-[8px] flex-col justify-between">
          <LastStep />
        </div>
      )}
    </div>
  );
}
