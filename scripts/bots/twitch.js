// Twitch IRC server details
const server = 'irc-ws.chat.twitch.tv';
const port = 443;


let reconnectInterval = 2000; // Initial reconnect interval in milliseconds

function closeTwitch() {
    twitchSocket.close();
}

function connectTwitch() {
    twitchSocket = new WebSocket(`wss://${server}:${port}`);

    twitchSocket.onopen = function(event) {
        console.log('Connecting to Twitch chat...');

        // Authentication and joining channels
        twitchSocket.send(`PASS ${localStorage.getItem('connectionTwitchOAuth')}`);
        twitchSocket.send(`NICK ${localStorage.getItem('connectionTwitchUserName')}`);
        twitchSocket.send(`JOIN #${localStorage.getItem('connectionTwitchUserName')}`);

        console.log('Authentication sent.');

        // Stats
        localStorage.setItem(`botTwitchConnections`, +localStorage.getItem(`botTwitchConnections`) + 1);
        fillStats();
    };

    twitchSocket.onmessage = function(event) {
        // Handle incoming messages from the Twitch chat server
        //console.log(event);
        //console.log(event.data);
        handleCommands(event.data, 'twitch');
    };

    twitchSocket.onerror = function(error) {
        // Logging the error messages
        console.error('WebSocket error:', error);
    };

    twitchSocket.onclose = function(event) {
        console.log(event);

        // Checking why the connection was closed
        if (event.wasClean) {
          console.log(`Connection closed cleanly, code=${event.code} reason=${event.reason}`);
        } else {
          // e.g. server process killed or network down
          console.log('Connection died');
        }

        if (localStorage.getItem('connectiontwitchActive') == 'true') {
            // Attempt to reconnect
            setTimeout(connectTwitch, localStorage.getItem('twitchTimeOut'));
        }
    };
}


// Check the webtwitchSocket's state
// This is left here for testing purpuses
function checkTwitchState() {
    switch(twitchSocket.readyState) {
        case WebSocket.CONNECTING:
            return('Connecting');
            //console.log('WebSocket is connecting.');
            break;
        case WebSocket.OPEN:
            return('Open');
            //console.log('WebSocket is open.');
            break;
        case WebSocket.CLOSING:
            return('Closing');
            //console.log('WebSocket is closing.');
            break;
        case WebSocket.CLOSED:
            return('Closed');
            //console.log('WebSocket is closed.');
            break;
        default:
            return('Unknown');
            //console.log('Unknown WebSocket state.');
    }
}

// Function to send a message to the Twitch channel
function sendTwitchMessage(message) {
    //console.log(message);
    if (twitchSocket && twitchSocket.readyState === WebSocket.OPEN) {
        twitchSocket.send(`PRIVMSG #${window.username} :${message}`);

        // Stats
        localStorage.setItem(`botTwitchMessageSent`, +localStorage.getItem(`botTwitchMessageSent`) + 1);
        fillStats();
    }
    else {
        console.error('WebSocket connection is not open to send message');
    }
}
