// Switching groups in the dashboard
function switchGroup(name) {
    for (let group in window.commands) {
        // Hiding all groups
        document.getElementById(group).style.display = "none";
        // Setting all buttons to the unselected state
        document.getElementById(group + 'Div').style.borderTop = `${window.dashboardStyle.buttons.unselected.border.top.thickness}px ${window.dashboardStyle.buttons.unselected.border.top.style} ${window.dashboardStyle.buttons.unselected.border.top.color}`;
        document.getElementById(group + 'Div').style.borderBottom = `${window.dashboardStyle.buttons.unselected.border.bottom.thickness}px ${window.dashboardStyle.buttons.unselected.border.bottom.style} ${window.dashboardStyle.buttons.unselected.border.bottom.color}`;
        document.getElementById(group + 'Div').style.borderLeft = `${window.dashboardStyle.buttons.unselected.border.left.thickness}px ${window.dashboardStyle.buttons.unselected.border.left.style} ${window.dashboardStyle.buttons.unselected.border.left.color}`;
        document.getElementById(group + 'Div').style.borderRight = `${window.dashboardStyle.buttons.unselected.border.right.thickness}px ${window.dashboardStyle.buttons.unselected.border.right.style} ${window.dashboardStyle.buttons.unselected.border.right.color}`;
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
    // Showing the specific group
    document.getElementById(name).style.display = "";
    // Setting the specific button to the selected state
    document.getElementById(name + 'Div').style.borderTop = `${window.dashboardStyle.buttons.selected.border.top.thickness}px ${window.dashboardStyle.buttons.selected.border.top.style} ${window.dashboardStyle.buttons.selected.border.top.color}`
    document.getElementById(name + 'Div').style.borderBottom = `${window.dashboardStyle.buttons.selected.border.bottom.thickness}px ${window.dashboardStyle.buttons.selected.border.bottom.style} ${window.dashboardStyle.buttons.selected.border.bottom.color}`
    document.getElementById(name + 'Div').style.borderLeft = `${window.dashboardStyle.buttons.selected.border.left.thickness}px ${window.dashboardStyle.buttons.selected.border.left.style} ${window.dashboardStyle.buttons.selected.border.left.color}`
    document.getElementById(name + 'Div').style.borderRight = `${window.dashboardStyle.buttons.selected.border.right.thickness}px ${window.dashboardStyle.buttons.selected.border.right.style} ${window.dashboardStyle.buttons.selected.border.right.color}`
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

    // Setting the clear group queue button's onclick function
    document.getElementById('groupActionButton').onclick = function () {
        clearGroup(name);
    };
}