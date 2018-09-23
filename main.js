const Discord = require('discord.js')
const prefix = ('exp!')
var twitter = ('https://twitter.com/expencialmc')
var invitelink = ('https://discord.gg/Nyn8yDd')
var color = ('#FF653C')
const client = new Discord.Client()
var stepsKick = {};
var startbot = (0)

client.on("ready", function() {
    client.user.setActivity("Expencial 🔥 ! Do exp!help !")
    client.user.setUsername("Expencial 🔥")
    client.user.setStatus('dnd')
    console.log('\n--- --- --- --- ---\n\nExpencial Discord Bot started !\nThe Discord Bot prefix is : exp!\nRun exp!help to get command list\nIn case of bug suspicion, run exp!ping\nThe Discord Bot logging channel is : #📂expbot-logs\nThe suggestions channel is : #💡suggestions\nThe bug report channel is : #📋rapport-bugs\nThe user report channel is : #🔥reports\nThe questions channel is : #❓questions\n\nHave a nice day !\n\n--- --- --- --- ---\n')
})

client.on("ready", function() {
    client.on('message', function(message) {

        var command = message.content
        let command2 = message.content.split(/ +/g)[0].toLowerCase();
        var authordiscrim = message.author.username + '#' + message.author.discriminator
        var authorid = message.author.id
        var kickmember = message.mentions.users.first()
        var guild = message.guild
        var membercount = guild.memberCount
        var logchann = ('📂expbot-logs')
        var args = command.substring(prefix.length).split ("say ");
        var args2 = command.substring(prefix.length).split ("suggest ");
        var args3 = command.substring(prefix.length).split ("report ");
        var args4 = command.substring(prefix.length).split ("bug ");
        var args5 = command.substring(prefix.length).split ("question ")
        var args6 = command.substring(prefix.length).split ("poll ")

        if (command === prefix + 'help') {
            var helpEmbed = new Discord.RichEmbed()
            .addField('General commands :', prefix + 'help (Show this page). \n' + prefix + 'ping (Reveal the client ping). \n' + prefix + 'invite (Get a invite link) \n' + prefix + 'mcount (Tell how many people are here) \n ')
            .addField('Moderation commands :', prefix + 'kick <*user*> [*reason*] (Kick a user) **IN-DEV**. \n' + prefix + 'ban <*user*> [*reason*] (Ban a user) **IN-DEV**. \n' + prefix + 'unban <*user*> (Unban a user) **IN-DEV**. \n' + prefix + 'mute <*user*> [*reason*] (Mute a user) **INDEV**. \n' + prefix + 'unmute <*user*> (Unmute a user) **IN-DEV**. \n' + prefix + 'clear <*amount*> (Clear the channel) \n' + prefix + 'warn <*user*> [*reason*] (Warn a user) **IN-DEV**. \n' + prefix + "checkwarn <*user*> (Check user's warns) **IN-DEV**. \n ")
            .addField('Giveaway & polls commands :', prefix + 'giveaway {*channel*} <*title*> [*description*] (Create a giveaway) \n' + prefix + 'poll {*channel*} <*title*> [*question*] (Create a poll) \n ')
            .addField('Tickets commands :', prefix + 'suggest [*description*] (Suggest whatever you want) \n ' + prefix + 'bug [*description*] (Report a bug) \n' + prefix + "report [*report desc*] (Report a user) \n" + prefix + 'question [*question*] (Ask something)')
            .addField('Musical commands :', 'Any commands here \n ')
            .addField('Fun & others commands :', prefix + 'say [*message*] (Let bot speak for you) \n' + prefix + 'thanks (A special message for people help create this bot)')
            .setColor(color)
            message.channel.send(helpEmbed)
            console.log('\n--- --- --- --- ---\nCommand run : exp!help\nRun by : ' + authordiscrim + ' | ' + authorid + '\n--- --- --- --- ---')
            var authlog = message.author.tag
            var logEmbed = new Discord.RichEmbed()
            .addField('Help run by : ', authlog)
            .setColor(color)
            message.guild.channels.find("name", logchann).send(logEmbed)
        }
        if (command === prefix + 'ping') {
            var pingEmbed = new Discord.RichEmbed()
            .setDescription(':ping_pong:  ' + Math.round(client.ping) + ' ms.')
            .setColor(color)
            console.log('\n--- --- --- --- ---\nCommand run : exp!ping\nRun by : ' + authordiscrim + ' | ' + authorid + '\n"ping" value : ' + client.ping + ' ms\n--- --- --- --- ---')
            message.channel.send(pingEmbed)
            var authlog = message.author.tag
            var logEmbed = new Discord.RichEmbed()
            .addField('Ping run by : ', authlog)
            .setColor(color)
            message.guild.channels.find("name", logchann).send(logEmbed)
        }
        if (command === prefix + 'invite') {
            var inviteEmbed = new Discord.RichEmbed()
            .setTitle(':link:  ' + invitelink)
            .setColor(color)
            message.channel.send(inviteEmbed)
            console.log('Running invite command, asked by ' + authordiscrim + ' | ' + authorid)
            var authlog = message.author.tag
            var logEmbed = new Discord.RichEmbed()
            .addField('Invite run by : ', authlog)
            .setColor(color)
            message.guild.channels.find("name", logchann).send(logEmbed)
        }
        if (command === prefix + 'mcount') {
            var membercountEmbed = new Discord.RichEmbed()
            .setDescription(':busts_in_silhouette:  ' + membercount + ' members.')
            .setColor(color)
            message.channel.send(membercountEmbed)
            console.log('\n--- --- --- --- ---\nCommand run : exp!mcount\nRun by : ' + authordiscrim + ' | ' + authorid + '\n"membercount" value : ' + membercount + '\n--- --- --- --- ---')
            var authlog = message.author.tag
            var logEmbed = new Discord.RichEmbed()
            .setDescription('Mcount run by : ' + authlog)
            .setColor(color)
            message.guild.channels.find("name", logchann).send(logEmbed)
        }
        if (command === prefix + 'twitter') {
            var twitterEmbed = new Discord.RichEmbed()
            .setTitle(':bird:  ' + twitter)
            .setColor(color)
            message.channel.send(twitterEmbed)
            console.log('\n--- --- --- --- ---\nCommand run : exp!twitter\nRun by : ' + authordiscrim + ' | ' + authorid + '\n--- --- --- --- ---')
            var authlog = message.author.tag
            var logEmbed = new Discord.RichEmbed()
            .addField('Twitter run by : ', authlog)
            .setColor(color)
            message.guild.channels.find("name", logchann).send(logEmbed)
        }
        if (command2 === prefix + 'kick') {
            if (!message.member.hasPermission("KICK_MEMBERS")) {
                message.channel.send(new Discord.RichEmbed()
                    .setTitle(':bangbang:  Missing KICK_MEMBERS permission.')
                    .setColor(color)).catch(console.error);
                    var authlog = message.author.tag
                    var logEmbed = new Discord.RichEmbed()
                    .addField('Failed on kick because missing KICK_MEMBERS permission by : ', authlog)
                    .setColor(color)
                    message.guild.channels.find("name", logchann).send(logEmbed)
            }
            else {
                var kickArgs = message.content.split(prefix + 'kick').slice(1).join(prefix + 'kick').trim();
                var stepID = message.guild.id + message.channel.id + message.author.id;
                if (stepsKick[stepID] === undefined) {
                    stepsKick[stepID] = new Array();
                    message.channel.send(new Discord.RichEmbed()
                        .setDescription(':question:  Who do you want to kick ?')
                        .setColor(color)).catch(console.error);
                }
                else {
                    if (stepsKick[stepID].length == 0) {
                        var kickmember = kickArgs;
                        stepsKick[stepID] = [kickmember];
                        message.channel.send(new Discord.RichEmbed()
                            .setDescription(':question:  So, you want to kick ' + kickmember + ' but why ?')
                            .setColor(color)).catch(console.error);
                    }
                    else {
                        var kickmember = stepsKick[stepID][0];
                        if (stepsKick[stepID].length == 1) {
                            var kickreason = kickArgs;
                            stepsKick[stepID].push(kickreason);
                            message.channel.send(new Discord.RichEmbed()
                                .setDescription(':question:  Okay, so you want to kick ' + kickmember + ' for ' + kickreason + ' , right ? (yes/no)')
                                .setColor(color)).catch(console.error);
                        }
                        else {
                            var kickreason = stepsKick[stepID][1];
                            var kickEmbed;
                            if (kickArgs.match(/^(y(es)?|o(ui)?)$/gmi)) {
                                kickmember.kick(kickreason)
                                var kickEmbed = new Discord.RichEmbed()
                                .setDescription(':ballot_box_with_check:  Succesfuly kicked ' + kickmember + ' for ' + kickreason + '.')
                            }
                            else if (kickArgs.match(/^(n(on?)?)$/gmi)) {
                                var kickEmbed = new Discord.RichEmbed()
                                    .setDescription(':negative_squared_cross_mark:  Canceled.')
                                    .setColor(color);
                            }
                            stepsKick[stepID] = undefined;
                            message.channel.send(kickEmbed).catch(console.error);
                        }
                    }
                }
            }
        }
        if (command === prefix + 'ban') {
            var banEmbed = new Discord.RichEmbed()
            .setDescription(':clock1:  Coming soon.')
            .setColor(color)
            message.channel.send(banEmbed)
        }
        if (command === prefix + 'unban') {
            var unbanEmbed = new Discord.RichEmbed()
            .setDescription(':clock1:  Coming soon.')
            .setColor(color)
            message.channel.send(unbanEmbed)
        }
        if (command === prefix + 'mute') { 
            var muteEmbed = new Discord.RichEmbed()
            .setDescription(':clock1:  Coming soon.')
            .setColor(color)
            message.channel.send(muteEmbed)
        }
        if (command === prefix + 'unmute') {
            var unmuteEmbed = new Discord.RichEmbed()
            .setDescription(':clock1:  Coming soon.')
            .setColor(color)
            message.channel.send(unmuteEmbed)
        }
        if (command === prefix + 'warn') {
            var warnEmbed = new Discord.RichEmbed()
            .setDescription(':clock1:  Coming soon.')
            .setColor(color)
            message.channel.send(warnEmbed)
        }
        if (command === prefix + 'checkwarn' ) {
            var checkwarnEmbed = new Discord.RichEmbed()
            .setDescription(':clock1:  Coming soon.')
            .setColor(color)
            message.channel.send(checkwarnEmbed)
        }
        if (command.startsWith(prefix + 'say')) {
            if (message.member.hasPermission("MANAGE_MESSAGES")) {
                let botmessage = args.join(" ");
                var sayEmbed = new Discord.RichEmbed()
                .setDescription(':speech_left:  ' + botmessage)
                .setColor(color)
                message.delete()
                message.channel.send(sayEmbed);
                console.log('\n--- --- --- --- ---\nCommand run : exp!say\nRun by : ' + authordiscrim + ' | ' + authorid + '\n"botmessage" value : ' + botmessage + '\n--- --- --- --- ---')
            }
            else if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                var sayEmbed = new Discord.RichEmbed()
                .setDescription(':bangbang:  Missing MANAGE_MESSAGES permission.')
                .setColor(color)
                message.channel.send(sayEmbed)
                console.log(authordiscrim + ' | ' + authorid + ' tried to use say command, but MANAGE_MESSAGES permission is missing.')
            }
        }
        if (command.startsWith(prefix + 'suggest')) {
            let suggestion = args2.join(" ");
            if (!suggestion) {
                var suggestEmbed = new Discord.RichEmbed()
                .setDescription(':bangbang:  Please write your idea.')
                .setColor(color)
                message.channel.send(suggestEmbed)
            }
            var suggestEmbed = new Discord.RichEmbed()
            .addField(':bulb:  Idea of : ' + authordiscrim, suggestion)
            .setColor(color)
            message.guild.channels.find("name", "💡suggestions").send(suggestEmbed).then(function (message) {
                message.react("👍")
                message.react("👎")
            })
            console.log('Running suggest command, asked by ' + authordiscrim + ' | ' + authorid + ' (With arg :' + suggestion + ')')
        }
        if (command.startsWith(prefix + 'report')) {
            let report = args3.join(" ");
            if (!report) {
                var reportEmbed = new Discord.RichEmbed()
                .setDescription(':bangbang:  Please write your report.')
                .setColor(color)
                message.channel.send(reportEmbed)
            }
            var reportEmbed = new Discord.RichEmbed()
            .addField(':fire:  Report of : ' + authordiscrim, report)
            .setColor(color)
            message.guild.channels.find("name", "🔥reports").send(reportEmbed)
            console.log('Running report command, asked by ' + authordiscrim + ' | ' + authorid + ' (With arg :' + report + ')')
        }
        if (command.startsWith(prefix + 'bug')) {
            let bug = args4.join(" ");
            if (!bug) {
                var bugEmbed = new Discord.RichEmbed()
                .setDescription(':bangbang:  Please write your bug report.')
                .setColor(color)
                message.channel.send(bugEmbed)
            }
            var bugEmbed = new Discord.RichEmbed()
            .addField(':ant:  ' + authordiscrim + ' found a new bug !', bug)
            .setColor(color)
            message.guild.channels.find("name", "📋rapport-bugs").send(bugEmbed)
            console.log('Running bug command, asked by ' + authordiscrim + ' | ' + authorid + ' (With arg :' + bug + ')')
        }
        if (command === prefix + 'thanks') {
            var thanksEmbed = new Discord.RichEmbed()
            .setDescription(':heart:  Thanks to @.Wright#8036, @ElTHumeau#9544, @Japanes#8646 and @LordMorgoth#0875 to helping developping this Discord Bot.')
            .setColor(color)
            message.channel.send(thanksEmbed)
            console.log('Running thanks command, asked by ' + authordiscrim + ' | ' + authorid)
        }        
        if (command.startsWith(prefix + 'question')) {
            let question = args5.join(" ");
            if (!question) {
                var questionEmbed = new Discord.RichEmbed()
                .setDescription(':bangbang:  Please write your question.')
                .setColor(color)
                message.channel.send(questionEmbed)
            }
            var questionEmbed = new Discord.RichEmbed()
            .addField(':question: ' + authordiscrim + ' have a question !', question)
            .setColor(color)
            message.guild.channels.find("name", "❓questions").send(questionEmbed)
            console.log('Running question command, asked by ' + authordiscrim + ' | ' + authorid + ' (With arg :' + question + ')')
        }
        if (command.startsWith(prefix + "poll")) {
            if (!message.author.has.permission("MANAGE_MESSAGES")) {
                var pollEmbed = new Discord.RichEmbed()
                .setDescription('Missing "MANAGE_MESSAGES" permission.')
                .setColor(color)
                message.channel.send(pollEmbed)
            }
            if (message.author.has.permission("MANAGE_MESSAGES")) {
                let poll = args6.join(" ");
                if (!poll) {
                    var pollEmbed = new Discord.RichEmbed()
                    .setDescription('Please write your poll.')
                    .setColor(color)
                    message.channel.send(pollEmbed)
                }
                var pollEmbed = new Discord.RichEmbed()
                .addField('A administrator have a question for you, react with 👍 and 👎.', poll)
                .setColor(color)
                message.guild.channels.find("name", "📈sondages").send(suggestEmbed).then(function (message) {
                    message.react("👍")
                    message.react("👎")
                })
                console.log('Running poll command, asked by ' + authordiscrim + ' | ' + authorid + ' (With arg :' + poll + ')')
            }
        }
                 if(message.content.startsWith(prefix + "clear")){
            if (!message.member.permissions.has('MANAGE_MESSAGES')) {
                   var ClearEmbed = new Discord.RichEmbed()
                   .setDescription(':bangbang:  Missing "MANAGE_MESSAGES" permission.')
                   .setColor(color)
                   message.delete()
                return message.channel.send(ClearEmbed)};
                var ClearrEmbed = new Discord.RichEmbed()
                  .setDescription(':bangbang:  You should specify a number between 2 and 100.')
                  .setColor(color)
                  message.delete()
               let args = message.content.split(" ").slice(1);
               if(!args[0]) return message.channel.send(ClearrEmbed);
                message.channel.bulkDelete(args[0]).then(() => {
                    var ClearEmbed = new Discord.RichEmbed()
                    .setDescription(`:wastebasket:  ${args[0]} messages got deleted.`)
                    .setColor(color)
                    message.delete()
                    message.channel.send(ClearEmbed).then(msg => {msg.delete(5000)});
               });
            }
    });
});

client.login(process.env.LOGINKEY)
