const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "vote",
  aliases: [],
  description: "Vote for Purple Utilities",
  usage: "Vote",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = Math.floor(Math.random() * 101);

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Vote`)
      .setDescription(`[Discordbotlist](discordbotlist.com/bot/purple-utilities)`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
