function fillStats() {
    // Showing the current version number
    document.getElementById('statsVersion').textContent = window.version;


    // Adding a row for each command group to show usage of that group
    let groupNames = localStorage.getItem('commands').split('%-%');
    const tableBody = document.getElementById('statsCommandsBody')
    tableBody.innerHTML = '';
    for (let a in groupNames) {
        // Creating rows
        const tableRow = document.createElement('tr');
        tableBody.appendChild(tableRow);
        // Creating spacer
        const tableLeft = document.createElement('td');
        tableRow.appendChild(tableLeft);
        tableLeft.classList.add('tableSpacerLeft');

        // Creatine cell for text
        const tableText = document.createElement('td');
        tableRow.appendChild(tableText);
        tableText.classList.add('tableHalf');
        // Creating text
        const commandGroup = document.createElement('p');
        tableText.appendChild(commandGroup);
        commandGroup.classList.add('dashboardText');
        commandGroup.textContent = groupNames[a];

        // Creating cell for number
        const tableNumber = document.createElement('td');
        tableRow.appendChild(tableNumber);
        tableNumber.classList.add('tableHalf');
        // Creating text
        const commandUsage = document.createElement('p');
        tableNumber.appendChild(commandUsage);
        commandUsage.classList.add('dashboardText');
        let groupRaw = groupNames[a].replace(" ", "")
        if (localStorage.getItem(`commandUsage${groupRaw}`) == null) {
            localStorage.setItem(`commandUsage${groupRaw}`, 0);
        }
        commandUsage.textContent = localStorage.getItem(`commandUsage${groupRaw}`);

        // Creating spacer
        const tableRight = document.createElement('td');
        tableRow.appendChild(tableRight);
        tableRight.classList.add('tableSpacerRight');
    }


    // Total command usage
    if (localStorage.getItem(`commandTotalUsage`) == null) {
        localStorage.setItem(`commandTotalUsage`, 0);
    }
    document.getElementById('statsTotalCommands').textContent = localStorage.getItem(`commandTotalUsage`);
    // Total spam filter rejection
    if (localStorage.getItem(`spamFilterRejection`) == null) {
        localStorage.setItem(`spamFilterRejection`, 0);
    }
    document.getElementById('statsSpamFilter').textContent = localStorage.getItem(`spamFilterRejection`);


    // Dashboard usage
    // Submissions shown
    if (localStorage.getItem('bubbleTotalShown') == null) {
        localStorage.setItem('bubbleTotalShown', 0);
    }
    document.getElementById('statsShown').textContent = localStorage.getItem('bubbleTotalShown');
    // Submissions hidden
    if (localStorage.getItem('bubbleTotalHidden') == null) {
        localStorage.setItem('bubbleTotalHidden', 0);
    }
    document.getElementById('statsHidden').textContent = localStorage.getItem('bubbleTotalHidden');
    // Submissions deleted
    if (localStorage.getItem('bubbleTotalDeleted') == null) {
        localStorage.setItem('bubbleTotalDeleted', 0);
    }
    document.getElementById('statsDeleted').textContent = localStorage.getItem('bubbleTotalDeleted');
    // Style edits
    if (localStorage.getItem('dashboardStyleEdits') == null) {
        localStorage.setItem('dashboardStyleEdits', 0);
    }
    document.getElementById('statsStyleEdits').textContent = localStorage.getItem('dashboardStyleEdits');

    // Bot stats
    // Twitch messages sent
    if (localStorage.getItem('botTwitchMessageSent') == null) {
        localStorage.setItem('botTwitchMessageSent', 0);
    }
    document.getElementById('statsTwitchMessage').textContent = localStorage.getItem('botTwitchMessageSent');
    // Twitch connections made
    if (localStorage.getItem('botTwitchConnections') == null) {
        localStorage.setItem('botTwitchConnections', 0);
    }
    document.getElementById('statsTwitchConnection').textContent = localStorage.getItem('botTwitchConnections');




    // Styling text
    const dashboardTexts = document.getElementsByClassName('dashboardText');
    for (let a = 0; a < dashboardTexts.length; a++) {
        dashboardTexts[a].style.fontSize = `${localStorage.getItem(`dashboardFontSize`)}pt`;
        dashboardTexts[a].style.color = localStorage.getItem(`dashboardColor`);
        dashboardTexts[a].style.fontFamily = localStorage.getItem(`dashboardFont`);
        dashboardTexts[a].style.lineHeight = 0;
    }

    // Padding elements within tables
    document.body.offsetWidth;
    const tableSpacersLeft = document.getElementsByClassName('tableSpacerLeft');
    for (let a = 0; a < tableSpacersLeft.length; a++) {
        tableSpacersLeft[a].style.width = `${Math.max(localStorage.getItem('dashboardTableBorderRoundingtopLeft'),
                                                       localStorage.getItem('dashboardTableBorderRoundingbottomLeft'))}px`;
    }
    const tableSpacersRight = document.getElementsByClassName('tableSpacerRight');
    for (let a = 0; a < tableSpacersRight.length; a++) {
        tableSpacersRight[a].style.width = `${Math.max(localStorage.getItem('dashboardTableBorderRoundingtopRight'),
                                                       localStorage.getItem('dashboardTableBorderRoundingbottomRight'))}px`;
    }
    const tableHalf = document.getElementsByClassName('tableHalf');
    for (let a = 0; a < tableHalf.length; a++) {
        const freeSpace = tableHalf[a].parentElement.offsetWidth
                          - Math.max(localStorage.getItem('dashboardTableBorderRoundingtopRight'),
                                     localStorage.getItem('dashboardTableBorderRoundingbottomLeft'))
                          - Math.max(localStorage.getItem('dashboardTableBorderRoundingtopLeft'),
                                     localStorage.getItem('dashboardTableBorderRoundingbottomRight'));
        tableHalf[a].style.width = `${freeSpace / 2}px`;
    }
}