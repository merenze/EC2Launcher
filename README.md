# EC2 Starter

EC2 Starter is a Discord bot which starts your stopped EC2 instance on command.

I built this bot to allow my friends to start my Minecraft server from our Discord server.
With that end in mind, it is meant to be lightweight, so it can run 24/7 with little cost;
thus, you may find it missing some features you'd like.
You are welcome to request these, but they may not get implemented.

If you need to quickly and easily start up an EC2 instance, this service may be for you.

## Getting started

This project is in early development. You are welcome to try it out, but expect things to break.

1. [Create a Discord application](https://discord.com/developers/docs/getting-started#step-1-creating-an-app)
   and [a bot user](https://discord.com/developers/docs/getting-started#configuring-your-bot) for the app.
2. Generate a bot token for the user. Copy this token and store it securely.
3. [Create an IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html).
   At minimum, this user needs the `StartInstances` and `StopInstances` permissions for EC2.
   Generate an access key pair, and store the secret token somewhere securely.
4. Clone this repository.
   ```bash
   git clone git@github.com:merenze/EC2Launcher.git
   cd EC2Launcher
   ```
5. Configure your application. Copy config.example.yml to config.yml.
   Paste your bot's token into the `token` field.
   Paste your IAM user's access key ID into the `accessKeyId` field.
   Paste your IAM user's secret access key into the `accessKeySecret` field.
   Enter your AWS region into the `region` field.
   ```yaml
   token: "your-bot-token"
   accessKeyId: "your-access-key-id"
   accessKeySecret: "your-secret-access-key"
   region: "us-east-1"
   ```
   Under the `instances` field, name each instance with a key and provide the ID for that instance.
   ```yaml
   instances:
     uno:
       id: `my-ec2-instance-id-1`
     dos:
       id: `my-ec2-instance-id-2`
   ```
6. Build and run the application with Docker.
   ```bash
   docker build -t ec2starter .
   docker run -d ec2starter
   ```
   Alternatively, you can build and run with `npm`:
   ```bash
   npm i
   npm start
   ```
7. Invite your bot to your server, with permission to read and send messages.
8. In a channel your bot has permission to view, execute `/start <instance key>`,
   with the `instance` option set to a key defined in your config.
   Your bot should start the EC2 instance.


## Contributing

This project is only accepting pull requests for issues with the `help wanted` label.

Feel free to open discussions, report bugs, and request features.
