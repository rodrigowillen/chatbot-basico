const responses = {
  "olá": "Olá! Como posso ajudar você hoje?",
  "oi": "Oi! Tudo bem? Em que posso ajudar?",
  "como você está": "Estou funcionando perfeitamente! E você?",
  "qual seu nome": "Sou um chatbot simples criado para ajudar você!",
  "que horas são": "Desculpe, não tenho acesso ao relógio, mas você pode ver as horas no seu dispositivo.",
  "tchau": "Tchau! Foi bom conversar com você. Volte sempre!",
  "obrigado": "De nada! Fico feliz em ajudar.",
  "ajuda": "Você pode me fazer perguntas simples. Tente cumprimentar, perguntar meu nome ou se despedir!"
};

function getResponse(question) {
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

module.exports = { getResponse };
