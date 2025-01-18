import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <>
      <div className="px-10 lg:px-32 xl:px-48 2xl 2xl:px-56 p-4 flex justify-between items-center border-bottom border-gray-500">
        <Image
          src={"./logoipsum-349.svg"}
          alt="Logo"
          width={100}
          height={100}
        />
        <Button>Get Started</Button>
      </div>
    </>
  );
};

export default Header;
