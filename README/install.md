# Installation
## Download the file
Download the [latest version](https://github.com/chinzistor/StreamerQnA/releases) and unzip the downloaded .zip file to an easily accessible location (for example your desktop).

## Add the necessary sources to OBS Studio
### Dashboard
Open OBS Studio and go to Docks -> Custom Browser Docks...

In that window for the `Dock Name` type in something. Recommendation: `StreamerQnA Dashboard`, but you can name it whatever you'd like.
For the URL type in the address of the `dashboard.html` file with `file://` in front.

Example URLs
- Linux: `file:///home/user/Desktop/StreamerQnA/dashboard.html`
- Windows: `file:///C:/Users/user/Desktop/StreamerQnA/dashboard.html`
- macOS: `file:///Users/user/Desktop/dashboard.html`
> [!TIP]
> Make sure to replace `user` with your username.

> [!TIP]
> If you don't know how to get this URL, right click on `dashboard.html` and open it in browser. Within your browser, copy the URL (where the websites' address is shown).

Click `Apply`.

![Screenshot of the custom dockers window](/screenshots/docker.png)

Position and resize the dock to your liking.

### Source
Go to your `Sources`, click the `+` icon, select `Browser`, give a name to your source (recommendation: `StreamerQnA bubble`, but you can name it whatever you'd like), make sure the `Make source visible` is selected and click `Ok`.

![Screenshot of the add new browser source window](/screenshots/newBrowser.png)

In the newly opened window:
- Make sure the `Local file` is **not** selected.
- Set the `URL` to the address of the `bubble.html` file with `file://` in front. See examples:
  - Linux: `file:///home/user/Desktop/StreamerQnA/bubble.html`
  - Windows: `file:///C:/Users/user/Desktop/StreamerQnA/bubble.html`
  - macOS: `file://Users/user/Desktop/bubble.html`
> [!TIP]
> Make sure to replace `user` with your username.
- Recommended width is 600 and recommended height is 400 with the default configuration.
- Select `Control audio via OBS`.
- Delete the content of `Custom CSS`.

![Screenshot of the browser properties window](/screenshots/bubble.png)

Position and resize the source on your screen.

## Configuration
Read [config.md](/README/config.md) on how to configure StreamerQnA.