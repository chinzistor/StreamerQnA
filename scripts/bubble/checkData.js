// Checking if there's a question needed to be shown
function checkData() {
    // Getting the key of the message that's needed to be shown
    const key = localStorage.getItem('bubbleData');
    //console.log(localStorage.getItem('bubbleData'));
    //console.log(key);

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
            document.getElementById('nameHeader').innerHTML = '';
            document.getElementById('timeHeader').innerHTML = '';
            document.getElementById('questionBody').innerHTML = '';
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
            let time = value.slice(index1 + '#'.length, index2);
            let question = value.slice(index2 + "#".length);
            let questionGroup = key.replace(numId, '');
            const data = localStorage.getItem(key);

            // Writing the name and styling the text
            const nameParagraph = document.createElement('p');
            nameParagraph.textContent = user;
            nameParagraph.style.fontFamily = window.bubbleStyle.texts.name.font;
            nameParagraph.style.fontStyle = window.bubbleStyle.texts.name.italic;
            nameParagraph.style.fontWeight = window.bubbleStyle.texts.name.bold;
            nameParagraph.style.fontSize = window.bubbleStyle.texts.name.size;
            nameParagraph.style.color = formatColor(window.bubbleStyle.texts.name.color, window.bubbleStyle.texts.name.transparency);
            nameParagraph.style.paddingLeft = `${Math.max(window.bubbleStyle.texts.name.border.rounding.topLeft + 5, window.bubbleStyle.tablestyle.border.rounding.topLeft / 2)}px`;
            nameParagraph.style.paddingRight = `${window.bubbleStyle.texts.name.border.rounding.topRight + 5}px`;
            nameParagraph.style.lineHeight = 0;

            // Name header configuration
            const nameHeader = document.getElementById('nameHeader');
            nameHeader.style.width = '100%';
            nameHeader.style.backgroundColor = window.bubbleStyle.texts.name.background;
            nameHeader.style.borderTop = `${window.bubbleStyle.texts.name.border.top.thickness}px ${window.bubbleStyle.texts.name.border.top.style} ${formatColor(window.bubbleStyle.texts.name.border.top.color, window.bubbleStyle.texts.name.border.top.transparency)}`;
            nameHeader.style.borderBottom = `${window.bubbleStyle.texts.name.border.bottom.thickness}px ${window.bubbleStyle.texts.name.border.bottom.style} ${formatColor(window.bubbleStyle.texts.name.border.bottom.color, window.bubbleStyle.texts.name.border.bottom.transparency)}`;
            nameHeader.style.borderLeft = `${window.bubbleStyle.texts.name.border.left.thickness}px ${window.bubbleStyle.texts.name.border.left.style} ${formatColor(window.bubbleStyle.texts.name.border.left.color, window.bubbleStyle.texts.name.border.left.transparency)}`;
            nameHeader.style.borderRight = `${window.bubbleStyle.texts.name.border.right.thickness}px ${window.bubbleStyle.texts.name.border.right.style} ${formatColor(window.bubbleStyle.texts.name.border.right.color, window.bubbleStyle.texts.name.border.right.transparency)}`;
            nameHeader.style.borderTopLeftRadius = `${Math.max(window.bubbleStyle.texts.name.border.rounding.topLeft, window.bubbleStyle.tablestyle.border.rounding.topLeft)}px`
            nameHeader.style.borderTopRightRadius = `${window.bubbleStyle.texts.name.border.rounding.topRight}px`;
            nameHeader.style.borderBottomLeftRadius = `${window.bubbleStyle.texts.name.border.rounding.bottomLeft}px`;
            nameHeader.style.borderBottomRightRadius = `${window.bubbleStyle.texts.name.border.rounding.bottomRight}px`;
            nameHeader.appendChild(nameParagraph);


            // Checking if the of the sent message is needed to be shown
            if (time != '') {
                // Writing the time and styling the text
                const timeParagraph = document.createElement('p');
                timeParagraph.textContent = time;
                timeParagraph.style.fontFamily = window.bubbleStyle.texts.time.font;
                timeParagraph.style.fontStyle = window.bubbleStyle.texts.time.italic;
                timeParagraph.style.fontWeight = window.bubbleStyle.texts.time.bold;
                timeParagraph.style.fontSize = `${window.bubbleStyle.texts.time.size}pt`;
                timeParagraph.style.color = formatColor(window.bubbleStyle.texts.time.color, window.bubbleStyle.texts.time.transparency);
                timeParagraph.style.paddingLeft = `${window.bubbleStyle.texts.time.border.rounding.topLeft + 5}px`;
                timeParagraph.style.paddingRight = `${Math.max(window.bubbleStyle.tablestyle.border.rounding.topRight / 2, window.bubbleStyle.texts.time.border.rounding.topRight + 5)}px`;
                timeParagraph.style.lineHeight = 0;

                // Time header configuration
                const timeHeader = document.getElementById('timeHeader');
                timeHeader.style.width = `${time.length * window.bubbleStyle.texts.time.size * 0.75 + Math.max(window.bubbleStyle.tablestyle.border.rounding.topRight, window.bubbleStyle.texts.time.border.rounding.topRight)}px`;
                timeHeader.style.backgroundColor = window.bubbleStyle.texts.time.background;
                timeHeader.style.textAlign = 'right';
                timeHeader.style.whiteSpace = 'nowrap';
                timeHeader.style.overflow = 'hidden';
                timeHeader.style.borderTop = `${window.bubbleStyle.texts.time.border.top.thickness}px ${window.bubbleStyle.texts.time.border.top.style} ${formatColor(window.bubbleStyle.texts.time.border.top.color, window.bubbleStyle.texts.time.border.top.transparency)}`;
                timeHeader.style.borderBottom = `${window.bubbleStyle.texts.time.border.bottom.thickness}px ${window.bubbleStyle.texts.time.border.bottom.style} ${formatColor(window.bubbleStyle.texts.time.border.bottom.color, window.bubbleStyle.texts.time.border.bottom.transparency)}`;
                timeHeader.style.borderLeft = `${window.bubbleStyle.texts.time.border.left.thickness}px ${window.bubbleStyle.texts.time.border.left.style} ${formatColor(window.bubbleStyle.texts.time.border.left.color, window.bubbleStyle.texts.time.border.left.transparency)}`;
                timeHeader.style.borderRight = `${window.bubbleStyle.texts.time.border.right.thickness}px ${window.bubbleStyle.texts.time.border.right.style} ${formatColor(window.bubbleStyle.texts.time.border.right.color, window.bubbleStyle.texts.time.border.right.transparency)}`;
                timeHeader.style.borderTopLeftRadius = `${window.bubbleStyle.texts.time.border.rounding.topLeft}px`;
                timeHeader.style.borderBottomLeftRadius = `${window.bubbleStyle.texts.time.border.rounding.bottomLeft}px`;
                timeHeader.style.borderBottomRightRadius = `${window.bubbleStyle.texts.time.border.rounding.bottomRight}px`;
                timeHeader.style.borderTopRightRadius = `${Math.max(window.bubbleStyle.tablestyle.border.rounding.topRight, window.bubbleStyle.texts.time.border.rounding.topRight)}px`;
                timeHeader.appendChild(timeParagraph);
            }
            else {
                nameHeader.style.borderTopRightRadius = `${Math.max(window.bubbleStyle.texts.name.border.rounding.topRight, window.bubbleStyle.tablestyle.border.rounding.topRight)}px`
            }



            // Message header configuration
            const header = document.getElementById('header');
            header.style.overflow = 'hidden';
            header.style.position = 'relative';
            header.style.verticalAlign = 'center';
            header.style.height = 'auto';

            // Writing the question and styling the text
            const questionParagraph = document.createElement('p');
            questionParagraph.textContent = question;
            questionParagraph.style.fontFamily = window.bubbleStyle.texts.question.font;
            questionParagraph.style.fontStyle = window.bubbleStyle.texts.question.italic;
            questionParagraph.style.fontWeight = window.bubbleStyle.texts.question.bold;
            questionParagraph.style.fontSize = window.bubbleStyle.texts.question.size;
            questionParagraph.style.color = formatColor(window.bubbleStyle.texts.question.color, window.bubbleStyle.texts.question.transparency);
            questionParagraph.style.paddingLeft = `${Math.max(window.bubbleStyle.tablestyle.border.rounding.bottomLeft / 2, window.bubbleStyle.texts.question.border.rounding.bottomLeft + 5)}px`;
            questionParagraph.style.paddingRight = `${Math.max(window.bubbleStyle.tablestyle.border.rounding.bottomRight / 2, window.bubbleStyle.texts.question.border.rounding.bottomRight + 5)}px`;
            questionParagraph.style.lineHeight = 1;
            questionParagraph.style.wordWrap = 'break-word';

            // Question cell configuration
            const questionCell = document.getElementById('questionBody');
            questionCell.style.backgroundColor = formatColor(window.bubbleStyle.texts.question.background, window.bubbleStyle.texts.question.backgroundTransparency);
            questionCell.style.whiteSpace = 'normal';
            questionCell.style.textOverflow = 'ellipsis';
            questionCell.style.overflow = 'hidden';
            questionCell.style.borderTop = `${window.bubbleStyle.texts.question.border.top.thickness}px ${window.bubbleStyle.texts.question.border.top.style} ${formatColor(window.bubbleStyle.texts.question.border.top.color, window.bubbleStyle.texts.question.border.top.transparency)}`;
            questionCell.style.borderBottom = `${window.bubbleStyle.texts.question.border.bottom.thickness}px ${window.bubbleStyle.texts.question.border.bottom.style} ${formatColor(window.bubbleStyle.texts.question.border.bottom.color, window.bubbleStyle.texts.question.border.bottom.transparency)}`;
            questionCell.style.borderLeft = `${window.bubbleStyle.texts.question.border.left.thickness}px ${window.bubbleStyle.texts.question.border.left.style} ${formatColor(window.bubbleStyle.texts.question.border.left.color, window.bubbleStyle.texts.question.border.left.transparency)}`;
            questionCell.style.borderRight = `${window.bubbleStyle.texts.question.border.right.thickness}px ${window.bubbleStyle.texts.question.border.right.style} ${formatColor(window.bubbleStyle.texts.question.border.right.color, window.bubbleStyle.texts.question.border.right.transparency)}`;
            questionCell.style.borderTopLeftRadius = `${window.bubbleStyle.texts.question.border.rounding.topLeft}px`;
            questionCell.style.borderTopRightRadius = `${window.bubbleStyle.texts.question.border.rounding.topRight}px`;
            questionCell.style.borderBottomLeftRadius = `${Math.max(window.bubbleStyle.texts.question.border.rounding.bottomLeft, window.bubbleStyle.tablestyle.border.rounding.bottomLeft)}px`
            questionCell.style.borderBottomRightRadius = `${Math.max(window.bubbleStyle.texts.question.border.rounding.bottomRight, window.bubbleStyle.tablestyle.border.rounding.bottomRight)}px`
            questionCell.appendChild(questionParagraph);

            // Body configuration
            const questionRow = document.getElementById('body');
            questionRow.style.overflow = 'hidden';
            questionRow.style.position = 'relative';
            questionRow.style.verticalAlign = 'center';
            questionRow.style.height = 'auto';


            // Table configuration
            const mainTable = document.getElementById("table");
            mainTable.style.width = '100%';
            mainTable.style.tableLayout = 'fixed';
            mainTable.style.borderTop = `${window.bubbleStyle.tablestyle.border.top.thickness}px ${window.bubbleStyle.tablestyle.border.top.style} ${formatColor(window.bubbleStyle.tablestyle.border.top.color, window.bubbleStyle.tablestyle.border.top.transparency)}`;
            mainTable.style.borderBottom = `${window.bubbleStyle.tablestyle.border.bottom.thickness}px ${window.bubbleStyle.tablestyle.border.bottom.style} ${formatColor(window.bubbleStyle.tablestyle.border.bottom.color, window.bubbleStyle.tablestyle.border.bottom.transparency)}`;
            mainTable.style.borderLeft = `${window.bubbleStyle.tablestyle.border.left.thickness}px ${window.bubbleStyle.tablestyle.border.left.style} ${formatColor(window.bubbleStyle.tablestyle.border.left.color, window.bubbleStyle.tablestyle.border.left.transparency)}`;
            mainTable.style.borderRight = `${window.bubbleStyle.tablestyle.border.right.thickness}px ${window.bubbleStyle.tablestyle.border.right.style} ${formatColor(window.bubbleStyle.tablestyle.border.right.color, window.bubbleStyle.tablestyle.border.right.transparency)}`;
            mainTable.style.borderSpacing = window.bubbleStyle.tablestyle.border.spacing;
            mainTable.style.borderTopLeftRadius = `${window.bubbleStyle.tablestyle.border.rounding.topLeft}px`;
            mainTable.style.borderTopRightRadius = `${window.bubbleStyle.tablestyle.border.rounding.topRight}px`;
            mainTable.style.borderBottomLeftRadius = `${window.bubbleStyle.tablestyle.border.rounding.bottomLeft}px`;
            mainTable.style.borderBottomRightRadius = `${window.bubbleStyle.tablestyle.border.rounding.bottomRight}px`;
            mainTable.style.borderCollapse = 'separate';
            mainTable.style.overflow = 'hidden';
        }
    }
}