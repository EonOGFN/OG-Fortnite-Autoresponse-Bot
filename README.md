**A Discord bot that automatically responds to common questions in OG Fortnite servers.**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Discord.js](https://img.shields.io/badge/Discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white)

## Setup

**1. Download Node.js**
- **https://nodejs.org/en/download**

**2. Install the Discord library**
```bash
npm install discord.js
```

**3. Get your bot token from [Discord Developer Portal](https://discord.com/developers/applications) and enable these intents:**
- **`Guilds`, `GuildMessages`, `MessageContent`, `GuildMembers`**

**4. Open [Index.js](https://github.com/EonOGFN/OG-Fortnite-Autoresponse-Bot/blob/master/Discord%20Bot/Index.js) and add your Bot Token Here:**
```javascript
const DiscordToken = 'YOUR_TOKEN_HERE';
```

**5. Configure ignored roles in [Index.js](https://github.com/EonOGFN/OG-Fortnite-Autoresponse-Bot/blob/master/Discord%20Bot/Index.js) *(Optional)*:**
```javascript
const IgnoredRoles = ['YOUR_ROLES_HERE'];

```

**6. Run the bot**
```bash
Start.bat
```