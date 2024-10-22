import Discord, { Collection }  from 'discord.js';
import { TOKEN } from './config/config.js';

let client;

export const connect = async () => {
  client = await new Discord.Client({ 
    intents: [
      Discord.IntentsBitField.Flags.Guilds,
      Discord.IntentsBitField.Flags.GuildMembers,
      Discord.IntentsBitField.Flags.GuildInvites,
      Discord.IntentsBitField.Flags.GuildPresences,
      Discord.IntentsBitField.Flags.GuildVoiceStates,
      Discord.IntentsBitField.Flags.GuildMessages,
      Discord.IntentsBitField.Flags.GuildMessageReactions,
      Discord.IntentsBitField.Flags.GuildEmojisAndStickers,
      Discord.IntentsBitField.Flags.MessageContent,
      Discord.IntentsBitField.Flags.DirectMessages
    ], 
    partials: [
      Discord.Partials.User,
      Discord.Partials.Message, 
      Discord.Partials.Reaction,
      Discord.Partials.Channel,
      Discord.Partials.GuildMember
    ]
  });
  
  client.interactions = new Discord.Collection();
  client.messages = new Discord.Collection();
  client.cooldowns = new Discord.Collection();
  client.buttons = new Discord.Collection();
  
  client.login(TOKEN)
  
  return client
}

export const getClient = () => client