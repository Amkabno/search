import React from "react";

export const FormInput = ({
  label,
  name,
  type,
  placeholder,
  error,
  handleInput,
}) => {
  return (
    <div className="w-full flex-col gap-2">
      <p className="font-bold">
        {label}
        <span className="text-red-600"></span>
      </p>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full p-3 rounded-lg border focus:border-[#0CA5E9]"
        onChange={handleInput}
        style={{
          borderColor: error ? "#E14942" : "#CBD5E1",
          color: error && "#E14942",
        }}
      />
      {error && <p className="text-[#E14942]">{errorMsg}</p>}
    </div>
  );
};
