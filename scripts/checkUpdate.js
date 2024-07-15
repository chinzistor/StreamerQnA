async function checkUpdate() {
    // Version of the system is saved here
    // I know it's dumb placement, but it was the simplest
    const version = '0.41.8';
    let latestVersion;

    // Getting the latest version from GitHub
    const url = `https://api.github.com/repos/chinzistor/StreamerQnA/releases/latest`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        latestVersion = data.tag_name;
    } catch (error) {
        console.error('Error fetching the latest release:', error);
    }

    // Converting the versions to numbers
    let versionSliced = version.replace('.', '0');
    let latestVersionSliced = latestVersion.replace('.', '0');

    // Checking if the current version is lower than the latest version or not
    if (+versionSliced < +latestVersionSliced) {
        // Showing update message to the user, if the latest version is higher than the current version
        const notification = document.getElementById('latestRelease');
        notification.style.fontSize = '10pt';
        notification.style.fontWeight = window.dashboardStyle.buttons.unselected.italic;
        notification.style.fontStyle = window.dashboardStyle.buttons.unselected.bold;
        notification.style.color = window.dashboardStyle.buttons.unselected.color;
        notification.style.fontFamily = window.dashboardStyle.buttons.unselected.font;
        notification.style.textAlign = 'center';
        notification.style.lineHeight = 0;
        notification.style.display = '';

        // Providing a download link to the latest version
        const link = document.getElementById('updateLink');
        link.textContent = latestVersion;
        link.href =`https://github.com/chinzistor/StreamerQnA/releases/tag/${latestVersion}`;

        // Telling the user the current version
        const currentVersion = document.getElementById('currentVersion');
        currentVersion.textContent = `Current version: ${version}`;
        currentVersion.style.fontSize = '10pt';
        currentVersion.style.fontWeight = window.dashboardStyle.buttons.unselected.italic;
        currentVersion.style.fontStyle = window.dashboardStyle.buttons.unselected.bold;
        currentVersion.style.color = window.dashboardStyle.buttons.unselected.color;
        currentVersion.style.fontFamily = window.dashboardStyle.buttons.unselected.font;
        currentVersion.style.textAlign = 'center';
        currentVersion.style.lineHeight = 0;
        currentVersion.style.display = '';
    }
}