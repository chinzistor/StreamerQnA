# Configuration
## Bot settings
Go to **Configuration/Bot** tab within the dashboard.
Make sure the Twitch button is on and the configuration table is open. By default it should be.
Enter your `Twitch username`. Whatever name you enter here is which channel the bot is going to watch for incoming submissions.
Enter your `OAuth token` you can generate at [Twitch Chat OAuth Password Generator](https://twitchapps.com/tmi/).
Edit the `Timeout` to your needs. This will set how much time later (in milliseconds) the bot should retry reconnecting after disconnecting due to network issues. 1000 ms should be fine.

![Screenshot of bot configuration](/screenshots/botConfig.png)

> [!IMPORTANT]
> Do not forget to include `oauth:` at the beginning!

> [!WARNING]
> Do not share your oAuth token!

## Spam filter configuration
You can turn on `Spam filtering` by clicking the button next to it.
Once it's on, you'll see some configuration options.
- If the spam filter is on, a user cannot submit the same (or similar) request multiple times until the previous submission that is the same (or similar) is deleted.
- If `Check other groups for filtering` is on, the bot will check other groups too to check any repeated submissions. This means if a user submits the same thing with 2 different groups' commands, then the second one is going to be rejected.
- If `Check other viewers' submissions` is on, the bot will reject every repeated submission from any viewer. This means if viewer A submits something, viewer B cannot submit the same (or similar) thing.
- With `Similarity check sensitivity` you can set how much the new submission needs to be similar to a previous one in order to be rejected.
  - 100% means the new submission needs to be 100% matching to a previous submission.
  - 0% means a viewer can submit only one request.
  - Anything between 40% and 80% should be perfectly fine to filter out fairly similar messages.

![Screenshot of spam filter configuration](/screenshots/spamFilter.png)

> [!NOTE]
> If you want to dig into how the similarity checking works, read [this document](/README/details.md#similarity-check)


## Setting up groups and commands

Go to **Configuration/Commands**
By default you'll see 3 commands already set up as a placeholder/sample to show how the commands are set up.

In the first input box you can set the name of the group's name. This name is going to show up in **Queue**, only you can see this.

Next to `Commands` you can set up all the commands that will use this command group. Each alias should be separated by a new line (hit enter before every new alias).

Next to `Responses` you can set up with what the bot should respond with if the submission is saved. If you want to have multiple responses for the bot to choose from randomly, separate each response with a new line (hit enter before every new response).
If you want to use the viewer's name in the response, use `%user`.
By leaving this part empty, you'll disable all responses.

> [!IMPORTANT]
> You need at least 1 alias for each command group for it to work.

Next to `Responses` you can set up with what the bot should respond with if the submission is rejected by the spam filter. If you want to have multiple responses for the bot to choose from randomly, separate each response with a new line (hit enter before every new response).
If you want to use the viewer's name in the response, use `%user`.
By leaving this part empty, you'll disable all responses.

### Discord integration
You can turn on Discord integration, here you'll see two options.
Next to `Discord webhook` you should enter the webhook link you want to send the submissions to.
To get a webhook link, click `Edit channel` (the gear icon) next to the Discord channel's name and go to `Integrations`.

![Screenshot of a Discord text channel](/screenshots/discordChannel.png)

Click on `Create Webhook`.

![Screenshot of the Integration settings of a Discord text channel](/screenshots/integrations.png)

Click on the little arrow pointing downwards, click on `Copy Webhook URL`, then paste it into the box next to `Discord webhook` in your dashboard.

![Screenshot of the webhook settings in Discord](/screenshots/webhookSettings.png)

> [!NOTE]
> By entering the same URLs to each command groups you can make the system to send all messages into one Discord channel.
> But if you want to send each queues to different Discord channels, you can.

> [!WARNING]
> Do not share Discord webhook URLs

You can also set the color of the message sent to Discord by choosing a color in the box next to `Discord webhook color`.

![Screenshot of a webhook message sent to Discord](/screenshots/webhookMessage.png)

# Styling the system
You can customize both the dashboard's and the bubble's look under **Configuration/Style**.

Next to `Section to edit` you can choose which part of the system you'd like to customize:
- Dashboard
- Buttons
- Queue
- Bubble

### Dashboard styling
Next to `Dashboard background` you can set the background color of the dashboard.

Under `Dashboard text font` you can set the style of the dashboard texts by typing in the style's name.
> [!NOTE]
> Text fonts are not case sensitive.

> [!IMPORTANT]
> Bold and Italic styles are not available for all font styles, so these options are not yet implemented in the new system.

Under `Dashboard text font size` you can set the dashboard's texts' size.

Under `Dashboard text font color` you can set the dashboard's texts' color.

Underneath you can see a table with more options. This will edit the tables' style within the dashboard.
- rounding options will set the corresponding corner's rounding in pixels.
- color options will set the corresponding side's color.
- thickness options will set the corresponding side's thickness in pixels.
- style options will set the corresponding side's style.

### Buttons styling
Here you'll see some different options.
- `Button style to edit` has 5 different options:
  - `Unselected` will edit how the unselected buttons' style is going to look like
  - `Hover unselected` will edit those button's style that aren't selected and you hover your cursor over.
  - `Selected` will edit how the selected buttons' style is going to look like
  - `Hover selected` will edit those button's style that are selected and you hover your cursor over.
  - `Alert` will edit those buttons' style that are trying to get your attention (for example when a new submission was registered).
- `Transition time` will set how fast the buttons will transition from one style into another. It's set in milliseconds.
- `Transition timing function` will set how the transitioning animation is going to happen:
  - `Linear` means the transitioning will happen with the same speed throughout the set transitioning time.
  - `Ease` will make the start and the end of the transition a bit smoother.
  - `Ease in` is similar to `Ease` but it will make the start of the transition a bit more slow.
  - `Ease out` is similar to `Ease` but it will make the end of the transition a bit more slow.
  - `Ease in out` is similar to `Ease` but it will make both the start and the end of the transition a bit more slow.
  - `Step start` will make the transition happen suddenly at the start of the transitioning time. Setting the `Transition time` to anything other than 0 has no effect with this type of function.
  - `Step end` will make the transition happen suddenly at the end of the transitioning time.
  - `Steps` will make the transitions happen in small steps, each steps will happen suddenly:
    - with `Steps` you can enter in how many steps the animation should happen.
    - you can choose when each transition should happen within the steps: at the start or at the end of each step.
  - `Cubic bezier` is a bit more complicated timing function. It needs 4 values and it creates a curve which the transition is going to happen by based on the time you set. With this type you can create interesting animations. To see how this function works, check [this link](https://cubic-bezier.com/)

[!Linear transition](/screenshots/transitionLinear.gif)

[!Ease transition](/screenshots/transitionEase.gif)

[!Ease in transition](/screenshots/transitionEaseIn.gif)

[!Ease out transition](/screenshots/transitionEaseOut.gif)

[!Ease in out transition](/screenshots/transitionEaseInOut.gif)

[!Step start transition](/screenshots/transitionStart.gif)

[!Step end transition](/screenshots/transitionEnd.gif)

[!Steps transition 11](/screenshots/transitionSteps10start.gif)

[!Steps transition 2](/screenshots/transitionSteps5end.gif)

[!Cubic bezier transition](/screenshots/transitionCubicBezier.gif)

Within the table you'll see similar options as at the [dashboard styling](/README/config.md#dashboard-styling), but there are a few more options in the middle:
- `Text font` will set the selected style's text font.
- `Text color` will set the selected style's text color.
- `Text size` will set the size of the selected style's text.
- `Background color` will set the backbground color of the selected style.

### Queue styling
The only extra option here is that you can select which part's style of the queue you'd like to edit:
- `Border` will edit the whole submission's border.
- `Name` will edit only the name's part.
- `Time` will edit only the time's part.
- `Message` will edit only the message's part.
When you select `Time` to edit, you'll notice another option to pop up in the middle section: `Time format`.
Here you can edit how the time is going to look like in the queue. Leaving this empty will make the time part completely disappear from the queue.
If you'd like to customize the format, here are the available placeholders:
- `%y` is years
- `%M` is months
- `%d` is days
- `%h` is hours
- `%H` is hours in 12 hours format
- `%m` is minutes
- `%s` is seconds
- `%p` is the perios (AM or PM)
Of course you can put any text in here.

### Bubble styling
Same goes over here as in [queue styling](/README/config.md#queue-styling) but there's only one style: what is going to show up on your stream.