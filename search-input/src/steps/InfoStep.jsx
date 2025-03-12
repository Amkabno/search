import React from "react";

export const InfoStep = ({ handleSubmit, stepCount, handleInput }) => {
  return (
    <from
      className="flex flex-col gap-3 justify-between h-full"
      onSubmit={handleSubmit}
    >
      <div>
        <FormInput
          label={"Gmail"}
          name={"firstName"}
          type={"text"}
          placeholder={"Enter first name"}
          error={null}
          handleInput={handleInput}
        />

        <FormInput
          label={"Last Name"}
          name={"lastName"}
          type={"text"}
          placeholder={"Enter last name"}
          error={null}
          handleInput={handleInput}
        />

        <FormInput
          label={"User Name"}
          name={"userName"}
          type={"text"}
          placeholder={"Enter user name"}
          error={null}
          handleInput={handleInput}
        />
      </div>
    </from>
  );
};
