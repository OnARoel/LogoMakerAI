"use client";

import React, { useState } from "react";
import Description from "./Description";
import Lookup from "@/app/data/Lookup";
import { useSearchParams } from "next/navigation";

const TitleLogo = ({onHandleInputChange}) => {
  const searchParams = useSearchParams();
  const initialTitle = searchParams?.get("title") || "";
  const [title, setTitle] = useState(initialTitle);

  return (
    <>
      <div className="my-10">
        <Description
          title={Lookup.LogoTitle}
          description={Lookup.LogoDesignDesc}
        />
        <input
          type="text"
          placeholder="Enter Logo Title"
          className="p-4 border rounded-lg mt-5 w-full"
          defaultValue={title}
          onChange= {(e) => onHandleInputChange(e.target.value)}
        />
      </div>
    </>
  );
};

export default TitleLogo;
