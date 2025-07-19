// core/twitch.js
const tmi = require('tmi.js');

function startTwitchBot() {
    const client = new tmi.Client({
        options: { debug: true },
        identity: {
            username: process.env.TWITCH_BOT_USERNAME,
            password: `oauth:${process.env.TWITCH_ACCESS_TOKEN}`
        },
        channels: [process.env.TWITCH_CHANNEL]
    });

    client.connect().catch(err => {
        console.error('❌ Erro ao conectar o bot:', err);
    });

    client.on('connected', (address, port) => {
        console.log(`✅ Zayra conectada ao canal ${process.env.TWITCH_CHANNEL} em ${address}:${port}`);
    });

    client.on('message', (channel, tags, message, self) => {
        if (self) return;

        const username = tags.username.toLowerCase();

        // Exemplo de comando simples
        if (message.toLowerCase() === '!oi') {
            client.say(channel, `Olá, @${username}! Eu sou a Zayra 🤖`);
        }
    });
}

module.exports = startTwitchBot;
