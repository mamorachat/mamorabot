import { Context, Telegraf } from 'telegraf'
import { sendHelpMessage } from './message'

export const setupStartCommand = (bot: Telegraf<Context>) => {
  bot.start((ctx) => ctx.reply('Welcome! This is your bot.'))
}

export const setupHelpCommand = (bot: Telegraf<Context>) => {
  bot.command('help', (ctx) => sendHelpMessage(ctx))
}
