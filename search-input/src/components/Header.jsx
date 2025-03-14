import React from "react";

export const Header = () => {
  return (
    <div className="flex flex-col">
      <img src="pinecone.svg" className="w-[60px]"></img>
      <div className="flex flex-col">
        <h1 className="text-[26px] font-[600] ">Join Us! 😎 </h1>
        <p className="text-[#8E8E8E] text-[17px] font-[400] ">
          {" "}
          Please provide all current information accurately.
        </p>
      </div>
    </div>
  );
};
