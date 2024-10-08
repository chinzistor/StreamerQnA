# StreamerQnA
Locally hosted alternative to [Featured.chat](https://featured.chat/) to have your Twitch viewers' questions showed on your stream.
This system lets you show viewers' submitted questions on your stream one by one.

To install the system read [install.md](/README/install.md).

For configuration read [config.md](/README/config.md). It explains every option with great detail.

If you'd like to see what people have suggested for the system, check [plans.md](/README/plans.md).
You can also check what features are going to be put into the system.
If you want to suggest a new features, check if your idea is already in [plans.md](/README/plans.md) or in [discussions](https://github.com/chinzistor/StreamerQnA/discussions).
If you haven't found your idea, [open a new discussion](https://github.com/chinzistor/StreamerQnA/discussions/new?category=ideas) and share your idea with great detail.
You can also use [discussions](https://github.com/chinzistor/StreamerQnA/discussions) if you have any questions.

For details on how the system works, check [details.md](/README/details.md)

If you find any bugs or unexpected behavior, check [open issues](https://github.com/chinzistor/StreamerQnA/issues) if there is already a report on it.
If you haven't found your issue, feel free to [open a ticket](https://github.com/chinzistor/StreamerQnA/issues/new).


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