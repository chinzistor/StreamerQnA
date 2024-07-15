// Hiding bubble
function hideBubble(id, group) {
    const textIds = ['name', 'time', 'question'];
    const tableIds = ['nameCell', 'timeCell', 'questionCell'];
    // Making sure all parts of the queue item are reset
    for (let a = 0; a < textIds.length; a++) {
        const deleteCell = document.getElementById(`delCell${id}`);
        if (deleteCell) {
            deleteCell.style.width = `${window.dashboardStyle.queue.unselected.question.size * 2 + Math.max(window.dashboardStyle.queue.unselected.border.rounding.bottomRight / 2, window.dashboardStyle.queue.unselected.question.border.rounding.bottomRight + 5)}px`;
        }

        // Styling text
        let textElement = document.getElementById(`${textIds[a]}${group}${id}`);
        if (textElement) {
            textElement.style.fontFamily = window.dashboardStyle.queue.unselected[textIds[a]].font;
            textElement.style.fontStyle = window.dashboardStyle.queue.unselected[textIds[a]].italic;
            textElement.style.fontWeight = window.dashboardStyle.queue.unselected[textIds[a]].bold;
            textElement.style.fontSize = `${window.dashboardStyle.queue.unselected[textIds[a]].size}pt`;
            textElement.style.color = window.dashboardStyle.queue.unselected[textIds[a]].color;
        }

        // Styling box
        let tableElement = document.getElementById(`${tableIds[a]}${group}${id}`);
        if (tableElement) {
            tableElement.style.backgroundColor = window.dashboardStyle.queue.unselected[textIds[a]].background;
            if (textIds[a] != 'question') {
                tableElement.style.borderTop = `${window.dashboardStyle.queue.unselected[textIds[a]].border.top.thickness}px ${window.dashboardStyle.queue.unselected[textIds[a]].border.top.style} ${window.dashboardStyle.queue.unselected[textIds[a]].border.top.color}`;
                tableElement.style.borderBottom = `${window.dashboardStyle.queue.unselected[textIds[a]].border.bottom.thickness}px ${window.dashboardStyle.queue.unselected[textIds[a]].border.bottom.style} ${window.dashboardStyle.queue.unselected[textIds[a]].border.bottom.color}`;
                tableElement.style.borderLeft = `${window.dashboardStyle.queue.unselected[textIds[a]].border.left.thickness}px ${window.dashboardStyle.queue.unselected[textIds[a]].border.left.style} ${window.dashboardStyle.queue.unselected[textIds[a]].border.left.color}`;
                tableElement.style.borderRight = `${window.dashboardStyle.queue.unselected[textIds[a]].border.right.thickness}px ${window.dashboardStyle.queue.unselected[textIds[a]].border.right.style} ${window.dashboardStyle.queue.unselected[textIds[a]].border.right.color}`;
            }
            if (textIds[a] == 'name') {
                tableElement.style.borderTopLeftRadius = `${Math.max(window.dashboardStyle.queue.unselected[textIds[a]].border.rounding.topLeft, window.dashboardStyle.queue.unselected.border.rounding.topLeft)}px`;
                tableElement.style.borderTopRightRadius = `${window.dashboardStyle.queue.unselected[textIds[a]].border.rounding.topRight}px`;
                tableElement.style.borderBottomLeftRadius = `${window.dashboardStyle.queue.unselected[textIds[a]].border.rounding.bottomLeft}px`;
                tableElement.style.borderBottomRightRadius = `${window.dashboardStyle.queue.unselected[textIds[a]].border.rounding.bottomRight}px`;
            }
            if (textIds[a] == 'time') {
                tableElement.style.borderTopLeftRadius = `${window.dashboardStyle.queue.unselected[textIds[a]].border.rounding.topLeft}px`;
                tableElement.style.borderTopRightRadius = `${Math.max(window.dashboardStyle.queue.unselected[textIds[a]].border.rounding.topRight, window.dashboardStyle.queue.unselected.border.rounding.topRight)}px`;
                tableElement.style.borderBottomLeftRadius = `${window.dashboardStyle.queue.unselected[textIds[a]].border.rounding.bottomLeft}px`;
                tableElement.style.borderBottomRightRadius = `${window.dashboardStyle.queue.unselected[textIds[a]].border.rounding.bottomRight}px`;
                tableElement.style.width = `${document.getElementById(`time${group}${id}`).textContent.length * window.dashboardStyle.queue.unselected.time.size * 0.75 + Math.max(window.bubbleStyle.tablestyle.border.rounding.topRight, window.dashboardStyle.queue.unselected.time.border.rounding.topRight)}px`;
            }
            if (textIds[a] == 'question') {
                tableElement.style.borderTopLeftRadius = `${window.dashboardStyle.queue.unselected[textIds[a]].border.rounding.topLeft}px`;
                tableElement.style.borderTopRightRadius = `${window.dashboardStyle.queue.unselected[textIds[a]].border.rounding.topRight}px`;
                tableElement.style.borderBottomLeftRadius = `${window.dashboardStyle.queue.unselected[textIds[a]].border.rounding.bottomLeft}px`;
                tableElement.style.borderBottomRightRadius = `${window.dashboardStyle.queue.unselected[textIds[a]].border.rounding.bottomRight}px`;
            }
        }

        let queueElement = document.getElementById(`${group}${id}`)
        if (queueElement) {
            queueElement.style.border = `${window.dashboardStyle.queue.unselected.border.thickness}px ${window.dashboardStyle.queue.unselected.border.style} ${window.dashboardStyle.queue.unselected.border.color}`;
            queueElement.style.borderTopLeftRadius = `${window.dashboardStyle.queue.unselected.border.rounding.topLeft}px`;
            queueElement.style.borderTopRightRadius = `${window.dashboardStyle.queue.unselected.border.rounding.topRight}px`;
            queueElement.style.borderBottomLeftRadius = `${window.dashboardStyle.queue.unselected.border.rounding.bottomLeft}px`
            queueElement.style.borderBottomRightRadius = `${window.dashboardStyle.queue.unselected.border.rounding.bottomRight}px`
        }
    }

    let questionBody = document.getElementById(`questionBody${group}${id}`);
    if (questionBody) {
        questionBody.style.borderSpacing = `${window.dashboardStyle.queue.unselected.border.spacing}px`;
        questionBody.style.borderTop = `${window.dashboardStyle.queue.unselected.question.border.top.thickness}px ${window.dashboardStyle.queue.unselected.question.border.top.style} ${window.dashboardStyle.queue.unselected.question.border.top.color}`;
        questionBody.style.borderBottom = `${window.dashboardStyle.queue.unselected.question.border.bottom.thickness}px ${window.dashboardStyle.queue.unselected.question.border.bottom.style} ${window.dashboardStyle.queue.unselected.question.border.bottom.color}`;
        questionBody.style.borderLeft = `${window.dashboardStyle.queue.unselected.question.border.left.thickness}px ${window.dashboardStyle.queue.unselected.question.border.left.style} ${window.dashboardStyle.queue.unselected.question.border.left.color}`;
        questionBody.style.borderRight = `${window.dashboardStyle.queue.unselected.question.border.right.thickness}px ${window.dashboardStyle.queue.unselected.question.border.right.style} ${window.dashboardStyle.queue.unselected.question.border.right.color}`;
        questionBody.style.borderTopLeftRadius = `${window.dashboardStyle.queue.unselected.question.border.rounding.topLeft}px`;
        questionBody.style.borderTopRightRadius = `${window.dashboardStyle.queue.unselected.question.border.rounding.topRight}px`;
        questionBody.style.borderBottomLeftRadius = `${Math.max(window.dashboardStyle.queue.unselected.question.border.rounding.bottomLeft, window.dashboardStyle.queue.unselected.border.rounding.bottomLeft)}px`;
        questionBody.style.borderBottomRightRadius = `${Math.max(window.dashboardStyle.queue.unselected.question.border.rounding.bottomRight, window.dashboardStyle.queue.unselected.border.rounding.bottomRight)}px`;
    }

    let questionHeader = document.getElementById(`questionBody${group}${id}`);
    if (questionHeader) {
        questionHeader.style.borderSpacing = `${window.dashboardStyle.queue.unselected.border.spacing}px`;
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