const TelegramBot = require('node-telegram-bot-api');

require('dotenv').config();
const { initAntiLinks } = require('./modules/antiLinks.js');
const { initGreeting } = require('./modules/greeting.js');
const { notification } = require('./modules/notification.js');

const bot = new TelegramBot(process.env.API_CHATBOT, { polling: true });

initAntiLinks(bot);
initGreeting(bot);
notification(bot)

process.on('uncaughtException', e => console.error('UNCAUGHT:', e));
process.on('unhandledRejection', e => console.error('UNHANDLED REJECTION:', e));

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot is alive!'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));