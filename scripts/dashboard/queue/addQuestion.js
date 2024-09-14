// Adding questions to the dashboard
function addQuestion(user, groupRaw, formattedTime, question, store, replaceId, response, site) {
    // Removing spaces from group names for id purposes
    let group = groupRaw.replace(" ", "");

    // Spam filter variable
    let duplicated = 0;
// Filtering
    // Checking if rejection of repeated questions is turned on
    if (response != "" && localStorage.getItem('rejectRepeatedQuestion') == "true") {
        // Checking all stored data
        for (let a = 0; a < localStorage.length; a++) {
            let key = localStorage.key(a);
            let commands = localStorage.getItem('commands').split('%-%');
            // Checking if the stored data is a question
            if (key.startsWith('recorded')) {
                // Checking if stored question's group is set
                for (let a = 0; a < commands.length; a++) {
                    if (key.includes(commands[a])) {
                        const data = localStorage.getItem(key).split('#')
                        const storedName = data[0];
                        const storedQuestion = data[2];
                        // Checking if similar questions are denied too or not
                        if (+localStorage.getItem('similaritySensitivity') == 1) {
                            // Checking if the question is already in another group
                            if (localStorage.getItem('allowCheckGroup') == 'false') {
                                // Checking if someone else has already submitted a question
                                if (localStorage.getItem('allowSimilarQuestionFromDifferentUser') == 'false') {
                                    if (groupRaw == commands[a] && storedName == user && storedQuestion == question) {
                                        duplicated = 1;
                                    }
                                }
                                else {
                                    if (groupRaw == commands[a] && storedQuestion == question) {
                                        duplicated = 2;
                                    }
                                }
                            }
                            else {
                                if (localStorage.getItem('allowSimilarQuestionFromDifferentUser') == 'true') {
                                    if (storedName == user && storedQuestion == question) {
                                        duplicated = 3;
                                    }
                                }
                                else {
                                    if (storedQuestion == question) {
                                        duplicated = 4;
                                    }
                                }
                            }
                        }
                        else {
                            if (localStorage.getItem('allowCheckGroup') == 'false') {
                                // Checking if someone else has already submitted a question
                                if (localStorage.getItem('allowSimilarQuestionFromDifferentUser') == 'true') {
                                    if (groupRaw == commands[a] && storedName == user && storedQuestion == question && checkStringSimilarities(storedQuestion, question) >= +localStorage.getItem('similaritySensitivity')) {
                                        duplicated = 5;
                                    }
                                }
                                else {
                                    if (groupRaw == commands[a] && storedQuestion == question && checkStringSimilarities(storedQuestion, question) >= +localStorage.getItem('similaritySensitivity')) {
                                        duplicated = 6;
                                    }
                                }
                            }
                            else {
                                if (localStorage.getItem('allowSimilarQuestionFromDifferentUser') == 'true') {
                                    if (storedName == user && storedQuestion == question && checkStringSimilarities(storedQuestion, question) >= +localStorage.getItem('similaritySensitivity')) {
                                        duplicated = 7;
                                    }
                                }
                                else {
                                    if (storedQuestion == question && checkStringSimilarities(storedQuestion, question) >= +localStorage.getItem('similaritySensitivity')) {
                                        duplicated = 8;
                                    }
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
    if (duplicated == 0) {
        // Creating the ID for the question
        let localId;
        if (replaceId === -1) {
            localId = window.id;
        }
        else {
            localId = replaceId;
        }
        const formattedId = localId.toString().padStart(4, '0');

        // Alerting the streamer that a new question was submitted
        if (store) {
            if (localStorage.getItem('openGroup') != groupRaw) {
                styleButton(group, 'alert')
            }
            if (localStorage.getItem('configPage') != 'queue') {
                styleButton('queue', 'alert')
            }
        }

        // Creating the table for the question
        const tableDiv = document.createElement('div');
        tableDiv.id = `${group}${formattedId}`;
        tableDiv.className = 'table'
        tableDiv.onmouseenter = function() {
            styleSubmission('hover', group, formattedId);
        };
        tableDiv.onmouseleave = function() {
            styleSubmission('unselected', group, formattedId);
        };
        if (store) {
            styling(tableDiv, 'table', 'new');
        }
        else {
            styling(tableDiv, 'table', 'unselected');
        }

        // Getting the HTML element to edit based on which command group the command belongs
        const body = document.getElementById(groupRaw);
        body.appendChild(tableDiv);


        // Creating the row for the name and time
        const row = document.createElement('tr');
        row.style.overflow = 'hidden';
        row.style.position = 'relative';
        row.style.verticalAlign = 'center';
        row.style.height = 'auto';

        // Creating the body for name and time
        const tableBody = document.createElement('table');
        tableBody.style.borderSpacing = `${localStorage.getItem(`dashboardButtonsunselectedBorderSpacing`)}px`;
        tableBody.appendChild(row);
        tableBody.id = `questionHeader${group}${formattedId}`;
        tableBody.style.width = '100%';
        tableBody.style.tableLayout = 'fixed';
        tableDiv.appendChild(tableBody);


        // Adding the name of the viewer to the dashboard
        const nameParagraph = document.createElement('p');
        if (store) {
            styling(nameParagraph, 'nameText', 'new');
        }
        else {
            styling(nameParagraph, 'nameText', 'unselected');
        }
        nameParagraph.textContent = user;
        nameParagraph.style.lineHeight = 0;
        nameParagraph.id = `name${group}${formattedId}`;
        // Creating the box for the name
        const nameCell = document.createElement('td');
        if (store) {
            styling(nameCell, 'name', 'new');
        }
        else {
            styling(nameCell, 'name', 'unselected');
        }
        nameCell.appendChild(nameParagraph);
        nameCell.style.borderTopLeftRadius = `${Math.max(localStorage.getItem(`dashboardQueueunselectednameBorderRoundingtopLeft`), localStorage.getItem(`dashboardQueueunselectedBorderRoundingtopLeft`))}px`
        nameCell.style.width = '100%';
        nameCell.id = `nameCell${group}${formattedId}`;
        row.appendChild(nameCell);


        // Managing time cell
        const time = getTime(formattedTime, 'dashboard');
        if (time != '') {
            // Adding the time of the question to the dashboard
            const timeParagraph = document.createElement('p');
            if (store) {
                styling(timeParagraph, 'timeText', 'new');
            }
            else {
                styling(timeParagraph, 'timeText', 'unselected');
            }
            timeParagraph.textContent = time;
            timeParagraph.style.lineHeight = 0;
            timeParagraph.id = `time${group}${formattedId}`;

            // Creating the box for the time
            const timeCell = document.createElement('td');
            timeCell.appendChild(timeParagraph);
            if (store) {
                styling(timeCell, 'time', 'new');
            }
            else {
                styling(timeCell, 'time', 'unselected');
            }
            timeCell.id = `timeCell${group}${formattedId}`;
            timeCell.style.textAlign = 'right';
            timeCell.style.whiteSpace = 'nowrap';
            timeCell.style.borderTopRightRadius = `${Math.max(localStorage.getItem(`dashboardQueueunselectedBorderRoundingtopRight`), localStorage.getItem(`dashboardQueueunselectedtimeBorderRoundingtopRight`))}px`;
            timeCell.style.width = `${timeParagraph.textContent.length * localStorage.getItem(`dashboardQueueunselectedtimeFontSize`) * 0.85 + Math.max(localStorage.getItem(`dashboardQueueunselectedBorderRoundingtopRight`), localStorage.getItem(`dashboardQueueunselectedtimeBorderRoundingtopRight`))}px`;

            row.appendChild(timeCell);

            // Saving the timeCell elements' width into a global variable
            if (window.width < timeParagraph.offsetWidth) {
                window.width = timeParagraph.offsetWidth;
            }
        }
        else {
            nameCell.style.borderTopRightRadius = `${Math.max(localStorage.getItem(`dashboardQueueunselectedBorderRoundingtopRight`), localStorage.getItem(`dashboardQueueunselectednameBorderRoundingtopRight`))}px`;
        }



        // Creating the row for the question and the buttons
        const questionRow = document.createElement('tr');
        questionRow.style.overflow = 'hidden';
        questionRow.style.position = 'relative';
        questionRow.style.verticalAlign = 'center';
        questionRow.style.height = 'auto';
        questionRow.id = `questionCell${group}${formattedId}`;

        // Adding the question to the dashboard
        const questionParagraph = document.createElement('p');
        if (store) {
            styling(questionParagraph, 'questionText', 'new');
        }
        else {
            styling(questionParagraph, 'questionText', 'unselected');
        }
        questionParagraph.textContent = question;
        questionParagraph.style.lineHeight = 1;
        questionParagraph.style.wordWrap = 'break-word';
        questionParagraph.id = `question${group}${formattedId}`;

        // Creating the box for the question
        const questionCell = document.createElement('td');
        questionCell.appendChild(questionParagraph);
        questionCell.style.width = '80%';
        questionRow.appendChild(questionCell);

        // Adding show/hide button to the dashboard
        const questionShow = document.createElement('p');
        questionShow.alt = 'Show this message on stream.';
        questionShow.textContent = 'Show';
        questionShow.style.lineHeight = 0.1;
        if (store) {
            styling(questionShow, 'questionText', 'new');
        }
        else {
            styling(questionShow, 'questionText', 'unselected');
        }
        questionShow.id = `show${group}${formattedId}`;
        questionShow.onclick = function () {
            showBubble(formattedId, group);
        };
        questionShow.style.whiteSpace = 'nowrap';
        questionShow.style.cursor = 'pointer';
        // Creating the box for the show/hide button
        const toggleCell = document.createElement('td');
        toggleCell.appendChild(questionShow);
        toggleCell.justifyContent = 'center';
        toggleCell.alignItems = 'center';
        toggleCell.style.width = '20%';
        questionRow.appendChild(toggleCell);

        // Adding delete button to the dashboard
        const questionDelete = document.createElement('p');
        questionDelete.alt = 'Remove this message from queue.';
        questionDelete.textContent = 'Delete';
        questionDelete.style.lineHeight = 0.1;
        if (store) {
            styling(questionDelete, 'questionText', 'new');
        }
        else {
            styling(questionDelete, 'questionText', 'unselected');
        }
        questionDelete.id = `del${formattedId}`;
        questionDelete.onclick = function () {
            deleteMessage(formattedId, group);
        };
        questionDelete.style.whiteSpace = 'nowrap';
        questionDelete.style.cursor = 'pointer';
        // Creating the box for the delete button
        toggleCell.appendChild(questionDelete);

        // Creating the body for name and time
        const tableBody2 = document.createElement('table')
        tableBody2.appendChild(questionRow);
        tableBody2.style.width = '100%';
        tableBody2.style.borderSpacing = `${localStorage.getItem(`dashboardButtonsunselectedBorderSpacing`)}px`;
        tableBody2.style.tableLayout = 'fixed';
        tableBody2.style.borderTopLeftRadius = `${window.dashboardStyle.queue.unselected.question.border.rounding.topLeft}px`;
        if (store) {
            styling(tableBody2, 'question', 'new');
        }
        else {
            styling(tableBody2, 'question', 'unselected');
        }
        tableBody2.style.borderBottomLeftRadius = `${Math.max(localStorage.getItem(`dashboardQueueunselectedBorderRoundingbottomLeft`), localStorage.getItem(`dashboardQueueunselectedquestionBorderRoundingbottomLeft`))}px`;
        tableBody2.style.borderBottomRightRadius = `${Math.max(localStorage.getItem(`dashboardQueueunselectedBorderRoundingbottomRight`), localStorage.getItem(`dashboardQueueunselectedquestionBorderRoundingbottomRight`))}px`;
        tableBody2.id = `questionBody${group}${formattedId}`;
        tableDiv.appendChild(tableBody2);

        // Saving the question in localStorage if it's a new submission
        if (store) {
            localStorage.setItem(`recorded${group}${formattedId}`, `${user}#${formattedTime}#${question}`);

            // Stats
            localStorage.setItem(`commandUsage${group}`, +localStorage.getItem(`commandUsage${group}`) + 1);
            localStorage.setItem(`commandTotalUsage`, +localStorage.getItem(`commandTotalUsage`) + 1);
            fillStats();
        }


        window.id++;
    }

    // If duplicated question was already sent
    else {
        // If a response is set in bot.js
        if (localStorage.getItem(`commandDuplicationResponses${groupRaw}`) != "") {
            const responses = localStorage.getItem(`commandDuplicationResponses${groupRaw}`).split('\n');
            const response = responses[Math.floor(Math.random() * responses.length)].replace('%user', user);
            // Send the duplication response
            switch(site) {
                case 'twitch':
                    sendTwitchMessage(response);
                    break;
            }
        }

        // Stats
        localStorage.setItem(`spamFilterRejection`, +localStorage.getItem(`spamFilterRejection`) + 1);
        fillStats();
    }

    // Responding to the command
    if (response != "" && !duplicated) {
        const responses = localStorage.getItem(`commandResponses${groupRaw}`).split('\n');
        const response = responses[Math.floor(Math.random() * responses.length)].replace('%user', user);
        // Handling webhook integration
        discordWebhook(user, formattedTime, question, groupRaw);
        switch(site) {
            case 'twitch':
                sendTwitchMessage(response);
                break;
        }
    }
}