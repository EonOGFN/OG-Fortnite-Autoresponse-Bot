const { Client, GatewayIntentBits } = require('discord.js');
const AutoResponseRules = require('./Response.js');

const BotClient = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers ] });

const DiscordToken = 'YOUR_TOKEN_HERE';
const IgnoredRoles = ['YOUR_ROLES_HERE'];

BotClient.once('ready', () => {
    console.log(`Bot is online as ${BotClient.user.tag}`);
    console.log(`Monitoring ${BotClient.guilds.cache.size} server(s)`);
    console.log(`Ignoring ${IgnoredRoles.length} role(s)`);
});

BotClient.on('messageCreate', async (MessageObject) => {
    if (MessageObject.author.bot)
        return;

    if (MessageObject.member && MessageObject.member.roles.cache.some(Role => IgnoredRoles.includes(Role.id)))
        return;

    for (const Rule of AutoResponseRules) {
        try {
            const Response = Rule(MessageObject.content.toLowerCase());
            if (Response) {
                await MessageObject.reply({ embeds: [Response] }).catch((Error) => {
                    console.error('Failed to send reply:', Error);
                });
                return;
            }
        } catch (Error) {
            console.error('Error in autoresponse rule:', Error);
        }
    }
});

BotClient.on('error', (Error) => {
    console.error('Discord client error:', Error);
});

BotClient.login(DiscordToken).catch((Error) => {
    console.error('Failed to login:', Error);

    if (Error.message.includes('TOKEN_INVALID'))
        console.error('Your bot token is invalid. Get it from: https://discord.com/developers/applications');
});