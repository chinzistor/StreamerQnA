function checkData() {
    const key = localStorage.getItem('bubbleData');
    //console.log(localStorage.getItem('bubbleData'));
    //console.log(key);
    if (key == '-none-') {
        if (window.shown != '') {
            window.shown = '';
            document.getElementById("table").hidden = true;
        }
    }
    else {
        if (window.shown != key && window.shown != '-none-') {
            document.getElementById('nameHeader').innerHTML = '';
            document.getElementById('timeHeader').innerHTML = '';
            document.getElementById('questionBody').innerHTML = '';
            document.getElementById("table").hidden = false;
            window.shown = key;
            let id;
            for (let group in window.commands) {
                id = +key.replace(group, '');
            }
            const value = localStorage.getItem(key);
            let index1 = value.indexOf('#');
            let user = value.slice(0, index1);
            let index2 = value.indexOf('#', index1 + '#'.length);
            let time = value.slice(index1 + '#'.length, index2);
            let question = value.slice(index2 + "#".length);
            let questionGroup = key.replace(id, '');
            const data = localStorage.getItem(key);

            // Name header configuration
            const nameHeader = document.getElementById('nameHeader');
            nameHeader.style.width = '100%';
            nameHeader.style.backgroundColor = window.bubbleStyle.texts.name.background;

            const nameParagraph = document.createElement('p');
            nameParagraph.textContent = user;
            nameParagraph.style.fontFamily = window.bubbleStyle.texts.name.font;
            nameParagraph.style.fontStyle = window.bubbleStyle.texts.name.italic;
            nameParagraph.style.fontWeight = window.bubbleStyle.texts.name.bold;
            nameParagraph.style.size = window.bubbleStyle.texts.name.size;
            nameParagraph.style.color = window.bubbleStyle.texts.name.color;
            nameParagraph.style.paddingLeft = `${window.bubbleStyle.tablestyle.rounding + 5}px`;
            nameParagraph.style.paddingRight = `${window.bubbleStyle.tablestyle.rounding + 5}px`;
            nameParagraph.style.lineHeight = 0;
            nameHeader.appendChild(nameParagraph);

            // Time header configuration
            if (time != '') {
                console.log(time);
                const timeHeader = document.getElementById('timeHeader');
                timeHeader.style.backgroundColor = window.bubbleStyle.texts.time.background;
                timeHeader.style.textAlign = 'right';
                timeHeader.style.whiteSpace = 'nowrap';
                timeHeader.style.overflow = 'hidden';
                timeHeader.style.width = '100%';

                const timeParagraph = document.createElement('p');
                timeParagraph.textContent = time;
                timeParagraph.style.fontFamily = window.bubbleStyle.texts.time.font;
                timeParagraph.style.fontStyle = window.bubbleStyle.texts.time.italic;
                timeParagraph.style.fontWeight = window.bubbleStyle.texts.time.bold;
                timeParagraph.style.size = `${window.bubbleStyle.texts.time.size}px`;
                timeParagraph.style.color = window.bubbleStyle.texts.time.color;
                timeParagraph.style.paddingLeft = `${window.bubbleStyle.tablestyle.rounding + 5}px`;
                timeParagraph.style.paddingRight = `${window.bubbleStyle.tablestyle.rounding + 5}px`;
                timeParagraph.style.lineHeight = 0;
                timeHeader.appendChild(timeParagraph);
            }

            // Header configuration
            const header = document.getElementById('header');
            header.style.overflow = 'hidden';
            header.style.position = 'relative';
            header.style.verticalAlign = 'center';
            header.style.height = 'auto';

            // Question cell configuration
            const questionCell = document.getElementById('questionBody');
            questionCell.style.backgroundColor = window.bubbleStyle.texts.question.background;
            questionCell.style.whiteSpace = 'normal';
            questionCell.style.textOverflow = 'ellipsis';
            questionCell.style.overflow = 'hidden';

            const questionParagraph = document.createElement('p');
            questionParagraph.textContent = question;
            questionParagraph.style.fontFamily = window.bubbleStyle.texts.question.font;
            questionParagraph.style.fontStyle = window.bubbleStyle.texts.question.italic;
            questionParagraph.style.fontWeight = window.bubbleStyle.texts.question.bold;
            questionParagraph.style.size = window.bubbleStyle.texts.question.size;
            questionParagraph.style.color = window.bubbleStyle.texts.question.color;
            questionParagraph.style.paddingLeft = `${window.bubbleStyle.tablestyle.rounding + 5}px`;
            questionParagraph.style.paddingRight = `${window.bubbleStyle.tablestyle.rounding + 5}px`;
            questionParagraph.style.lineHeight = 1;
            questionParagraph.style.wordWrap = 'break-word';
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
            mainTable.style.border = `${window.bubbleStyle.tablestyle.border.thickness}px ${window.bubbleStyle.tablestyle.border.style} ${window.bubbleStyle.tablestyle.border.color}`;
            mainTable.style.borderSpacing = window.bubbleStyle.tablestyle.border.spacing;
            mainTable.style.borderRadius = `${window.bubbleStyle.tablestyle.rounding}px`;
            mainTable.style.borderCollapse = 'separate';
            mainTable.style.overflow = 'hidden';
        }
    }
}