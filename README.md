# 💬 Chatbot Básico

Chatbot inteligente desenvolvido com Node.js, Express e API da OpenAI, com interface moderna e responsiva.

## 🌐 Demo

- **Frontend:** https://chatbot-basico-theta.vercel.app/
- **Backend:** https://chatbot-basico-xef3.onrender.com/

## ✨ Funcionalidades

- 🤖 Respostas inteligentes usando GPT-3.5 da OpenAI
- 💬 Interface de chat moderna e responsiva
- 🔄 Botão para reiniciar conversa
- 📱 Design mobile-first
- ⚡ Respostas em tempo real
- 🛡️ Sistema de fallback (respostas fixas quando API não está disponível)

## 🚀 Tecnologias

### Backend
- Node.js
- Express.js
- OpenAI API (GPT-3.5-turbo)
- dotenv

### Frontend
- HTML5
- CSS3 (com gradientes e animações)
- JavaScript (Vanilla)
- Fetch API

## 📋 Pré-requisitos

- Node.js 14+ instalado
- Conta na OpenAI e chave API (opcional)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/rodrigowillen/chatbot-basico.git
cd chatbot-basico
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Edite o arquivo `.env` e adicione sua chave da OpenAI:
```env
OPENAI_API_KEY=sua_chave_api_aqui
PORT=3000
```

> **Nota:** Se você não configurar a chave da OpenAI, o chatbot funcionará com respostas fixas predefinidas.

## ▶️ Executando localmente

```bash
npm start
```

O servidor estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
chatbot-basico/
├── backend/
│   ├── index.js          # Servidor Express
│   └── responses.js      # Lógica de integração com OpenAI
├── frontend/
│   ├── index.html        # Interface do chat
│   ├── script.js         # JavaScript do cliente
│   └── style.css         # Estilos
├── .env.example          # Exemplo de variáveis de ambiente
├── .gitignore           # Arquivos ignorados pelo Git
├── package.json         # Dependências do projeto
└── README.md           # Documentação

```

## 🔑 Obtendo Chave da API OpenAI

1. Acesse https://platform.openai.com/
2. Crie uma conta ou faça login
3. Vá em **API Keys** no menu
4. Clique em **Create new secret key**
5. Copie a chave e cole no arquivo `.env`

## 🌍 Deploy

### Frontend (Vercel)
1. Conecte seu repositório GitHub à Vercel
2. Configure o diretório raiz como `frontend`
3. Deploy automático

### Backend (Render)
1. Conecte seu repositório GitHub ao Render
2. Configure as variáveis de ambiente (OPENAI_API_KEY)
3. Configure o comando de build: `npm install`
4. Configure o comando de start: `npm start`
5. Deploy automático

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📝 Licença

ISC

## 👤 Autor

**rodrigowillen**
- GitHub: [@rodrigowillen](https://github.com/rodrigowillen)

---

Feito com ❤️ por Rodrigo Willen
