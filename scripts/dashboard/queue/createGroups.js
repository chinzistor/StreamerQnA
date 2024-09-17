// Handling command groups on the dashboard
function createGroups() {
    // Getting HTML elements based on ID to edit them
    const groups = document.getElementById("questionTableBody");
    const table = document.getElementById("buttonsTable");
    const buttons = document.getElementById("cathegoryButtons");
    const groupButtons = document.getElementById("groups");
    const groupActions = document.getElementById("groupActions");

    // Resetting the queue in the dashboard
    groups.innerHTML = '';
    buttons.innerHTML = '';

    // Counting groups
    let index = 0;
    let num = localStorage.getItem('commandAmount');
    table.style.borderSpacing = `${localStorage.getItem('dashboardButtonsBorderSpacing')}px`;
    table.style.borderCollapse = 'separate';
    let groupNames = localStorage.getItem('commands').split('%-%');
    let counter = 0;
    let tableRow;
    let multiRow = 1;
    if (groupNames.length > 3) {
        multiRow = 2;
    }
    // Reading the last opened queue
    let lastOpenGroup = localStorage.getItem('openGroup');
    for (let a in groupNames) {
        // Creating a new line for every new 3 command groups
        if (counter == 0) {
            tableRow = document.createElement('tr');
            buttons.appendChild(tableRow);
        }
        counter++;
        if (counter > 2) {
            counter = 0;
        }
        let groupRaw = groupNames[a];
        // Removing spaces from group names for id purposes
        let group = groupRaw.replace(" ", "");
        // Saving the first group as open if it wasn't set
        if (lastOpenGroup == null) {
            lastOpenGroup = group;
            localStorage.setItem('openGroup', group);
        }
        // Creating a button for each group
        const buttonDiv = document.createElement('td');
        buttonDiv.id = group + 'ConfigCell';
        // Adding onclick function
        buttonDiv.onclick = function () {
            switchGroup(group);
        };
        buttonDiv.style.cursor = 'pointer';
        // Dinamicaly setting the width of the button based on how many groups there are
        buttonDiv.style.width = `33.3%`;
        buttonDiv.style.margin = '0px';
        // Adding the group name to the button
        const buttonText = document.createElement('p');
        buttonText.id = group + 'ConfigText';
        buttonDiv.appendChild(buttonText);
        tableRow.appendChild(buttonDiv);
        buttonText.textContent = groupRaw;
        // Selecting the styling of the button based on which group it is
        // On (re)loading the last opened queue get selected
        let styleDict = '';
        if (lastOpenGroup == group) {
            styleButton(group, 'selected', true);
        }
        else {
            styleButton(group, 'unselected', true);
        }

        groupButtons.style.height = `${buttonDiv.offsetHeight * multiRow}px`;



        const groupDiv = document.createElement('div');
        groupDiv.id = group;
        // Hiding the not selected queues
        if (lastOpenGroup != group) {
            groupDiv.style.display = 'none';
        }
        groups.appendChild(groupDiv);

        // Styling the clear queue button when the group in loop matches the last opened queue
        if (group == lastOpenGroup) {
            const clearGroupButton = document.getElementById("clearQueueConfigCell");
            // Adding onclick function so it can clear the selected queue
            clearGroupButton.onclick = function () {
                clearGroup(group);
            };
            // Styling the box
            styleButton('clearQueue', 'selected', true);
        }

        index = index + 1;
    }



    // Making the queue scrollable without moving the buttons out of screen
    groups.style.maxHeight = `${window.innerHeight
                             - (document.getElementById('queueConfigCell').offsetHeight * 3)
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


    readData();
}