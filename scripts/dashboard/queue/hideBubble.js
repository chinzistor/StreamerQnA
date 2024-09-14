// Hiding bubble
function hideBubble(id, group) {
    const textIds = ['name', 'time', 'question'];
    const tableIds = ['nameCell', 'timeCell', 'questionBody'];
    // Making sure all parts of the queue item are reset
    let queueElement = document.getElementById(`${group}${id}`)
    if (queueElement) {
        queueElement.onmouseenter = function() {
            styleSubmission('hover', group, id);
        };
        queueElement.onmouseleave = function() {
            styleSubmission('unselected', group, id);
        };
    }
    for (let a in textIds) {

        // Styling text
        styleSubmission('hover', group, id);

        // Styling boxes
        let tableElement = document.getElementById(`${tableIds[a]}${group}${id}`);
        if (tableElement) {
            switch(textIds[a]) {
                case 'name':
                    tableElement.style.borderTopLeftRadius = `${Math.max(localStorage.getItem(`dashboardQueueunselectednameBorderRoundingtopLeft`), localStorage.getItem(`dashboardQueueunselectedBorderRoundingtopLeft`))}px`
                    if (!document.getElementById(`timeCell${group}${id}`)) {
                        tableElement.style.borderTopRightRadius = `${Math.max(localStorage.getItem(`dashboardQueueunselectednameBorderRoundingtopRight`), localStorage.getItem(`dashboardQueueunselectedBorderRoundingtopRight`))}px`
                    }
                    break;
                case 'time':
                    tableElement.style.borderTopRightRadius = `${Math.max(localStorage.getItem(`dashboardQueueunselectedtimeBorderRoundingtopRight`), localStorage.getItem(`dashboardQueueunselectedBorderRoundingtopRight`))}px`
                    break;
                case 'question':
                    tableElement.style.borderBottomLeftRadius = `${Math.max(localStorage.getItem(`dashboardQueueunselectedBorderRoundingbottomLeft`), localStorage.getItem(`dashboardQueueunselectedquestionBorderRoundingbottomLeft`))}px`;
                    tableElement.style.borderBottomRightRadius = `${Math.max(localStorage.getItem(`dashboardQueueunselectedBorderRoundingbottomRight`), localStorage.getItem(`dashboardQueueunselectedquestionBorderRoundingbottomRight`))}px`;
                    break;
            }
        }
    }

    // Setting show/hide image to show
    document.getElementById(`show${group}${id}`).textContent = 'Show';
    document.getElementById(`show${group}${id}`).alt = 'Show this message on stream.';
    // Setting show/hide onclick function to show
    document.getElementById(`show${group}${id}`).onclick = function () {
        showBubble(id, group);
    }
    // Setting the showed item in localStorage to none, so the bubble hides itself
    localStorage.setItem('bubbleData', '-none-');

    // Stats
    localStorage.setItem(`bubbleTotalHidden`, +localStorage.getItem(`bubbleTotalHidden`) + 1);
    fillStats();
}