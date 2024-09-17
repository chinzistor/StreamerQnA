// Switching groups in the dashboard
function switchGroup(name) {
    let groupNames = localStorage.getItem('commands').split('%-%');
    for (let a = 0; a < groupNames.length; a++) {
        // Removing spaces from group names for id purposes
        let group = groupNames[a].replace(" ", "");
        styleButton(group, 'unselected', true);
        // Hiding all groups
        document.getElementById(group).style.display = "none";
    }
    styleButton(name, 'selected', true);
    // Showing the specific group
    document.getElementById(name).style.display = "";

    // Setting the clear group queue button's onclick function
    document.getElementById('clearQueueConfigCell').onclick = function () {
        clearGroup(name);
    };
    // Saving the last opened queue into localStorage
    localStorage.setItem('openGroup', name);
}