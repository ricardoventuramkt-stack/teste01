import { GoogleGenAI } from "@google/genai";
import { GeminiModel } from "../types";

// Helper to remove the data URL prefix if present
const extractBase64 = (dataUrl: string): string => {
  return dataUrl.split(',')[1] || dataUrl;
};

// Helper to determine mime type from data URL
const getMimeType = (dataUrl: string): string => {
  const match = dataUrl.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
  return match ? match[1] : 'image/jpeg';
};

export const editImageWithGemini = async (
  imageBase64: string,
  prompt: string
): Promise<string> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("Chave de API não configurada.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const base64Data = extractBase64(imageBase64);
  const mimeType = getMimeType(imageBase64);

  try {
    const response = await ai.models.generateContent({
      model: GeminiModel.IMAGE_EDITING,
      contents: {
        parts: [
          {
            text: prompt,
          },
          {
            inlineData: {
              data: base64Data,
              mimeType: mimeType,
            },
          },
        ],
      },
    });

    // Check for image in response parts
    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
        for (const part of parts) {
            if (part.inlineData && part.inlineData.data) {
                return `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
            }
        }
    }
    
    throw new Error("Nenhuma imagem foi gerada pelo modelo.");
  } catch (error) {
    console.error("Erro ao editar imagem:", error);
    throw error;
  }
};
