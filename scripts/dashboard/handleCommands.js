// Handling commands in Twitch chat
function handleCommands(message) {
    //console.log(message);
    // Making the incoming data usable by splitting it into variables
    let index1 = message.indexOf(' #');
    let part1 = message.slice(0, index1);
    let index2 = message.indexOf(' :', index1 + ' #'.length);
    let user = part1.split('!')[0].replace(':', '');
    let chat = message.slice(index2 + " :".length);
    // Checking if the sent message starts with !
    if (chat[0] === '!') {
        let commandRaw = chat.split(' ')[0];
        let command = commandRaw.substring(1).trim();

        // Checking if the used command is registered in the config
        for (let group in window.commands) {
            // Check if the property is a direct property of the object (not inherited)
            if (window.commands.hasOwnProperty(group)) {
                let aliases = window.commands[group].aliases;
                if (aliases.includes(command)) {
                    let question = chat.replace(/^[^\s]+/, '').trim();
                    //console.log(`${user} ${question} ${group}`);
                    let now = Date.now();
                    // Handling data
                    addQuestion(user, group, now, question, true, -1, commands[group].response);
                }
            }
        }
    }

    //console.log(`${user} said this: ${chat}`);
}