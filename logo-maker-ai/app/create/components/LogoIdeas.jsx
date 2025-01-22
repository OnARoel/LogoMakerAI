import React, { useEffect, useState } from "react";
import HeadingDescription from "./Description";
import Lookup from "@/app/data/Lookup";
import axios from "axios";
import Prompt from "@/app/data/Prompt";
import { Loader2Icon } from "lucide-react";

function LogoIdeas({ formData, onHandleInputChange }) {
  const [ideas, setIdeas] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(formData?.idea);
  useEffect(() => {
    generateLogoDesignIdea();
  }, []);

  const generateLogoDesignIdea = async () => {
    setLoading(true);
    const PROMPT = Prompt.DESIGN_IDEA_PROMPT.replace(
      "{logoType}",
      formData?.design.title
    )
      .replace("{logoTitle}", formData.title)
      .replace("{logoDesc}", formData.desc)
      .replace("{logoPrompt}", formData.design.prompt);

    const result = await axios.post("/api/ai-design-ideas", {
      prompt: PROMPT,
    });

    console.log(result.data);
    !ideas && setIdeas(result.data.ideas);
    setLoading(false);
  };
  return (
    <>
      <div className="my-10">
        <HeadingDescription
          title={Lookup.LogoIdeaTitle}
          description={Lookup.LogoTitleDescription}
        />
      </div>
    </>
  );
}

export default LogoIdeas;
