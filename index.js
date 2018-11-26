const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("culdn't find commands.");
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("San Andreas Cops!");
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

    /* if(cmd === `${prefix}ban`){

        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send("Can't find user!");
        let bReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
        if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be bannd!");
    
        let banEmbed = new Discord.RichEmbed()
        .setDescription("~ban~")
        .setColor("#e56b00")
        .addField("Baned User", `${bUser} with ID ${bUser.id}`)
        .addField("Baned By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Baned In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", bReason);
    
        let incidentChannel = message.guild.channels.find(`name`, "incidents");
        if(!incidentChannel) return message.channel.send("Can't find incidents channel.");

        message.guild.member(bUser).ban(bReason);
        incidentChannel.send(banEmbed);

    }

    if(cmd === `${prefix}kick`){

        //!kick @daeshan askin for it
    
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("Can't find user!");
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
        if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");
    
        let kickEmbed = new Discord.RichEmbed()
        .setDescription("~Kick~")
        .setColor("#e56b00")
        .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
        .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Kicked In", message.channel)
        .addField("Tiime", message.createdAt)
        .addField("Reason", kReason);
    
        let incidentChannel = message.guild.channels.find(`name`, "incidents");
        if(!incidentChannel) return message.channel.send("Can't find incidents channel.");
    
        message.guild.member(kUser).kick(kReason);
        incidentChannel.send(kickEmbed);
    
        return;
      }

    if(cmd === `${prefix}discord`){

        let sicon = message.guild.iconURL;
        let dembed = new Discord.RichEmbed()
        .setDescription("Discord Information")
        .setColor("#15f153")
        .setThumbnail(sicon)
        .addField("Discord Name", message.guild.name)
        .addField("Created On", message.guild.createdAt)
        .addField("You joined", message.member.joinedAt)
        .addField("Members", message.guild.memberCount);

        return message.channel.send(dembed);
    }

    if(cmd === `${prefix}botinfo`){

        let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#15f153")
        .addField("Bot Name", bot.user.username)
        .addField("Made By", bot.author)
        .addField("Created On", bot.user.createdAt);

        return message.channel.send(botembed);
    } */
});





client.login(process.env.NTE2NTQ2MzQ0MzY2NjM3MDc4.Dt2L_w.Bg38OPbRzk5hZOHhYBXhjaUQm7M);//where BOT_TOKEN is the token of our bot package.json
