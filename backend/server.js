import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Invalid request format: 'messages' must be a non-empty array" });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "Missing API key. Please check your .env file." });
    }

    console.log("🔹 Request Received:", JSON.stringify(messages, null, 2));

    // ✅ Correct API request format
    const formattedMessages = messages.map((msg) => ({
      role: msg.role,
      parts: [{ text: msg.content }],
    }));

    const requestBody = { messages: formattedMessages };

    console.log("🔹 Sending API Request:", JSON.stringify(requestBody, null, 2));

    // ✅ Correct API Endpoint
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Gemini API Error:", response.status, response.statusText, errorText);
      return res.status(response.status).json({ error: `Gemini API Error: ${response.statusText}`, details: errorText });
    }

    const data = await response.json();
    console.log("✅ Gemini API Response:", JSON.stringify(data, null, 2));

    if (!data?.candidates?.length || !data.candidates[0]?.content?.parts?.[0]?.text) {
      return res.status(500).json({ error: "Invalid response from Gemini AI: No valid content found" });
    }

    const aiMessage = data.candidates[0].content.parts[0].text;
    res.json({ message: aiMessage });
  } catch (error) {
    console.error("❌ Server Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
