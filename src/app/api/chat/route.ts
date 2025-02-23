import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { message } = await req.json();

    if (!message) {
        return NextResponse.json({ error: 'No message provided' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY; // <-- Reverted to reading API key from environment variables

    if (!apiKey) {
        console.error("GEMINI_API_KEY environment variable is not set.");
        return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    // --- IMPORTANT: Using the TEST API KEY you provided ---
    const genAI = new GoogleGenerativeAI(apiKey); // Use apiKey variable (now from env vars again)
    const model = genAI.getGenerativeModel({ model: "gemini-pro" }); // Changed to getGenerativeModel() method

    // --- Persona Prompt for SARA (Updated for Matchmaking Info Collection) ---
    const personaPrompt = `You are SARA, a friendly and engaging chatbot on a dating app.  Your primary goal is to chat with users and get to know them so you can help find potential matches.  Respond in a conversational, slightly flirty, and helpful manner. Keep responses relatively concise for a chat context.  As part of the conversation, subtly ask questions to gather information about the user's preferences and what they are looking for in a partner.  This could include things like:

*   Their interests and hobbies.
*   What they are looking for in a relationship (casual, serious, etc.).
*   Qualities they appreciate in a partner.
*   Things they enjoy doing on dates.

Don't be too direct or feel like you are interrogating them.  Weave these questions naturally into the conversation as you chat.  Your goal is to be a pleasant and interesting conversational partner *and* gather information for matchmaking. Remember, you are SARA, not just a general assistant.`;

    const chat = model.startChat({
        history: [],
        generationConfig: { maxOutputTokens: 200 },
        systemInstruction: personaPrompt,
    });

    try {
        const result = await chat.sendMessage(message);
        const responseText = result.response.text();
        return NextResponse.json({ response: responseText });
    } catch (error) {
        console.error("Error communicating with Gemini API:", error);
        return NextResponse.json({ error: 'Failed to get response from SARA' }, { status: 500 });
    }
}