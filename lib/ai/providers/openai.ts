import { OpenAI } from '@ai-sdk/openai'
export const openai = new OpenAI({
  baseUrl: process.env.OPENAI_API_URL,
  apiKey: process.env.OPENAI_API_KEY
})
