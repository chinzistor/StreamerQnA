function createGroups() {
    const groups = document.getElementById("questionTableBody");
    const buttons = document.getElementById("cathegoryButtons");
    document.body.style.backgroundColor = window.dashboardStyle.background;
    let index = 0;
    let num = 0;
    for (let group in window.commands) {
        num = num + 1;
    }
    for (let group in window.commands) {
        const buttonDiv = document.createElement('td');
        buttonDiv.id = group + 'Button';
        buttonDiv.onclick = function () {
            switchGroup(group);
        };
        buttonDiv.style.cursor = 'pointer';
        buttonDiv.style.width = `${100 / num}%`;
        buttonDiv.style.margin = '0px';
        const buttonText = document.createElement('p');
        buttonText.textContent = group;
        let styleDict = '';
        if (index === 0) {
            styleDict = window.dashboardStyle.buttons.selected;
        }
        else {
            styleDict = window.dashboardStyle.buttons.unselected;
        }
        buttonDiv.style.border = `${styleDict.border.thickness} ${styleDict.border.style} ${styleDict.border.color}`;
        buttonDiv.style.backgroundColor = `${styleDict.background}`;
        buttonDiv.addEventListener('mouseenter', () => {
            buttonDiv.style.backgroundColor = styleDict.hoverColor;
        });
        buttonDiv.addEventListener('mouseleave', () => {
            buttonDiv.style.backgroundColor = styleDict.background;
        });
        buttonDiv.style.transition = `background-color ${styleDict.hoverTime}`;
        buttonText.style.fontWeight = styleDict.italic;
        buttonText.style.fontStyle = styleDict.bold;
        buttonText.style.fontSize = `${styleDict.size}pt`;
        buttonText.style.color = styleDict.text;
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
        index = index + 1;
    }
    readData();
}