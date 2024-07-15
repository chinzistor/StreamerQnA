async function discordWebhook(user, time, question, group) {
    // Checking if the command group's Discord integration is enabled
    if (window.commands[group].discord.enabled) {
        const formattedTime = getTime(time);

        // Making the embed for the webhook message
        const payload = JSON.stringify({
            username: 'StreamerQnA',
            content: '',
            embeds: [
                {
                    title: `New ${group} submission`,
                    color: parseInt(window.commands[group].discord.color.replace('#', ''), 16),
                    fields: [
                        {
                            name: `${user}'s message:`,
                            value: question
                        }
                    ],
                    footer: {
                        text: formattedTime
                    }
                }
            ]
        });

        // Creating the request for the webhook communication
        const request = new XMLHttpRequest();
        request.open("POST", window.commands[group].discord.webhookUrl, true);
        request.setRequestHeader('Content-Type', 'application/json');

        // Loging the error message
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status != 204) {
                    console.error('Error response:', request.responseText);
                }
            }
        };

        request.onerror = function () {
            console.error('Network Error');
        };

        // Sending the embed to the webhook
        request.send(payload);

    }
}
