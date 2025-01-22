const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  const { GoogleAIFileManager } = require("@google/generative-ai/server");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const fileManager = new GoogleAIFileManager(apiKey);
  
  /**
   * Uploads the given file to Gemini.
   *
   * See https://ai.google.dev/gemini-api/docs/prompting_with_media
   */
  async function uploadToGemini(path, mimeType) {
    const uploadResult = await fileManager.uploadFile(path, {
      mimeType,
      displayName: path,
    });
    const file = uploadResult.file;
    console.log(`Uploaded file ${file.displayName} as: ${file.name}`);
    return file;
  }
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    const files = [
      await uploadToGemini("", "image/png"),
    ];
  
    export const AIDesignIdea = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Based on Logo of type Modern Mascot Generate a text prompt to create Logo for Logo title/Brand name : Spicy Food with decription: Restaurant and refering to prompt: Create a minimalist and modern logo design that is clean, simple, and visually appealing. The logo should be easy to recognize and remember, and it should be versatile enough to be used in a variety of contexts. Use a combination of typography and simple geometric shapes to create a visually striking and memorable design. The logo should be timeless and elegant, and it should convey a sense of professionalism and sophistication. Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format with ideas field.\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"prompt\": \"Create a modern mascot logo for 'Spicy Food' restaurant. The design should be minimalist, clean, simple, and visually appealing, utilizing typography and simple geometric shapes. It should be easy to recognize, memorable, versatile, timeless, elegant, professional, and sophisticated, while still hinting at the 'spicy' aspect.\",\n    \"logo_ideas\": [\n    {\n      \"id\": 1,\n      \"description\": \"Fiery Pepper Character\"\n    },\n    {\n      \"id\": 2,\n      \"description\": \"Geometric Flame Mascot\"\n    },\n    {\n       \"id\": 3,\n      \"description\": \"Stylized Chili Person\"\n    },\n    {\n      \"id\": 4,\n      \"description\": \"Minimalist Spicy Beast\"\n    }\n  ]\n}\n```\n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "Based on Logo of type Modern Mascot Generate a text prompt to create Logo for Logo title/Brand name : Spicy Food with decription: Restaurant and refering to prompt: Create a minimalist and modern logo design that is clean, simple, and visually appealing. The logo should be easy to recognize and remember, and it should be versatile enough to be used in a variety of contexts. Use a combination of typography and simple geometric shapes to create a visually striking and memorable design. The logo should be timeless and elegant, and it should convey a sense of professionalism and sophistication. Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format with ideas field.\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"prompt\": \"Design a modern mascot logo for 'Spicy Food' restaurant. The logo should be minimalist, clean, and visually appealing, using a combination of typography and simple geometric shapes. It should be easily recognizable, memorable, versatile, timeless, elegant, professional, and sophisticated. The mascot should subtly convey the 'spicy' nature of the food.\",\n  \"logo_ideas\": [\n    {\n      \"id\": 1,\n      \"description\": \"Chili Pepper Character\"\n    },\n    {\n      \"id\": 2,\n       \"description\": \"Abstract Flame Creature\"\n    },\n    {\n      \"id\": 3,\n      \"description\": \"Geometric Fire Fox\"\n    },\n    {\n      \"id\": 4,\n      \"description\": \"Spicy Bird Icon\"\n     }\n  ]\n}\n```\n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "just the ideas field \"ideas\" \n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"ideas\": [\n    {\n      \"id\": 1,\n      \"description\": \"Chili Pepper Character\"\n    },\n    {\n      \"id\": 2,\n       \"description\": \"Abstract Flame Creature\"\n    },\n    {\n      \"id\": 3,\n      \"description\": \"Geometric Fire Fox\"\n    },\n    {\n      \"id\": 4,\n      \"description\": \"Spicy Bird Icon\"\n     }\n  ]\n}\n```\n"},
          ],
        },
        {
          role: "user",
          parts: [
            {
              fileData: {
                mimeType: files[0].mimeType,
                fileUri: files[0].uri,
              },
            },
            {text: "more like this \n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"ideas\": [\n    \"Fiery Pepper Character\",\n    \"Geometric Flame Mascot\",\n    \"Stylized Chili Person\",\n    \"Minimalist Spicy Beast\",\n     \"Abstract Flame Creature\"\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());

