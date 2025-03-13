import React from "react";
import { FormInput } from "@/components/FormInput";

export const NameStep = ({ handleSubmit, stepCount, handleInput, s }) => {
  return (
    <form
      className="flex flex-col gap-3 justify-between h-full"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2">
        <FormInput
          label={
            <>
              First Name <span style={{ color: "#e14942" }}>*</span>
            </>
          }
          name={"firstName"}
          type={"text"}
          placeholder={"Enter first name"}
          error={null}
          handleInput={handleInput}
        />

        <FormInput
          label={
            <>
              Last Name <span style={{ color: "#e14942" }}>*</span>
            </>
          }
          name={"lastName"}
          type={"text"}
          placeholder={"Enter last name"}
          error={null}
          handleInput={handleInput}
        />

        <FormInput
          label={
            <>
              User Name <span style={{ color: "#e14942" }}>*</span>
            </>
          }
          name={"userName"}
          type={"text"}
          placeholder={"Enter user name"}
          error={null}
          handleInput={handleInput}
        />
      </div>
    </form>
  );
};
