require('dotenv').config(); // Load environment variables
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;

app.get('/', (req, res) => {
    res.send('Hello, World! Server is up and running.');
});
    
app.post('/webhook', async (req, res) => {
  const { message } = req.body;

  if (message) {
    const chatId = message.chat.id;
    const text = `You said: ${message.text}`;

    await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: chatId,
      text: text
    });

    res.send('Message received');
  } else {
    res.send('No message body');
  }
});

app.listen(3000, async () => {
  console.log('Server is running on port 3000');

  const webhookUrl = `${process.env.NGROK_URL}/webhook`; // Replace with your ngrok URL

  await axios.post(`${TELEGRAM_API}/setWebhook`, {
    url: webhookUrl
  });

  console.log('Webhook set');
});
