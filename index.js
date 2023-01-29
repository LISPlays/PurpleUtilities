const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const { Prefix, Token, Color, Port } = require("./config.js");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.db = require("quick.db");

require("http").createServer((req, res) => res.end(`Bot Is Online.`)).listen(Port)

client.on("ready", async () => {
  console.log('\x1b[32m%s\x1b[0m', '[CLIENT] Bot is Ready!');
  console.log('\x1b[32m%s\x1b[0m', `[CLIENT] Client Name: ${client.user.tag}`);
  console.log('\x1b[32m%s\x1b[0m', `[CLIENT] Client ID: ${client.user.id}`);
  client.user
    .setActivity(`;Help | Moderation Bot`, { type: "WATCHING" })
    .catch(error => console.log(error));
});

client.on("ready", async () => {
  console.log('\x1b[33m%s\x1b[0m', '[REPLIT] Moderation Bot by: LISPlaysYT#3444 MiniLoot#1230 JPKB#5846');
})

client.on("message", async message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  if (message.content.match(new RegExp(`^<@!?${client.user.id}>`))) {
    return message.channel.send(`**Hi i'm Purple Utilities**\nI'm one of discord's simplest moderation bots. But I can say the weather and do some other cool stuff\n\n**Some cool facts about me**\nBot Prefix : ${Prefix}\nDevelopers: LISPlaysYT#3444 MiniLoot#1230 JPKB#5846`);
  }
});

let modules = ["fun", "info", "moderation"];

modules.forEach(function(module) {
  fs.readdir(`./commands/${module}`, function(err, files) {
    if (err)
      return new Error(
        "Missing Folder Of Commands! Example : Commands/<Folder>/<Command>.js"
      );
    files.forEach(function(file) {
      if (!file.endsWith(".js")) return;
      let command = require(`./commands/${module}/${file}`);
      console.log(`[CMD] ${command.name} Command Has Been Loaded - ✅`);
      if (command.name) client.commands.set(command.name, command);
      if (command.aliases) {
        command.aliases.forEach(alias =>
          client.aliases.set(alias, command.name)
        );
      }
      if (command.aliases.length === 0) command.aliases = null;
    });
  });
});

client.on("message", async message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  if (!message.content.startsWith(Prefix)) return;

  const args = message.content
    .slice(Prefix.length)
    .trim()
    .split(" ");
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command =
    client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

  if (!command) return;

  if (command) {
    if (!message.guild.me.hasPermission("SEND_MESSAGES"))
      return message.channel.send(
        "I Don't Have Enough Permission To Use This Or Any Of My Commands Try Giving Me A Bot Role."
      );
    command.run(client, message, args);
  }
  console.log(
    `User : ${message.author.tag} (${message.author.id}) Server : ${message.guild.name} (${message.guild.id}) Command : ${command.name}`
  );
    client.guildCreate(client, message, args);

  console.log(
    `Server : ${guild.name} Guild ID : (${guild.id}) Invite : (${guild.invite})`
  )
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.redirect("https://purpleutilities.typedream.app");
});

app.listen(3000, () => { });

client.login(process.env.Token);
