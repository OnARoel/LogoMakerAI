"use client";

import React from "react";
import Lookup from "../data/Lookup";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [logo, setLogo] = useState("");

  return (
    <>
      <div className="flex items-center mt-32 flex-col gap-5">
        <h2 className="text-primary text-5xl text-center font-bold">
          {Lookup.HeroHeading}
        </h2>
        <h2 className="text-5xl text-center font-bold">
          {Lookup.HeroSubHeading}
        </h2>
        <h2 className="text-lg text-gray-500 text-center">
          {Lookup.HeroDescription}
        </h2>

        <div className="flex justify-center gap-6 w-full max-w-2xl mt-10">
          <input
            className="px-6 h-full py-3 border border-gray-300 rounded-lg flex-1"
            placeholder={Lookup.TitlePlaceHolder}
            type="text"
            onChange={(e) => setLogo(e.target.value)}
          />
          <Link href={`/create?title=${logo}`}>
            <Button className="w-40 h-full px-6 py-3">Get Started</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
