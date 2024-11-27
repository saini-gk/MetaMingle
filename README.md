# MetaMingle

![Screenshot](https://github.com/saini-gk/MetaMingle/blob/main/Working%20Screenshots/Working%20SS.png)


This is a simple Discord bot built using `discord.js` and Node.js. The bot includes several useful commands such as `!hello`, `!rules`, `!userinfo`, and more. It can be used to automate moderation tasks and provide entertainment on a Discord server.

## Features

- `!hello`: Greet the bot.
- `!rules`: Display server rules.
- `!userinfo`: Display user information.
- `!clear`: Clear a specified number of messages.
- `!kick`: Kick a member from the server.
- `!ping`: Check the bot's latency.
- `!poll`: Create a simple poll.
- `!joke`: Get a random joke.
- `!mute`: Mute a user for a specified time.
- `!avatar`: Get a user's avatar.
- And more!

## Prerequisites

Before running the bot, ensure you have the following installed:

- **Node.js** (v16.0.0 or later)
- **npm** (comes with Node.js)

## Setup

1. **Clone the repository**:

   First, clone the project to your local machine:

   ```
   git clone https://github.com/saini-gk/MetaMingle.git
   cd MetaMingle
   ```
2. **Install dependencies**:

   Install the required dependencies by running:
   ```
   npm install
   ```
   This will install the following packages:
   - `discord.js`: The library used to interact with the Discord API.
   - `dotenv`: A package to load environment variables from a .env file.
   - `node-fetch`: A package for making HTTP requests (used for the !joke command).

3. **Create a .env file**:
   In the root directory of the project, create a .env file and add your bot token:
   ```
   BOT_TOKEN=your-discord-bot-token-here
   ```
   You can get your Discord bot token by creating a bot in the Discord Developer Portal, under your bot's settings.

4. **Set up the bot**:
   The bot commands are located in the `commands/` directory. Each file represents a different command. You can add more commands by creating new files in this folder, following the same format as the existing ones.

## Running the Bot
Once the dependencies are installed and the .env file is configured, you can start the bot by running:
```
npm start
```
The bot will log in to Discord and start responding to commands.

## Commands

Here is a list of the currently available commands:

- `!hello`: Greet the bot.
- `!rules`: Display server rules.
- `!userinfo`: Display user information.
- `!clear <number>`: Clear the specified number of messages.
- `!kick @user`: Kick a member from the server.
- `!ping`: Check the bot's latency.
- `!poll <question>`: Create a simple poll.
- `!joke`: Get a random joke.
- `!mute @user <time>`: Mute a user for a specified amount of time.
- `!avatar @user`: Get a user's avatar.

## Adding More Commands
To add more commands:

- Create a new file in the `commands/` directory (e.g., `newcommand.js`).
- Inside the file, export an object with the following properties:
  `name`: The name of the command (e.g., `newcommand`).
  `description`: A brief description of the command.
  `execute(message, args)`: A function that contains the logic for your command.
- Restart the bot to load the new command.

## Error Logging
The bot logs errors to a file called `error.log` to help with debugging. If something goes wrong while executing a command, the error will be recorded in this file.

## Contributing
If you'd like to contribute to the bot, feel free to fork the repository, make changes, and submit a pull request. All contributions are welcome!

### Steps for Uploading the Project to GitHub:

1. **Create a repository** on GitHub.
2. **Initialize a Git repository** locally:
   ```
   git init
   ```
3. **Add your files to the Git repository**:
   ```
   git add .
   ```
4. **Commit the files**:
   ```
   git commit -m "Initial commit"
   ```

5. **Push the changes to GitHub**:
   ```
   git push -u origin main
   ```

Want to join my discord server? 
Click this https://discord.gg/GYjbJk3nrQ 
