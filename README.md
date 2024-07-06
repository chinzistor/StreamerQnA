# AskTheStreamer
Locally hosted alternative to [Featured.chat](https://featured.chat/) to have your Twitch viewers' questions showed on your stream.
This system lets you show viewers' submitted questions on your stream one by one.

To install the system read [install.md](/README/install.md).

For configuration read [config.md](/README/config.md). It explains every option with great detail.


### How it works
When you load in the [dock](/dashboard.html) into OBS it is going to launch a Twitch chatbot based on the configuration you entered in [bot.js](/config/bot.js).

While the bot initiates the dashboard is going to check what commands you set up in [commands.js](/config/commands.js) and it'll create groups accordingly within your dashboard with the needed buttons.
The styling is based on what you configure in [dashboard.js](/config/dashboard.js).

After the groups have been created, the bot is going to listen to the set commands and if any of those commands are used in the set channel, the system is going to show them in your dashboard under the corresponding group/tab.
While showing these registered messages, the system is also going to store these messages within a so called localStorage (it's like cookies in your browser but can store a ton more data and doesn't have an expiration date).
You'll also get 2 buttons for each message, an eye icon to show that message on stream and an X button to remove the message from the queue.

When you click the eye icon, it is going to be replaced with a closed eye icon and the message next to it is going to be tagged within that localStorage.
If you click the closed eye icon, it'll switch back to the open eye icon and the message will be untagged.

Once you load the browser source into OBS, it'll start frequently checking which message is tagged, and if it sees there's a tagged message, it'll show it on the stream in the style set in [bubble.js](/config/bubble.js).
If it sees that there's no tagged message, it'll clear the bubble from all content making it invisible thus not disturbing.