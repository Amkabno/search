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
          label={
            <>
              Email <span style={{ color: "#e14942" }}>*</span>
            </>
          }
          name={"firstName"}
          type={"text"}
          placeholder={"Enter Email"}
          error={null}
          handleInput={handleInput}
        />

        <FormInput
          label={
            <>
              Phone Number <span style={{ color: "#e14942" }}>*</span>
            </>
          }
          name={"lastName"}
          type={"text"}
          placeholder={"Enter phone number"}
          error={null}
          handleInput={handleInput}
        />

        <FormInput
          label={
            <>
              Password <span style={{ color: "#e14942" }}>*</span>
            </>
          }
          name={"userName"}
          type={"text"}
          placeholder={"Enter password"}
          error={null}
          handleInput={handleInput}
        />
        <FormInput
          label={
            <>
              Confirm Password <span style={{ color: "#e14942" }}>*</span>
            </>
          }
          name={"userName"}
          type={"text"}
          placeholder={"Enter password"}
          error={null}
          handleInput={handleInput}
        />
      </div>
    </from>
  );
};
