# AutoKick Guild Members (Advanced)

> ## Init the repo
```ts
NPM   =>  npm init -y
YARN  =>  yarn init -y
```
<br>

> ## Install the dependencies
```ts
NPM   =>  npm i discord.js dotenv
YARN  =>  yarn add discord.js dotenv
```
<br>

> ## Set up your `.env.example` file
```ts
// Guild ID: right click on your guild and select "Copy ID"
GUILD_ID = 'replace-with-your-guild-id'

// Bot Token: https://bit.ly/3QGGNBH
BOT_TOKEN = 'replace-with-your-bot-token'

// Ignore Guild Bots & Members
IGNORE_BOTS = 'YES' or 'NO'
IGNORE_MEMBERS = ['ID1', 'ID2', 'ID3']

// Min: 5 sec to avoid API ratelimit
KICK_INTERVAL = 5000
```
<br>

> ## Rename & Save the changes
```apache
Rename .env.example => .env

and then use

Ctrl + S => to save the changes
```
<br>

> ## Start the app (in the terminal)
```apache
NPM   =>  npm run start
YARN  =>  yarn start
```