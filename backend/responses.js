const OpenAI = require('openai');

// Função de fallback para quando a API da OpenAI não estiver disponível
const responses = {
  "olá": "Olá! Como posso ajudar você hoje?",
  "oi": "Oi! Tudo bem? Em que posso ajudar?",
  "como você está": "Estou funcionando perfeitamente! E você?",
  "qual seu nome": "Sou um chatbot inteligente criado para ajudar você!",
  "que horas são": "Desculpe, não tenho acesso ao relógio, mas você pode ver as horas no seu dispositivo.",
  "tchau": "Tchau! Foi bom conversar com você. Volte sempre!",
  "obrigado": "De nada! Fico feliz em ajudar.",
  "ajuda": "Você pode me fazer qualquer pergunta! Estou aqui para ajudar."
};

function getFallbackResponse(question) {
  const normalizedQuestion = question.toLowerCase().trim();
  
  // Busca por correspondência exata
  if (responses[normalizedQuestion]) {
    return responses[normalizedQuestion];
  }
  
  // Busca por correspondência parcial
  for (const key in responses) {
    if (normalizedQuestion.includes(key)) {
      return responses[key];
    }
  }
  
  // Resposta padrão
  return "Desculpe, não entendi sua pergunta. Tente perguntar algo diferente!";
}

// Configuração da API da OpenAI
let openai = null;

if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

async function getResponse(question) {
  // Se a API da OpenAI não estiver configurada, usa respostas fixas
  if (!openai) {
    console.log('OpenAI API não configurada. Usando respostas fixas.');
    return getFallbackResponse(question);
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Você é um assistente virtual amigável e prestativo. Responda de forma clara, concisa e educada em português. Mantenha suas respostas com no máximo 100 palavras."
        },
        {
          role: "user",
          content: question
        }
      ],
      max_tokens: 200,
      temperature: 0.7,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Erro ao chamar API da OpenAI:', error.message);
    
    // Em caso de erro, usa respostas fixas como fallback
    return getFallbackResponse(question);
  }
}

module.exports = { getResponse };

