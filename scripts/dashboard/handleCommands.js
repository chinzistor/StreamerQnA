function handleCommands(message) {
    let index1 = message.indexOf(' #');
    let part1 = message.slice(0, index1);
    let index2 = message.indexOf(' :', index1 + ' #'.length);
    let user = message.slice(index1 + ' #'.length, index2);
    let chat = message.slice(index2 + " :".length);
    if (chat[0] === '!') {
        let commandRaw = chat.split(' ')[0];
        let command = commandRaw.substring(1).trim();

        for (let group in window.commands) {
            // Check if the property is a direct property of the object (not inherited)
            if (window.commands.hasOwnProperty(group)) {
                let aliases = window.commands[group].aliases;
                if (aliases.includes(command)) {
                    let question = chat.replace(/^[^\s]+/, '').trim();
                    //console.log(`${user} ${question} ${group}`);
                    addQuestion(user, group, -1, question, true, -1);
                    if (commands[group].response != '') {
                        sendMessage(`${user}, ${commands[group].response}`)
                    }
                }
            }
        }
    }

    //console.log(`${user} said this: ${chat}`);
}