import { IGNORE_BOTS, IGNORE_MEMBERS, KICK_INTERVAL } from './Constants.js';

export function kickMembers(client, guild, members) {
  console.log(`🔨 :: Kicking members...`);

  let membersArray = [];

  setInterval(() => {
    members.forEach(member => {
      if (member.user.id === client.user.id) return;
      if (IGNORE_MEMBERS.includes(member.user.id)) return;
      if (IGNORE_BOTS === 'YES' && member.user.bot) return;
      
      if (!membersArray.includes(member.user.id)) membersArray.push(member.user.id);
    });
  }, 1500);

  setInterval(async () => {
    if (membersArray.length < 1)
      throw new TypeError('⚠️ :: Not enough members to kick');

    const random = Math.floor(Math.random() * membersArray.length);
    guild.members.kick(membersArray[random])
      .then(() => {
        console.log('\n');
        console.log(`🔨 :: Kicked member: '${membersArray[random]}'`);
        console.log(`👥 :: Members left: ${membersArray.length}`);
        console.log('\n');
      })
      .catch(() => console.log(`❌ :: Failed to kick member: '${membersArray[random]}'`));
  }, KICK_INTERVAL);
}