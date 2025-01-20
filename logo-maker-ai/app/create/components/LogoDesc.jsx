import React from "react";
import Description from "./Description";
import Lookup from "@/app/data/Lookup";

const LogoDesc = ({onHandleInputChange}) => {
  return (
    <>
      <div className="my-10">
        <Description
          title={Lookup.LogoTitleDescription}
          description={Lookup.LogoDesignDesc}
        />
      </div>

      <input
        type="text"
        placeholder="Enter Logo Title"
        className="p-4 border rounded-lg mt-5 w-full"
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </>
  );
};

export default LogoDesc;
