# StreamerQnA
Locally hosted alternative to [Featured.chat](https://featured.chat/) to have your Twitch viewers' questions showed on your stream.
This system lets you show viewers' submitted questions on your stream one by one.

To install the system read [install.md](/README/install.md).

For configuration read [config.md](/README/config.md). It explains every option with great detail.


### How it works
When you load in the [dock](/dashboard.html) into OBS it is going to launch a Twitch chatbot based on the configuration you configured in the **Configuration/Bot** page within the dashboard.

While the bot initiates the dashboard is going to check what commands you set up in **Configuration/Commands** and it'll create groups accordingly under **Queue** with the needed buttons.
The styling is based on what you configure in [dashboard.js](/config/dashboard.js).

After the groups have been created, the bot is going to listen to the set commands and if any of those commands are used in the set channel, the system is going to show them in **Queue** under the corresponding group/tab.
While showing these registered messages, the system is also going to store these messages within a so called localStorage (it's like cookies in your browser but can store a ton more data and doesn't have an expiration date).
You'll also get 2 buttons for each message, one that says **Show** to show that message on stream and one that says **Delete** to remove the message from the queue.

When you click the **Show** button, it is going to be replaced with text that says **Hide** and the message next to it is going to be tagged within that localStorage.
If you click **Hide**, it'll switch back to **Show** and the message will be untagged.

Once you load the browser source into OBS, it'll start frequently checking which message is tagged, and if it sees there's a tagged message, it'll show it on the stream in the style set under **Configuration/Style**.
If it sees that there's no tagged message, it'll clear the bubble from all content making it invisible thus not disturbing.


## Features
- Command flexibility:
  - You can set up as many commands as you like (it is recommended to keep them low, but do whatever you want).
  - You can set up as many aliases to each commands as you like (it is recommended to keep them low, but do whatever you want).
  - You can customize the bot's response when a submission gets registered, or disable it completely.
    - Multiple possible responses can be set up and the bot will choose randomly from the list.
- Spam detection:
  - It is possible to deny submissions if there are already registered submissions that look exactly the same or somewhat similar.
    - You can customize how sensitive the similarity detection should be.
  - You can customize the bot's response when a submission was already asked, or disable it completely.
    - Multiple possible responses can be set up and the bot will choose randomly from the list.
- Feature rich customization:
  - You can individually edit how the dashboard and the bubble on stream should look like:
    - custom colors
    - roundable corners
    - each border on each side can be individually edited:
      - style
      - thickness
      - color
    - use your own font
    - edit texts individually:
      - font type
      - color
      - size
- Easy handling of submissions:
  - The system will save the submissions, so if you close OBS and reopen it or refresh the dock, the previous submissions won't be lost.
  - You can individually show all submissions one by one.
  - Each submission can be deleted individually, or the whole queue with the dedicated buttons.
- Discord integration:
  - Through webhooks you can send the submissions to your Discord server.
  - Each group can have its own Discord integration set up:
    - You can set which group's submissions should be sent to Discord
    - You can individually set each group's webhook link meaning you can send each group's submissions to different Discord channels, or even different servers.
- Statistics:
  - Under the **Statistics** tab you can see data about how the system is being used on your end. Mostly added for nerdy reasons.