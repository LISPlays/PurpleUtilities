onst Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix, BotName } = require("../../config.js");

module.exports = {
  name: "commands",
  aliases: ["c"],
  description: "Commands!",
  usage: "Commands",
  run: async(client, message, args) => {
    
    message.delete();
    
    let embed = new MessageEmbed()
    .setColor(Color)
    .setTitle(`⚙️ List Of Commands:`)
    .setAuthor(`${BotName} - Commands`, 'https://cdn.discordapp.com/attachments/1033417821843107932/1041049745839370341/Purple_Utilities.png', 'https://discord.gg/7zrFC2NPrd')
    .setDescription(`**Prefix:** ${Prefix}` + `\n**Embed Color:** ${Color}` +  `\n**Developers:** LISPLaysYT#3444 Miniloot#1230 JPKB#5846` + "\n\n\n:x: __Misc:__\n```yml\nascii: Generate a funny ascii text!\navatar: Show your discord avatar!\ncloinflip: Head or Tails?\nhack: Hack someone!\nvote: Vote for Purple Utilities\nmeme: Show a random meme!\nrandomnumber: A random number just appeared!\nrate: The bot will rate something!\nuptime: See the uptime of Purple Utilities\n```" + "\n\n" + "⚒ __Moderation:__\n```yml\nban: Ban someone on the server!\nclear: Clear/Purge a number of messages!\nkick: Kick a Member!\nmute: Mute a rules breaker!\nunban: Unban someone on the server!\nunmute: Let the member to chat again!\nwarn: Warn a user!\nwarnings: Check the user's warnings!\n```" + "\n\n"+
    "ℹ️ __Information:__\n```yml\nhelp: Show the help menu!\nping: Check the status responding of the bot!\nserverinfo: Read the server's info!\nuserinfo: Read the user's info!\nweather: Check the weather in your country!\n```")
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp();
  
    if (!args.length) return message.channel.send(embed);

    let cmd =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.get(client.aliases.get(args[0].toLowerCase()));

    let embed2 = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${cmd.name} Information!`)
      .addField(`Aliases`, cmd.aliases || "None!")
      .addField(`Usage`, cmd.usage || "No Usage")
      .addField(`Description`, cmd.description || "No Description!")
      .setTimestamp();

    if (cmd) {
      return message.channel.send(embed2);
    } else {
      return message.channel.send(embed);
    }
  }
};
