const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "say",
  aliases: [],
  description: "Make Purple Utilities Say Something",
  usage: "Say <Message>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = Math.floor(Math.random() * 101);

    message.channel.send(args);

    //End
  }
};
