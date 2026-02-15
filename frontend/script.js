// Elementos do DOM
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const restartButton = document.getElementById('restartButton');

// Função para adicionar mensagem ao chat
function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', isUser ? 'user' : 'bot');
    
    const avatar = document.createElement('div');
    avatar.classList.add('message-avatar');
    avatar.textContent = isUser ? '👤' : '🤖';
    
    const content = document.createElement('div');
    content.classList.add('message-content');
    content.textContent = text;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    
    chatMessages.appendChild(messageDiv);
    
    // Scroll automático para a última mensagem
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Função para enviar mensagem
async function sendMessage() {
    const question = userInput.value.trim();
    
    if (!question) {
        return;
    }
    
    // Adiciona mensagem do usuário
    addMessage(question, true);
    
    // Limpa o campo de input
    userInput.value = '';
    
    // Desabilita o botão enquanto processa
    sendButton.disabled = true;
    sendButton.textContent = 'Enviando...';
    
    try {
        // Envia requisição para o backend
        const response = await fetch('https://chatbot-basico-xef3.onrender.com/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question })
        });
        
        if (!response.ok) {
            throw new Error('Erro na resposta do servidor');
        }
        
        const data = await response.json();
        
        // Adiciona resposta do bot
        addMessage(data.answer, false);
        
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        addMessage('Desculpe, ocorreu um erro ao processar sua mensagem.', false);
    } finally {
        // Reabilita o botão
        sendButton.disabled = false;
        sendButton.textContent = 'Enviar';
        userInput.focus();
    }
}

// Função para reiniciar o chat
function restartChat() {
    // Limpa todas as mensagens
    chatMessages.innerHTML = '';
    
    // Adiciona a mensagem de boas-vindas novamente
    addMessage('Olá! Eu sou seu chatbot. Como posso ajudar você hoje?', false);
    
    // Limpa o campo de input e coloca o foco
    userInput.value = '';
    userInput.focus();
}

// Event listeners
sendButton.addEventListener('click', sendMessage);

restartButton.addEventListener('click', restartChat);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Mensagem de boas-vindas
window.addEventListener('load', () => {
    addMessage('Olá! Eu sou seu chatbot. Como posso ajudar você hoje?', false);
    userInput.focus();
});
