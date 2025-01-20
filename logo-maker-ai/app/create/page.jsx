"use client";
import React, { useState } from "react";
import TitleLogo from "./components/TitleLogo";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LogoDesc from "./components/LogoDesc";
import LogoColors from "./components/LogoColors";
import LogoDesigns from "./components/LogoDesigns";
import LogoIdeas from "./components/LogoIdeas";

const Page = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState();

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  console.log(formData);

  return (
    <>
      <div className="mt-28 p-10 border rounded-xl 2xl:mx-72">
        {step === 1 ? (
          <TitleLogo
            onHandleInputChange={(v) => onHandleInputChange("title", v)}
          />
        ) : step === 2 ? ( 
            <LogoDesc onHandleInputChange={(v) => onHandleInputChange("desc", v)} />
        ) : step === 3 ? (
            <LogoColors onHandleInputChange={(v) => onHandleInputChange("colors", v)} />
        ) : step === 4 ? (  
            <LogoDesigns onHandleInputChange={(v) => onHandleInputChange("design", v)} />
        ) : step === 5 ? (  
            <LogoIdeas onHandleInputChange={(v) => onHandleInputChange("ideas", v)} />
        ) : null}

        <div className="flex items-center justify-between mt-10">
          {step != 1 && (
            <Button variant="outline" onClick={() => setStep(step - 1)}>
              <ArrowLeft /> Previous
            </Button>
          )}
          <Button onClick={() => setStep(step + 1)}>
            <ArrowRight /> Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page;
