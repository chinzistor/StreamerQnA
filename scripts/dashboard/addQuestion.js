// Adding questions to the dashboard
function addQuestion(user, group, formattedTime, question, store, replaceId, response) {
    let duplicated = false;

// Filtering

    // Checking for duplicated (similar) questions if window.allowRQ is true
    if (response != "" && !window.allowRQ) {
        for (let a = 0; a < localStorage.length; a++) {
            const key = localStorage.key(a);
            // Going through the command groups and check if the ID of the question contains any of the group names
            for (let keys in window.commands) {
                if (key.includes(keys)) {
                    const data = localStorage.getItem(key).split('#')
                    const storedName = data[0];
                    const storedQuestion = data[2];
                    //console.log(`${user} ${group} ${question} - ${storedName} ${keys} ${data[2]}`);
                    // Allowing similar questions
                    if (window.allowSQ) {
                        // Checking if the question is already in a different group
                        if (window.checkGroup) {
                            // Checking if the same question was already sent by the same user (if window.allowSQFDU is true)
                            if (window.allowSQFDU) {
                                const userName = storedName;
                                if (storedQuestion == question && userName == user && group == keys) {
                                    duplicated = true;
                                }
                            }
                            // Checking if the same question was already sent by any users (if window.allowSQFDU is false)
                            else {
                                if (storedQuestion == question && group == keys) {
                                    duplicated = true;
                                }
                            }
                        }
                        else {
                            // Checking if the same question was already sent by the same user (if window.allowSQFDU is true)
                            if (window.allowSQFDU) {
                                const userName = storedName;
                                if (storedQuestion == question && userName == user) {
                                    duplicated = true;
                                }
                            }
                            // Checking if the same question was already sent by any users (if window.allowSQFDU is false)
                            else {
                                if (storedQuestion == question) {
                                    duplicated = true;
                                }
                            }
                        }
                    }
                    else {
                        // Checking if the question is already in a different group
                        if (window.checkGroup) {
                            const difference = checkStringSimilarities(storedQuestion, question);
                            // Checking if the a question was already sent by the same user (if window.allowSQFDU is true)
                            if (window.allowSQFDU) {
                                const userName = storedName;
                                if (difference >= window.similaritySensitivity && userName == user && group == keys) {
                                    duplicated = true;
                                }
                            }
                            // Checking if the a question was already sent by any users (if window.allowSQFDU is false)
                            else {
                                if (difference >= window.similaritySensitivity && group == keys) {
                                    duplicated = true;
                                }
                            }
                        }
                        else {
                            const difference = checkStringSimilarities(storedQuestion, question);
                            // Checking if the a question was already sent by the same user (if window.allowSQFDU is true)
                            if (window.allowSQFDU) {
                                const userName = storedName;
                                if (difference >= window.similaritySensitivity && userName == user) {
                                    duplicated = true;
                                }
                            }
                            // Checking if the a question was already sent by any users (if window.allowSQFDU is false)
                            else {
                                if (difference >= window.similaritySensitivity) {
                                    duplicated = true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

// Data handling

    // If the incoming question isn't duplicated
    if (!duplicated) {
        // Creating the ID for the question
        let localId;
        if (replaceId === -1) {
            localId = window.id;
        }
        else {
            localId = replaceId;
        }
        const formattedId = localId.toString().padStart(4, '0')
        //console.log(`Test: ${localId} ${window.id} ${replaceId}`);

        // Adding the name of the viewer to the dashboard
        const nameParagraph = document.createElement('p');
        nameParagraph.textContent = user;
        nameParagraph.style.fontFamily = window.dashboardStyle.queue.unselected.name.font;
        nameParagraph.style.fontStyle = window.dashboardStyle.queue.unselected.name.italic;
        nameParagraph.style.fontWeight = window.dashboardStyle.queue.unselected.name.bold;
        nameParagraph.style.fontSize = `${window.dashboardStyle.queue.unselected.name.size}pt`;
        nameParagraph.style.color = window.dashboardStyle.queue.unselected.name.color
        nameParagraph.style.paddingLeft = `${Math.max(window.dashboardStyle.queue.unselected.name.border.rounding.topLeft + 5, window.dashboardStyle.queue.unselected.border.rounding.topLeft / 2)}px`;
        nameParagraph.style.paddingRight = `${window.dashboardStyle.queue.unselected.name.border.rounding.topRight + 5}px`;
        nameParagraph.style.lineHeight = 0;
        nameParagraph.id = `name${group}${formattedId}`;
        // Creating the box for the name
        const nameCell = document.createElement('td');
        nameCell.appendChild(nameParagraph);
        nameCell.style.width = '100%';
        nameCell.style.backgroundColor = window.dashboardStyle.queue.unselected.name.background;
        nameCell.style.borderTop = `${window.dashboardStyle.queue.unselected.name.border.top.thickness}px ${window.dashboardStyle.queue.unselected.name.border.top.style} ${window.dashboardStyle.queue.unselected.name.border.top.color}`;
        nameCell.style.borderBottom = `${window.dashboardStyle.queue.unselected.name.border.bottom.thickness}px ${window.dashboardStyle.queue.unselected.name.border.bottom.style} ${window.dashboardStyle.queue.unselected.name.border.bottom.color}`;
        nameCell.style.borderLeft = `${window.dashboardStyle.queue.unselected.name.border.left.thickness}px ${window.dashboardStyle.queue.unselected.name.border.left.style} ${window.dashboardStyle.queue.unselected.name.border.left.color}`;
        nameCell.style.borderRight = `${window.dashboardStyle.queue.unselected.name.border.right.thickness}px ${window.dashboardStyle.queue.unselected.name.border.right.style} ${window.dashboardStyle.queue.unselected.name.border.right.color}`;
        nameCell.style.borderTopLeftRadius = `${Math.max(window.dashboardStyle.queue.unselected.name.border.rounding.topLeft, window.dashboardStyle.queue.unselected.border.rounding.topLeft)}px`
        nameCell.style.borderTopRightRadius = `${window.dashboardStyle.queue.unselected.name.border.rounding.topRight}px`;
        nameCell.style.borderBottomLeftRadius = `${window.dashboardStyle.queue.unselected.name.border.rounding.bottomLeft}px`;
        nameCell.style.borderBottomRightRadius = `${window.dashboardStyle.queue.unselected.name.border.rounding.bottomRight}px`;
        nameCell.id = `nameCell${group}${formattedId}`;


        // Adding the time of the question to the dashboard
        const timeParagraph = document.createElement('p');
        const time = getTime(formattedTime);
        timeParagraph.textContent = time;
        timeParagraph.style.fontFamily = window.dashboardStyle.queue.unselected.time.font;
        timeParagraph.style.fontStyle = window.dashboardStyle.queue.unselected.time.italic;
        timeParagraph.style.fontWeight = window.dashboardStyle.queue.unselected.time.bold;
        timeParagraph.style.fontSize = `${window.dashboardStyle.queue.unselected.time.size}pt`;
        timeParagraph.style.color = window.dashboardStyle.queue.unselected.time.color
        timeParagraph.style.paddingLeft = `${window.dashboardStyle.queue.unselected.time.border.rounding.topLeft + 5}px`;
        timeParagraph.style.paddingRight = `${Math.max(window.dashboardStyle.queue.unselected.border.rounding.topRight / 2, window.dashboardStyle.queue.unselected.time.border.rounding.topRight + 5)}px`;
        timeParagraph.style.lineHeight = 0;
        timeParagraph.id = `time${group}${formattedId}`;

        // Creating the box for the time
        const timeCell = document.createElement('td');
        timeCell.appendChild(timeParagraph);
        timeCell.style.backgroundColor = window.dashboardStyle.queue.unselected.time.background;
        timeCell.style.borderTop = `${window.dashboardStyle.queue.unselected.time.border.top.thickness}px ${window.dashboardStyle.queue.unselected.time.border.top.style} ${window.dashboardStyle.queue.unselected.time.border.top.color}`;
        timeCell.style.borderBottom = `${window.dashboardStyle.queue.unselected.time.border.bottom.thickness}px ${window.dashboardStyle.queue.unselected.time.border.bottom.style} ${window.dashboardStyle.queue.unselected.time.border.bottom.color}`;
        timeCell.style.borderLeft = `${window.dashboardStyle.queue.unselected.time.border.left.thickness}px ${window.dashboardStyle.queue.unselected.time.border.left.style} ${window.dashboardStyle.queue.unselected.time.border.left.color}`;
        timeCell.style.borderRight = `${window.dashboardStyle.queue.unselected.time.border.right.thickness}px ${window.dashboardStyle.queue.unselected.time.border.right.style} ${window.dashboardStyle.queue.unselected.time.border.right.color}`;
        timeCell.style.borderTopLeftRadius = `${window.dashboardStyle.queue.unselected.time.border.rounding.topLeft}px`;
        timeCell.style.borderBottomLeftRadius = `${window.dashboardStyle.queue.unselected.time.border.rounding.bottomLeft}px`;
        timeCell.style.borderBottomRightRadius = `${window.dashboardStyle.queue.unselected.time.border.rounding.bottomRight}px`;
        timeCell.style.borderTopRightRadius = `${Math.max(window.dashboardStyle.queue.unselected.border.rounding.topRight, window.dashboardStyle.queue.unselected.time.border.rounding.topRight)}px`;
        timeCell.id = `timeCell${group}${formattedId}`;
        timeCell.style.textAlign = 'right';
        timeCell.style.whiteSpace = 'nowrap';
        timeCell.style.overflow = 'hidden';
        timeCell.style.width = `${time.length * window.dashboardStyle.queue.unselected.time.size * 0.75 + Math.max(window.bubbleStyle.tablestyle.border.rounding.topRight, window.dashboardStyle.queue.unselected.time.border.rounding.topRight)}px`;

        // Creating the row for the name and time
        const row = document.createElement('tr');
        row.appendChild(nameCell);
        row.appendChild(timeCell);
        row.style.overflow = 'hidden';
        row.style.position = 'relative';
        row.style.verticalAlign = 'center';
        row.style.height = 'auto';

        // Creating the body for name and time
        const tableBody = document.createElement('table');
        tableBody.style.borderSpacing = `${window.dashboardStyle.queue.unselected.border.spacing}px`;
        tableBody.appendChild(row);
        tableBody.style.width = '100%';
        tableBody.style.tableLayout = 'fixed';


        // Adding the question to the dashboard
        const questionParagraph = document.createElement('p');
        questionParagraph.textContent = question;
        questionParagraph.style.fontFamily = window.dashboardStyle.queue.unselected.question.font;
        questionParagraph.style.fontStyle = window.dashboardStyle.queue.unselected.question.italic;
        questionParagraph.style.fontWeight = window.dashboardStyle.queue.unselected.question.bold;
        questionParagraph.style.fontSize = `${window.dashboardStyle.queue.unselected.question.size}pt`;
        questionParagraph.style.color = window.dashboardStyle.queue.unselected.question.color;
        questionParagraph.style.paddingLeft = `${Math.max(window.dashboardStyle.queue.unselected.border.rounding.bottomLeft / 2, window.dashboardStyle.queue.unselected.question.border.rounding.bottomLeft + 5)}px`;
        questionParagraph.style.lineHeight = 1;
        questionParagraph.style.wordWrap = 'break-word';
        questionParagraph.id = `question${group}${formattedId}`;
        // Creating the box for the question
        const questionCell = document.createElement('td');
        questionCell.appendChild(questionParagraph);
        questionCell.className = 'question';
        questionCell.style.width = '100%';
        questionCell.style.backgroundColor = window.dashboardStyle.queue.unselected.question.background;
        questionCell.style.borderTopLeftRadius = `${window.dashboardStyle.queue.unselected.question.border.rounding.topLeft}px`;
        questionCell.style.borderTopRightRadius = `${window.dashboardStyle.queue.unselected.question.border.rounding.topRight}px`;
        questionCell.style.borderBottomLeftRadius = `${window.dashboardStyle.queue.unselected.question.border.rounding.bottomLeft}px`;
        questionCell.style.borderBottomRightRadius = `${window.dashboardStyle.queue.unselected.question.border.rounding.bottomRight}px`;
        questionCell.id = `questionCell${group}${formattedId}`;

        // Adding show/hide button to the dashboard
        const questionShow = document.createElement('img');
        questionShow.src = 'assets/show.png';
        questionShow.alt = 'Show this message on stream.';
        questionShow.id = `show${group}${formattedId}`;
        questionShow.onclick = function () {
            showBubble(formattedId, group);
        };
        questionShow.width = window.dashboardStyle.queue.unselected.question.size * 2;
        questionShow.height = window.dashboardStyle.queue.unselected.question.size * 2;
        questionShow.style.whiteSpace = 'nowrap';
        questionShow.style.cursor = 'pointer';
        // Creating the box for the show/hide button
        const showCell = document.createElement('td');
        showCell.appendChild(questionShow);
        showCell.justifyContent = 'center';
        showCell.alignItems = 'center';
        showCell.style.width = `${window.dashboardStyle.queue.unselected.question.size * 2}px`;

        // Adding delete button to the dashboard
        const questionDelete = document.createElement('img');
        questionDelete.src = 'assets/delete.png';
        questionDelete.alt = 'Remove this message from queue.';
        questionDelete.id = `del${formattedId}`;
        questionDelete.onclick = function () {
            deleteMessage(formattedId, group);
        };
        questionDelete.width = window.dashboardStyle.queue.unselected.question.size * 2;
        questionDelete.height = window.dashboardStyle.queue.unselected.question.size * 2;
        questionDelete.style.whiteSpace = 'nowrap';
        questionDelete.style.cursor = 'pointer';
        // Creating the box for the delete button
        const deleteCell = document.createElement('td');
        deleteCell.appendChild(questionDelete);
        deleteCell.justifyContent = 'center';
        deleteCell.alignItems = 'left';
        deleteCell.style.width = `${window.dashboardStyle.queue.unselected.question.size * 2 + Math.max(window.dashboardStyle.queue.unselected.border.rounding.bottomRight / 2, window.dashboardStyle.queue.unselected.question.border.rounding.bottomRight + 5)}px`;
        deleteCell.id = `delCell${formattedId}`;

        // Creating the row for the question and the buttons
        const questionRow = document.createElement('tr');
        questionRow.appendChild(questionCell);
        questionRow.appendChild(showCell);
        questionRow.appendChild(deleteCell);
        questionRow.style.overflow = 'hidden';
        questionRow.style.position = 'relative';
        questionRow.style.verticalAlign = 'center';
        questionRow.style.height = 'auto';

        // Creating the body for name and time
        const tableBody2 = document.createElement('table')
        tableBody2.appendChild(questionRow);
        tableBody2.style.width = '100%';
        tableBody2.style.borderSpacing = `${window.dashboardStyle.queue.unselected.border.spacing}px`;
        tableBody2.style.tableLayout = 'fixed';
        tableBody2.style.borderTop = `${window.dashboardStyle.queue.unselected.question.border.top.thickness}px ${window.dashboardStyle.queue.unselected.question.border.top.style} ${window.dashboardStyle.queue.unselected.question.border.top.color}`;
        tableBody2.style.borderBottom = `${window.dashboardStyle.queue.unselected.question.border.bottom.thickness}px ${window.dashboardStyle.queue.unselected.question.border.bottom.style} ${window.dashboardStyle.queue.unselected.question.border.bottom.color}`;
        tableBody2.style.borderLeft = `${window.dashboardStyle.queue.unselected.question.border.left.thickness}px ${window.dashboardStyle.queue.unselected.question.border.left.style} ${window.dashboardStyle.queue.unselected.question.border.left.color}`;
        tableBody2.style.borderRight = `${window.dashboardStyle.queue.unselected.question.border.right.thickness}px ${window.dashboardStyle.queue.unselected.question.border.right.style} ${window.dashboardStyle.queue.unselected.question.border.right.color}`;
        tableBody2.style.borderTopLeftRadius = `${window.dashboardStyle.queue.unselected.question.border.rounding.topLeft}px`;
        tableBody2.style.borderTopRightRadius = `${window.dashboardStyle.queue.unselected.question.border.rounding.topRight}px`;
        tableBody2.style.borderBottomLeftRadius = `${Math.max(window.dashboardStyle.queue.unselected.border.rounding.bottomLeft, window.dashboardStyle.queue.unselected.question.border.rounding.bottomLeft)}px`;
        tableBody2.style.borderBottomRightRadius = `${Math.max(window.dashboardStyle.queue.unselected.border.rounding.bottomRight, window.dashboardStyle.queue.unselected.question.border.rounding.bottomRight)}px`;
        tableBody2.id = `questionBody${group}${formattedId}`;


        // Creating the table for the question
        const tableDiv = document.createElement('div');
        tableDiv.id = `${group}${formattedId}`;
        tableDiv.className = 'table'
        tableDiv.appendChild(tableBody);
        tableDiv.appendChild(tableBody2);
        tableDiv.style.borderTop = `${window.dashboardStyle.queue.unselected.border.top.thickness}px ${window.dashboardStyle.queue.unselected.border.top.style} ${window.dashboardStyle.queue.unselected.border.top.color}`;
        tableDiv.style.borderBottom = `${window.dashboardStyle.queue.unselected.border.bottom.thickness}px ${window.dashboardStyle.queue.unselected.border.bottom.style} ${window.dashboardStyle.queue.unselected.border.bottom.color}`;
        tableDiv.style.borderLeft = `${window.dashboardStyle.queue.unselected.border.left.thickness}px ${window.dashboardStyle.queue.unselected.border.left.style} ${window.dashboardStyle.queue.unselected.border.left.color}`;
        tableDiv.style.borderRight = `${window.dashboardStyle.queue.unselected.border.right.thickness}px ${window.dashboardStyle.queue.unselected.border.right.style} ${window.dashboardStyle.queue.unselected.border.right.color}`;
        tableDiv.style.borderTopLeftRadius = `${window.dashboardStyle.queue.unselected.border.rounding.topLeft}px`;
        tableDiv.style.borderTopRightRadius = `${window.dashboardStyle.queue.unselected.border.rounding.topRight}px`;
        tableDiv.style.borderBottomLeftRadius = `${window.dashboardStyle.queue.unselected.border.rounding.bottomLeft}px`;
        tableDiv.style.borderBottomRightRadius = `${window.dashboardStyle.queue.unselected.border.rounding.bottomRight}px`;
        tableDiv.id = `${group}${formattedId}`;

        // Getting the HTML element to edit based on which command group the command belongs
        const body = document.getElementById(group);
        body.appendChild(tableDiv);

        if (store) {
            localStorage.setItem(`${group}${formattedId}`, `${user}#${formattedTime}#${question}`);
        }

        window.id++;
    }

    // If duplicated question was already sent
    else {
        // If a response is set in bot.js
        if (window.commands[group].duplicationResponse != "") {
            const responses = window.commands[group].duplicationResponse;
            const response = responses[Math.floor(Math.random() * responses.length)].replace('%user', user);
            // Send the duplication response
            sendMessage(response);
        }
    }

    //console.log(window.commands[group].duplicationResponse + ' ' + window.commands[group].response + ' ' + duplicated);

    // Responding to the command
    if (response != "" && !duplicated) {
        const responses = window.commands[group].response;
        const response = responses[Math.floor(Math.random() * responses.length)].replace('%user', user);
        // Handling webhook integration
        discordWebhook(user, formattedTime, question, group);
        sendMessage(response);
    }
}