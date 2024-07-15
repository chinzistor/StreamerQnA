# Configuration
> [!IMPORTANT]
> For the changes to take effect you need to reload the dock and the browser source.

> [!TIP]
> To reload the dock you simply need to right click into the dock then click refresh.
> To reload the browser source, simply select the source and click the dedicated button for refreshing it.
## Important configuration
### Bot settings
Open `/config/bot.js` and edit the settings.
```js
// Twitch connection config
window.username = "chinzistor";
window.oauthToken = "oath:some_lengthy_string";

// Duplicated message detection config
window.allowRQ = false; // repeated question
window.allowSQFDU = false; // same question from different users
window.allowSQ = false; // similar questions
window.checkGroup = true;
window.duplicationResponse = "this question was already submitted.";
window.similaritySensitivity = 0.5;
```
`window.botUsername` Enter the username of your account you use for streaming.

`window.oauthToken` Enter your oAuth token you can generate at [Twitch Chat OAuth Password Generator](https://twitchapps.com/tmi/).
> [!IMPORTANT]
> Do not forget to include `oauth:` at the beginning!

> [!WARNING]
> Do not share your oAuth token!


The rest of the settings are for setting up filters. These filters will make sure to avoid questions being submitted multiple times.
- `window.allowRQ` if set to true, will disable checking if a question was already submitted (disables filtering).
- `window.allowSQFDU` if set to true, will allow the same question being submitted by multiple viewers; if set to false, a specific question will be allowed to be submitted by only one user.
- `window.allowSQ` if set to true, will allow similar question to be submitted; if set to false, filtering will be applied to similar questions (if there's already a question that is similar to the submitted one, it won't be registered).
- `window.checkGroup` if set to true, will deny questions that are already registered in a different group.
- `window.duplicationResponse` is to set what should the bot respond with to the viewer if their question is already registered. Make the quotation marks empty `""` to disable the response.
- `window.similaritySensitivity` determines how sensitive the similarity filtering is. Higher value means smaller differences are enough to pass the filtering. Accepts value between 0 and 1.
  - Setting this value to exactly 1 will also disable checking for similarities.
  - Setting this value to exactly 0 will filter out all questions if there's already one registered.

### Setting up groups and commands
Open `/config/commands.js` and edit the settings.
```js
window.commands = {
    "questions": {
        "response": [
            "%user your question has been saved.",
            "Your question will be soon answered, %user"
        ],
        "aliases": [
            "question"
        ],
        "duplicationResponse": [
            "%user this question was already submitted.",
            "%user we've seen this question already."
        ]
    },
    "requests": {
        "response": [
            "%user your request has been stored."
        ],
        "aliases": [
            "request",
            "req"
        ],
        "duplicationResponse": [
            "%user this request is already submitted."
        ]
    },
    "compliments": {
        "response": [
            "%user we've recieved your compliment."
        ],
        "aliases": [
            "compliment",
            "comp"
        ],
        "duplicationResponse": [
            "%user yes, we know, someone already said that."
        ]
    }
};
```
To add a command group create a node within `questions` like this:
```js
window.commands = {
    "questions": {
        "example command": {
            "response": [],
            "aliases": [],
            "duplicationResponse": []
        }
    }
};
```
The command group's name is going to show up in your dashboard. In this case you're gonna see a button with `example command`. Later I will often call this a cathegory too.

To add a command list all the commands you want to listen to in `aliases`. Viewers can use all listed commands to push a question into this cathegory.
```js
window.commands = {
    "example command": {
        "response": [],
        "aliases": [
            "command1",
            "command2"
        ],
        "duplicationResponse": []
    }
};
```
There is no set limit for command groups, nor the aliases you can have in this system but it is recommended to keep their numbers low for convenience.

If you don't want your bot to respond to any of the commands a cathegory has, leave `response` empty, otherwise you can set a response text here and everytime someone uses any of the aliases, the bot is going to respond with a text chosen from the list randomly.
If you want to, you can also include the viewer's name in the response using `%user`:
```js
window.commands = {
    "example command": {
        "response": [
            "This is a random response.",
            "This is a random response with including your name, %user"
        ],
        "aliases": [
            "command1",
            "command2"
        ],
        "duplicationResponse": [
            "%user this question was already submitted.",
            "%user we've seen this question already."
        ]
    }
}
```

It is also possible to set up responses if the submitted question was already registered or there are similar ones.

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
You can edit several options on the dock.
> [!NOTE]
> For colors you can use both HEX codes and any colors HTML accepts.
With `background` you can set what color the background is going to be.

The `buttons` section edits how the individual cathegories' buttons will look like.
You can edit both the selected and unselected buttons separately.
```js
            "background": "#00AAAA",
            "hoverColor": "#006666",
            "hoverTime": 1.0,
            "color": "#FFFF00",
            "italic": false,
            "bold": true,
            "font": "sans serif",
            "size": 14,
            "border": {
                "top": {
                    "style": "solid",
                    "color": "#FFFF00",
                    "thickness": 2
                },
                "bottom": {
                    "style": "solid",
                    "color": "#FFFF00",
                    "thickness": 2
                },
                "left": {
                    "style": "solid",
                    "color": "#FFFF00",
                    "thickness": 2
                },
                "right": {
                    "style": "solid",
                    "color": "#FFFF00",
                    "thickness": 2
                },
                "spacing": 0,
                "rounding": {
                    "topLeft": 10,
                    "topRight": 10,
                    "bottomLeft": 10,
                    "bottomRight": 10
                }
            }
```
- `hoverColor` sets the background color of the button when you hover over them with your cursor.
- `hoverTime` sets how fast the color changing animation is going to last in seconds.
- `background` sets the background color of the button.
- `color` sets the color of the text.
- `italic` sets if the text should be italic. Accepted values: `true` `false`
- `bold` sets if the text should be bold. Accepted values: `true` `false`
- `font` sets the font of the text.
- `size` sets the font size.
- `border` is for changing the buttons' outline's look:
  - `thickness` sets how thick this border is going to be in pixels.
  - `style` sets what style the border is going to have. Accepted values: `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` `outset` `none`
  - `color` sets the border's color.
  - `spacing` sets the distance between the individual elements (name, time, question slots).
  - `rounding` sets how much each corner is rounded in pixels.

Within the `queue` settings you can separately change each section's design.
`selected` section is what for the selected question that is shown on the stream, the rest are the `unselected`.
- `name` node is for the design of box that contains the name.
- `time` node is for the design of box that contains the time.
- `question` node is for the design of box that contains the question.
  - `background` sets the background color of the button.
  - `color` sets the color of the text. Accepts any HTML colortags and HEX codes.
  - `italic` sets if the text should be italic. Accepted values: `true` `false`
  - `bold` sets if the text should be bold. Accepted values: `true` `false`
  - `size` sets the font size.
  - `font` sets the font of the text.
  - `border` is for changing the elements' outline's look:
    - `thickness` sets how thick this border is going to be in pixels.
    - `style` sets what style the border is going to have. Accepted values: `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` `outset` `none`
    - `color` sets the border's color.
    - `spacing` sets the distance between the individual elements (name, time, question slots).
    - `rounding` sets how much each corner is rounded in pixels.
The formatting of the time is done in `/config/bubble.js`.

And you have a separate node, `border`, here you can set the design of the border that surrounds the messages within your queues.
- `thickness` sets how thick this border is going to be in pixels.
- `style` sets what style the border is going to have. Accepted values: `dotted` `dqashed` `solid` `double` `groove` `ridge` `inset` `outset` `none`
- `color` sets the border's color.
- `spacing` sets the distance between the individual elements (name, time, question slots).
- `rounding` sets how much each corner is rounded in pixels.


### Bubble
Open `/config/bubble.js` and edit the settings.

All text settings are the same as in the `dashboard` settings within the `queue` section.
However there are 2 extra option in this config, `time` and `transparency`:
- `format` sets how the time text is going to look like. The system will replace the following syntaxes:
  - `%h` is hours
  - `%H` is hours in 12 hours format
  - `%m` is minutes
  - `%s` is seconds
  - `%p` is the perios (AM or PM)
- `trasparency` and `backgroundTransparency` sets the transparency of the given element (border, background color, text). Accepts value between `0` and `1`, 1 being solid, 0 being completely transparent (invisible).
Also you can individually edit each cell's border, just like the whole bubble's largest border, which is similar how the `dashboard`'s border config works.

Bubble's border:
```js
    "tablestyle": {
        "transparency": 1,
        "border": {
            "top": {
                "style": "solid",
                "color": "#00FFFF",
                "thickness": 2,
                "transparency": 1
            },
            "bottom": {
                "style": "solid",
                "color": "#00FFFF",
                "thickness": 2,
                "transparency": 1
            },
            "left": {
                "style": "solid",
                "color": "#00FFFF",
                "thickness": 2,
                "transparency": 1
            },
            "right": {
                "style": "solid",
                "color": "#00FFFF",
                "thickness": 2,
                "transparency": 1
            },
            "spacing": 0,
            "rounding": {
                "topLeft": 30,
                "topRight": 10,
                "bottomLeft": 10,
                "bottomRight": 30
            }
        }
    }
```

Cells' border:
```js
        "question": {
            "background": "#008888",
            "color": "#AAAA00",
            "italic": false,
            "bold": false,
            "size": 15,
            "transparency": 1,
            "backgroundTransparency": 1,
            "font": "sans serif",
            "border": {
                "top": {
                    "style": "solid",
                    "color": "#00FFFF",
                    "thickness": 2,
                    "transparency": 1
                },
                "bottom": {
                    "style": "solid",
                    "color": "#00FFFF",
                    "thickness": 2,
                    "transparency": 1
                },
                "left": {
                    "style": "solid",
                    "color": "#00FFFF",
                    "thickness": 2,
                    "transparency": 1
                },
                "right": {
                    "style": "solid",
                    "color": "#00FFFF",
                    "thickness": 2,
                    "transparency": 1
                },
                "rounding": {
                    "topLeft": 10,
                    "topRight": 10,
                    "bottomLeft": 10,
                    "bottomRight": 10
                }
            }
        }
```

## Any options you find in the configuration files that aren't listed here are not yet available.