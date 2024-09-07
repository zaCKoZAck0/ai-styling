import {
    GoogleGenerativeAI,
    SchemaType,
  } from "@google/generative-ai";
// import { CSSProperties } from "react";
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey ?? "");
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "Take object with 'prompt' and 'element' keys. Return JSON for React inline style. Format style:{key: value, key: value }.",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
    responseSchema: {
      type: SchemaType.OBJECT,
      properties: {
        style: {
          type: SchemaType.STRING,
        }
      },
      required: [
        "style"
      ]
    },
  };
  
export async function promptToStyle(query: { prompt: string, element: string }) {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
   history: [
    {
      role: "user",
      parts: [
        {text: "{\"element\":\"button\", \"prompt\": \"shiny purple button\"}"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```json\n{\"style\": \"{\\n  \\\"backgroundColor\\\": \\\"purple\\\",\\n  \\\"border\\\": \\\"1px solid gold\\\",\\n  \\\"padding\\\": \\\"10px 20px\\\",\\n  \\\"borderRadius\\\": \\\"5px\\\",\\n  \\\"boxShadow\\\": \\\"0 2px 4px rgba(0, 0, 0, 0.2)\\\"\\n}\"} \n```"},
      ],
    },
  ],
    });
  
    const result = await chatSession.sendMessage(JSON.stringify(query));
    const response = JSON.parse(result.response.text())
    const res = response.style ?? "{}";
    return JSON.parse(res)
  }