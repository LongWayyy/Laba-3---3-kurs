const TelegramApi = require('node-telegram-bot-api')

const token = '6916590610:AAGgPVdn61jN9oIz4SVpEP6I8UGOcXuMD1Q'

const bot = new TelegramApi(token, {polling: true})



bot.setMyCommands([
    {command: '/start', description: 'Начальное приветствие'},
    {command: '/info', description: 'Получить информацию о пользователе'},
   
])

bot.on('message', msg => {
        const text = msg.text;
         const chatId = msg.chat.id;
   

        if (text === '/start') {
             bot.sendSticker(chatId, `https://chpic.su/_data/stickers/a/AdskieKOtiki/AdskieKOtiki_001.webp?v=1701745506`)
             bot.sendMessage(chatId, `Ты жмакнул на старт, привет! `);
            
            
        }

        if (text === '/info') {
           
            bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`);
        }

       
      
    

})
