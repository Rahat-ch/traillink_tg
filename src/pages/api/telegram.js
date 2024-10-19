import axios from 'axios';
import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { message } = req.body;
      const botToken = process.env.TELEGRAM_BOT_TOKEN;
  
      if (message) {
        const chatId = message.chat.id;
        const text = `Hello! I'm your Next.js Telegram bot.`;
  
        await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          chat_id: chatId,
          text: text,
          reply_to_message_id: message.message_id
        });
  
        res.status(200).json({ message: 'Message sent successfully' });
      } else {
        res.status(400).json({ message: 'No message found in request' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  