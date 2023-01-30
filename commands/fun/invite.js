const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "Uptime",
  aliases: [],
  description: "Uptime of Purple Utilities",
  usage: "Uptime",
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
      .setTitle(`Uptime`)
      .setDescription(`6:00AM 7:00AM (School)\n2:00PM 8:00 (Sleep`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
