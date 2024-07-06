function switchGroup(name) {
    for (let group in window.commands) {
        document.getElementById(group).style.display = "none";
        document.getElementById(group + 'Div').style.border = `${window.dashboardStyle.buttons.unselected.border.thickness}px ${window.dashboardStyle.buttons.unselected.border.style} ${window.dashboardStyle.buttons.unselected.border.color}`;
        document.getElementById(group + 'Div').style.borderSpacing = `${window.dashboardStyle.buttons.unselected.border.spacing}px`;
        document.getElementById(group + 'Div').style.backgroundColor = window.dashboardStyle.buttons.unselected.background;
        document.getElementById(group + 'Text').style.fontWeight = window.dashboardStyle.buttons.unselected.italic;
        document.getElementById(group + 'Text').style.fontStyle = window.dashboardStyle.buttons.unselected.bold;
        document.getElementById(group + 'Text').style.fontSize = `${window.dashboardStyle.buttons.unselected.size}pt`;
        document.getElementById(group + 'Text').style.color = window.dashboardStyle.buttons.unselected.text;
        document.getElementById(group + 'Text').style.fontFamily = window.dashboardStyle.buttons.unselected.font;
        document.getElementById(group + 'Div').addEventListener('mouseenter', () => {
            document.getElementById(group + 'Div').style.backgroundColor = window.dashboardStyle.buttons.unselected.hoverColor;
        });
        document.getElementById(group + 'Div').addEventListener('mouseleave', () => {
            document.getElementById(group + 'Div').style.backgroundColor = window.dashboardStyle.buttons.unselected.background;
        });
        document.getElementById(group + 'Div').style.transition = `background-color ${window.dashboardStyle.buttons.unselected.hoverTime}`;
    }
    document.getElementById(name).style.display = "";
    document.getElementById(name + 'Div').style.border = `${window.dashboardStyle.buttons.selected.border.thickness}px ${window.dashboardStyle.buttons.selected.border.style} ${window.dashboardStyle.buttons.selected.border.color}`
    document.getElementById(name + 'Div').style.borderSpacing = `${window.dashboardStyle.buttons.selected.border.spacing}px`;
    document.getElementById(name + 'Div').style.backgroundColor = window.dashboardStyle.buttons.selected.background;
    document.getElementById(name + 'Text').style.fontWeight = window.dashboardStyle.buttons.selected.italic;
    document.getElementById(name + 'Text').style.fontStyle = window.dashboardStyle.buttons.selected.bold;
    document.getElementById(name + 'Text').style.fontSize = `${window.dashboardStyle.buttons.selected.size}pt`;
    document.getElementById(name + 'Text').style.color = window.dashboardStyle.buttons.selected.text;
    document.getElementById(name + 'Text').style.fontFamily = window.dashboardStyle.buttons.selected.font;
    document.getElementById(name + 'Div').addEventListener('mouseenter', () => {
        document.getElementById(name + 'Div').style.backgroundColor = window.dashboardStyle.buttons.selected.hoverColor;
    });
    document.getElementById(name + 'Div').addEventListener('mouseleave', () => {
        document.getElementById(name + 'Div').style.backgroundColor = window.dashboardStyle.buttons.selected.background;
    });
    document.getElementById(name + 'Div').style.transition = `background-color ${window.dashboardStyle.buttons.selected.hoverTime}`;

    document.getElementById('groupActionButton').onclick = function () {
        clearGroup(name);
    };
}