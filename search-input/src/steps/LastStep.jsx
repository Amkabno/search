import React from "react";

export const LastStep = () => {
  return (
    <div className="felx flex-col">
      <img src="pinecone.svg" className="w-[60px]"></img>
      <div className="flex flex-col">
        <h1 className="text-[26px] font-[600] ">You're All Set! 🔥 </h1>
        <p className="text-[#8E8E8E] text-[17px] font-[400] ">
          {" "}
          We have received your submission. Thank you!
        </p>
      </div>
    </div>
  );
};
