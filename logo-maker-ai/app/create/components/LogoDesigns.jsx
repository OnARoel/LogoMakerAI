import React, { useState } from "react";
import Description from "./Description";
import Lookup from "@/app/data/Lookup";
import LogoDesign from "@/app/data/LogoDesign";
import Image from "next/image";

const LogoDesigns = ({ onHandleInputChange, formData }) => {
  const [selectedOption, setSelectedOption] = useState(formData?.design?.title || "");
  return (
    <>
      <div className="my-10">
        <Description
          title={Lookup.LogoDesignTitle}
          description={Lookup.LogoDesignDesc}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
        {LogoDesign.map((design, index) => (
          <div
            key={index}
            className={`flex justify-center ${
              selectedOption === design.title ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => {
              setSelectedOption(design.title);
              onHandleInputChange(design);
            }}
          >
            <Image
              className="w-full rounded-xl h-[200px] object-cover"
              src={design.image}
              alt={design.title}
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default LogoDesigns;
