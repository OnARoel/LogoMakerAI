import React from "react";
import Description from "./Description";
import Lookup from "@/app/data/Lookup";

const TitleLogo = () => {
  return (
    <>
      <div className="my-10">
        <Description
          title={Lookup.LogoTitle}
          description={Lookup.LogoDesignDesc}
        />
      </div>
    </>
  );
};

export default TitleLogo;
