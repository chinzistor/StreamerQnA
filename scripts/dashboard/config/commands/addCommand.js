function addCommand(userAdded) {
    const commandId = `${localStorage.getItem('commandId').padStart(4, '0')}`
    localStorage.setItem('commandId', `${+localStorage.getItem('commandId') + 1}`);

    // Check if the user ads a new command or dashboard is loading
    if (userAdded) {
        localStorage.setItem('commandAmount', `${+localStorage.getItem('commandAmount') + 1}`);
    }

    const main = document.getElementById('commandsConfigCommands');
    if (main.children.length > 1) {
        const newLine = document.createElement('br');
        newLine.id = `br${commandId}`;
        main.appendChild(newLine);
    }

    const body = document.createElement('div');
    main.appendChild(body);
    styling(body, 'table', 'unselected');
    body.style.overflowX = 'hidden';
    body.id = `commandId${commandId}`;
    body.style.width = `${main.offsetWidth - 2.5 * Math.min(localStorage.getItem(`dashboardButtonsunselectedBorderRoundingtopLeft`),
                                                            localStorage.getItem(`dashboardButtonsunselectedBorderRoundingtopRight`),
                                                            localStorage.getItem(`dashboardButtonsunselectedBorderRoundingbottomLeft`),
                                                            localStorage.getItem(`dashboardButtonsunselectedBorderRoundingbottomRight`))}px`;

    body.appendChild(document.createElement('br'));

    const tableBody = document.createElement('table');
    tableBody.style.width = '100%';
    body.appendChild(tableBody);

    const tableSub = document.createElement('tbody');
    tableBody.appendChild(tableSub);

    const tableHeader = document.createElement('tr');
    tableSub.appendChild(tableHeader);

    const commandNameCell = document.createElement('td');
    tableHeader.appendChild(commandNameCell);
    commandNameCell.style.width = '60%';
    commandNameCell.style.paddingLeft = `${Math.max(localStorage.getItem(`dashboardQueueunselectednameBorderRoundingtopLeft`) / 2,
                                                    localStorage.getItem(`dashboardQueueunselectedBorderRoundingtopLeft`) * 1.5)}px`;

    const commandName = document.createElement('input');
    commandNameCell.appendChild(commandName);
    commandName.type = 'text';
    commandName.id = `commandName${commandId}`;
    commandName.name =`commandName${commandId}`;
    commandName.style.fontSize = `${localStorage.getItem(`dashboardQueueunselectednameFontSize`)}px`;
    commandName.placeholder = 'Enter group name here';


    const commandRemoveCell = document.createElement('td');
    tableHeader.appendChild(commandRemoveCell);
    commandRemoveCell.style.width = '40%';
    commandRemoveCell.style.cursor = 'pointer';
    commandRemoveCell.onclick = function () {
        removeCommand(`commandId${commandId}`);
    };
    commandRemoveCell.id = (`removeCommand${commandId}ConfigCell`);

    const commandRemoveText = document.createElement('p');
    commandRemoveCell.appendChild(commandRemoveText);
    commandRemoveText.textContent = 'Remove command';
    commandRemoveText.style.lineHeight = 0;
    commandRemoveText.style.textAlign = 'center';
    commandRemoveText.id = (`removeCommand${commandId}ConfigText`);
    styleButton(`removeCommand${commandId}`, 'unselected', true);



    const tableHeader2 = document.createElement('tr');
    tableSub.appendChild(tableHeader2);


    const commandsTextCell = document.createElement('td');
    tableHeader2.appendChild(commandsTextCell);
    commandsTextCell.style.width = '40%';
    commandsTextCell.style.verticalAlign = 'top';

    const aliasesParagraph = document.createElement('p');
    commandsTextCell.appendChild(aliasesParagraph);
    styling(aliasesParagraph, 'nameText', 'unselected');
    aliasesParagraph.textContent = "Commands";
    aliasesParagraph.style.lineHeight = 0;

    const aliasesHelp = document.createElement('p');
    commandsTextCell.appendChild(aliasesHelp);
    styling(aliasesHelp, 'nameText', 'unselected');
    aliasesHelp.textContent = '🛈';
    aliasesHelp.title = 'If this is empty, the command group will not accept any requests. Type each alias into a new line.'
    aliasesHelp.style.cursor = 'pointer';


    const commandsFormCell = document.createElement('td');
    tableHeader2.appendChild(commandsFormCell);
    commandsFormCell.style.width = '60%';

    const aliasesForm = document.createElement('textarea');
    commandsFormCell.appendChild(aliasesForm);
    aliasesForm.style.width = '90%';
    aliasesForm.style.resize = 'vertical';
    aliasesForm.style.minHeight = `${localStorage.getItem(`dashboardQueueunselectednameFontSize`) * 4}px`;
    aliasesForm.style.height = `${localStorage.getItem(`dashboardQueueunselectednameFontSize`) * 4}px`;
    aliasesForm.style.fontSize = `${localStorage.getItem(`dashboardQueueunselectednameFontSize`)}px`;
    aliasesForm.id = `aliasesForm${commandId}`;
    aliasesForm.name =`aliasesForm${commandId}`;
    aliasesForm.placeholder = 'Enter aliases here, each into its own line';



    const tableHeader3 = document.createElement('tr');
    tableSub.appendChild(tableHeader3);


    const responsesTextCell = document.createElement('td');
    tableHeader3.appendChild(responsesTextCell);
    responsesTextCell.style.width = '40%';
    responsesTextCell.style.verticalAlign = 'top';

    const responsesParagraph = document.createElement('p');
    responsesTextCell.appendChild(responsesParagraph);
    styling(responsesParagraph, 'nameText', 'unselected');
    responsesParagraph.textContent = "Responses ";
    responsesParagraph.style.lineHeight = 0;

    const responsesHelp = document.createElement('p');
    responsesTextCell.appendChild(responsesHelp);
    styling(responsesHelp, 'nameText', 'unselected');
    responsesHelp.textContent = '🛈';
    responsesHelp.title = 'If you want to use the username in the response, use %user'
    responsesHelp.style.cursor = 'pointer';


    const responsesFormCell = document.createElement('td');
    tableHeader3.appendChild(responsesFormCell);
    responsesFormCell.style.width = '60%';

    const responsesForm = document.createElement('textarea');
    responsesFormCell.appendChild(responsesForm);
    responsesForm.style.width = '90%';
    responsesForm.style.resize = 'vertical';
    responsesForm.style.minHeight = `${localStorage.getItem(`dashboardQueueunselectednameFontSize`) * 5}px`;
    responsesForm.style.height = `${localStorage.getItem(`dashboardQueueunselectednameFontSize`) * 5}px`;
    responsesForm.style.fontSize = `${localStorage.getItem(`dashboardQueueunselectednameFontSize`)}px`;
    responsesForm.id = `responsesForm${commandId}`;
    responsesForm.name =`responsesForm${commandId}`;
    responsesForm.placeholder = 'Enter responses here, each into its own line';



    const tableHeader4 = document.createElement('tr');
    tableSub.appendChild(tableHeader4);


    const duplicationTextCell = document.createElement('td');
    tableHeader4.appendChild(duplicationTextCell);
    duplicationTextCell.style.width = '40%';
    duplicationTextCell.style.verticalAlign = 'top';

    const duplicationParagraph = document.createElement('p');
    duplicationTextCell.appendChild(duplicationParagraph);
    styling(duplicationParagraph, 'nameText', 'unselected');
    duplicationParagraph.textContent = "Duplication responses ";
    duplicationParagraph.style.lineHeight = 0;

    const duplicationHelp = document.createElement('p');
    duplicationTextCell.appendChild(duplicationHelp);
    styling(duplicationHelp, 'nameText', 'unselected');
    duplicationHelp.textContent = '🛈';
    duplicationHelp.title = 'If you want to use the username in the response, use %user'
    duplicationHelp.style.cursor = 'pointer';


    const duplicationFormCell = document.createElement('td');
    tableHeader4.appendChild(duplicationFormCell);
    duplicationFormCell.style.width = '60%';

    const duplicationForm = document.createElement('textarea');
    duplicationFormCell.appendChild(duplicationForm);
    duplicationForm.style.width = '90%';
    duplicationForm.style.resize = 'vertical';
    duplicationForm.style.minHeight = `${localStorage.getItem(`dashboardQueueunselectednameFontSize`) * 5}px`;
    duplicationForm.style.height = `${localStorage.getItem(`dashboardQueueunselectednameFontSize`) * 5}px`;
    duplicationForm.style.fontSize = `${localStorage.getItem(`dashboardQueueunselectednameFontSize`)}px`;
    duplicationForm.id = `duplicationForm${commandId}`;
    duplicationForm.name =`duplicationForm${commandId}`;
    duplicationForm.placeholder = 'Enter duplication responses here, each into its own line';


    //body.appendChild(document.createElement('br'));


    // Discord webhook switch
    const tableBody2 = document.createElement('table');
    body.appendChild(tableBody2);
    tableBody2.style.width = '100%';

    const tableSub2 = document.createElement('tbody');
    tableBody2.appendChild(tableSub2);
    tableBody2.style.width = '100%';

    const discordSwitchLine = document.createElement('tr');
    tableSub2.appendChild(discordSwitchLine);

    const discordIntegrationSwitch = document.createElement('td');
    discordSwitchLine.appendChild(discordIntegrationSwitch);
    discordIntegrationSwitch.style.width = `2%`;

    // Creating a canvas element
    const discordIntegrationCanvas = document.createElement('canvas');
    discordIntegrationSwitch.appendChild(discordIntegrationCanvas);
    discordIntegrationCanvas.id = `discordWebhookSwitch${commandId}`;
    // Drawing the button
    let strokeSize = localStorage.getItem('dashboardToggleStokeSize');
    let size = localStorage.getItem('dashboardToggleSize');
    discordIntegrationCanvas.setAttribute('height', size);
    discordIntegrationCanvas.setAttribute('width', size);
    const switchSquare = discordIntegrationCanvas.getContext('2d');

    // Making sure the webhook status is set in the storage
    if (localStorage.getItem(`discordWebhookActive${commandId}`) == null) {
        localStorage.setItem(`discordWebhookActive${commandId}`, 'false');
    }
    // Styling based on webhook status
    if (localStorage.getItem(`discordWebhookActive${commandId}`) == 'true') {
        switchSquare.fillStyle = localStorage.getItem('dashboardToggleselectedBackgroundColor');
        switchSquare.fillRect(size/4, size/4, size, size);
        switchSquare.strokeStyle = localStorage.getItem('dashboardToggleselectedColor');
        switchSquare.lineWidth = strokeSize;
        switchSquare.strokeRect(size/4 + strokeSize/2, size/4 + strokeSize/2, size*0.75-strokeSize, size*0.75-strokeSize);
    }
    else {
        switchSquare.fillStyle = localStorage.getItem('dashboardToggleunselectedBackgroundColor');
        switchSquare.fillRect(size/4, size/4, size, size);
        switchSquare.strokeStyle = localStorage.getItem('dashboardToggleunselectedColor');
        switchSquare.lineWidth = strokeSize;
        switchSquare.strokeRect(size/4 + strokeSize/2, size/4 + strokeSize/2, size*0.75-strokeSize, size*0.75-strokeSize);
    }
    // Adding click function
    discordIntegrationCanvas.onclick = function () {
        switchDiscord(commandId);
    };
    discordIntegrationCanvas.style.cursor = 'pointer';


    const discordSwitchTextCell = document.createElement('td');
    discordSwitchLine.appendChild(discordSwitchTextCell);
    discordSwitchTextCell.style.width = '40%';
    discordSwitchTextCell.style.verticalAlign = 'top';

    const discordSwitchTextParagraph = document.createElement('p');
    discordSwitchTextCell.appendChild(discordSwitchTextParagraph);
    styling(discordSwitchTextParagraph, 'nameText', 'unselected');
    discordSwitchTextParagraph.textContent = "Discord integration";
    discordSwitchTextParagraph.style.lineHeight = 0;




    const tableBody3 = document.createElement('table');
    body.appendChild(tableBody3);
    tableBody3.id = `discordWebhookTable${commandId}`;
    tableBody3.style.width = '100%';

    const tableSub3 = document.createElement('tbody');
    tableBody3.appendChild(tableSub3);

    const tableHeader5 = document.createElement('tr');
    tableSub3.appendChild(tableHeader5);


    const discordTextCell = document.createElement('td');
    tableHeader5.appendChild(discordTextCell);
    discordTextCell.style.width = '40%';
    discordTextCell.style.verticalAlign = 'top';

    const discordParagraph = document.createElement('p');
    discordTextCell.appendChild(discordParagraph);
    styling(discordParagraph, 'nameText', 'unselected');
    discordParagraph.textContent = "Discord webhook";
    discordParagraph.style.lineHeight = 0;

    const discordHelp = document.createElement('p');
    discordTextCell.appendChild(discordHelp);
    styling(discordHelp, 'nameText', 'unselected');
    discordHelp.textContent = '🛈';
    discordHelp.title = 'The webhook URL the system will send the registered question to. Leave empty to disable.'
    discordHelp.style.cursor = 'pointer';


    const discordFormCell = document.createElement('td');
    tableHeader5.appendChild(discordFormCell);
    discordFormCell.style.width = '60%';

    const discordForm = document.createElement('input');
    discordFormCell.appendChild(discordForm);
    discordForm.type = 'password';
    discordForm.style.width = '90%';
    discordForm.style.minHeight = `${localStorage.getItem(`dashboardQueueunselectednameFontSize`)}px`;
    discordForm.style.height = `${localStorage.getItem(`dashboardQueueunselectednameFontSize`)}px`;
    discordForm.style.fontSize = `${localStorage.getItem(`dashboardQueueunselectednameFontSize`)}px`;
    discordForm.id = `discordForm${commandId}`;
    discordForm.name =`discordForm${commandId}`;
    discordForm.placeholder = 'Enter the Discord webhook link here';



    const tableHeader6 = document.createElement('tr');
    tableSub3.appendChild(tableHeader6);


    const discordColorTextCell = document.createElement('td');
    tableHeader6.appendChild(discordColorTextCell);
    discordColorTextCell.style.width = '40%';
    discordColorTextCell.style.verticalAlign = 'top';

    const discordColorParagraph = document.createElement('p');
    discordColorTextCell.appendChild(discordColorParagraph);
    styling(discordColorParagraph, 'nameText', 'unselected');
    discordColorParagraph.textContent = "Discord webhook color";
    discordColorParagraph.style.lineHeight = 0;

    const discordColorHelp = document.createElement('p');
    discordColorTextCell.appendChild(discordColorHelp);
    styling(discordColorHelp, 'nameText', 'unselected');
    discordColorHelp.textContent = '🛈';
    discordColorHelp.title = 'Color of the webhook message. Without a webhook URL this has no effect.'
    discordColorHelp.style.cursor = 'pointer';


    const discordColorForm = document.createElement('td');
    tableHeader6.appendChild(discordColorForm);
    discordColorForm.style.width = '60%';

    const discordColor = document.createElement('input');
    discordColorForm.appendChild(discordColor);
    discordColor.type = 'color';
    discordColor.style.width = '90%';
    discordColor.style.minHeight = `${localStorage.getItem(`dashboardQueueunselectednameFontSize`) * 2}px`;
    discordColor.style.height = `${localStorage.getItem(`dashboardQueueunselectednameFontSize`) * 2}px`;
    discordColor.id = `discordColor${commandId}`;
    discordColor.name =`discordColor${commandId}`;

    if (localStorage.getItem(`discordWebhookActive${commandId}`) == 'true') {
        tableBody3.style.display = '';
    }
    else {
        tableBody3.style.display = 'none';
    }

    return commandId;
}