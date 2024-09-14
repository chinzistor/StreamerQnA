// Handling commands in Twitch chat
function handleCommands(message, site) {
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
        let commands = localStorage.getItem('commands').split('%-%');
        let num = 0;
        for (let a = 0; a < commands.length; a++) {
            let aliases = localStorage.getItem(`commandAliases${commands[a]}`).split('\n');
            if (aliases.includes(command)) {
                let question = chat.replace(/^[^\s]+/, '').trim();
                if (question != '') {
                    let group = commands[a].replace(" ", "");
                    let now = Date.now();
                    // Handling data
                    addQuestion(user, group, now, question, true, -1, localStorage.getItem(`commandResponses${commands[a]}`).split('\n'), site);
                }
            }
        }
    }

    //console.log(`${user} said this: ${chat}`);
}