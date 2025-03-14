import { FormInput } from "@/components/FormInput";
import React from "react";

export const InfoStep = ({ handleSubmit, stepCount, handleInput }) => {
  return (
    <from
      className="flex flex-col gap-3 justify-between h-full"
      onSubmit={handleSubmit}
    >
      <div>
        <FormInput
          label={"  Email "}
          name={"firstName"}
          type={"text"}
          placeholder={"Enter Email"}
          error={null}
          errorMsg={"Please provide a valid email address."}
          handleInput={handleInput}
        />

        <FormInput
          label={"   Phone Number "}
          name={"lastName"}
          type={"text"}
          placeholder={"Enter phone number"}
          error={null}
          errorMsg={"Please enter a valid phone number."}
          handleInput={handleInput}
        />

        <FormInput
          label={"Password "}
          name={"userName"}
          type={"text"}
          placeholder={"Enter password"}
          error={null}
          errorMsg={"Password must include letters and numbers."}
          handleInput={handleInput}
        />
        <FormInput
          label={"  Confirm Password "}
          name={"userName"}
          type={"text"}
          placeholder={"Enter password"}
          error={null}
          errorMsg={"Passwords do not match. Please try again."}
          handleInput={handleInput}
        />
      </div>
    </from>
  );
};
