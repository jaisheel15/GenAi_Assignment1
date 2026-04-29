import { Groq } from 'groq-sdk';

const groq = new Groq();

async function chatWithPersona(persona: string, userMessage: string) {
    const response = await groq.chat.completions.create({
      model: "llama3-70b-8192",
      messages: [
        {
          role: "system",
          content: personas[persona],
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
    });

  
    return response.choices[0]?.message.content;
  }