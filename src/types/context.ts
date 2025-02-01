import { I18nFlavor } from '@grammyjs/i18n';
import { Context, SessionFlavor } from 'grammy';

//See https://grammy.dev/plugins/session
export type MyContext = Context & SessionFlavor<SessionData> & I18nFlavor;

export interface SessionData {
    [key: string]: unknown;
}