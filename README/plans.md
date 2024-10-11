# Suggestions by users
Things that users of the system came up with and I want to implement.

If you'd like to see your suggestion here, [open a new discussion](https://github.com/chinzistor/StreamerQnA/discussions/new?category=ideas) and give a detailed explanation of what you'd like to see in the system.
Also, you can send your ideas to me on Discord.

## PastorDoostyn
[Twitch](https://www.twitch.tv/pastordoostyn)
[YouTube](https://www.youtube.com/c/PastorDoostyn)
[X](https://x.com/PastorDoostyn)
### Visual features
- [ ] option to make the texts in the bubble and in the dashboard all uppercase or all lowercase
- [ ] relative arrangement settings for the bubble (fixed on top, fixed on bottom, etc)

## XtianNinja
[Twitch](https://www.twitch.tv/xtianninja)
[YouTube](https://www.youtube.com/@XtianNinjaYT)
[X](https://x.com/XtianNinja)
### Visual features
- [ ] simplified configuration: short list of color choices for styles
- [ ] simplified configuration: short list of font choices for styles

# Plans
Things that I came up with that I want to implement.
### System features
Streaming platforms
- add support for YouTube
- add support for Kick
- add support for TikTok
- add support for X
- add support for Facebook
- add support for Trovo
- add support for Rumble
- add support for Instagram
- add support for Amazon
Configuration
- 2 modes of configuration:
  - simplified:
    - less configuration variables
    - less configuration options
    - simpler inputs
  - advanced:
    - as many configuration variables as possible
    - as many configuration options as possible
    - full on customization:
      - write your own code into the style
- profiles to save and use multiple configurations for people who stream on multiple channels
Connection
- renewal of the Twitch connection to use the Twitch API instead of the IRC server
Storage
- export configuration to a file in case you want to share or backup your settings
- import configuration from files
- complete removal of the old configuration system (still in the system to import the old data for easier update)
- compacting storage items to use less localStorage
Nerd stuff
- more stats
- more details in console
Commands
- default `!streamerqna` and `!sqa commands` to show all the available commands for the viewers
- adding more placeholders for the responses:
  - time placeholders:
    - %y for year
    - %M for month
    - %d for day
    - %h for hour - 12h format
    - %H for hour - 24h format
    - %m for minute
    - %s for second
    - %p for period (AM or PM)
    - %date for configured format
  - %arg for arguments
    - sub-placeholders to specify how to separate arguments if the streamer wished to use dynamic texts in responses
  - %var for variables:
    - syntax to display the value of the variable
    - syntax to do basic math (addition, subtraction, multiplication, division) with variables
    - syntax to do basic math with variables only to show the result of the math without changing the value of the variable
    - syntax to do basic math with variables without displaying it in chat but saving the changed value (hidden variables)
    - per user storage
  - separator to send a response in multiple messages
- alerts if a command exceeds character limit or has a syntax issues
- alerts if command group already exists
- alerts if aliases are duplicated
- toggle saving responses into queue creating chat commands just for responses
Other chat features
- timed messages
- another browser source to show chat messages on stream

### Visual features
Visuals
- add the logo of the streaming platform to the bubble and queue to indicate which submission came from which platform
- support for custom SVGs to edit the style of the bubble and the dashboard
- support for custom canvases to edit the backgrounds
- support for custom images to use as backgrounds and decorations
- support for color gradients for simple backgrounds
- add animations to the bubble
- add custom sound effects to the bubble animation
- custom locations for the bubble elements
Text
- emote support
Queue management
- sorting submissions in the queues based on names, time or platform
- filter submissions based on names, time or platform
- add multiple submissions to the bubble
