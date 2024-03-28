import 'dotenv/config';
import { Bot, session } from 'grammy';
import { I18n } from '@grammyjs/i18n';
import { MyContext } from './types/context';

const token = process.env.TOKEN;
if (!token) throw new Error('TOKEN must be provided!');

const bot = new Bot<MyContext>(token);

const i18n = new I18n<MyContext>({
    defaultLocale: 'en',
    useSession: true,
    directory: 'locales'
}); // See https://grammy.dev/plugins/i18n.html for details

bot.use(session({ initial: () => ({}) }));
bot.use(i18n);

bot.on('message').command('start', ctx => {
    ctx.reply(ctx.t('greeting', { userName: ctx.from.username ?? ctx.from.first_name }));
});

bot.catch(err => {
    // Handle errors here
    const { constructor: { name }, message } = <Error>err;
    console.error(`[${new Date().toLocaleString('uk')}] \x1b[41m${name}\x1b[0m | ${message}`);
});

bot.start({ drop_pending_updates: true });

process.once('SIGINT', bot.stop);