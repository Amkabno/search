import React from "react";

export const ProfileStep = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-[8px]">
        <div className="flex ">
          <p className="text-[#334155] text-[15px] font-[600]">Date of birth</p>
          <p className="text-red-600 tracking-[-0.14px] text-[15px] leading-[16px] font-[600]">
            *
          </p>
        </div>
        <input
          className="focus-visible:border-[#0fa4e9] border-[1.5px] border-solid w-full bg-transparent  border-[#cbd5e1] p-[12px] text-[16px] font-[400] rounded-[8px] outline-none h-[46px] "
          type="date"
        />
      </div>
    </div>
  );
};
