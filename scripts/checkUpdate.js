async function checkUpdate() {
    // Version of the system is saved here
    // I know it's dumb placement, but it was the simplest
    window.version = '1.0.0';

    // Getting the latest version from GitHub
    const url = `https://api.github.com/repos/chinzistor/StreamerQnA/releases/latest`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        window.latestVersion = data.tag_name;
    } catch (error) {
        console.error('Error fetching the latest release:', error);
    }

    // Converting the versions to numbers
    let versionSliced = window.version.split('.');
    let latestVersionSliced = window.latestVersion.split('.');
    let versionValue = versionSliced[0] * 1000000 + versionSliced[1] * 1000 + versionSliced[2];
    let latestVersionValue = latestVersionSliced[0] * 1000000 + latestVersionSliced[1] * 1000 + latestVersionSliced[2];

    // Checking if the current version is lower than the latest version or not
    if (+versionValue < +latestVersionValue) {
        // Showing update message to the user, if the latest version is higher than the current version
        const notification = document.getElementById('latestRelease');
        notification.style.fontSize = '10pt';
        notification.style.fontWeight = localStorage.getItem(`dashboardButtonsunselectedItalic`);
        notification.style.fontStyle = localStorage.getItem(`dashboardButtonsunselectedBold`);
        notification.style.color = localStorage.getItem(`dashboardButtonsunselectedColor`);
        notification.style.fontFamily = localStorage.getItem(`dashboardButtonsunselectedFont`);
        notification.style.textAlign = 'center';
        notification.style.lineHeight = 0;
        notification.style.display = '';

        // Providing a download link to the latest version
        const link = document.getElementById('updateLink');
        link.textContent = window.latestVersion;
        link.href =`https://github.com/chinzistor/StreamerQnA/releases/tag/${window.latestVersion}`;

        // Telling the user the current version
        const currentVersion = document.getElementById('currentVersion');
        currentVersion.textContent = `Current version: ${window.version}`;
        currentVersion.style.fontSize = '10pt';
        currentVersion.style.fontWeight = localStorage.getItem(`dashboardButtonsunselectedItalic`);
        currentVersion.style.fontStyle = localStorage.getItem(`dashboardButtonsunselectedBold`);
        currentVersion.style.color = localStorage.getItem(`dashboardButtonsunselectedColor`);
        currentVersion.style.fontFamily = localStorage.getItem(`dashboardButtonsunselectedFont`);
        currentVersion.style.textAlign = 'center';
        currentVersion.style.lineHeight = 0;
        currentVersion.style.display = '';
    }
}