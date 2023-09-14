# EC2 Starter

EC2 Launcher is a Discord bot which starts your stopped EC2 instance on command.

The goal is to allow my friends to start our Minecraft servers at will,
so they don't have to ask me for help.
With that end in mind, it is meant to be lightweight, so it can run 24/7 with little cost;
thus, you may find it missing some features you'd like.
You are welcome to request these, but they may not get implemented.

If you need to quickly and easily start up an EC2 instance, this service may be for you.

## Getting started

This project is in early development. You are welcome to try it out, but expect things to break.

1. [Create a Discord application](https://discord.com/developers/docs/getting-started#step-1-creating-an-app)
   and [a bot user](https://discord.com/developers/docs/getting-started#configuring-your-bot) for the app.
2. Generate a bot token for the user. Copy this token and store it securely.
3. Clone this repository.
   ```bash
   git clone git@github.com:merenze/EC2Launcher.git
   cd EC2Launcher
   ```
4. Configure your application. Copy config.example.yml to config.yml and paste your bot's token into the `token` field.
   ```yaml
   token: "your-bot-token"
   ```
5. Build and run the application with Docker.
   ```bash
   docker build -t ec2starter .
   docker run -d ec2starter
   ```
   Alternatively, you can build and run with `npm`:
   ```bash
   npm i
   npm start
   ```
6. Invite your bot to your server, with permission to read and send messages.
7. In a channel your bot has permission to view, execute `/start`.
   Your bot should respond with `Hello, <your-username>!`


## Contributing

This project is only accepting pull requests for issues with the `help wanted` label.

Feel free to open discussions, report bugs, and request features.
