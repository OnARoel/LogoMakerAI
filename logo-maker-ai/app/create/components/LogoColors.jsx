import React from "react";
import Description from "./Description";
import Lookup from "@/app/data/Lookup";
import Colors from "../../data/Colors";
import { useState } from "react";

const LogoColors = ({onHandleInputChange, formData}) => {
  const [selectedOption, setSelectedOption] = useState(formData?.colors);
  return (
    <>
      <div className="my-10">
        <Description
          title={Lookup.LogoColorPaletteTitle}
          description={Lookup.LogoColorPaletteDesc}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
          {Colors.map((pallete, index) => (
            <div
              className={`flex flex-row${
                selectedOption == pallete.name &&
                ' border rounded-lg border-primary p-1'
              }`}
              key={index}
            >
              {pallete?.colors.map((color, colorIndex) => (
                <div
                  className="h-24 w-full"
                  key={colorIndex}
                  style={{ backgroundColor: color }}
                  onClick={() => {
                    setSelectedOption(pallete.name);
                    onHandleInputChange(pallete.name);
                  }}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LogoColors;
