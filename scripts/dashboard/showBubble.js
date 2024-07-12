// Showing question in bubble
function showBubble(id, groupOriginal) {
    // Resetting all queues' items to the hidden state
    const textIds = ['name', 'time', 'question'];
    const tableIds = ['nameCell', 'timeCell', 'questionCell'];
    // Making sure all parts of the queue item are reset
    for (let group in window.commands) {
        for (let index = 0; index < window.id; index++) {
            const element = document.getElementById(`show${group}${index}`)
            if (element) {
                // Setting show/hide image to show
                element.src = 'assets/show.png';
                element.alt = 'Show this message on stream.';
                // Setting show/hide onclick function to show
                element.onclick = function () {
                    showBubble(index, group);
                }
            }
            for (let a = 0; a < textIds.length; a++) {
                // Styling text
                let textElement = document.getElementById(`${textIds[a]}${group}${index}`);
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
                let tableElement = document.getElementById(`${tableIds[a]}${group}${index}`)
                if (tableElement) {
                    tableElement.style.backgroundColor = window.dashboardStyle.queue.unselected[textIds[a]].background;
                }
            }
        }
    }
    // Setting the selecting item to be shown
    for (let a = 0; a < textIds.length; a++) {
        // Styling text
        let textElement = document.getElementById(`${textIds[a]}${groupOriginal}${id}`);
        if (textElement) {
            textElement.style.fontFamily = window.dashboardStyle.queue.selected[textIds[a]].font;
            textElement.style.fontStyle = window.dashboardStyle.queue.selected[textIds[a]].italic;
            textElement.style.fontWeight = window.dashboardStyle.queue.selected[textIds[a]].bold;
            textElement.style.size = window.dashboardStyle.queue.selected[textIds[a]].size;
            textElement.style.color = window.dashboardStyle.queue.selected[textIds[a]].color;
        }
    }
    for (let a = 0; a < tableIds.length; a++) {
        // Styling box
        let tableElement = document.getElementById(`${tableIds[a]}${groupOriginal}${id}`);
        if (tableElement) {
            tableElement.style.backgroundColor = window.dashboardStyle.queue.selected[textIds[a]].background;
        }
    }
    // Setting show/hide image to hide
    document.getElementById(`show${groupOriginal}${id}`).src = 'assets/hide.png';
    document.getElementById(`show${groupOriginal}${id}`).alt = 'Hide this message on stream.';
    // Setting show/hide onclick function to hide
    document.getElementById(`show${groupOriginal}${id}`).onclick = function () {
        hideBubble(id, groupOriginal);
    }
    // Showing the question in the bubble
    localStorage.setItem('bubbleData', `${groupOriginal}${id}`);
    //console.log(localStorage.getItem('bubbleData'));
}