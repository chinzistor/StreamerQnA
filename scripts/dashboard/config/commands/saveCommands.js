function saveCommands() {
    let num = +localStorage.getItem('commandAmount');
    let commands = null;
    let groupRaw;

    for (let b = 0; b < num; b++) {
        let commandId = String(b).padStart(4, '0');

        let element = document.getElementById(`commandName${commandId}`);
        if (element) {
            groupRaw = element.value;
            if (commands == null) {
                commands = groupRaw;
            }
            else {
                commands = `${commands}%-%${groupRaw}`;
            }
        }
        element = document.getElementById(`aliasesForm${commandId}`);
        if (element) {
            localStorage.setItem(`commandAliases${groupRaw}`, element.value);
        }
        element = document.getElementById(`responsesForm${commandId}`);
        if (element) {
            localStorage.setItem(`commandResponses${groupRaw}`, element.value);
        }
        element = document.getElementById(`duplicationForm${commandId}`);
        if (element) {
            localStorage.setItem(`commandDuplicationResponses${groupRaw}`, element.value);
        }
        element = document.getElementById(`discordForm${commandId}`);
        if (element) {
            localStorage.setItem(`commandDiscordURL${groupRaw}`, element.value);
        }
        element = document.getElementById(`discordColor${commandId}`);
        if (element) {
            localStorage.setItem(`commandDiscordColor${groupRaw}`, element.value);
        }
    }
    localStorage.setItem('commands', commands);
    location.reload();
}