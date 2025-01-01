import { Telegraf } from 'telegraf'
import env from './env'
import { setupCommands } from './commands'

const bot = new Telegraf(env.TELEGRAM_BOT_TOKEN)

setupCommands(bot)

bot.launch().then(() => {
  console.log('Bot is running!')
})

// Graceful stop for Docker or manual termination
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
