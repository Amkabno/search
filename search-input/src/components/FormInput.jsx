import React from "react";

export const FormInput = ({
  label,
  name,
  type,
  placeholder,
  error,
  handleInput,
  errorMsg,
}) => {
  return (
    <div className="w-full flex-col gap-2">
      <p className="font-[600] py-[4px] text-[14px] text-[#334155] mt-[4px]">
        {label}
        <span className="text-red-600">*</span>
      </p>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full  rounded-lg outline-0  border-1 border-[#CBD5E1] focus:border-[#0CA5E9] h-[32px] py-[20px] px-[15px]"
        onChange={handleInput}
        style={{
          borderColor: error && "#E14942",
          color: error && "#E14942",
        }}
      />
      {error && (
        <p className="text-[#E14942] text-[14px] mt-[2px]">{errorMsg}</p>
      )}
    </div>
  );
};
