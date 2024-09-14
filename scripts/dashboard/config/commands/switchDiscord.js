function switchDiscord(commandId) {
    // Getting the canvas element based on its id
    const discordIntegrationCanvas = document.getElementById(`discordWebhookSwitch${commandId}`);
    const switchSquare = discordIntegrationCanvas.getContext('2d');

    let strokeSize = localStorage.getItem('dashboardToggleStokeSize');
    let size = localStorage.getItem('dashboardToggleSize');

    if (localStorage.getItem(`discordWebhookActive${commandId}`) == 'true') {
        // Making the webhook settings disappear
        document.getElementById(`discordWebhookTable${commandId}`).style.display = 'none';
        // Redrawing the canvas
        switchSquare.fillStyle = localStorage.getItem('dashboardToggleunselectedBackgroundColor');
        switchSquare.fillRect(size/4, size/4, size, size);
        switchSquare.strokeStyle = localStorage.getItem('dashboardToggleunselectedColor');
        switchSquare.lineWidth = strokeSize;
        switchSquare.strokeRect(size/4 + strokeSize/2, size/4 + strokeSize/2, size*0.75-strokeSize, size*0.75-strokeSize);
        // Toggling the variable
        localStorage.setItem(`discordWebhookActive${commandId}`, 'false');
    }
    else {
        // Making the webhook settings appear
        document.getElementById(`discordWebhookTable${commandId}`).style.display = '';
        // Redrawing the canvas
        switchSquare.fillStyle = localStorage.getItem('dashboardToggleselectedBackgroundColor');
        switchSquare.fillRect(size/4, size/4, size, size);
        switchSquare.strokeStyle = localStorage.getItem('dashboardToggleselectedColor');
        switchSquare.lineWidth = strokeSize;
        switchSquare.strokeRect(size/4 + strokeSize/2, size/4 + strokeSize/2, size*0.75-strokeSize, size*0.75-strokeSize);
        // Toggling the variable
        localStorage.setItem(`discordWebhookActive${commandId}`, 'true');
    }
}