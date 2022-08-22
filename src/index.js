import { config } from 'dotenv'; config();

import { 
  GUILD_ID,
  BOT_TOKEN,
  IGNORE_BOTS,
  IGNORE_MEMBERS,
} from './utils/Constants.js';
import { Client } from 'discord.js';
import { kickMembers } from './utils/Functions.js';

// All intents list: https://bit.ly/3QZ0q7D
const client = new Client({ intents: ['Guilds', 'GuildMembers'] });

function start() {
  try {
    client.on('ready', () => {
      console.log('\n');
      console.log(`🤖 :: Logged in as ${client.user.tag}`);

      const guild = client.guilds.cache.get(GUILD_ID);

      if (guild) {
        console.log(`\n🚫 :: Ignore Bots: ${IGNORE_BOTS === 'YES' ? 'Yes' : 'No'}`);
        console.log(`✅ :: Guild: ${guild.name}`);
        console.log(`👥 :: Members: ${guild.memberCount}\n`);
        
        guild.members.fetch()
          .then((members) => kickMembers(client, guild, members))
      }
    })

    client.login(BOT_TOKEN);
  } catch (err) {
    console.log(err);
  }
}

start();