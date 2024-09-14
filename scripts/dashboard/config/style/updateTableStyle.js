function updateTableStyle() {
    // Dynamic path to get values from localStorage
    let styleEditor = localStorage.getItem('styleSelection');
    let path = '';
    let subPath = '';
    let stylePath = '';
    let fontStyle = '';
    let hoverPath = '';
    let formatPath = '';

    switch(styleEditor) {
        case 'Dashboard':
            path = 'dashboardTable';
            stylePath = 'dashboardQueue';
            fontStyle = 'dashboard';
            hoverPath = 'dashboardQueue';
            break;
        case 'Buttons':
            subPath = localStorage.getItem('dashboardButtonSelected');
            path = `dashboardButtons${subPath}`;
            stylePath = path;
            fontStyle = path;
            hoverPath = 'dashboardButtons';
            break;
        case 'Queue':
            subPath = localStorage.getItem('dashboardQueueSection');
            if (subPath == 'border') {
                path = `dashboardQueue${localStorage.getItem('dashboardQueueSelected')}`;
                fontStyle = `${path}name`;
            }
            else {
                path = `dashboardQueue${localStorage.getItem('dashboardQueueSelected')}${subPath}`;
                fontStyle = `${path}`;
            }
            stylePath = path;
            hoverPath = 'dashboardQueue';
            formatPath = 'dashboardtimeFormat';
            break;
        case 'Bubble':
            subPath = localStorage.getItem('dashboardBubbleSection');
            if (subPath == 'border') {
                path = `bubble`;
                fontStyle = `${path}name`;
            }
            else {
                path = `bubble${subPath}`;
                fontStyle = path;
            }
            stylePath = path;
            hoverPath = 'dashboardQueue';
            formatPath = 'bubbletimeFormat';
            break;
    }

    // Hiding the not selected parts of the style config
    let names = ['Dashboard', 'Buttons', 'Queue', 'Bubble'];
    for (let a in names) {
        document.getElementById(`style${names[a]}Settings`).style.display = 'none';
    }
    document.getElementById(`style${styleEditor}Settings`).style.display = '';

    if (styleEditor == 'Dashboard' || styleEditor == 'Bubble') {
        document.getElementById(`styleTransition`).style.display = 'none';
    }
    else {
        document.getElementById(`styleTransition`).style.display = '';
    }
    // Getting the main table to configure its styling
    const mainTable = document.getElementById('styleTable');
    mainTable.style.width = '100%';
    mainTable.style.borderTop    = `${localStorage.getItem(`${path}BordertopThickness`)}px `
                                 + `${localStorage.getItem(`${path}BordertopStyle`)} `
                                 + `${localStorage.getItem(`${path}BordertopColor`)}`;
    mainTable.style.borderBottom = `${localStorage.getItem(`${path}BorderbottomThickness`)}px `
                                 + `${localStorage.getItem(`${path}BorderbottomStyle`)} `
                                 + `${localStorage.getItem(`${path}BorderbottomColor`)}`;
    mainTable.style.borderLeft   = `${localStorage.getItem(`${path}BorderleftThickness`)}px `
                                 + `${localStorage.getItem(`${path}BorderleftStyle`)} `
                                 + `${localStorage.getItem(`${path}BorderleftColor`)}`;
    mainTable.style.borderRight  = `${localStorage.getItem(`${path}BorderrightThickness`)}px `
                                 + `${localStorage.getItem(`${path}BorderrightStyle`)} `
                                 + `${localStorage.getItem(`${path}BorderrightColor`)}`;
    mainTable.style.borderTopLeftRadius     = `${localStorage.getItem(`${path}BorderRoundingtopLeft`)}px`;
    mainTable.style.borderTopRightRadius    = `${localStorage.getItem(`${path}BorderRoundingtopRight`)}px`;
    mainTable.style.borderBottomLeftRadius  = `${localStorage.getItem(`${path}BorderRoundingbottomLeft`)}px`;
    mainTable.style.borderBottomRightRadius = `${localStorage.getItem(`${path}BorderRoundingbottomRight`)}px`;

    if (subPath == 'border') {
        mainTable.style.background = `${localStorage.getItem(`dashboardTableBackgroundColor`)}`;
    }
    else {
        mainTable.style.background = `${localStorage.getItem(`${path}BackgroundColor`)}`;
    }
    mainTable.style.borderCollapse = 'collapse';
    mainTable.style.transition = `background-color ${localStorage.getItem(`${hoverPath}HoverTime`) / 1000}s `
                               + `${localStorage.getItem(`${hoverPath}HoverType`)}, `
                               + `border ${localStorage.getItem(`${hoverPath}HoverTime`) / 1000}s `
                               + `${localStorage.getItem(`${hoverPath}HoverType`)}, `
                               + `border-radius ${localStorage.getItem(`${hoverPath}HoverTime`) / 1000}s `
                               + `${localStorage.getItem(`${hoverPath}HoverType`)}`;

    // Showing/hiding middle section dynamicaly
    const elements = document.getElementsByClassName(`nonDashboard`);
    for (let a = 0; a < elements.length; a++) {
        if (styleEditor == 'Dashboard' || subPath == 'border') {
            elements[a].style.display = 'none';
        }
        else {
            elements[a].style.display = '';
        }
    }
    const timeElements = document.getElementsByClassName(`timeFormat`);
    for (let a = 0; a < timeElements.length; a++) {
        if ((styleEditor == 'Queue' || styleEditor == 'Bubble') && subPath == 'time') {
            timeElements[a].style.display = '';
        }
        else {
            timeElements[a].style.display = 'none';
        }
    }

    // Styling labels
    let inputLabels = document.getElementsByClassName('tableLabel');
    for (let a = 0; a < inputLabels.length; a++) {
        inputLabels[a].style.fontSize = `${localStorage.getItem(`${fontStyle}FontSize`)}pt`;
        inputLabels[a].style.color = localStorage.getItem(`${fontStyle}Color`);
        inputLabels[a].style.fontFamily = localStorage.getItem(`${fontStyle}Font`);
        inputLabels[a].style.transition = `color ${localStorage.getItem(`${hoverPath}HoverTime`) / 1000}s `
                                    + `${localStorage.getItem(`${hoverPath}HoverType`)}, `
                                    + `font-size ${localStorage.getItem(`${hoverPath}HoverTime`) / 1000}s `
                                    + `${localStorage.getItem(`${hoverPath}HoverType`)}`;
    }

    // Setting the width of the input elements
    let inputElements = document.getElementsByClassName('tableInput');
    for (let a = 0; a < inputElements.length; a++) {
        if (subPath == 'border') {
            inputElements[a].style.width = `${localStorage.getItem(`${path}nameFontSize`) * 10}px`
        }
        else {
            inputElements[a].style.width = `${localStorage.getItem(`${fontStyle}FontSize`) * 10}px`
        }
    }

    // Filling the inputs with appropriate data and updating their listeners
    const corners = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'];
    const cornerNames = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
    for (let a in corners) {
        let inputElement = document.getElementById(`BorderRounding${corners[a]}`);
        inputElement.value = +localStorage.getItem(`${path}BorderRounding${cornerNames[a]}`);
        inputElement.oninput = function () {
            localStorage.setItem(`${path}BorderRounding${cornerNames[a]}`, inputElement.value);
            mainTable.style[`border${cornerNames[a]}Radius`] = `${inputElement.value}px`;
            document.body.offsetWidth;

            const tableSpacersLeft = document.getElementsByClassName('tableStyleSpacerLeft');
            const tableSpacersRight = document.getElementsByClassName('tableStyleSpacerRight');
            const tableThird = document.getElementsByClassName('tableStyleThird');
            for (let a = 0; a < tableSpacersLeft.length; a++) {
                tableSpacersLeft[a].style.width = `${Math.max(localStorage.getItem(`${path}BorderRoundingtopLeft`),
                                                              localStorage.getItem(`${path}BorderRoundingbottomLeft`))}px`;
            }
            for (let a = 0; a < tableSpacersRight.length; a++) {
                tableSpacersRight[a].style.width = `${Math.max(localStorage.getItem(`${path}BorderRoundingtopRight`),
                                                              localStorage.getItem(`${path}BorderRoundingbottomRight`))}px`;
            }
            for (let a = 0; a < tableThird.length; a++) {
                const freeSpace = tableThird[a].parentElement.offsetWidth
                                - Math.max(localStorage.getItem(`${path}BorderRoundingtopRight`),
                                           localStorage.getItem(`${path}BorderRoundingbottomLeft`))
                                - Math.max(localStorage.getItem(`${path}BorderRoundingtopLeft`),
                                           localStorage.getItem(`${path}BorderRoundingbottomRight`));
                tableThird[a].style.width = `${freeSpace / 3}px`;
            }

            // Stats
            localStorage.setItem(`dashboardStyleEdits`, +localStorage.getItem(`dashboardStyleEdits`) + 1);
            fillStats();
        }
    }
    const sides = ['Top', 'Bottom', 'Left', 'Right'];
    const sideNames = ['top', 'bottom', 'left', 'right'];
    for (let a in sides) {
        let inputColor = document.getElementById(`Border${sides[a]}Color`);
        inputColor.value = localStorage.getItem(`${path}Border${sideNames[a]}Color`);
        inputColor.oninput = function () {
            localStorage.setItem(`${path}Border${sideNames[a]}Color`, inputColor.value);
            dashboardTableBorder('button', localStorage.getItem('dashboardButtonSelected'), sides[a]);

            // Stats
            localStorage.setItem(`dashboardStyleEdits`, +localStorage.getItem(`dashboardStyleEdits`) + 1);
            fillStats();
        }

        let inputThickness = document.getElementById(`Border${sides[a]}Thickness`);
        inputThickness.value = localStorage.getItem(`${path}Border${sideNames[a]}Thickness`);
        inputThickness.oninput = function () {
            localStorage.setItem(`${path}Border${sideNames[a]}Thickness`, inputThickness.value);
            dashboardTableBorder('button', localStorage.getItem('dashboardButtonSelected'), sides[a]);

            // Stats
            localStorage.setItem(`dashboardStyleEdits`, +localStorage.getItem(`dashboardStyleEdits`) + 1);
            fillStats();
        }

        let inputStyle = document.getElementById(`Border${sides[a]}Style`);
        inputStyle.value = localStorage.getItem(`${path}Border${sideNames[a]}Style`);
        inputStyle.oninput = function () {
            localStorage.setItem(`${path}Border${sideNames[a]}Style`, inputStyle.value);
            dashboardTableBorder('button', localStorage.getItem('dashboardButtonSelected'), sides[a]);

            // Stats
            localStorage.setItem(`dashboardStyleEdits`, +localStorage.getItem(`dashboardStyleEdits`) + 1);
            fillStats();
        }
    }
    document.getElementById('tableStyleFont').value = localStorage.getItem(`${path}Font`);
    document.getElementById('tableStyleFont').oninput = function () {
        localStorage.setItem(`${path}Font`, document.getElementById('tableStyleFont').value);
        const tableLabels1 = document.getElementsByClassName(`tableLabel`);
        for (let a = 0; a < tableLabels1.length; a++) {
            tableLabels1[a].style.fontFamily = localStorage.getItem(`${path}Font`);
        }

        // Stats
        localStorage.setItem(`dashboardStyleEdits`, +localStorage.getItem(`dashboardStyleEdits`) + 1);
        fillStats();
    }

    document.getElementById('tableStyleColor').value = localStorage.getItem(`${fontStyle}Color`);
    document.getElementById('tableStyleColor').oninput = function () {
        localStorage.setItem(`${fontStyle}Color`, document.getElementById('tableStyleColor').value);
        const tableLabels2 = document.getElementsByClassName(`tableLabel`);
        for (let a = 0; a < tableLabels2.length; a++) {
            tableLabels2[a].style.color = localStorage.getItem(`${fontStyle}Color`);
        }

        // Stats
        localStorage.setItem(`dashboardStyleEdits`, +localStorage.getItem(`dashboardStyleEdits`) + 1);
        fillStats();
    }

    document.getElementById('tableStyleFontSize').value = localStorage.getItem(`${fontStyle}FontSize`);
    document.getElementById('tableStyleFontSize').oninput = function () {
        localStorage.setItem(`${fontStyle}FontSize`, document.getElementById('tableStyleFontSize').value);
        const tableLabels3 = document.getElementsByClassName(`tableLabel`);
        for (let a = 0; a < tableLabels3.length; a++) {
            tableLabels3[a].style.fontSize = `${localStorage.getItem(`${fontStyle}FontSize`)}pt`;
        }

        // Stats
        localStorage.setItem(`dashboardStyleEdits`, +localStorage.getItem(`dashboardStyleEdits`) + 1);
        fillStats();
    }

    if (subPath != 'border') {
        document.getElementById('tableBackgroundColor').oninput = function () {
            localStorage.setItem(`${fontStyle}BackgroundColor`, document.getElementById('tableBackgroundColor').value);
            mainTable.style.background = `${localStorage.getItem(`${fontStyle}BackgroundColor`)}`;

            // Stats
            localStorage.setItem(`dashboardStyleEdits`, +localStorage.getItem(`dashboardStyleEdits`) + 1);
            fillStats();
        }
        document.getElementById('tableBackgroundColor').value = localStorage.getItem(`${fontStyle}BackgroundColor`);
    }


    // Padding elements within tables
    document.body.offsetWidth;
    const tableSpacersLeft = document.getElementsByClassName('tableStyleSpacerLeft');
    const tableSpacersRight = document.getElementsByClassName('tableStyleSpacerRight');
    const tableThird = document.getElementsByClassName('tableStyleThird');
    for (let a = 0; a < tableSpacersLeft.length; a++) {
        tableSpacersLeft[a].style.transition = `width ${localStorage.getItem(`${hoverPath}HoverTime`) / 1000}s `
                                              + `${localStorage.getItem(`${hoverPath}HoverType`)}`;
        tableSpacersLeft[a].style.width = `${Math.max(localStorage.getItem(`${path}BorderRoundingtopLeft`),
                                                      localStorage.getItem(`${path}BorderRoundingbottomLeft`))}px`;
    }
    for (let a = 0; a < tableSpacersRight.length; a++) {
        tableSpacersRight[a].style.transition = `width ${localStorage.getItem(`${hoverPath}HoverTime`) / 1000}s `
                                              + `${localStorage.getItem(`${hoverPath}HoverType`)}`;
        tableSpacersRight[a].style.width = `${Math.max(localStorage.getItem(`${path}BorderRoundingtopRight`),
                                                       localStorage.getItem(`${path}BorderRoundingbottomRight`))}px`;
    }
    for (let a = 0; a < tableThird.length; a++) {
        tableThird[a].style.transition = `width ${localStorage.getItem(`${hoverPath}HoverTime`) / 1000}s ${localStorage.getItem(`${hoverPath}HoverType`)}`;
        const freeSpace = tableThird[a].parentElement.offsetWidth
                          - Math.max(localStorage.getItem(`${path}BorderRoundingtopRight`),
                                     localStorage.getItem(`${path}BorderRoundingbottomLeft`))
                          - Math.max(localStorage.getItem(`${path}BorderRoundingtopLeft`),
                                     localStorage.getItem(`${path}BorderRoundingbottomRight`));
        tableThird[a].style.width = `${freeSpace / 3}px`;
    }


    // Setting the height of the style settings page so the Save and refresh button will remain at the bottom of the page
    document.getElementById('styleTableDiv').style.height = `${window.innerHeight
                                                            - (document.getElementById('styleSelectionEditor').offsetHeight)
                                                            - (document.getElementById('queueConfigCell').offsetHeight * 3)
                                                            - (localStorage.getItem(`dashboardFontSize`) * 3)
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
}