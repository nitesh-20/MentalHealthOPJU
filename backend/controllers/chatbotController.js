import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Store in .env file
});

const openai = new OpenAIApi(configuration);

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: message }],
    });

    res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch response" });
  }
};
