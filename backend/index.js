require('dotenv').config();

const express = require('express');
const path = require('path');
const { getResponse } = require('./responses');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware CORS - configurado para permitir a origem da Vercel
app.use((req, res, next) => {
  const allowedOrigins = [
    'https://chatbot-basico-theta.vercel.app',
    'http://localhost:3000',
    'http://127.0.0.1:3000'
  ];
  
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Middleware para processar JSON
app.use(express.json());

// Middleware para servir arquivos estáticos da pasta frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Rota POST /chat
app.post('/chat', async (req, res) => {
  const { question } = req.body;
  
  // Validação
  if (!question || typeof question !== 'string') {
    return res.status(400).json({ 
      error: 'Pergunta inválida. Envie um campo "question" com texto.' 
    });
  }
  
  try {
    // Obter resposta (agora é assíncrono)
    const answer = await getResponse(question);
    
    // Retornar resposta
    res.json({ 
      question: question,
      answer: answer 
    });
  } catch (error) {
    console.error('Erro ao processar pergunta:', error);
    res.status(500).json({ 
      error: 'Erro ao processar sua pergunta. Tente novamente.' 
    });
  }
});

// Rota para verificar se o servidor está funcionando
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Servidor funcionando!' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
