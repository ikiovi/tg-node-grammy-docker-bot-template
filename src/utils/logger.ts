import { colorConsole } from 'tracer';

export const logger = colorConsole({
    level: process.env.LOG_LEVEL ?? 'debug',
    format: '{{timestamp}} [{{title}}] ({{file}}:{{line}}): {{message}}',
    dateformat: process.env.DATE_FORMAT ?? 'HH:MM dd.mm.yyyy'
});
