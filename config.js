// config.js
const fs = require('fs');

// Carregar perfil da streamer
let streamerProfile = {};
try {
  const data = fs.readFileSync('./streamer_profile.json', 'utf8');
  streamerProfile = JSON.parse(data);
  console.log('📄 Perfil da streamer carregado com sucesso.');
} catch (error) {
  console.error('❌ Erro ao carregar streamer_profile.json:', error.message);
}

// Carregar palavras proibidas
let bannedWords = {
  palavroes: [],
  sexuais: [],
  odio_e_discriminacao: [],
  alerta_contextual: []
};
try {
  const data = fs.readFileSync('./palavras_proibidas.json', 'utf8');
  bannedWords = JSON.parse(data);
  console.log('🛡️ Palavras proibidas carregadas com sucesso.');
} catch (error) {
  console.error('❌ Erro ao carregar palavras_proibidas.json:', error.message);
}

// Exportar para outros módulos
module.exports = {
  streamerProfile,
  bannedWords
};