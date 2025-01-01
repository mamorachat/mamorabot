import dotenv from 'dotenv'

dotenv.config()

interface EnvVariables {
  TELEGRAM_BOT_TOKEN: string
}

const requiredEnv: (keyof EnvVariables)[] = ['TELEGRAM_BOT_TOKEN']

const env: EnvVariables = {} as EnvVariables

for (const key of requiredEnv) {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`)
  }
  env[key] = value
}

export default env
