import { GoogleGenerativeAI } from '@google/generative-ai';
import { readFile } from 'fs/promises';
import { join } from 'path';

const apiKey = process.env.GOOGLE_API_KEY;

if (!apiKey) {
  throw new Error('GOOGLE_API_KEY is not defined in the environment variables.');
}

const genAI = new GoogleGenerativeAI(apiKey);

/**
 * Structured transaction object.
 */
export interface Transaction {
  item: string;
  amount: number;
  category: string;
}

/**
 * Parses a transaction description into a structured JSON object.
 */
export async function parseTransaction(description: string): Promise<Transaction> {
  const modelName = process.env.MODEL_NAME || 'gemini-flash-lite-latest';

  // Read system prompt from file
  const promptPath = join(process.cwd(), 'transaction-parser-system-prompt.md');
  const systemInstruction = await readFile(promptPath, 'utf-8');

  const model = genAI.getGenerativeModel({
    model: modelName,
    systemInstruction,
  });

  const result = await model.generateContent({
    contents: [{ role: 'user', parts: [{ text: description }] }],
    generationConfig: {
      responseMimeType: 'application/json',
    },
  });

  const response = await result.response;
  const responseText = response.text();

  return JSON.parse(responseText);
}
