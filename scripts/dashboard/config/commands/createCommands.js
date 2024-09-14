function createCommands() {
    localStorage.setItem('commandId', 0);
    let num = 0
    styling(document.getElementById('commandsConfigCommands'), 'table', 'unselected');
    let commands = localStorage.getItem('commands').split('%-%');
    for (let a = 0; a < commands.length; a++) {
        let commandId = addCommand(false);
        document.getElementById(`commandName${commandId}`).value = commands[a];
        document.getElementById(`aliasesForm${commandId}`).value = localStorage.getItem(`commandAliases${commands[a]}`);
        document.getElementById(`responsesForm${commandId}`).value = localStorage.getItem(`commandResponses${commands[a]}`);
        document.getElementById(`duplicationForm${commandId}`).value = localStorage.getItem(`commandDuplicationResponses${commands[a]}`);
        document.getElementById(`discordForm${commandId}`).value = localStorage.getItem(`commandDiscordURL${commands[a]}`);
        document.getElementById(`discordColor${commandId}`).value = localStorage.getItem(`commandDiscordColor${commands[a]}`);
        num++;
    }
    localStorage.setItem('commandId', num);
    localStorage.setItem('commandAmount', num);
}