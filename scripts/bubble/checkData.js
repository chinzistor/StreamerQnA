// Checking if there's a question needed to be shown
function checkData() {
    // Getting the key of the message that's needed to be shown
    const key = localStorage.getItem('bubbleData');

    // If there's no set message, this hides the bubble
    if (key == '-none-') {
        if (window.shown != '') {
            window.shown = '';
            document.getElementById("table").hidden = true;
        }
    }

    // If there's a set message to be shown, this shows that in the bubble
    else {
        if (window.shown != key && window.shown != '-none-') {
            // Getting and storing HTML elements of the bubble in variables for handling and styling
            const nameHeader = document.getElementById('nameHeader');
            const timeHeader = document.getElementById('timeHeader');
            const questionCell = document.getElementById('questionBody');
            nameHeader.innerHTML = '';
            timeHeader.innerHTML = '';
            questionCell.innerHTML = '';
            document.getElementById("table").hidden = false;

            // Getting the numerical id of the message
            window.shown = key;
            let id;
            for (let group in window.commands) {
                id = key.replace(group, '');
            }
            const numId = +id;

            // Reading the message from localStorage and handling the data
            const value = localStorage.getItem(key);
            let index1 = value.indexOf('#');
            let user = value.slice(0, index1);
            let index2 = value.indexOf('#', index1 + '#'.length);
            let time = getTime(+value.slice(index1 + '#'.length, index2), 'bubble');
            let question = value.slice(index2 + "#".length);
            let questionGroup = key.replace(numId, '');
            const data = localStorage.getItem(key);

            // Writing the name and styling the text
            const nameParagraph = document.createElement('p');
            styling(nameParagraph, 'nameText', 'bubble');
            nameParagraph.textContent = user;
            nameParagraph.style.lineHeight = 0;

            // Name header configuration
            nameHeader.style.width = '100%';
            styling(nameHeader, 'name', 'bubble');
            nameHeader.style.borderTopLeftRadius = `${Math.max(localStorage.getItem(`bubblenameBordertopLeft`),
                                                               localStorage.getItem(`bubbleBorderRoundingtopLeft`))}px`;
            nameHeader.style.borderTopRightRadius = `${localStorage.getItem(`bubblenameBordertopRight`)}px`;
            nameHeader.appendChild(nameParagraph);


            // Checking if the time of the sent message is needed to be shown
            if (time != '') {
                // Writing the time and styling the text
                const timeParagraph = document.createElement('p');
                styling(timeParagraph, 'timeText', 'bubble');
                timeParagraph.textContent = time;
                timeParagraph.style.lineHeight = 0;

                // Time cell styling
                timeHeader.appendChild(timeParagraph);
                styling(timeHeader, 'time', 'bubble');
                timeHeader.style.textAlign = 'right';
                timeHeader.style.whiteSpace = 'nowrap';
                timeHeader.style.overflow = 'hidden';
                timeHeader.style.borderTopRightRadius = `${Math.max(localStorage.getItem(`bubbletimeBordertopRight`),
                                                                    localStorage.getItem(`bubbleBorderRoundingtopRight`))}px`;
                timeHeader.style.width = `${timeParagraph.offsetWidth}px`;
            }
            else {
                nameHeader.style.borderTopRightRadius = `${Math.max(localStorage.getItem(`bubblenameBordertopRight`),
                                                                    localStorage.getItem(`bubbleBorderRoundingtopRight`))}px`;
            }



            // Message header configuration
            const header = document.getElementById('header');
            header.style.overflow = 'hidden';
            header.style.position = 'relative';
            header.style.verticalAlign = 'center';
            header.style.height = 'auto';

            // Writing the question and styling the text
            const questionParagraph = document.createElement('p');
            styling(questionParagraph, 'questionText', 'bubble');
            questionParagraph.textContent = question;
            questionParagraph.style.lineHeight = 1;
            questionParagraph.style.wordWrap = 'break-word';

            // Question cell configuration
            styling(questionCell, 'question', 'bubble');
            questionCell.style.whiteSpace = 'normal';
            questionCell.style.textOverflow = 'ellipsis';
            questionCell.style.overflow = 'hidden';
            questionCell.style.borderBottomLeftRadius = `${Math.max(localStorage.getItem(`bubblenameBorderbottomLeft`),
                                                                    localStorage.getItem(`bubbleBorderRoundingbottomLeft`))}px`;
            questionCell.style.borderBottomRightRadius = `${Math.max(localStorage.getItem(`bubblenameBorderbottomRight`),
                                                                    localStorage.getItem(`bubbleBorderRoundingbottomRight`))}px`;
            questionCell.appendChild(questionParagraph);

            // Body configuration
            const questionRow = document.getElementById('body');
            questionRow.style.overflow = 'hidden';
            questionRow.style.position = 'relative';
            questionRow.style.verticalAlign = 'center';
            questionRow.style.height = 'auto';


            // Table configuration
            const mainTable = document.getElementById("table");
            styling(mainTable, 'table', 'bubble');
            mainTable.style.width = '100%';
            mainTable.style.tableLayout = 'fixed';
            mainTable.style.borderCollapse = 'separate';
            mainTable.style.overflow = 'hidden';
            mainTable.style.borderSpacing = `${localStorage.getItem(`bubbleBorderSpacing`)}px`;
        }
    }
}