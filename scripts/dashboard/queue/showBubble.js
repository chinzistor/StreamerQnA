// Showing question in bubble
function showBubble(id, groupOriginal) {
    // Resetting all queues' items to the hidden state
    const textIds = ['name', 'time', 'question'];
    const tableIds = ['nameCell', 'timeCell', 'questionBody'];
    // Making sure all parts of the queue item are reset
    let groupNames = localStorage.getItem('commands').split('%-%');
    for (let a = 0; a < groupNames.length; a++) {
        let group = groupNames[a];
        for (let numId = 0; numId < window.id; numId++) {
            const index = numId.toString().padStart(4, '0');

            const element = document.getElementById(`show${group}${index}`);
            if (element) {
                // Setting show/hide image to show
                element.textContent = 'Show';
                element.alt = 'Show this message on stream.';
                // Setting show/hide onclick function to show
                element.onclick = function () {
                    showBubble(index, group);
                }
            }
            styleSubmission('unselected', groupOriginal, id);
            for (let a in textIds) {

                let queueElement = document.getElementById(`${group}${index}`)
                if (queueElement) {
                    queueElement.onmouseenter = function() {
                        styleSubmission('hover', group, index);
                    };
                    queueElement.onmouseleave = function() {
                        styleSubmission('unselected', group, index);
                    };
                }

                // Styling boxes
                let tableElement = document.getElementById(`${tableIds[a]}${group}${index}`);
                if (tableElement) {
                    switch(textIds[a]) {
                        case 'name':
                            tableElement.style.borderTopLeftRadius = `${Math.max(localStorage.getItem(`dashboardQueueunselectednameBorderRoundingtopLeft`),
                                                                                 localStorage.getItem(`dashboardQueueunselectedBorderRoundingtopLeft`))}px`
                            if (!document.getElementById(`timeCell${group}${index}`)) {
                                tableElement.style.borderTopRightRadius = `${Math.max(localStorage.getItem(`dashboardQueueunselectednameBorderRoundingtopRight`),
                                                                                      localStorage.getItem(`dashboardQueueunselectedBorderRoundingtopRight`))}px`
                            }
                            break;
                        case 'time':
                            tableElement.style.borderTopRightRadius = `${Math.max(localStorage.getItem(`dashboardQueueunselectedtimeBorderRoundingtopRight`),
                                                                                  localStorage.getItem(`dashboardQueueunselectedBorderRoundingtopRight`))}px`
                            break;
                        case 'question':
                            tableElement.style.borderBottomLeftRadius = `${Math.max(localStorage.getItem(`dashboardQueueunselectedBorderRoundingbottomLeft`),
                                                                                    localStorage.getItem(`dashboardQueueunselectedquestionBorderRoundingbottomLeft`))}px`;
                            tableElement.style.borderBottomRightRadius = `${Math.max(localStorage.getItem(`dashboardQueueunselectedBorderRoundingbottomRight`),
                                                                                    localStorage.getItem(`dashboardQueueunselectedquestionBorderRoundingbottomRight`))}px`;
                            break;
                    }
                }
            }
        }
    }
    // Setting the selected item to be shown
    let queueElement = document.getElementById(`${groupOriginal}${id}`)
    if (queueElement) {
        queueElement.onmouseenter = function() {
            styleSubmission('selected', groupOriginal, id);
        };
        queueElement.onmouseleave = function() {
            styleSubmission('selected', groupOriginal, id);
        };
    }
    styleSubmission('selected', groupOriginal, id);
    for (let a in textIds) {
        // Styling box
        let tableElement = document.getElementById(`${tableIds[a]}${groupOriginal}${id}`);
        if (tableElement) {
            switch(textIds[a]) {
                case 'name':
                    tableElement.style.borderTopLeftRadius = `${Math.max(localStorage.getItem(`dashboardQueueselectednameBorderRoundingtopLeft`),
                                                                         localStorage.getItem(`dashboardQueueselectedBorderRoundingtopLeft`))}px`
                    if (!document.getElementById(`timeCell${groupOriginal}${id}`)) {
                        tableElement.style.borderTopRightRadius = `${Math.max(localStorage.getItem(`dashboardQueueselectednameBorderRoundingtopRight`),
                                                                              localStorage.getItem(`dashboardQueueselectedBorderRoundingtopRight`))}px`
                    }
                    break;
                case 'time':
                    tableElement.style.borderTopRightRadius = `${Math.max(localStorage.getItem(`dashboardQueueselectedtimeBorderRoundingtopRight`),
                                                                          localStorage.getItem(`dashboardQueueselectedBorderRoundingtopRight`))}px`
                    break;
                case 'question':
                    tableElement.style.borderBottomLeftRadius = `${Math.max(localStorage.getItem(`dashboardQueueselectedBorderRoundingbottomLeft`),
                                                                            localStorage.getItem(`dashboardQueueselectedquestionBorderRoundingbottomLeft`))}px`;
                    tableElement.style.borderBottomRightRadius = `${Math.max(localStorage.getItem(`dashboardQueueselectedBorderRoundingbottomRight`),
                                                                             localStorage.getItem(`dashboardQueueselectedquestionBorderRoundingbottomRight`))}px`;
                    break;
            }
        }
    }
    // Setting show/hide image to hide
    document.getElementById(`show${groupOriginal}${id}`).textContent = 'Hide';
    document.getElementById(`show${groupOriginal}${id}`).alt = 'Hide this message on stream.';
    // Setting show/hide onclick function to hide
    document.getElementById(`show${groupOriginal}${id}`).onclick = function () {
        hideBubble(id, groupOriginal);
    }
    // Showing the question in the bubbleunselected
    localStorage.setItem('bubbleData', `recorded${groupOriginal}${id}`);

    // Stats
    localStorage.setItem(`bubbleTotalShown`, +localStorage.getItem(`bubbleTotalShown`) + 1);
    fillStats();
}