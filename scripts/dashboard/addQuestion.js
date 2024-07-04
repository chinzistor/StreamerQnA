function addQuestion(user, group, time, question, store, replaceId) {
    const body = document.getElementById(group);
    let localId;
    if (replaceId === -1) {
        localId = window.id;
    }
    else {
        localId = replaceId;
    }
    //console.log(`Test: ${localId} ${window.id} ${replaceId}`);

    const tableDiv = document.createElement('div');
    tableDiv.id = `${group}${localId}`;
    tableDiv.className = 'table'
    const tableBody = document.createElement('table');
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = user;
    nameParagraph.style.fontFamily = window.dashboardStyle.queue.unselected.name.font;
    nameParagraph.style.fontStyle = window.dashboardStyle.queue.unselected.name.italic;
    nameParagraph.style.fontWeight = window.dashboardStyle.queue.unselected.name.bold;
    nameParagraph.style.size = window.dashboardStyle.queue.unselected.name.size;
    nameParagraph.style.color = window.dashboardStyle.queue.unselected.name.color;
    nameParagraph.style.paddingLeft = '10px';
    nameParagraph.style.lineHeight = 0;
    nameParagraph.id = `name${group}${localId}`;
    nameCell.appendChild(nameParagraph);
    nameCell.className = 'name';
    nameCell.style.width = '80%';
    nameCell.style.backgroundColor = window.dashboardStyle.queue.unselected.name.background;
    nameCell.id = `nameCell${group}${localId}`;
    row.appendChild(nameCell);

    const timeCell = document.createElement('td');
    const timeParagraph = document.createElement('p');
    const formattedTime = getTime();
    if (time === -1) {
        timeParagraph.textContent = formattedTime;
    }
    else {
        timeParagraph.textContent = time;
    }
    timeParagraph.style.fontFamily = window.dashboardStyle.queue.unselected.time.font;
    timeParagraph.style.fontStyle = window.dashboardStyle.queue.unselected.time.italic;
    timeParagraph.style.fontWeight = window.dashboardStyle.queue.unselected.time.bold;
    timeParagraph.style.size = window.dashboardStyle.queue.unselected.time.size;
    timeParagraph.style.color = window.dashboardStyle.queue.unselected.time.color;
    timeParagraph.style.paddingRight = '10px';
    timeParagraph.style.lineHeight = 0;
    timeParagraph.id = `time${group}${localId}`;

    timeCell.appendChild(timeParagraph);
    timeCell.className = 'time';
    timeCell.style.backgroundColor = window.dashboardStyle.queue.unselected.time.background;
    timeCell.id = `timeCell${group}${localId}`;
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
    tableDiv.appendChild(tableBody);

    const tableBody2 = document.createElement('table')
    const questionRow = document.createElement('tr');
    const questionCell = document.createElement('td');
    const questionParagraph = document.createElement('p');
    questionParagraph.textContent = question;
    questionParagraph.style.fontFamily = window.dashboardStyle.queue.unselected.question.font;
    questionParagraph.style.fontStyle = window.dashboardStyle.queue.unselected.question.italic;
    questionParagraph.style.fontWeight = window.dashboardStyle.queue.unselected.question.bold;
    questionParagraph.style.size = window.dashboardStyle.queue.unselected.question.size;
    questionParagraph.style.color = window.dashboardStyle.queue.unselected.question.color;
    questionParagraph.style.paddingLeft = '10px';
    questionParagraph.style.lineHeight = 0;
    questionParagraph.id = `question${group}${localId}`;
    questionCell.appendChild(questionParagraph);
    questionCell.className = 'question';
    questionCell.style.backgroundColor = window.dashboardStyle.queue.unselected.question.background;
    questionCell.id = `questionCell${group}${localId}`;
    questionRow.appendChild(questionCell);

    const showCell = document.createElement('td');
    const questionShow = document.createElement('img');
    questionShow.src = 'assets/show.png';
    questionShow.alt = 'Show this message on stream.';
    questionShow.id = `show${group}${localId}`;
    questionShow.onclick = function () {
        showBubble(localId, group);
    };
    questionShow.width = window.dashboardStyle.queue.unselected.question.size * 2;
    questionShow.height = window.dashboardStyle.queue.unselected.question.size * 2;
    showCell.appendChild(questionShow);
    showCell.justifyContent = 'center';
    showCell.alignItems = 'center';
    showCell.style.width = `${window.dashboardStyle.queue.unselected.question.size * 2}px`;
    questionRow.appendChild(showCell);

    const deleteCell = document.createElement('td');
    const questionDelete = document.createElement('img');
    questionDelete.src = 'assets/delete.png';
    questionDelete.alt = 'Remove this message from queue.';
    questionDelete.id = `del${localId}`;
    questionDelete.onclick = function () {
        deleteMessage(localId, group);
    };
    questionDelete.width = window.dashboardStyle.queue.unselected.question.size * 2;
    questionDelete.height = window.dashboardStyle.queue.unselected.question.size * 2;
    deleteCell.appendChild(questionDelete);
    deleteCell.justifyContent = 'center';
    deleteCell.alignItems = 'center';
    deleteCell.style.width = `${window.dashboardStyle.queue.unselected.question.size * 2}px`;
    questionRow.appendChild(deleteCell);

    questionRow.style.overflow = 'hidden';
    questionRow.style.position = 'relative';
    questionRow.style.verticalAlign = 'center';
    questionRow.style.height = 'auto';
    tableBody2.appendChild(questionRow);
    tableBody2.style.width = '100%';
    tableBody2.style.spacing = '0px';
    tableBody2.style.borderStyle = 'none';
    tableDiv.appendChild(tableBody2)
    body.appendChild(tableDiv);

    if (store) {
        localStorage.setItem(`${group}${localId}`, `${user}#${formattedTime}#${question}`);
    }

    window.id++;
}