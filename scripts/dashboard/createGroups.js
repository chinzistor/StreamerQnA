// Handling command groups on the dashboard
function createGroups() {
    // Getting HTML elements based on ID to edit them
    const groups = document.getElementById("questionTableBody");
    const table = document.getElementById("buttonsTable");
    const buttons = document.getElementById("cathegoryButtons");
    const groupButtons = document.getElementById("groups");
    const groupActions = document.getElementById("groupActions");

    // Coloring the background of the dashboard
    document.body.style.backgroundColor = window.dashboardStyle.background;
    let index = 0;
    // Counting groups
    let num = 0;
    for (let group in window.commands) {
        num++;
    }
    table.style.borderSpacing = `${window.dashboardStyle.buttons.borderSpacing}px`;
    table.style.borderCollapse = 'separate';
    for (let group in window.commands) {
        // Creating a button for each group
        const buttonDiv = document.createElement('td');
        buttonDiv.id = group + 'Button';
        // Adding onclick function
        buttonDiv.onclick = function () {
            switchGroup(group);
        };
        buttonDiv.style.cursor = 'pointer';
        // Dinamicaly setting the width of the button based on how many groups there are
        buttonDiv.style.width = `${100 / num}%`;
        buttonDiv.style.margin = '0px';
        // Adding the group name to the button
        const buttonText = document.createElement('p');
        buttonText.textContent = group;
        // Selecting the styling of the button based on which group it is
        // On (re)loading the first group gets selected
        let styleDict = '';
        if (index === 0) {
            styleDict = window.dashboardStyle.buttons.selected;
        }
        else {
            styleDict = window.dashboardStyle.buttons.unselected;
        }
        // Styling the buttons
        buttonDiv.style.border = `${styleDict.border.thickness}px ${styleDict.border.style} ${styleDict.border.color}`;
        buttonDiv.style.backgroundColor = styleDict.background;
        buttonDiv.style.borderRadius = `${styleDict.border.rounding}px`;
        buttonDiv.addEventListener('mouseenter', () => {
            buttonDiv.style.backgroundColor = styleDict.hoverColor;
        });
        buttonDiv.addEventListener('mouseleave', () => {
            buttonDiv.style.backgroundColor = styleDict.background;
        });
        buttonDiv.style.transition = `background-color ${styleDict.hoverTime}s`;
        buttonText.style.fontWeight = styleDict.italic;
        buttonText.style.fontStyle = styleDict.bold;
        buttonText.style.fontSize = `${styleDict.size}pt`;
        buttonText.style.color = styleDict.color;
        buttonText.style.fontFamily = styleDict.font;
        buttonText.style.lineHeight = 0;

        buttonText.id = group + 'Text';
        buttonDiv.appendChild(buttonText);
        buttonDiv.id = group + 'Div';
        buttons.appendChild(buttonDiv);


        const groupDiv = document.createElement('div');
        groupDiv.id = group;
        if (index > 0) {
            groupDiv.style.display = 'none';
        }
        groups.appendChild(groupDiv);

        if (index == 0) {
            // Styling the clear queue button
            const clearGroupButton = document.getElementById("groupActionButton");
            // Adding onclick function
            clearGroupButton.onclick = function () {
                clearGroup(group);
            };
            // Styling the box
            clearGroupButton.style.border = `${window.dashboardStyle.buttons.selected.border.thickness}px ${window.dashboardStyle.buttons.selected.border.style} ${window.dashboardStyle.buttons.selected.border.color}`;
            clearGroupButton.style.backgroundColor = window.dashboardStyle.buttons.selected.background;
            clearGroupButton.style.borderRadius = `${window.dashboardStyle.buttons.selected.border.rounding}px`;
            clearGroupButton.addEventListener('mouseenter', () => {
                clearGroupButton.style.backgroundColor = window.dashboardStyle.buttons.selected.hoverColor;
            });
            clearGroupButton.addEventListener('mouseleave', () => {
                clearGroupButton.style.backgroundColor = window.dashboardStyle.buttons.selected.background;
            });
            clearGroupButton.style.transition = `background-color ${window.dashboardStyle.buttons.selected.hoverTime}s`;

            // Styling the text
            const clearGroupText = document.getElementById("groupActionText");
            clearGroupText.style.fontWeight = window.dashboardStyle.buttons.selected.italic;
            clearGroupText.style.fontStyle = window.dashboardStyle.buttons.selected.bold;
            clearGroupText.style.fontSize = `${window.dashboardStyle.buttons.selected.size}pt`;
            clearGroupText.style.color = window.dashboardStyle.buttons.selected.color;
            clearGroupText.style.fontFamily = window.dashboardStyle.buttons.selected.font;
            clearGroupText.style.lineHeight = 0;
        }

        index = index + 1;
    }



    // Making the queue scrollable without moving the buttons out of screen
    groups.style.maxHeight = `calc(100vh - ${groupButtons.getBoundingClientRect().height * 2}px - ${groupActions.getBoundingClientRect().height }px)`;

    // Styling the scrollbar
    const scrollbar = document.createElement('style');
    scrollbar.innerHTML = `
        ::-webkit-scrollbar {
            width: ${window.dashboardStyle.buttons.unselected.border.rounding + 4}px;
        }
        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 ${window.dashboardStyle.buttons.unselected.border.rounding}px ${window.dashboardStyle.buttons.unselected.border.thickness}px ${window.dashboardStyle.buttons.unselected.background};
            border-radius: ${window.dashboardStyle.buttons.unselected.border.rounding / 2}px;
            border: ${window.dashboardStyle.buttons.unselected.border.thickness}px ${window.dashboardStyle.buttons.unselected.border.style};
            border-color: ${window.dashboardStyle.buttons.unselected.border.color};
        }
        ::-webkit-scrollbar-thumb {
            background: ${window.dashboardStyle.buttons.unselected.border.color};
            border-radius: ${window.dashboardStyle.buttons.unselected.border.rounding / 2}px;
        }`
    document.head.appendChild(scrollbar);

    readData();
}