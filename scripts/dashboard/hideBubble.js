function hideBubble(id, group) {
    const textIds = ['name', 'time', 'question'];
    const tableIds = ['nameCell', 'timeCell', 'questionCell'];
    for (let a = 0; a < textIds.length; a++) {
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
        let tableElement = document.getElementById(`${tableIds[a]}${group}${id}`);
        if (tableElement) {
            tableElement.style.backgroundColor = window.dashboardStyle.queue.unselected[textIds[a]].background;
        }
    }
    document.getElementById(`show${group}${id}`).src = 'assets/show.png';
    document.getElementById(`show${group}${id}`).alt = 'Show this message on stream.';
    document.getElementById(`show${group}${id}`).onclick = function () {
        showBubble(id, group);
    }
    localStorage.setItem('bubbleData', '-none-');
    //console.log(localStorage.getItem('bubbleData'));
}