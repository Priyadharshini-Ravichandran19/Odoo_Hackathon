
import { GoogleGenAI, Type } from "@google/genai";

// Initialize AI with the environment variable as per requirements
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTravelSuggestions = async (destination: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Suggest 6 top activities and places to visit in ${destination}. Include a short catchy title, a brief description, and a specific category (e.g., Adventure, Culture, Relaxation) for each.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { 
                type: Type.STRING,
                description: "Name of the place or activity"
              },
              description: { 
                type: Type.STRING, 
                description: "Brief, engaging description"
              },
              category: { 
                type: Type.STRING,
                description: "Type of activity"
              }
            },
            required: ["title", "description", "category"],
            propertyOrdering: ["title", "category", "description"]
          }
        }
      }
    });

    // Directly access the .text property
    const text = response.text;
    return text ? JSON.parse(text) : [];
  } catch (error) {
    console.error("Gemini Suggestion Error:", error);
    // Graceful fallback for demo purposes
    return [
      { title: "Local Landmark", category: "Culture", description: "A must-visit spot that defines the city's character." },
      { title: "Nature Trail", category: "Adventure", description: "Escape the city bustle and enjoy breathtaking views." }
    ];
  }
};
