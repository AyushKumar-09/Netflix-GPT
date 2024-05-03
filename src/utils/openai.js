import { GoogleGenerativeAI } from "@google/generative-ai";
import { OPENAI_KEY } from "./constans";


// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(OPENAI_KEY);
async function run() {
    // For text-only input, use the gemini-pro model
    console.log("call made");
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    const prompt = "Write a story about a magic backpack."
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);

 
  }


export default run;