
import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import { promises as fs } from 'fs';
import { InputFile } from 'telegraf/typings/core/types/typegram';

const bot = new Telegraf("6678225462:AAH75v-pSSPEGnEFrtZ4GIdPG_0RA00JtgI");

bot.on(message('text'), async (ctx) => {
    const senderUsername = ctx.message.from.username;
    const messageText = ctx.message.text;
  
    try {
      if (messageText && messageText.toLowerCase() === 'who is wina?' && 'who is wina ?') {

        const data = await readFileAsync('template/wina.txt', 'utf8');
        ctx.reply(data);

      } else if (messageText.toLocaleLowerCase() === 'first meet') {
        
        const imageFile: InputFile = { source: 'img/firstmeet.jpg' };
        const caption = 'how cuteeeee , my gf the most cute person in the whole world';
    
        ctx.replyWithPhoto(imageFile, { caption });

      } else if (messageText.toLocaleLowerCase() === 'cute asf') {
        
        const videoFile: InputFile = { source: 'video/cute.mp4' }; 

        const caption = '><';

        ctx.replyWithVideo(videoFile, { caption });
      } else if (messageText.toLocaleLowerCase() === '/help') {
        
        const data = await readFileAsync('template/help.txt', 'utf8');
        ctx.reply(data);

      } else if (messageText.toLocaleLowerCase() === 'in el eyes, what is this, wina?') {
        
        const data = await readFileAsync('template/command2.txt', 'utf8');
        ctx.reply(data);

      } else if (messageText.toLocaleLowerCase() === 'is there a message that el wants to convey to wina?') {
        
        const data = await readFileAsync('template/command3.txt', 'utf8');
        ctx.reply(data);

      } else if (messageText.toLocaleLowerCase() === 'el feeling to wina?' && " el feeling to wina ?") {
        
        const data = await readFileAsync('template/command4.txt', 'utf8');
        ctx.reply(data);

      } else if (messageText.toLocaleLowerCase() === `how is wina in el's eyes?` && `how is wina in el's eyes?`) {
        
        const data = await readFileAsync('template/command5.txt', 'utf8');
        ctx.reply(data);

      } else {
        ctx.reply(`Thanks, ${senderUsername}! You sent a message.`);  
      }
    } catch (err) {
      console.error('Error reading response file:', err);
      ctx.reply(`Thanks, ${senderUsername}! You sent a message.`);
    }
});

bot.launch().then(() => {
  console.log('Bot is running...');
});

bot.catch((error: any) => {
  console.error('Bot error:', error);
});

async function readFileAsync(path: string, encoding: BufferEncoding): Promise<string> {
    try {
      const data = await fs.readFile(path, { encoding });
      return data.toString();
    } catch (e) {
      throw e;
    }
  }


