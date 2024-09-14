function switchConfigPage(name) {
    let groups = ['bot', 'commands', 'style'];
    for (a = 0; a < groups.length; a++) {
        document.getElementById(`${groups[a]}ConfigPage`).style.display = 'none';

        // Editing the button
        styleButton(groups[a], 'unselected');
    }

    document.getElementById(`${name}ConfigPage`).style.display = '';

    // Editting the selected button
    styleButton(name, 'selected');

    localStorage.setItem('configActivePage', name);
}