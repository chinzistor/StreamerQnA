// Twitch IRC server details
const server = 'irc-ws.chat.twitch.tv';
const port = 443;

let socket;
let reconnectInterval = 2000; // Initial reconnect interval in milliseconds


function connectWebSocket() {
    socket = new WebSocket(`wss://${server}:${port}`);

    socket.onopen = function(event) {
        console.log('Connecting to Twitch chat...');

        // Authentication and joining channels
        socket.send(`PASS ${window.oauthToken}`);
        socket.send(`NICK ${window.username}`);
        socket.send(`JOIN #${window.username}`);

        console.log('Authentication sent.');
    };

    socket.onmessage = function(event) {
        // Handle incoming messages from the Twitch chat server
        //console.log(event);
        //console.log(event.data);
        handleCommands(event.data);
    };

    socket.onerror = function(error) {
        // Logging the error messages
        console.error('WebSocket error:', error);
    };

    socket.onclose = function(event) {
        console.log(event);

        // Checking why the connection was closed
        if (event.wasClean) {
          console.log(`Connection closed cleanly, code=${event.code} reason=${event.reason}`);
        } else {
          // e.g. server process killed or network down
          console.log('Connection died');
        }

        // Attempt to reconnect
        setTimeout(connectWebSocket, reconnectInterval);
        // Increase reconnect interval for next attempt
        reconnectInterval = Math.min(reconnectInterval, 60000); // Max interval 1 minute
    };
}


// Check the websocket's state
// This is left here for testing purpuses
function checkWebSocketState() {
    switch(socket.readyState) {
        case WebSocket.CONNECTING:
            console.log('WebSocket is connecting.');
            break;
        case WebSocket.OPEN:
            console.log('WebSocket is open.');
            break;
        case WebSocket.CLOSING:
            console.log('WebSocket is closing.');
            break;
        case WebSocket.CLOSED:
            console.log('WebSocket is closed.');
            break;
        default:
            console.log('Unknown WebSocket state.');
    }
}

// Function to send a message to the Twitch channel
function sendMessage(message) {
    //console.log(message);
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(`PRIVMSG #${window.username} :${message}`);
    }
    else {
        console.error('WebSocket connection is not open to send message');
    }
}
