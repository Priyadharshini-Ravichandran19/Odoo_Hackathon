
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTravelSuggestions = async (destination: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a minimalist travel assistant. Suggest 4 activities for ${destination}. 
      Use the following specific template for each entry:
      Description: Short introduction about the place.
      Top Highlights: Main attraction / culture / nature.
      Best Time to Visit: Season or month.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              highlights: { type: Type.STRING },
              bestTime: { type: Type.STRING },
            },
            required: ["title", "description", "highlights", "bestTime"]
          }
        }
      }
    });

    return JSON.parse(response.text || "[]");
  } catch (error) {
    console.error("Gemini Error:", error);
    return [];
  }
};
