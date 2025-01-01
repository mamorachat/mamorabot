import { Telegraf, Context } from 'telegraf'
import { setupHelpCommand, setupStartCommand } from './start'

export const setupCommands = (bot: Telegraf<Context>) => {
  setupStartCommand(bot)
  // Add more commands here
  setupHelpCommand(bot)
}
