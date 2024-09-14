function removeCommand(id) {
    let num = +localStorage.getItem('commandAmount');
    let checkedId = id.replace('commandId', '');

    for (let b = 0; b < num; b++) {
        let commandId = String(b).padStart(4, '0');
        console.log(`${id} ${commandId} ${checkedId}`);
        if (+commandId > +checkedId) {
            console.log(String(b - 1).padStart(4, '0'));
            document.getElementById(`br${commandId}`).id = `br${String(b - 1).padStart(4, '0')}`;
            document.getElementById(`commandId${commandId}`).id = `commandId${String(b - 1).padStart(4, '0')}`;
            document.getElementById(`commandName${commandId}`).id = `commandName${String(b - 1).padStart(4, '0')}`;
            document.getElementById(`removeCommand${commandId}ConfigCell`).onclick = function () {
                removeCommand(`commandId${String(b - 1).padStart(4, '0')}`);
            };
            document.getElementById(`removeCommand${commandId}ConfigCell`).id = `removeCommand${String(b - 1).padStart(4, '0')}ConfigCell`;
            document.getElementById(`removeCommand${commandId}ConfigText`).id = `removeCommand${String(b - 1).padStart(4, '0')}ConfigText`;
            document.getElementById(`aliasesForm${commandId}`).id = `aliasesForm${String(b - 1).padStart(4, '0')}`;
            document.getElementById(`responsesForm${commandId}`).id = `responsesForm${String(b - 1).padStart(4, '0')}`;
            document.getElementById(`duplicationForm${commandId}`).id = `duplicationForm${String(b - 1).padStart(4, '0')}`;
            document.getElementById(`discordWebhookSwitch${commandId}`).id = `discordWebhookSwitch${String(b - 1).padStart(4, '0')}`;
            document.getElementById(`discordWebhookTable${commandId}`).id = `discordWebhookTable${String(b - 1).padStart(4, '0')}`;
            document.getElementById(`discordForm${commandId}`).id = `discordForm${String(b - 1).padStart(4, '0')}`;
            document.getElementById(`discordColor${commandId}`).id = `discordColor${String(b - 1).padStart(4, '0')}`;
        }
    }
    document.getElementById(id).remove();
    if (document.getElementById(`br${checkedId}`)) {
        document.getElementById(`br${checkedId}`).remove();
    }

    localStorage.setItem('commandAmount', localStorage.getItem('commandAmount') - 1);
}