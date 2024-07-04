function checkData() {
    const key = localStorage.getItem('bubbleData');
    //console.log(localStorage.getItem('bubbleData'));
    //console.log(key);
    if (key == '-none-') {
        if (window.shown != '') {
            window.shown = '';
            const body = document.getElementById('questionTableBody');
            body.innerHTML = '';
        }
    }
    else {
        if (window.shown != key && window.shown != '-none-') {
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

            const body = document.getElementById('questionTableBody');
            body.innerHTML = '';
            const tableDiv = document.createElement('div');
            const tableBody = document.createElement('table');
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const nameParagraph = document.createElement('p');
            nameParagraph.textContent = user;
            nameParagraph.style.fontFamily = window.bubbleStyle.texts.name.font;
            nameParagraph.style.fontStyle = window.bubbleStyle.texts.name.italic;
            nameParagraph.style.fontWeight = window.bubbleStyle.texts.name.bold;
            nameParagraph.style.size = window.bubbleStyle.texts.name.size;
            nameParagraph.style.color = window.bubbleStyle.texts.name.color;
            nameParagraph.style.paddingLeft = '10px';
            nameParagraph.style.lineHeight = 0;
            nameCell.appendChild(nameParagraph);
            nameCell.style.width = '80%';
            nameCell.style.backgroundColor = window.bubbleStyle.texts.name.background;
            row.appendChild(nameCell);

            const timeCell = document.createElement('td');
            const timeParagraph = document.createElement('p');
            timeParagraph.textContent = time;
            timeParagraph.style.fontFamily = window.bubbleStyle.texts.time.font;
            timeParagraph.style.fontStyle = window.bubbleStyle.texts.time.italic;
            timeParagraph.style.fontWeight = window.bubbleStyle.texts.time.bold;
            timeParagraph.style.size = window.bubbleStyle.texts.time.size;
            timeParagraph.style.color = window.bubbleStyle.texts.time.color;
            timeParagraph.style.paddingRight = '10px';
            timeParagraph.style.lineHeight = 0;

            timeCell.appendChild(timeParagraph);
            timeCell.style.backgroundColor = window.bubbleStyle.texts.time.background;
            timeCell.style.width = '20%';
            timeCell.style.textAlign = 'right';
            row.appendChild(timeCell);
            row.style.overflow = 'hidden';
            row.style.position = 'relative';
            row.style.verticalAlign = 'center';
            row.style.height = 'auto';

            tableBody.appendChild(row);
            tableBody.style.width = '100%';
            tableBody.style.spacing = '0px';
            tableBody.style.borderStyle = 'none';
            tableBody.style.borderCollapse = 'collapse';
            tableDiv.appendChild(tableBody);

            const tableBody2 = document.createElement('table')
            const questionRow = document.createElement('tr');
            const questionCell = document.createElement('td');
            const questionParagraph = document.createElement('p');
            questionParagraph.textContent = question;
            questionParagraph.style.fontFamily = window.bubbleStyle.texts.question.font;
            questionParagraph.style.fontStyle = window.bubbleStyle.texts.question.italic;
            questionParagraph.style.fontWeight = window.bubbleStyle.texts.question.bold;
            questionParagraph.style.size = window.bubbleStyle.texts.question.size;
            questionParagraph.style.color = window.bubbleStyle.texts.question.color;
            questionParagraph.style.paddingLeft = '10px';
            questionParagraph.style.lineHeight = 0;
            questionCell.appendChild(questionParagraph);
            questionCell.style.backgroundColor = window.bubbleStyle.texts.question.background;
            questionRow.appendChild(questionCell);

            questionRow.style.overflow = 'hidden';
            questionRow.style.position = 'relative';
            questionRow.style.verticalAlign = 'center';
            questionRow.style.height = 'auto';
            tableBody2.appendChild(questionRow);
            tableBody2.style.width = '100%';
            tableBody2.style.spacing = '0px';
            tableBody2.style.borderStyle = 'none';
            tableBody2.style.borderCollapse = 'collapse';
            tableDiv.appendChild(tableBody2)
            body.appendChild(tableDiv);
        }
    }
}