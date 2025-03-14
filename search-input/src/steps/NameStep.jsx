import React from "react";
import { FormInput } from "@/components/FormInput";

export const NameStep = ({ handleSubmit, stepCount, handleInput, s }) => {
  return (
    <form
      className="flex flex-col gap-3 justify-between h-full"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col ">
        <FormInput
          label={" First Name "}
          name={"firstName"}
          type={"text"}
          placeholder={"Enter first name"}
          error={null}
          errorMsg={"First name cannot contain special characters or numbers."}
          handleInput={handleInput}
        />

        <FormInput
          label={"Last Name "}
          name={"lastName"}
          type={"text"}
          placeholder={"Enter last name"}
          error={null}
          errorMsg={"Last name cannot contain special characters or numbers."}
          handleInput={handleInput}
        />

        <FormInput
          label={" User Name "}
          name={"userName"}
          type={"text"}
          placeholder={"Enter user name"}
          error={null}
          errorMsg={
            "This username is already taken. Please choose another one."
          }
          handleInput={handleInput}
        />
      </div>
    </form>
  );
};
