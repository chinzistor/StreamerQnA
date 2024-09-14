function styleEditorCreator() {
    // Dynamic path to get values from localStorage
    let styleEditor = localStorage.getItem('styleSelection');
    let path = '';
    let subPath = '';
    let formatPath = '';

    switch(styleEditor) {
        case 'Dashboard':
            path = 'dashboardTable';
            break;
        case 'Buttons':
            subPath = localStorage.getItem('dashboardButtonSelected');
            path = `dashboardButtons${subPath}`;
            break;
        case 'Queue':
            subPath = localStorage.getItem('dashboardQueueSection');
            if (subPath == 'border') {
                path = `dashboardQueue${localStorage.getItem('dashboardQueueSelected')}`;
            }
            else {
                path = `dashboardQueue${localStorage.getItem('dashboardQueueSelected')}${subPath}`;
            }
            formatPath = 'dashboardtimeFormat';
            break;
        case 'Bubble':
            subPath = localStorage.getItem('dashboardBubbleSelected');
            if (subPath == 'border') {
                path = `bubble`;
            }
            else {
                path = `bubble${subPath}`;
            }
            formatPath = 'bubbletimeFormat';
            break;
    }


    const mainTable = document.getElementById('styleTable');
    let horizontalId, horizontalName, verticalId, verticalName;
    // Getting the main table body to create the interface for style configuration
    const mainBody = document.getElementById('styleTableBody');
    for (let a = 0; a < 15; a++) {
        const tableRow = document.createElement('tr');
        tableRow.classList.add(`tableButtonRow${path}`);
        mainBody.appendChild(tableRow);
        for (let b = 0; b < 5; b++) {
            const tableCell = document.createElement('td');
            tableRow.appendChild(tableCell);

            if (b == 0) {
                tableCell.classList.add('tableStyleSpacerLeft');
            }
            else if (b == 4) {
                tableCell.classList.add('tableStyleSpacerRight');
            }
            else {
                tableCell.classList.add('tableStyleThird');
            }

            switch(a) {
                case 0:
                case 1:
                case 2:
                    horizontalId = 'Top';
                    horizontalName = 'top';
                    break;
                case 12:
                case 13:
                case 14:
                    horizontalId = 'Bottom';
                    horizontalName = 'bottom';
                    break;
            }
            switch(b) {
                case 1:
                    verticalId = 'Left';
                    verticalName = 'left';
                    break;
                case 3:
                    verticalId = 'Right';
                    verticalName = 'right';
                    break;
            }


            switch(a) {
                case 3:
                case 11:
                    const horizontalSpacer = document.createElement('hr');
                    tableCell.appendChild(horizontalSpacer);
                    horizontalSpacer.classList.add(`tableButtonLabel`);
                    horizontalSpacer.style.width = '100%';
                    horizontalSpacer.style.height = '0px';
                    horizontalSpacer.style.border = `1px solid ${localStorage.getItem(`${path}Color`)}`
                    horizontalSpacer.style.transition = `color ${localStorage.getItem(`${path}HoverTime`) / 1000}s `
                                                      + `${localStorage.getItem(`${path}HoverType`)}`;
                    break;
            }

            let inputLabel = document.createElement('label');
            let inputElement;
            switch(b) {
                case 1:
                case 3:
                    switch(a) {
                        case 0:
                        case 14:
                            let elementId1 = `${horizontalId}${verticalId}`;
                            let elementName1 = `${horizontalName}${verticalId}`;
                            let side = verticalId;
                            inputLabel.setAttribute('for', `BorderRounding${elementId1}Input`);
                            inputLabel.textContent = `${horizontalId} ${verticalName} rounding `;
                            inputLabel.classList.add(`tableLabel`);

                            inputElement = document.createElement('input');
                            inputElement.id = `BorderRounding${elementId1}`;
                            inputElement.setAttribute('name', `BorderRounding${elementId1}Input`);
                            inputElement.setAttribute('type', 'number');
                            inputElement.setAttribute('min', '0');
                            inputElement.addEventListener('input', () => {
                                localStorage.setItem(`${path}BorderRounding${elementName1}`, inputElement.value);
                                mainTable.style[`border${elementId1}Radius`] = `${inputElement.value}px`;
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
                            });
                            inputElement.value = +localStorage.getItem(`${path}BorderRounding${elementName1}`);
                            break;

                        case 5:
                            let elementId2 = `${verticalId}`;
                            let elementName2 = `${verticalName}`;
                            inputLabel.setAttribute('for', `Border${elementId2}ColorInput`);
                            inputLabel.textContent = `${elementId2} color `;

                            inputElement = document.createElement('input');
                            inputElement.id = `Border${elementId2}Color`;
                            inputElement.setAttribute('name', `Border${elementId2}ColorInput`);
                            inputElement.setAttribute('type', 'color');
                            inputElement.addEventListener('input', () => {
                                localStorage.setItem(`${path}Border${elementName2}Color`, inputElement.value);
                                dashboardTableBorder('button', localStorage.getItem('dashboardButtonSelected'), elementName2);

                                // Stats
                                localStorage.setItem(`dashboardStyleEdits`, +localStorage.getItem(`dashboardStyleEdits`) + 1);
                                fillStats();
                            });
                            inputElement.value = localStorage.getItem(`${path}Border${elementName2}Color`);
                            break;

                        case 6:
                            let elementId3 = `${verticalId}`;
                            let elementName3 = `${verticalName}`;
                            inputLabel.setAttribute('for', `Border${elementId3}ThicknessInput`);
                            inputLabel.textContent = `${elementId3} thickness `;

                            inputElement = document.createElement('input');
                            inputElement.id = `Border${elementId3}Thickness`;
                            inputElement.setAttribute('name', `Border${elementId3}ThicknessInput`);
                            inputElement.setAttribute('type', 'number');
                            inputElement.setAttribute('min', '0');
                            inputElement.addEventListener('input', () => {
                                localStorage.setItem(`${path}Border${elementName3}Thickness`, inputElement.value);
                                dashboardTableBorder('button', localStorage.getItem('dashboardButtonSelected'), elementName3);

                                // Stats
                                localStorage.setItem(`dashboardStyleEdits`, +localStorage.getItem(`dashboardStyleEdits`) + 1);
                                fillStats();
                            });
                            inputElement.value = localStorage.getItem(`${path}Border${elementName3}Thickness`);
                            break;

                        case 7:
                            let elementId4 = `${verticalId}`;
                            let elementName4 = `${verticalName}`;
                            inputLabel.setAttribute('for', `Border${elementId4}StyleInput`);
                            inputLabel.textContent = `${elementId4} style `;

                            inputElement = document.createElement('select');
                            inputElement.id = `Border${elementId4}Style`;
                            inputElement.setAttribute('name', `Border${elementId4}StyleInput`);
                            let styles = ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none'];
                            for (let c in styles) {
                                const inputOption = document.createElement('option');
                                inputOption.value = styles[c];
                                inputOption.text = styles[c];
                                inputElement.appendChild(inputOption);
                            }
                            inputElement.addEventListener('input', () => {
                                localStorage.setItem(`${path}Border${elementName4}Style`, inputElement.value);
                                dashboardTableBorder('button', localStorage.getItem('dashboardButtonSelected'), elementName4);

                                // Stats
                                localStorage.setItem(`dashboardStyleEdits`, +localStorage.getItem(`dashboardStyleEdits`) + 1);
                                fillStats();
                            });
                            inputElement.value = localStorage.getItem(`${path}Border${elementName4}Style`);
                            break;
                    }
                    break;
                case 2:
                    switch(a) {
                        case 0:
                        case 12:
                            let elementId1 = `${horizontalId}`;
                            let elementName1 = `${horizontalName}`;
                            inputLabel.setAttribute('for', `Border${elementId1}ColorInput`);
                            inputLabel.textContent = `${elementId1} color `;

                            inputElement = document.createElement('input');
                            inputElement.id = `Border${elementId1}Color`;
                            inputElement.setAttribute('name', `Border${elementId1}ColorInput`);
                            inputElement.setAttribute('type', 'color');
                            inputElement.addEventListener('input', () => {
                                localStorage.setItem(`${path}Border${elementName1}Color`, inputElement.value);
                                dashboardTableBorder('button', localStorage.getItem('dashboardButtonSelected'), elementName1);

                                // Stats
                                localStorage.setItem(`dashboardStyleEdits`, +localStorage.getItem(`dashboardStyleEdits`) + 1);
                                fillStats();
                            });
                            inputElement.value = localStorage.getItem(`${path}Border${elementName1}Color`);
                            break;
                        case 1:
                        case 13:
                            let elementId2 = `${horizontalId}`;
                            let elementName2 = `${horizontalName}`;
                            inputLabel.setAttribute('for', `Border${elementId2}ThicknessInput`);
                            inputLabel.textContent = `${elementId2} thickness `;

                            inputElement = document.createElement('input');
                            inputElement.id = `Border${elementId2}Thickness`;
                            inputElement.setAttribute('name', `Border${elementId2}ThicknessInput`);
                            inputElement.setAttribute('type', 'number');
                            inputElement.setAttribute('min', '0');
                            inputElement.addEventListener('input', () => {
                                localStorage.setItem(`${path}Border${elementName2}Thickness`, inputElement.value);
                                dashboardTableBorder('button', localStorage.getItem('dashboardButtonSelected'), elementName2);

                                // Stats
                                localStorage.setItem(`dashboardStyleEdits`, +localStorage.getItem(`dashboardStyleEdits`) + 1);
                                fillStats();
                            });
                            inputElement.value = localStorage.getItem(`${path}Border${elementName2}Thickness`);
                            break;
                        case 2:
                        case 14:
                            let elementId3 = `${horizontalId}`;
                            let elementName3 = `${horizontalName}`;
                            inputLabel.setAttribute('for', `Border${elementId3}StyleInput`);
                            inputLabel.textContent = `${elementId3} style `;

                            inputElement = document.createElement('select');
                            inputElement.id = `Border${elementId3}Style`;
                            inputElement.setAttribute('name', `Border${elementId3}StyleInput`);
                            let styles = ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none'];
                            for (let c in styles) {
                                const inputOption = document.createElement('option');
                                inputOption.value = styles[c];
                                inputOption.text = styles[c];
                                inputElement.appendChild(inputOption);
                            }
                            inputElement.addEventListener('input', () => {
                                localStorage.setItem(`${path}Border${elementName3}Style`, inputElement.value);
                                dashboardTableBorder('button', localStorage.getItem('dashboardButtonSelected'), elementName3);

                                // Stats
                                localStorage.setItem(`dashboardStyleEdits`, +localStorage.getItem(`dashboardStyleEdits`) + 1);
                                fillStats();
                            });
                            inputElement.value = localStorage.getItem(`${path}Border${elementName3}Style`);
                            break;


                        case 4:
                            inputLabel.classList.add('nonDashboard');
                            inputLabel.setAttribute('for', `FontInput`);
                            inputLabel.textContent = `Text font `;

                            inputElement = document.createElement('input');
                            inputElement.id = `tableStyleFont`;
                            inputElement.classList.add('nonDashboard');
                            inputElement.setAttribute('name', `FontInput`);
                            inputElement.setAttribute('type', 'text');
                            inputElement.addEventListener('input', () => {
                                localStorage.setItem(`${path}Font`, inputElement.value);
                                const tableLabels1 = document.getElementsByClassName(`tableLabel`);
                                for (let a = 0; a < tableLabels1.length; a++) {
                                    tableLabels1[a].style.fontFamily = localStorage.getItem(`${path}Font`);
                                }

                                // Stats
                                localStorage.setItem(`dashboardStyleEdits`, +localStorage.getItem(`dashboardStyleEdits`) + 1);
                                fillStats();
                            });
                            inputElement.value = localStorage.getItem(`${path}Font`);
                            break;

                        case 5:
                            inputLabel.classList.add('nonDashboard');
                            inputLabel.setAttribute('for', `ColorInput`);
                            inputLabel.textContent = `Text color `;

                            inputElement = document.createElement('input');
                            inputElement.id = `tableStyleColor`;
                            inputElement.classList.add('nonDashboard');
                            inputElement.setAttribute('name', `ColorInput`);
                            inputElement.setAttribute('type', 'color');
                            inputElement.addEventListener('input', () => {
                                localStorage.setItem(`${path}Color`, inputElement.value);
                                const tableLabels2 = document.getElementsByClassName(`tableLabel`);
                                for (let a = 0; a < tableLabels2.length; a++) {
                                    tableLabels2[a].style.color = localStorage.getItem(`${path}Color`);
                                }

                                // Stats
                                localStorage.setItem(`dashboardStyleEdits`, +localStorage.getItem(`dashboardStyleEdits`) + 1);
                                fillStats();
                            });
                            inputElement.value = localStorage.getItem(`${path}Color`);
                            break;

                        case 6:
                            inputLabel.classList.add('nonDashboard');
                            inputLabel.setAttribute('for', `FontSizeInput`);
                            inputLabel.textContent = `Text size `;

                            inputElement = document.createElement('input');
                            inputElement.id = `tableStyleFontSize`;
                            inputElement.classList.add('nonDashboard');
                            inputElement.setAttribute('name', `FontSizeInput`);
                            inputElement.setAttribute('type', 'number');
                            inputElement.setAttribute('min', '0');
                            inputElement.addEventListener('input', () => {
                                localStorage.setItem(`${path}FontSize`, inputElement.value);
                                const tableLabels3 = document.getElementsByClassName(`tableLabel`);
                                for (let a = 0; a < tableLabels3.length; a++) {
                                    tableLabels3[a].style.fontSize = `${localStorage.getItem(`${path}FontSize`)}pt`;
                                }

                                // Stats
                                localStorage.setItem(`dashboardStyleEdits`, +localStorage.getItem(`dashboardStyleEdits`) + 1);
                                fillStats();
                            });
                            inputElement.value = localStorage.getItem(`${path}FontSize`);
                            break;

                        case 7:
                            inputLabel.setAttribute('for', `BackgroundColorInput`);
                            inputLabel.classList.add('nonDashboard');
                            inputLabel.textContent = `Background color `;

                            inputElement = document.createElement('input');
                            inputElement.classList.add('nonDashboard');
                            inputElement.id = `tableBackgroundColor`;
                            inputElement.setAttribute('name', `BackgroundColorInput`);
                            inputElement.setAttribute('type', 'color');
                            if (subPath != 'border') {
                                inputElement.addEventListener('change', () => {
                                    localStorage.setItem(`${path}BackgroundColor`, inputElement.value);
                                    mainTable.style.background = `${localStorage.getItem(`${path}BackgroundColor`)}`;

                                    // Stats
                                    localStorage.setItem(`dashboardStyleEdits`, +localStorage.getItem(`dashboardStyleEdits`) + 1);
                                    fillStats();
                                });
                                inputElement.value = localStorage.getItem(`${path}BackgroundColor`);

                            }
                            break;

                        case 8:
                            inputLabel.classList.add('timeFormat');
                            inputLabel.setAttribute('for', `timeFormatInput`);
                            inputLabel.textContent = `Time format `;

                            inputElement = document.createElement('input');
                            inputElement.id = `tableTimeFormat`;
                            inputElement.classList.add('timeFormat');
                            inputElement.setAttribute('name', `timeFormatInput`);
                            inputElement.setAttribute('type', 'text');
                            inputElement.addEventListener('input', () => {
                                localStorage.setItem(`${formatPath}`, inputElement.value);
                                const tableLabels1 = document.getElementsByClassName(`tableLabel`);
                                for (let a = 0; a < tableLabels1.length; a++) {
                                    tableLabels1[a].style.fontFamily = localStorage.getItem(`${formatPath}`);
                                }

                                // Stats
                                localStorage.setItem(`dashboardStyleEdits`, +localStorage.getItem(`dashboardStyleEdits`) + 1);
                                fillStats();
                            });
                            inputElement.value = localStorage.getItem(`${formatPath}`);
                            break;
                    }
                    break;
            }


            if (inputElement) {
                inputLabel.style.lineHeight = 0;
                inputLabel.classList.add(`tableLabel`);
                inputElement.classList.add(`tableInput`);

                tableCell.appendChild(inputLabel);
                tableCell.appendChild(inputElement);
            }
        }
    }

    updateTableStyle();
}