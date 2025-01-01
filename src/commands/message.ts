import { Context } from 'telegraf'

export const sendHelpMessage = (ctx: Context) => {
  const helpMessage =
    `Here are all the commands you can use: \n` +
    `/start - Welcome message and list of available commands \n` +
    `/help - Show this help message \n` +
    `Stay tuned for more updates! 🚀`

  ctx.reply(helpMessage)
}
