function configStyle() {
    // Coloring the background of the dashboard
    document.body.style.backgroundColor = localStorage.getItem('dashboardBackgroundColor');
    // Styling the texts
    const textIdsToEdit = ['connectionHeader', 'spamFilterHeader', 'commandsHeader', 'styleHeader', 'statsSystemHeader', 'statsCommandsHeader',
                           'statsUsageHeader', 'statsBotsHeader'];
    for (let a = 0; a < textIdsToEdit.length; a++) {
        const elementToEdit = document.getElementById(textIdsToEdit[a]);
        if (elementToEdit) {
            elementToEdit.style.fontSize = `${localStorage.getItem(`dashboardFontSize`) * 1.5}pt`;
            elementToEdit.style.color = localStorage.getItem(`dashboardColor`);
            elementToEdit.style.fontFamily = localStorage.getItem(`dashboardFont`);
            elementToEdit.style.lineHeight = 0;
        }
    }
    // Resizing headers
    document.getElementById('connectionHeader').style.fontSize = `${localStorage.getItem(`dashboardFontSize`) * 1.5}pt`;
    document.getElementById('spamFilterHeader').style.fontSize = `${localStorage.getItem(`dashboardFontSize`) * 1.5}pt`;
    document.getElementById('commandsHeader').style.fontSize = `${localStorage.getItem(`dashboardFontSize`) * 1.5}pt`;
    document.getElementById('styleHeader').style.fontSize = `${localStorage.getItem(`dashboardFontSize`) * 1.5}pt`;
    document.getElementById('configPageTable').style.borderSpacing = `${localStorage.getItem('dashboardButtonsBorderSpacing')}px`;

    // Styling text
    const dashboardTexts = document.getElementsByClassName('dashboardText');
    for (let a = 0; a < dashboardTexts.length; a++) {
        dashboardTexts[a].style.fontSize = `${localStorage.getItem(`dashboardFontSize`)}pt`;
        dashboardTexts[a].style.color = localStorage.getItem(`dashboardColor`);
        dashboardTexts[a].style.fontFamily = localStorage.getItem(`dashboardFont`);
        dashboardTexts[a].style.lineHeight = 0;
    }


    // Styling the tables
    const tables = [document.getElementById('twitchConfigTable'),
                    document.getElementById('spamConfigTable'),
                    document.getElementById('styleConfigSelector'),
                    document.getElementById('styleDashboardTable'),
                    document.getElementById('statsSystem'),
                    document.getElementById('statsCommands'),
                    document.getElementById('statsUsage'),
                    document.getElementById('statsCommandTotals'),
                    document.getElementById('statsBots')]
    for (let a = 0; a < tables.length; a++) {
        if (tables[a]) {
            tables[a].style.borderTop    = `${localStorage.getItem(`dashboardTableBordertopThickness`)}px ` +
                                           `${localStorage.getItem(`dashboardTableBordertopStyle`)} ` +
                                           `${localStorage.getItem(`dashboardTableBordertopColor`)}`;
            tables[a].style.borderBottom = `${localStorage.getItem(`dashboardTableBorderbottomThickness`)}px ` +
                                           `${localStorage.getItem(`dashboardTableBorderbottomStyle`)} ` +
                                           `${localStorage.getItem(`dashboardTableBorderbottomColor`)}`;
            tables[a].style.borderLeft   = `${localStorage.getItem(`dashboardTableBorderleftThickness`)}px ` +
                                           `${localStorage.getItem(`dashboardTableBorderleftStyle`)} ` +
                                           `${localStorage.getItem(`dashboardTableBorderleftColor`)}`;
            tables[a].style.borderRight  = `${localStorage.getItem(`dashboardTableBorderrightThickness`)}px ` +
                                           `${localStorage.getItem(`dashboardTableBorderrightStyle`)} ` +
                                           `${localStorage.getItem(`dashboardTableBorderrightColor`)}`;
            tables[a].style.borderTopLeftRadius     = `${localStorage.getItem(`dashboardTableBorderRoundingtopLeft`)}px`;
            tables[a].style.borderTopRightRadius    = `${localStorage.getItem(`dashboardTableBorderRoundingtopRight`)}px`;
            tables[a].style.borderBottomLeftRadius  = `${localStorage.getItem(`dashboardTableBorderRoundingbottomLeft`)}px`;
            tables[a].style.borderBottomRightRadius = `${localStorage.getItem(`dashboardTableBorderRoundingbottomRight`)}px`;
            tables[a].style.background = `${localStorage.getItem(`dashboardTableBackgroundColor`)}`;
        }
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
    const canvasCells = document.getElementsByClassName('canvasCells');
    for (let a = 0; a < canvasCells.length; a++) {
        canvasCells[a].style.width = `${localStorage.getItem('dashboardToggleSize')}px`;
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
    const tableHalfMid = document.getElementsByClassName('tableHalfMid');
    for (let a = 0; a < tableHalfMid.length; a++) {
        const freeSpace = tableHalfMid[a].parentElement.offsetWidth
                          - Math.max(localStorage.getItem('dashboardTableBorderRoundingtopRight'),
                                     localStorage.getItem('dashboardTableBorderRoundingbottomLeft'))
                          - Math.max(localStorage.getItem('dashboardTableBorderRoundingtopLeft'),
                                     localStorage.getItem('dashboardTableBorderRoundingbottomRight'))
                          - localStorage.getItem('dashboardToggleSize');
        tableHalfMid[a].style.width = `${freeSpace / 2}px`;
    }
    const tableSingle = document.getElementsByClassName('tableSingle');
    for (let a = 0; a < tableSingle.length; a++) {
        const freeSpace = tableSingle[a].parentElement.offsetWidth
                          - Math.max(localStorage.getItem('dashboardTableBorderRoundingtopRight'),
                                     localStorage.getItem('dashboardTableBorderRoundingbottomLeft'))
                          - Math.max(localStorage.getItem('dashboardTableBorderRoundingtopLeft'),
                                     localStorage.getItem('dashboardTableBorderRoundingbottomRight'));
        tableSingle[a].style.width = `${freeSpace}px`;
    }
    const tableThird = document.getElementsByClassName('tableThird');
    for (let a = 0; a < tableThird.length; a++) {
        const freeSpace = tableThird[a].parentElement.offsetWidth
                          - Math.max(localStorage.getItem('dashboardTableBorderRoundingtopRight'),
                                     localStorage.getItem('dashboardTableBorderRoundingbottomLeft'))
                          - Math.max(localStorage.getItem('dashboardTableBorderRoundingtopLeft'),
                                     localStorage.getItem('dashboardTableBorderRoundingbottomRight'));
        tableThird[a].style.width = `${freeSpace / 3}px`;
    }



    // Styling the Queue and Configuration buttons
    if (localStorage.getItem('configPage') == null) {
        localStorage.setItem('configPage', 'config');
    }
    switch(localStorage.getItem('configPage')) {
        case 'queue':
            document.getElementById('groups').style.display = '';
            document.getElementById('groupActionsTable').style.display = '';
            document.getElementById('questionTableBody').style.display = '';
            document.getElementById('configPage').style.display = 'none';
            document.getElementById('statsPage').style.display = 'none';
            styleButton('queue', 'selected', true);
            styleButton('config', 'unselected', true);
            styleButton('stats', 'unselected', true);
            break;
        case 'config':
            document.getElementById('groups').style.display = 'none';
            document.getElementById('groupActionsTable').style.display = 'none';
            document.getElementById('questionTableBody').style.display = 'none';
            document.getElementById('configPage').style.display = '';
            document.getElementById('statsPage').style.display = 'none';
            styleButton('queue', 'unselected', true);
            styleButton('config', 'selected', true);
            styleButton('stats', 'unselected', true);
            break;
        case 'stats':
            document.getElementById('groups').style.display = 'none';
            document.getElementById('groupActionsTable').style.display = 'none';
            document.getElementById('questionTableBody').style.display = 'none';
            document.getElementById('configPage').style.display = 'none';
            document.getElementById('statsPage').style.display = '';
            styleButton('queue', 'unselected', true);
            styleButton('config', 'unselected', true);
            styleButton('stats', 'selected', true);
            break;
    }

    // Styling the clear queue button
    styleButton('clearQueue', 'selected', true);

    // Opening the last open config page
    if (localStorage.getItem('configActivePage') == null) {
        localStorage.setItem('configActivePage', 'bot');
    }
    const configPages = ['bot', 'commands', 'style'];
    let element;
    for (let a = 0; a < configPages.length; a++) {
        if (localStorage.getItem('configActivePage') == configPages[a]) {
            document.getElementById(`${configPages[a]}ConfigPage`).style.display = '';
            styleButton(configPages[a], 'selected', true);
        }
        else {
            document.getElementById(`${configPages[a]}ConfigPage`).style.display = 'none';
            styleButton(configPages[a], 'unselected', true);
        }
    }
    // Styling the config page switching buttons
    styleButton('twitchRefresh', 'unselected', true);
    styleButton('commandsAddCommand', 'unselected', true);
    styleButton('commandsRefresh', 'unselected', true);
    styleButton('styleRefresh', 'unselected', true);


    // Styling the toggle switches
    let strokeSize = localStorage.getItem('dashboardToggleStokeSize');
    let size = localStorage.getItem('dashboardToggleSize');
    let spamFilterToggleValues = [localStorage.getItem('connectiontwitchActive'),
                                  localStorage.getItem('rejectRepeatedQuestion'),
                                  localStorage.getItem('allowCheckGroup'),
                                  localStorage.getItem('allowSimilarQuestionFromDifferentUser')];
    let spamFilterToggles      = [document.getElementById('twitchCheckboxCanvas'),
                                  document.getElementById('spamCheckboxCanvas'),
                                  document.getElementById('spamCheckGroupsCanvas'),
                                  document.getElementById('spamCheckUsersCanvas')];
    for (let a in spamFilterToggleValues) {
        const switchSquare = spamFilterToggles[a].getContext('2d');
        spamFilterToggles[a].setAttribute('height', size);
        spamFilterToggles[a].setAttribute('width', size);
        switch(spamFilterToggleValues[a]) {
            case null:
            case 'false':
                // Redrawing the canvas
                switchSquare.fillStyle = localStorage.getItem('dashboardToggleunselectedBackgroundColor');
                switchSquare.fillRect(size/4, size/4, size, size);
                switchSquare.strokeStyle = localStorage.getItem('dashboardToggleunselectedColor');
                switchSquare.lineWidth = strokeSize;
                switchSquare.strokeRect(size/4 + strokeSize/2, size/4 + strokeSize/2, size*0.75-strokeSize, size*0.75-strokeSize);
                break;
            case 'true':
                // Redrawing the canvas
                switchSquare.fillStyle = localStorage.getItem('dashboardToggleselectedBackgroundColor');
                switchSquare.fillRect(size/4, size/4, size, size);
                switchSquare.strokeStyle = localStorage.getItem('dashboardToggleselectedColor');
                switchSquare.lineWidth = strokeSize;
                switchSquare.strokeRect(size/4 + strokeSize/2, size/4 + strokeSize/2, size*0.75-strokeSize, size*0.75-strokeSize);
                break;
        }
    }
    // Showing/hiding the spam filter config table
    if (localStorage.getItem('rejectRepeatedQuestion') == 'true') {
        document.getElementById('spamConfigTable').style.display = '';
    }
    else {
        document.getElementById('spamConfigTable').style.display = 'none';
    }

    // Setting the height of the commands settings page so the Add command and Refresh commands buttons will remain at the bottom of the page
    document.body.offsetHeight;
    document.getElementById('commandsConfigCommands').style.height = `${window.innerHeight
                                                                     - (document.getElementById('queueConfigCell').offsetHeight * 5)
                                                                     - (Math.max(localStorage.getItem('dashboardButtonsunselectedFontSize'),
                                                                                 localStorage.getItem('dashboardButtonsselectedFontSize'),
                                                                                 localStorage.getItem('dashboardButtonsalertFontSize'),
                                                                                 localStorage.getItem('dashboardButtonshoverFontSize'),
                                                                                 localStorage.getItem('dashboardButtonshoverselectedFontSize')) * 3)
                                                                     - (Math.max(localStorage.getItem('dashboardButtonsunselectedBordertopThickness'),
                                                                                 localStorage.getItem('dashboardButtonsselectedBordertopThickness'),
                                                                                 localStorage.getItem('dashboardButtonsalertBordertopThickness'),
                                                                                 localStorage.getItem('dashboardButtonshoverBordertopThickness'),
                                                                                 localStorage.getItem('dashboardButtonshoverselectedBordertopThickness')) * 3)
                                                                     - (Math.max(localStorage.getItem('dashboardButtonsunselectedBorderbottomThickness'),
                                                                                 localStorage.getItem('dashboardButtonsselectedBorderbottomThickness'),
                                                                                 localStorage.getItem('dashboardButtonsalertBorderbottomThickness'),
                                                                                 localStorage.getItem('dashboardButtonshoverBorderbottomThickness'),
                                                                                 localStorage.getItem('dashboardButtonshoverselectedBorderbottomThickness')) * 3)}px`;


    // Styling the scrollbar and range inputs
    const scrollbar = document.createElement('style');
    let borderRadius = Math.min(localStorage.getItem(`dashboardButtonsunselectedBorderRoundingtopLeft`),
                                localStorage.getItem(`dashboardButtonsunselectedBorderRoundingtopRight`),
                                localStorage.getItem(`dashboardButtonsunselectedBorderRoundingbottomLeft`),
                                localStorage.getItem(`dashboardButtonsunselectedBorderRoundingbottomRight`));
    let borderThickness = Math.min(localStorage.getItem(`dashboardButtonsunselectedBordertopThickness`),
                                   localStorage.getItem(`dashboardButtonsunselectedBorderbottomThickness`),
                                   localStorage.getItem(`dashboardButtonsunselectedBorderleftThickness`),
                                   localStorage.getItem(`dashboardButtonsunselectedBorderrightThickness`));
    scrollbar.innerHTML = `
        ::-webkit-scrollbar {
            width: ${borderRadius + 4}px;
        }
        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 ${borderRadius}px ${borderThickness}px ${localStorage.getItem(`dashboardButtonsunselectedBackgroundColor`)};
            border-radius: ${borderRadius / 2}px;
            border: ${borderThickness}px ${localStorage.getItem(`dashboardButtonsunselectedBordertopStyle`)};
            border-color: ${localStorage.getItem(`dashboardButtonsunselectedBordertopColor`)};
        }
        ::-webkit-scrollbar-thumb {
            background: ${localStorage.getItem(`dashboardButtonsunselectedBordertopColor`)};
            border-radius: ${borderRadius / 2}px;
        }

        ::-webkit-slider-runnable-track {
            height: ${borderRadius + 4}px;
            width: 100%;
            background: ${localStorage.getItem(`dashboardButtonsunselectedBackgroundColor`)};
            border-radius: ${borderRadius / 2}px;
            border: ${borderThickness}px ${localStorage.getItem(`dashboardButtonsunselectedBordertopStyle`)} ${localStorage.getItem(`dashboardButtonsunselectedBordertopColor`)};
        }
        ::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: ${borderRadius}px;
            height: ${borderRadius}px;
            cursor: pointer;
            background: ${localStorage.getItem(`dashboardButtonsselectedColor`)};
            border: ${borderThickness}px ${localStorage.getItem(`dashboardButtonsselectedBordertopStyle`)} ${localStorage.getItem(`dashboardButtonsselectedBordertopColor`)};
            -webkit-transition: ${localStorage.getItem(`dashboardButtonsselectedHoverTime`) / 1000}s;
            transition: background ${localStorage.getItem(`dashboardButtonsselectedHoverTime`) / 1000}s;
        }
        ::-webkit-slider-thumb:hover {
            background: ${localStorage.getItem(`dashboardButtonsselectedHoverColor`)};
        }
        input {
            height: ${localStorage.getItem('dashboardFontSize') * 1.5}px;
        }
        input[type="color"] {
            border: none;
            outline: none;
            height: ${localStorage.getItem('dashboardFontSize') * 2}px;
        }
        `
    document.head.appendChild(scrollbar);

    // Filling up all forms with data
    fillCodes();
}