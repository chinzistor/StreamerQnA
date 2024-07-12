// Hiding bubble
function hideBubble(id, group) {
    const textIds = ['name', 'time', 'question'];
    const tableIds = ['nameCell', 'timeCell', 'questionCell'];
    // Making sure all parts of the queue item are reset
    for (let a = 0; a < textIds.length; a++) {
        // Styling text
        let textElement = document.getElementById(`${textIds[a]}${group}${id}`);
        if (textElement) {
            textElement.style.fontFamily = window.dashboardStyle.queue.unselected[textIds[a]].font;
            textElement.style.fontStyle = window.dashboardStyle.queue.unselected[textIds[a]].italic;
            textElement.style.fontWeight = window.dashboardStyle.queue.unselected[textIds[a]].bold;
            textElement.style.size = window.dashboardStyle.queue.unselected[textIds[a]].size;
            textElement.style.color = window.dashboardStyle.queue.unselected[textIds[a]].color;
        }
    }
    for (let a = 0; a < tableIds.length; a++) {
        // Styling box
        let tableElement = document.getElementById(`${tableIds[a]}${group}${id}`);
        if (tableElement) {
            tableElement.style.backgroundColor = window.dashboardStyle.queue.unselected[textIds[a]].background;
        }
    }
    // Setting show/hide image to show
    document.getElementById(`show${group}${id}`).src = 'assets/show.png';
    document.getElementById(`show${group}${id}`).alt = 'Show this message on stream.';
    // Setting show/hide onclick function to show
    document.getElementById(`show${group}${id}`).onclick = function () {
        showBubble(id, group);
    }
    // Setting the showed item in localStorage to none, so the bubble hides itself
    localStorage.setItem('bubbleData', '-none-');
    //console.log(localStorage.getItem('bubbleData'));
}