// Twitch IRC server details
const server = 'irc-ws.chat.twitch.tv';
const port = 443;

let socket = null;
let reconnectInterval = 1000; // Initial reconnect interval in milliseconds

function connectWebSocket() {
    socket = new WebSocket(`wss://${server}:${port}`);

    socket.onopen = function(event) {
        console.log('Connected to Twitch chat');

        // Authentication and joining channels
        socket.send(`PASS ${window.oauthToken}`);
        socket.send(`NICK ${window.botUsername}`);
        socket.send(`JOIN #${window.channel}`);
    };

    socket.onmessage = function(event) {
        // Handle incoming messages from the Twitch chat server
        handleCommands(event.data);
    };

    socket.onerror = function(error) {
        console.error('WebSocket error:', error);
    };

    socket.onclose = function(event) {
        console.log('Connection closed');
        // Attempt to reconnect
        setTimeout(connectWebSocket, reconnectInterval);
        // Increase reconnect interval for next attempt
        reconnectInterval = Math.min(reconnectInterval * 2, 60000); // Max interval 1 minute
    };
}

// Start initial connection
connectWebSocket();

// Function to send a message to the Twitch channel
function sendMessage(message) {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(`PRIVMSG ${window.channel} :${message}`);
    } else {
        console.error('WebSocket connection is not open to send message');
    }
}
