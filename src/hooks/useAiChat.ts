import { useState, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function useAiChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Olá! Sou o assistente virtual do Victor Cardoso. Para podermos estruturar a melhor solução técnica para você, me conte: qual é o principal desafio que seu projeto atual enfrenta?'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const newUserMsg: Message = { role: 'user', content: text };
    setMessages(prev => [...prev, newUserMsg]);
    setIsLoading(true);

    try {
      // Initialize the SDK. It expects VITE_GEMINI_API_KEY in the environment if Vite is used
      // For a real production app, this call MUST be proxied through a backend to protect the API Key.
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error("API Key não configurada.");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const prompt = `Você é um consultor técnico de engenharia de software e UI/UX de um desenvolvedor chamado Victor Cardoso.
Seu objetivo é fazer um pré-scoping do projeto do cliente.
Até agora, o histórico é:
${messages.map(m => `${m.role}: ${m.content}`).join('\n')}
user: ${text}

Responda de forma profissional, direta e técnica. Faça no máximo uma pergunta por vez para entender requisitos não-funcionais (escalabilidade, integrações, stack). Não se alongue.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
      });

      const aiText = response.text || "Entendi. Poderia detalhar mais sobre a infraestrutura atual?";
      
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'No momento estou offline. Mas adoraria entender mais sobre o seu projeto. Por favor, envie um e-mail direto para hello@victorcardoso.com com esses detalhes.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  return {
    messages,
    isLoading,
    sendMessage
  };
}
