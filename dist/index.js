"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const filters_1 = require("telegraf/filters");
const fs_1 = require("fs");
const bot = new telegraf_1.Telegraf("6678225462:AAH75v-pSSPEGnEFrtZ4GIdPG_0RA00JtgI");
bot.on((0, filters_1.message)('text'), (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const senderUsername = ctx.message.from.username;
    const messageText = ctx.message.text;
    try {
        if (messageText && messageText.toLowerCase() === 'who is wina?' && 'who is wina ?') {
            const data = yield readFileAsync('template/wina.txt', 'utf8');
            ctx.reply(data);
        }
        else if (messageText.toLocaleLowerCase() === 'first meet') {
            const imageFile = { source: 'img/firstmeet.jpg' };
            const caption = 'how cuteeeee , my gf the most cute person in the whole world';
            ctx.replyWithPhoto(imageFile, { caption });
        }
        else if (messageText.toLocaleLowerCase() === 'cute asf') {
            const videoFile = { source: 'video/cute.mp4' };
            const caption = '><';
            ctx.replyWithVideo(videoFile, { caption });
        }
        else if (messageText.toLocaleLowerCase() === '/help') {
            const data = yield readFileAsync('template/help.txt', 'utf8');
            ctx.reply(data);
        }
        else if (messageText.toLocaleLowerCase() === 'in el eyes, what is this, wina?') {
            const data = yield readFileAsync('template/command2.txt', 'utf8');
            ctx.reply(data);
        }
        else if (messageText.toLocaleLowerCase() === 'is there a message that el wants to convey to wina?') {
            const data = yield readFileAsync('template/command3.txt', 'utf8');
            ctx.reply(data);
        }
        else if (messageText.toLocaleLowerCase() === 'el feeling to wina?' && " el feeling to wina ?") {
            const data = yield readFileAsync('template/command4.txt', 'utf8');
            ctx.reply(data);
        }
        else if (messageText.toLocaleLowerCase() === `how is wina in el's eyes?` && `how is wina in el's eyes?`) {
            const data = yield readFileAsync('template/command5.txt', 'utf8');
            ctx.reply(data);
        }
        else {
            ctx.reply(`Thanks, ${senderUsername}! You sent a message.`);
        }
    }
    catch (err) {
        console.error('Error reading response file:', err);
        ctx.reply(`Thanks, ${senderUsername}! You sent a message.`);
    }
}));
bot.launch().then(() => {
    console.log('Bot is running...');
});
bot.catch((error) => {
    console.error('Bot error:', error);
});
function readFileAsync(path, encoding) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fs_1.promises.readFile(path, { encoding });
            return data.toString();
        }
        catch (e) {
            throw e;
        }
    });
}
