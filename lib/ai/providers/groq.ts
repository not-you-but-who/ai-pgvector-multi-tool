import { OpenAI } from '@ai-sdk/openai'

export const groq = new OpenAI({
  baseUrl: process.env.GROQ_API_URL,
  apiKey: process.env.GROQ_API_KEY
})
