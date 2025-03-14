import { FormInput } from "@/components/FormInput";
import React from "react";

export const ProfileStep = ({ handleSubmit, stepCount, handleInput }) => {
  return (
    <from
      className="flex flex-col gap-3 justify-between h-full"
      onSubmit={handleSubmit}
    >
      <div>
        <FormInput
          label={"Date of birth"}
          name={"dateOfBirth"}
          type={"date"}
          error={null}
          errorMsg={"Please select a date."}
          handleInput={handleInput}
        />
      </div>
      <div>
        <FormInput
          label={"Profile image"}
          name={"profileImage"}
          type={"image"}
          placeholder={"Add image"}
          error={null}
          errorMsg={"Image cannot be blank"}
          handleInput={handleInput}
        />
      </div>
    </from>
  );
};
