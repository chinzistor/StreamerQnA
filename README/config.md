# Configuration
> [!IMPORTANT]
> For the changes to take effect you need to restart OBS.
## Important configuration
### Bot settings
Open `/config/bot.js` and edit the settings.
```js
window.botUsername = "chinzisbot";
window.oauthToken = "oath:some_lengthy_string";
window.channel = "#chinzistor"
```
`window.botUsername` Enter the username of your Twitch account you want to use for handling the chat commands between the quotation marks. It's recommended to either use your own account you stream on or a bot account you own.

`window.oauthToken` Enter your oAuth token you can generate at [Twitch Chat OAuth Password Generator](https://twitchapps.com/tmi/).
> [!IMPORTANT]
> Do not forget to include `oauth:` at the beginning!

> [!WARNING]
> Do not share your oAuth token!

`window.channel` Enter the name of the channel you want to monitor the set commands at. Supports only one channel at this time.

> [!IMPORTANT]
> The # character is needed.

### Setting up groups and commands
Open `/config/commands.js` and edit the settings.
```js
window.commands = {
    "questions": {
        "response": "your question has been saved.",
        "aliases": [
            "question"
        ]},
    "requests": {
        "response": "your request has been stored.",
        "aliases": [
            "request",
            "req"
        ]},
    "compliments": {
        "response": "we've recieved your compliment.",
        "aliases": [
            "compliment",
            "comp"
        ]}
};
```
To add a command group create a node within `questions` like this:
```js
window.commands = {
    "questions": {
        "example command": {
            "response": "",
            "aliases": []
        }
    }
};
```
The command group's name is going to show up in your dashboard. In this case you're gonna see a button with `example command`. Later I will often call this a cathegory too.

To add a command list all the commands you want to listen to in `aliases`. Viewers can use all listed commands to push a question into this cathegory.
```js
window.commands = {
    "questions": {
        "example command": {
            "response": "",
            "aliases": [
                "command1",
                "command2"
            ]
        }
    }
};
```
There is no set limit for command groups, nor the aliases you can have in this system but it is recommended to keep their numbers low for convenience.

If you don't want your bot to respond to any of the commands a cathegory has, leave `response` empty, otherwise you can set a response text here and everytime someone uses any of the aliases, the bot is going to respond with that text after naming the viewer.

> [!IMPORTANT]
> You need at least 1 alias for each command group for it to work.

> [!TIP]
> It is easy to forget about brackets and commands, but you can always use an online JSON formatter tool to verify your settings. If you do so, don't copy the `window.commands = ` part.

## Design configuration
For clarification:
- `name` is the name of the viewer who used the command.
- `question` is the viewers message without the command.
- `time` is the time of when the viewer sent the command. It is registered in your timezone.
### Dashboard
Open `/config/dashboard.js` and edit the settings.
*For readibility I didn't copy the whole default settings here.*
You can edit several options on the docker.
> [!NOTE]
> For colors you can use both HEX codes and any colors HTML accepts.
With `background` you can set what color the background is going to be.

The `buttons` section edits how the individual cathegories' buttons will look like.
You can edit both the selected and unselected buttons separately.
```js
            "background": "#00AAAA",
            "hoverColor": "#006666",
            "hoverTime": "1.0s",
            "text": "#FFFF00",
            "italic": false,
            "bold": true,
            "font": "sans serif",
            "size": 14,
            "border": {
                "thickness": "2px",
                "style": "solid",
                "color": "#FFFF00"
            }
```
- `hoverColor` sets the background color of the button when you hover over them with your cursor.
- `hoverTime` sets how fast the color changing animation is going to last. It's in seconds, the `s` is needed.
- `border` is for changing the buttons' outline's look:
  - `thickness` sets how thick this border is going to be. `px` is needed.
  - `style` sets what style the border is going to have. Accepted values: `dotted` `dqashed` `solid` `double` `groove` `ridge` `inset` `outset` `none`
  - `color` sets the border's color.
- `background` sets the background color of the button.
- `text` sets the color of the text.
- `italic` sets if the text should be italic. Accepted values: `true` `false`
- `bold` sets if the text should be bold. Accepted values: `true` `false`
- `font` sets the font of the text.
- `size` sets the font size.

Within the `queue` settings you can separately change each section's design.
`selected` section is what for the selected question that is shown on the stream, the rest are the `unselected`.
- `name` node is for the design of box that contains the name.
- `time` node is for the design of box that contains the time.
- `question` node is for the design of box that contains the question.
  - `background` sets the background color of the button.
  - `color` sets the color of the text.
  - `italic` sets if the text should be italic. Accepted values: `true` `false`
  - `bold` sets if the text should be bold. Accepted values: `true` `false`
  - `font` sets the font of the text.
  - `size` sets the font size.
The formatting of the time is done in `/config/bubble.js`.

### Bubble
Open `/config/dashboard.js` and edit the settings.

All settings are the same as in the `dashboard` settings within the `queue` section.
However there's an extra option for `time` here:
- `format` sets how the time text is going to look like. The system will replace the following syntaxes:
  - `%h` is hours
  - `%H` is hours in 12 hours format
  - `%m` is minutes
  - `%s` is seconds
  - `%p` is the perios (AM or PM)


## Any options you find in the configuration files that aren't listed here are not yet available.