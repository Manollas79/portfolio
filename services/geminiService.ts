import { GoogleGenAI } from "@google/genai/web";
import { PERSONAL_INFO, PROJECTS, SKILLS, EDUCATION, CERTIFICATIONS } from '../constants.ts';

// Initialize Gemini
// Note: VITE_GEMINI_API_KEY should be set in .env file
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Manollas T S. You are embedded in his portfolio website.
Your goal is to answer questions about Manollas's professional background, skills, and projects based strictly on the following context.
Be professional, concise, and friendly. If a user asks about something not in the context, politely mention you only know about his professional background.

Context:
Name: ${PERSONAL_INFO.name}
Title: ${PERSONAL_INFO.title}
About: ${PERSONAL_INFO.about}
Contact Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
Skills: ${JSON.stringify(SKILLS)}
Projects: ${JSON.stringify(PROJECTS)}
Education: ${JSON.stringify(EDUCATION)}
Certifications: ${JSON.stringify(CERTIFICATIONS)}

When asked about contact info, provide the email.
When asked about specific projects, summarize them.
Always refer to Manollas in the third person or as "Manollas".
`;

export const createChatSession = () => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });
};

export const sendMessage = async (chat: any, message: string): Promise<string> => {
  try {
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};