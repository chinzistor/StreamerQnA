// Clearing the group's queue on the dashboard
function clearGroup(group) {
    let list = [];
    for (let a = 0; a < localStorage.length; a++) {
        const key = localStorage.key(a);
        if (key.startsWith(`recorded${group}`)) {
            // Checking if the deleted queue contains the shown message
            if (localStorage.getItem('bubbleData') == key) {
                localStorage.setItem('bubbleData', '-none-');
            }
            // Removing the HTML element based on ID
            document.getElementById(key.replace('recorded', '')).remove();
            // Listing all questions that need to be removed from the localStorage
            list.push(key);
        }
    }
    // Removing all listed data from localStorage
    for (let a = 0; a < list.length; a++) {
        localStorage.removeItem(list[a]);
    }

    // Stats
    localStorage.setItem(`bubbleTotalDeleted`, +localStorage.getItem(`bubbleTotalDeleted`) + list.length);
    fillStats();
}