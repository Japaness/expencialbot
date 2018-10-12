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

client.on('guildMemberAdd', member => { // ! Message de bienvenue
    member.addRole(member.guild.roles.find("name", "☄ >  En ligne ✋"))
    var welcomeMember = member
    var welcomeEmbed = new Discord.RichEmbed()
    .setDescription(':inbox_tray:  ``Expencial - Lobby`` : Bienvenue à ' + welcomeMember + ' sur notre serveur !')
    .setColor('#5bff8c')
    member.guild.channels.find("name", "📥accueil").send(welcomeEmbed)
    console.log('-> member_joined')
})

client.on('guildMemberRemove', member => { // ! Message d'aurevoir
    var farewellMember = member
    var farewellEmbed = new Discord.RichEmbed()
    .setDescription(':outbox_tray:  ``Expencial - Lobby`` : Au revoir ' + farewellMember + ' !')
    .setColor('#ff4e4e')
    member.guild.channels.find("name", "📥accueil").send(farewellEmbed)
    console.log('-> member_left')
})


client.on("ready", function() {
    client.on('message', function(message) {

        // ! Définition des variables "informations"

        var command = message.content
        let command2 = message.content.split(/ +/g)[0].toLowerCase();
        var authordiscrim = message.author.username + '#' + message.author.discriminator
        var authorid = message.author.id
        var kickmember = message.mentions.users.first()
        var guild = message.guild
        var membercount = guild.memberCount
        var logchann = ('📂expbot-logs')

        // ! Définition des variables "arguments"

        var args = command.substring(prefix.length).split ("say ");
        var args2 = command.substring(prefix.length).split ("suggest ");
        var args3 = command.substring(prefix.length).split ("report ");
        var args4 = command.substring(prefix.length).split ("bug ");
        var args5 = command.substring(prefix.length).split ("question ")
        var args6 = command.substring(prefix.length).split ("poll ")
        var args7 = command.substring(prefix.length).split ("changelog ")
        var args8 = command.substring(prefix.length).split ("unban ")

        
                // ? BASICS COMMANDS ? //


        if (command === prefix + 'help') { // ! Command HELP //
            var helpEmbed = new Discord.RichEmbed()
            .addField(':briefcase: | Commandes de base :', prefix + 'help (Affiche cette liste). \n' + prefix + 'ping (Vérifiez la latence du bot). \n' + prefix + "invite (Obtenez un lien d'invitation) \n" + prefix + 'mcount (Indique le total de membres ici) \n' + prefix + "calc [*calcul*] (Effectuer des calculs) **BIENTÔT** \n" + prefix + "userinfo <*utilisateur*> (Informations de base sur un utilisateur)")
            .addField(':shield: | Commandes de modération :', prefix + 'kick <*user*> [*raison*] (Expulser un utilisateur) **BIENTÔT**. \n' + prefix + 'ban <*utilisateur*> [*raison*] (Bannir un utiliateur) **BIENTÔT**. \n' + prefix + 'unban <*identifiant*> (Débannir un identifiant). \n' + prefix + 'mute <*utilisateur*> [*raison*] (Mute un utilisateur) **BIENTÔT**. \n' + prefix + 'unmute <*utilisateur*> (Unmute un utilisateur) **BIENTÔT**. \n' + prefix + 'clear <*montant*> (Nettoie le salon) \n' + prefix + 'warn <*utilisateur*> [*raison*] (Avertir un utilisateur) **BIENTÔT**. \n' + prefix + "checkwarn <*utilisateur*> (Vérifier un casier) **BIENTÔT**. \n ")
            .addField(":tada: | Commandes d'évenements :", prefix + 'giveaway {*salon*} <*titre*> [*description*] (Créer un concours) \n' + prefix + 'poll {*salon*} <*titre*> [*question*] (Créer un sondage) \n ')
            .addField(':tickets: | Commandes de rapports :', prefix + 'suggest [*description*] (Suggérez un ajout) \n ' + prefix + 'bug [*description*] (Rapportez un bug) \n' + prefix + "report [*report*] (Rapportez un utilisateur) \n" + prefix + 'question [*question*] (Posez votre question) \n' + prefix + "changelog [*description*] (Ajoutez une note de mise à jour) \n" + prefix + "enigma [*énigme*] (Soumettez votre énigme)")
            .addField(':notes: | Commandes musicales :', 'Aucune commandes ici... \n ')
            .addField(':speech_left: | Commandes diverses :', prefix + 'say [*message*] (Faites parler le bot) \n' + prefix + 'avatar (Obtenez votre photo de profil) \n' + prefix + 'thanks (Message de remerciement pour les créateurs)')
            .setColor(color)
            message.channel.send(helpEmbed)
            console.log('-> help_command')
            var authlog = message.author.tag
            var logEmbed = new Discord.RichEmbed()
            .addField('Help run by : ', authlog)
            .setColor(color)
            message.guild.channels.find("name", logchann).send(logEmbed)
        }
        if (command === prefix + 'ping') { // ! Command PING //
            var pingEmbed = new Discord.RichEmbed()
            .setDescription(':ping_pong:  |  ' + Math.round(client.ping) + ' ms.')
            .setColor(color)
            console.log('-> ping_command (ping = ' + Math.round(client.ping) + ' )')
            message.delete()
            message.channel.send(pingEmbed)
            var authlog = message.author.tag
            var logEmbed = new Discord.RichEmbed()
            .addField('Ping run by : ', authlog)
            .setColor(color)
            message.guild.channels.find("name", logchann).send(logEmbed)
        }
        if (command === prefix + 'calc') { // ! Command CALC //
            var calcEmbed = new Discord.RichEmbed()
            .setDescription(':clock1:  |  Bientôt !')
            .setColor(color)
            message.channel.send(calcEmbed)
            console.log('-> calc_command (calc = undefined )')
        }
        if (command === prefix + 'invite') { // ! Command INVITE //
            var inviteEmbed = new Discord.RichEmbed()
            .setTitle(':link:  |  ' + invitelink)
            .setColor(color)
            message.delete()
            message.channel.send(inviteEmbed)
            console.log('-> invite_command')
            var authlog = message.author.tag
            var logEmbed = new Discord.RichEmbed()
            .addField('Invite run by : ', authlog)
            .setColor(color)
            message.guild.channels.find("name", logchann).send(logEmbed)
        }
        if (command === prefix + 'mcount') { // ! Command MEMBER_COUNT //
            var membercountEmbed = new Discord.RichEmbed()
            .setDescription(':busts_in_silhouette:  |  ' + membercount + ' membres.')
            .setColor(color)
            message.delete()
            message.channel.send(membercountEmbed)
            console.log('-> mcount_command (mcount = ' + membercount + ' members)')
            var authlog = message.author.tag
            var logEmbed = new Discord.RichEmbed()
            .setDescription('Mcount run by : ' + authlog)
            .setColor(color)
            message.guild.channels.find("name", logchann).send(logEmbed)
        }
        if (command === prefix + 'twitter') { // ! Command TWITTER //
            var twitterEmbed = new Discord.RichEmbed()
            .setTitle(':bird:  |  ' + twitter)
            .setColor(color)
            message.delete()
            message.channel.send(twitterEmbed)
            console.log('-> twitter_command')
            var authlog = message.author.tag
            var logEmbed = new Discord.RichEmbed()
            .addField('Twitter run by : ', authlog)
            .setColor(color)
            message.guild.channels.find("name", logchann).send(logEmbed)
        }
        if (command === prefix + 'avatar') { // ! Command AVATAR //
            var avatarEmbed = new Discord.RichEmbed()
            .setTitle(':frame_with_picture:  |  Voici votre photo de profil :')
            .setImage(message.author.avatarURL)
            .setColor(color)
            message.delete()
            message.channel.send(avatarEmbed)
        }
        if (command === prefix + 'thanks') { // ! Command THANKS //
            var thanksEmbed = new Discord.RichEmbed()
            .setDescription(':heart:  |  Merci à @.Wright#8036, @ElTHumeau#9544, @Japanes#8646 et à @LordMorgoth#0875 pour avoir participé au développement de ce bot Discord qui sans eux ne serait rien :heart: !')
            .setColor(color)
            message.channel.send(thanksEmbed)
            console.log('Running thanks command, asked by ' + authordiscrim + ' | ' + authorid)
        }
        if (command === prefix + 'serverlist') { // ! Command LIST_SERVERS //
            var srvlist = new Discord.RichEmbed()
            .setDescription(':newspaper:  |  Expencial Discord Bot se trouve sur ces serveurs : \n\n' + client.guilds.map(r => `**${r.name}** | ${r.id}, avec **${r.memberCount}** membres.`) + "\n")
            .setColor(color)
            message.channel.send(srvlist)
        }
        if (command.startsWith(prefix + "userinfo")) {
            var user = message.mentions.users.first();
            var userEmbed = new Discord.RichEmbed()
            .setTitle(":page_with_curl:  |  Informations à propos de " + user.tag) // ! ok
            .addField(":id: Identifiant : ", user.id) // ! ok
            .addField(":hash: Discriminateur / Tag : ", "#" + user.discriminator) // ! ok
            .addField(":traffic_light: Statut : ", user.status) // ? pas ok
            .addField(":video_game: Activité : ", user.presence) // ? pas ok
            .addField(":new: Compte créé le :", user.createdAt) // ! ok
            .addField(":star: Discord Nitro :", user.premium) // ? pas ok
            .addField(":ballot_box_with_check: Compte vérifié : ", user.verified) // ? pas ok
            .addField(":inbox_tray: A rejoint le serveur le : ") // ? pas ok
            .addField(":speech_left: Dernier message posté : ", user.lastMessage + " | ID : " + user.lastMessageID) // ! ok
            .addField(":wrench: Permissions :") // ? pas ok
            .setColor(color) // ! ok
            .setThumbnail(user.avatarURL) // ! ok
            message.delete() // ! ok
            message.channel.send(userEmbed) // ! ok
        }

                // ? MODERATION COMMANDS ? //


        if (command2 === prefix + 'kick') { // ! Command KICK //
            if (!message.member.hasPermission("KICK_MEMBERS")) {
                message.channel.send(new Discord.RichEmbed()
                    .setTitle(':bangbang:  |  Missing KICK_MEMBERS permission.')
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
                        .setDescription(':question:  |  Who do you want to kick ?')
                        .setColor(color)).catch(console.error);
                }
                else {
                    if (stepsKick[stepID].length == 0) {
                        var kickmember = kickArgs;
                        stepsKick[stepID] = [kickmember];
                        message.channel.send(new Discord.RichEmbed()
                            .setDescription(':question:  |  So, you want to kick ' + kickmember + ' but why ?')
                            .setColor(color)).catch(console.error);
                    }
                    else {
                        var kickmember = stepsKick[stepID][0];
                        if (stepsKick[stepID].length == 1) {
                            var kickreason = kickArgs;
                            stepsKick[stepID].push(kickreason);
                            message.channel.send(new Discord.RichEmbed()
                                .setDescription(':question:  |  Okay, so you want to kick ' + kickmember + ' for ' + kickreason + ' , right ? (yes/no)')
                                .setColor(color)).catch(console.error);
                        }
                        else {
                            var kickreason = stepsKick[stepID][1];
                            var kickEmbed;
                            if (kickArgs.match(/^(y(es)?|o(ui)?)$/gmi)) {
                                message.guild.member(kickmember).kick(kickreason);
                                var kickEmbed = new Discord.RichEmbed()
                                .setDescription(':ballot_box_with_check:  |  Succesfuly kicked ' + kickmember + ' for ' + kickreason + '.')
                            }
                            else if (kickArgs.match(/^(n(on?)?)$/gmi)) {
                                var kickEmbed = new Discord.RichEmbed()
                                    .setDescription(':negative_squared_cross_mark:  |  Canceled.')
                                    .setColor(color);
                            }
                            stepsKick[stepID] = undefined;
                            message.channel.send(kickEmbed).catch(console.error);
                        }
                    }
                }
            }
        }
        if (command === prefix + 'ban') { // ! Command BAN //
            var banEmbed = new Discord.RichEmbed()
            .setDescription(':clock1:  |  Coming soon.')
            .setColor(color)
            message.channel.send(banEmbed)
        }
        if (command.startsWith(prefix + 'unban')) { // ! Command UNBAN //
            let ubanMember = args8.join(" ");
            if (!message.member.hasPermission("BAN_MEMBERS")) {
                var ubanEmbed = new Discord.RichEmbed()
                .setDescription(':bangbang: | Missing BAN_MEMBERS permission.')
                .setColor(color)
                message.channel.send(ubanEmbed)
            }
            else if (message.member.hasPermission("BAN_MEMBERS")) {
                if (!ubanMember) {
                    var ubanEmbed = new Discord.RichEmbed()
                    .setDescription(':bangbang: | Please, mention a ID.')
                    .setColor(color)
                    message.channel.send(ubanEmbed)
                }
                guild.unban(ubanMember)
                var ubanEmbed = new Discord.RichEmbed()
                .setDescription(":fire:  |  The ID ``" + ubanMember + "`` has been unbanned.")
                .setColor(color)
                message.delete()
                message.channel.send(ubanEmbed)
            }
        }
        if (command === prefix + 'mute') { // ! Command MUTE //
            var muteEmbed = new Discord.RichEmbed()
            .setDescription(':clock1:  |  Coming soon.')
            .setColor(color)
            message.channel.send(muteEmbed)
        }
        if (command === prefix + 'unmute') { // ! Command UNMUTE //
            var unmuteEmbed = new Discord.RichEmbed()
            .setDescription(':clock1:  |  Coming soon.')
            .setColor(color)
            message.channel.send(unmuteEmbed)
        }
        if (command === prefix + 'warn') { // ! Command WARN_GIVE //
            var warnEmbed = new Discord.RichEmbed()
            .setDescription(':clock1:  |  Coming soon.')
            .setColor(color)
            message.channel.send(warnEmbed)
        }
        if (command === prefix + 'checkwarn' ) { // ! Command WARN_CHECK //
            var checkwarnEmbed = new Discord.RichEmbed()
            .setDescription(':clock1:  |  Coming soon.')
            .setColor(color)
            message.channel.send(checkwarnEmbed)
        }
        if(command.startsWith(prefix + "clear")) { // ! Command CLEAR //
            if (!message.member.permissions.has('MANAGE_MESSAGES')) {
                   var ClearEmbed = new Discord.RichEmbed()
                   .setDescription(':bangbang:  |  Missing "MANAGE_MESSAGES" permission.')
                   .setColor(color)
                   message.delete()
                return message.channel.send(ClearEmbed)};
                var ClearrEmbed = new Discord.RichEmbed()
                  .setDescription(':bangbang:  |  You should specify a number between 2 and 100.')
                  .setColor(color)
                  message.delete()
               let args = message.content.split(" ").slice(1);
               if(!args[0]) return message.channel.send(ClearrEmbed);
                message.channel.bulkDelete(args[0]).then(() => {
                    var ClearEmbed = new Discord.RichEmbed()
                    .setDescription(`:wastebasket:  |  ${args[0]} messages got deleted.`)
                    .setColor(color)
                    message.delete()
                    message.channel.send(ClearEmbed).then(msg => {msg.delete(5000)});
               });
            }

                // ? TICKETS COMMANDS ? //


        if (command.startsWith(prefix + 'say')) {
            if (message.member.hasPermission("MANAGE_MESSAGES")) {
                let botmessage = args.join(" ");
                var sayEmbed = new Discord.RichEmbed()
                .setDescription(':speech_left:  |  ' + botmessage)
                .setColor(color)
                message.delete()
                message.channel.send(sayEmbed);
                console.log('\n--- --- --- --- ---\nCommand run : exp!say\nRun by : ' + authordiscrim + ' | ' + authorid + '\n"botmessage" value : ' + botmessage + '\n--- --- --- --- ---')
            }
            else if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                var sayEmbed = new Discord.RichEmbed()
                .setDescription(':bangbang:  |  Missing MANAGE_MESSAGES permission.')
                .setColor(color)
                message.channel.send(sayEmbed)
                console.log(authordiscrim + ' | ' + authorid + ' tried to use say command, but MANAGE_MESSAGES permission is missing.')
            }
        }
        if (command.startsWith(prefix + 'changelog')) {
            if (message.member.hasPermission("ADMINISTRATOR")) {
                let clogmessage = args7.join(" ");
                var clogEmbed = new Discord.RichEmbed()
                .setDescription(':newspaper:  |  ' + clogmessage)
                .setColor(color)
                message.delete()
                message.guild.channels.find("name", "📂changelog").send(clogEmbed)
                
                console.log('[EXPBOT] [CMD] : changelog_command (clogmessage = ' + clogmessage + ' )')
            }
            else if (!message.member.hasPermission("ADMINISTRATOR")) {
                var clogEmbed = new Discord.RichEmbed()
                .setDescription(":bangbang:  |  You don't have a Administrator role.")
                .setColor(color)
                message.delete()
                message.channel.send(clogEmbed);
                console.log('[EXPBOT] [CMD] : // FAILED // changelog_command (user missing permission)')
            }
        }
        if (command.startsWith(prefix + 'suggest')) {
            let suggestion = args2.join(" ");
            if (!suggestion) {
                var suggestEmbed = new Discord.RichEmbed()
                .setDescription(':bangbang:  |  Please write your idea.')
                .setColor(color)
                message.channel.send(suggestEmbed)
            }
            var suggestEmbed = new Discord.RichEmbed()
            .addField(':bulb:  |  Idea of : ' + authordiscrim, suggestion)
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
                .setDescription(':bangbang:  |  Please write your report.')
                .setColor(color)
                message.channel.send(reportEmbed)
            }
            var reportEmbed = new Discord.RichEmbed()
            .addField(':fire:  |  Report of : ' + authordiscrim, report)
            .setColor(color)
            message.guild.channels.find("name", "🔥reports").send(reportEmbed)
            console.log('Running report command, asked by ' + authordiscrim + ' | ' + authorid + ' (With arg :' + report + ')')
        }
        if (command.startsWith(prefix + 'bug')) {
            let bug = args4.join(" ");
            if (!bug) {
                var bugEmbed = new Discord.RichEmbed()
                .setDescription(':bangbang:  |  Please write your bug report.')
                .setColor(color)
                message.channel.send(bugEmbed)
            }
            var bugEmbed = new Discord.RichEmbed()
            .addField(':ant:  |  ' + authordiscrim + ' found a new bug !', bug)
            .setColor(color)
            message.guild.channels.find("name", "📋rapport-bugs").send(bugEmbed)
            console.log('Running bug command, asked by ' + authordiscrim + ' | ' + authorid + ' (With arg :' + bug + ')')
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
                .setDescription(':bangbang:  |  Missing "MANAGE_MESSAGES" permission.')
                .setColor(color)
                message.channel.send(pollEmbed)
            }
            if (message.author.has.permission("MANAGE_MESSAGES")) {
                let poll = args6.join(" ");
                if (!poll) {
                    var pollEmbed = new Discord.RichEmbed()
                    .setDescription(':bangbang:  |  Please write your poll.')
                    .setColor(color)
                    message.channel.send(pollEmbed)
                }
                var pollEmbed = new Discord.RichEmbed()
                .addField(':question:  |  A administrator have a question for you, react with 👍 and 👎.', poll)
                .setColor(color)
                message.guild.channels.find("name", "📈sondages").send(suggestEmbed).then(function (message) {
                    message.react("👍")
                    message.react("👎")
                })
                console.log('Running poll command, asked by ' + authordiscrim + ' | ' + authorid + ' (With arg :' + poll + ')')
            }
        }
    })
});

client.login(process.env.LOGINKEY)
