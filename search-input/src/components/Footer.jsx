import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export const Footer = ({ stepCount, handleNext, handlePrevious }) => {
  return (
    <div className="w-full flex items-center gap-2">
      {stepCount > 1 && (
        <button
          className="flex items-center justify-center border h-full w-32 border-[#CBD5E1] rounded-lg"
          onClick={handlePrevious}
        >
          {" "}
          <FaChevronLeft size={15} />
        </button>
      )}
      <button
        className=" bg-black w-full  flex items-center justify-center px-3 py-2.5   text-white rounded-lg"
        onClick={handleNext}
      >
        {" "}
        Continue {stepCount}/3 <FaChevronRight size={15} />
      </button>
    </div>
  );
};
