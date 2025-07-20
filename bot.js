// bot.js
require('dotenv').config(); // Carrega as variáveis do .env
const tmi = require('tmi.js');

// Configuração do bot
const client = new tmi.Client({
  identity: {
    username: process.env.TWITCH_USERNAME,
    password: process.env.TWITCH_OAUTH
  },
  channels: [process.env.TWITCH_CHANNEL]
});

// Conectar ao Twitch
client.connect();

// Quando o bot se conectar ao servidor do Twitch
client.on('connected', (addr, port) => {
  console.log(`✅ Conectado ao Twitch IRC: ${addr}:${port}`);
});

// Quando o bot entrar no chat do canal
client.on('join', (channel, username, self) => {
  if (self) {
    console.log(`🎯 O bot entrou no chat: ${channel} como @${username}`);
  }
});

// Ouvir mensagens no chat
client.on('message', (channel, tags, message, self) => {
  if (self) return; // Ignorar mensagens do próprio bot

  const usuario = tags.username;
  const texto = message.trim().toLowerCase();

  // Exibir no console a mensagem recebida
  console.log(`[${channel}] ${usuario}: ${message}`);

  // Comando !oi
  if (texto === '!oi') {
    client.say(channel, `Olá, @${usuario}! Como posso te ajudar hoje? 😊`);
    console.log(`✅ Resposta enviada para @${usuario}`);
  }
});