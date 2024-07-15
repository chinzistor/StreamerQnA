// Showing question in bubble
function showBubble(id, groupOriginal) {
    //console.log(id + ' ' + groupOriginal);
    // Resetting all queues' items to the hidden state
    const textIds = ['name', 'time', 'question'];
    const tableIds = ['nameCell', 'timeCell', 'questionCell'];
    // Making sure all parts of the queue item are reset
    for (let group in window.commands) {
        for (let numId = 0; numId < window.id; numId++) {
            const index = numId.toString().padStart(4, '0');
            const deleteCell = document.getElementById(`delCell${index}`);
            if (deleteCell) {
                deleteCell.style.width = `${window.dashboardStyle.queue.unselected.question.size * 2 + Math.max(window.dashboardStyle.queue.unselected.border.rounding.bottomRight / 2, window.dashboardStyle.queue.unselected.question.border.rounding.bottomRight + 5)}px`;
            }

            const element = document.getElementById(`show${group}${index}`);
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
                        textElement.style.fontSize = `${window.dashboardStyle.queue.unselected[textIds[a]].size}pt`;
                        textElement.style.color = window.dashboardStyle.queue.unselected[textIds[a]].color;
                        textElement.style.paddingLeft = `${Math.max(window.dashboardStyle.queue.unselected.border.rounding.bottomLeft / 2, window.dashboardStyle.queue.unselected[textIds[a]].border.rounding.bottomLeft + 5)}px`;
                        textElement.style.paddingRight = `${Math.max(window.dashboardStyle.queue.unselected.border.rounding.bottomRight / 2, window.dashboardStyle.queue.unselected[textIds[a]].border.rounding.bottomRight + 5)}px`;
                    }

                // Styling boxSolight
                let tableElement = document.getElementById(`${tableIds[a]}${group}${index}`)
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

                let queueElement = document.getElementById(`${group}${index}`)
                if (queueElement) {
                    queueElement.style.borderTop = `${window.dashboardStyle.queue.unselected.border.top.thickness}px ${window.dashboardStyle.queue.unselected.border.top.style} ${window.dashboardStyle.queue.unselected.border.top.color}`;
                    queueElement.style.borderBottom = `${window.dashboardStyle.queue.unselected.border.bottom.thickness}px ${window.dashboardStyle.queue.unselected.border.bottom.style} ${window.dashboardStyle.queue.unselected.border.bottom.color}`;
                    queueElement.style.borderLeft = `${window.dashboardStyle.queue.unselected.border.left.thickness}px ${window.dashboardStyle.queue.unselected.border.left.style} ${window.dashboardStyle.queue.unselected.border.left.color}`;
                    queueElement.style.borderRight = `${window.dashboardStyle.queue.unselected.border.right.thickness}px ${window.dashboardStyle.queue.unselected.border.right.style} ${window.dashboardStyle.queue.unselected.border.right.color}`;
                    queueElement.style.borderTopLeftRadius = `${window.dashboardStyle.queue.unselected.border.rounding.topLeft}px`;
                    queueElement.style.borderTopRightRadius = `${window.dashboardStyle.queue.unselected.border.rounding.topRight}px`;
                    queueElement.style.borderBottomLeftRadius = `${window.dashboardStyle.queue.unselected.border.rounding.bottomLeft}px`
                    queueElement.style.borderBottomRightRadius = `${window.dashboardStyle.queue.unselected.border.rounding.bottomRight}px`
                }

                let questionBody = document.getElementById(`questionBody${group}${index}`);
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

                let questionHeader = document.getElementById(`questionBody${group}${index}`);
                if (questionHeader) {
                    questionHeader.style.borderSpacing = `${window.dashboardStyle.queue.unselected.border.spacing}px`;
                }
            }
        }
    }
    // Setting the selecting item to be shown
    for (let a = 0; a < textIds.length; a++) {
        const deleteCell = document.getElementById(`delCell${id}`);
        if (deleteCell) {
            deleteCell.style.width = `${window.dashboardStyle.queue.selected.question.size * 2 + Math.max(window.dashboardStyle.queue.selected.border.rounding.bottomRight / 2, window.dashboardStyle.queue.selected.question.border.rounding.bottomRight + 5)}px`;
        }

        // Styling text
        let textElement = document.getElementById(`${textIds[a]}${groupOriginal}${id}`);
        if (textElement) {
            textElement.style.fontFamily = window.dashboardStyle.queue.selected[textIds[a]].font;
            textElement.style.fontStyle = window.dashboardStyle.queue.selected[textIds[a]].italic;
            textElement.style.fontWeight = window.dashboardStyle.queue.selected[textIds[a]].bold;
            textElement.style.fontSize = `${window.dashboardStyle.queue.selected[textIds[a]].size}pt`;
            textElement.style.color = window.dashboardStyle.queue.selected[textIds[a]].color;
            textElement.style.paddingLeft = `${Math.max(window.dashboardStyle.queue.selected.border.rounding.bottomLeft / 2, window.dashboardStyle.queue.selected[textIds[a]].border.rounding.bottomLeft + 5)}px`;
            textElement.style.paddingRight = `${Math.max(window.dashboardStyle.queue.selected.border.rounding.bottomRight / 2, window.dashboardStyle.queue.selected[textIds[a]].border.rounding.bottomRight + 5)}px`;
        }

        // Styling box
        let tableElement = document.getElementById(`${tableIds[a]}${groupOriginal}${id}`);
        if (tableElement) {
            tableElement.style.backgroundColor = window.dashboardStyle.queue.selected[textIds[a]].background;
            if (textIds[a] != 'question') {
                tableElement.style.borderTop = `${window.dashboardStyle.queue.selected[textIds[a]].border.top.thickness}px ${window.dashboardStyle.queue.selected[textIds[a]].border.top.style} ${window.dashboardStyle.queue.selected[textIds[a]].border.top.color}`;
                tableElement.style.borderBottom = `${window.dashboardStyle.queue.selected[textIds[a]].border.bottom.thickness}px ${window.dashboardStyle.queue.selected[textIds[a]].border.bottom.style} ${window.dashboardStyle.queue.selected[textIds[a]].border.bottom.color}`;
                tableElement.style.borderLeft = `${window.dashboardStyle.queue.selected[textIds[a]].border.left.thickness}px ${window.dashboardStyle.queue.selected[textIds[a]].border.left.style} ${window.dashboardStyle.queue.selected[textIds[a]].border.left.color}`;
                tableElement.style.borderRight = `${window.dashboardStyle.queue.selected[textIds[a]].border.right.thickness}px ${window.dashboardStyle.queue.selected[textIds[a]].border.right.style} ${window.dashboardStyle.queue.selected[textIds[a]].border.right.color}`;
            }
            if (textIds[a] == 'name') {
                tableElement.style.borderTopLeftRadius = `${Math.max(window.dashboardStyle.queue.selected[textIds[a]].border.rounding.topLeft, window.dashboardStyle.queue.selected.border.rounding.topLeft)}px`;
                tableElement.style.borderTopRightRadius = `${window.dashboardStyle.queue.selected[textIds[a]].border.rounding.topRight}px`;
                tableElement.style.borderBottomLeftRadius = `${window.dashboardStyle.queue.selected[textIds[a]].border.rounding.bottomLeft}px`;
                tableElement.style.borderBottomRightRadius = `${window.dashboardStyle.queue.selected[textIds[a]].border.rounding.bottomRight}px`;
            }
            if (textIds[a] == 'time') {
                tableElement.style.borderTopLeftRadius = `${window.dashboardStyle.queue.selected[textIds[a]].border.rounding.topLeft}px`;
                tableElement.style.borderTopRightRadius = `${Math.max(window.dashboardStyle.queue.selected[textIds[a]].border.rounding.topRight, window.dashboardStyle.queue.selected.border.rounding.topRight)}px`;
                tableElement.style.borderBottomLeftRadius = `${window.dashboardStyle.queue.selected[textIds[a]].border.rounding.bottomLeft}px`;
                tableElement.style.borderBottomRightRadius = `${window.dashboardStyle.queue.selected[textIds[a]].border.rounding.bottomRight}px`;
                tableElement.style.width = `${document.getElementById(`time${groupOriginal}${id}`).textContent.length * window.dashboardStyle.queue.selected.time.size * 0.75 + Math.max(window.bubbleStyle.tablestyle.border.rounding.topRight, window.dashboardStyle.queue.selected.time.border.rounding.topRight)}px`;
            }
            if (textIds[a] == 'question') {
                tableElement.style.borderTopLeftRadius = `${window.dashboardStyle.queue.selected[textIds[a]].border.rounding.topLeft}px`;
                tableElement.style.borderTopRightRadius = `${window.dashboardStyle.queue.selected[textIds[a]].border.rounding.topRight}px`;
                tableElement.style.borderBottomLeftRadius = `${window.dashboardStyle.queue.selected[textIds[a]].border.rounding.bottomLeft}px`;
                tableElement.style.borderBottomRightRadius = `${window.dashboardStyle.queue.selected[textIds[a]].border.rounding.bottomRight}px`;
            }
        }

        let questionBody = document.getElementById(`questionBody${groupOriginal}${id}`);
        if (questionBody) {
            questionBody.style.borderTop = `${window.dashboardStyle.queue.selected.question.border.top.thickness}px ${window.dashboardStyle.queue.selected.question.border.top.style} ${window.dashboardStyle.queue.selected.question.border.top.color}`;
            questionBody.style.borderBottom = `${window.dashboardStyle.queue.selected.question.border.bottom.thickness}px ${window.dashboardStyle.queue.selected.question.border.bottom.style} ${window.dashboardStyle.queue.selected.question.border.bottom.color}`;
            questionBody.style.borderLeft = `${window.dashboardStyle.queue.selected.question.border.left.thickness}px ${window.dashboardStyle.queue.selected.question.border.left.style} ${window.dashboardStyle.queue.selected.question.border.left.color}`;
            questionBody.style.borderRight = `${window.dashboardStyle.queue.selected.question.border.right.thickness}px ${window.dashboardStyle.queue.selected.question.border.right.style} ${window.dashboardStyle.queue.selected.question.border.right.color}`;
            questionBody.style.borderTopLeftRadius = `${window.dashboardStyle.queue.selected.question.border.rounding.topLeft}px`;
            questionBody.style.borderTopRightRadius = `${window.dashboardStyle.queue.selected.question.border.rounding.topRight}px`;
            questionBody.style.borderBottomLeftRadius = `${Math.max(window.dashboardStyle.queue.selected.question.border.rounding.bottomLeft, window.dashboardStyle.queue.selected.border.rounding.bottomLeft)}px`;
            questionBody.style.borderBottomRightRadius = `${Math.max(window.dashboardStyle.queue.selected.question.border.rounding.bottomRight, window.dashboardStyle.queue.selected.border.rounding.bottomRight)}px`;
            questionBody.style.borderSpacing = `${window.dashboardStyle.queue.selected.border.spacing}px`;
        }

        let questionHeader = document.getElementById(`questionBody${groupOriginal}${id}`);
        if (questionHeader) {
            questionHeader.style.borderSpacing = `${window.dashboardStyle.queue.selected.border.spacing}px`;
        }

        let queueElement = document.getElementById(`${groupOriginal}${id}`)
        if (queueElement) {
            queueElement.style.borderTop = `${window.dashboardStyle.queue.selected.border.top.thickness}px ${window.dashboardStyle.queue.selected.border.top.style} ${window.dashboardStyle.queue.selected.border.top.color}`;
            queueElement.style.borderBottom = `${window.dashboardStyle.queue.selected.border.bottom.thickness}px ${window.dashboardStyle.queue.selected.border.bottom.style} ${window.dashboardStyle.queue.selected.border.bottom.color}`;
            queueElement.style.borderLeft = `${window.dashboardStyle.queue.selected.border.left.thickness}px ${window.dashboardStyle.queue.selected.border.left.style} ${window.dashboardStyle.queue.selected.border.left.color}`;
            queueElement.style.borderRight = `${window.dashboardStyle.queue.selected.border.right.thickness}px ${window.dashboardStyle.queue.selected.border.right.style} ${window.dashboardStyle.queue.selected.border.right.color}`;
            queueElement.style.borderTopLeftRadius = `${window.dashboardStyle.queue.selected.border.rounding.topLeft}px`;
            queueElement.style.borderTopRightRadius = `${window.dashboardStyle.queue.selected.border.rounding.topRight}px`;
            queueElement.style.borderBottomLeftRadius = `${window.dashboardStyle.queue.selected.border.rounding.bottomLeft}px`
            queueElement.style.borderBottomRightRadius = `${window.dashboardStyle.queue.selected.border.rounding.bottomRight}px`
        }
    }
    // Setting show/hide image to hide
    document.getElementById(`show${groupOriginal}${id}`).src = 'assets/hide.png';
    document.getElementById(`show${groupOriginal}${id}`).alt = 'Hide this message on stream.';
    // Setting show/hide onclick function to hide
    document.getElementById(`show${groupOriginal}${id}`).onclick = function () {
        hideBubble(id, groupOriginal);
    }
    // Showing the question in the bubbleunselected
    localStorage.setItem('bubbleData', `${groupOriginal}${id}`);
    //console.log(localStorage.getItem('bubbleData'));
}