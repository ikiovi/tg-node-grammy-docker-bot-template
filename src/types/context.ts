import { I18nFlavor } from '@grammyjs/i18n';
import { Context, SessionFlavor } from 'grammy';

export type MyContext = Context & SessionFlavor<Session> & I18nFlavor;

export interface Session {
    [key: string]: unknown;
}