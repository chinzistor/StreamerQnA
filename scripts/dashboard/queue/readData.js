// Reading stored questions and adding them to the dashboard
function readData() {
    window.id = 0;
    window.width = 0;
    // Reseting the bubble
    localStorage.setItem('bubbleData', '-none-');
    // Listing all keys
    let keys = [];
    for (let a = localStorage.length; a > 0; a--) {
        const key = localStorage.key(a - 1);
        if (key.startsWith('recorded')) {
            keys.push(key);
        }
    }
    // Sorting the questions alphabetically
    keys.sort()
    // Going through all questions
    let timeCells = [];
    let groupNames = localStorage.getItem('commands').split('%-%');
    for (let a = 0; a < keys.length; a++) {
        for (let b = 0; b < groupNames.length; b++) {
            // Removing spaces from group names for id purposes
            let group = groupNames[b].replace(" ", "");
            const key = keys[a];
            // Checking if the key of a data contains one of the groups' name
            if (key.includes(group)) {
                // Getting the numerical ID of the group
                const id = key.replace(group, '').replace('recorded', '');
                const numId = +id;
                // Making sure upcoming questions from chat will have a unique numerical ID
                if (numId >= window.id) {
                    window.id = numId + 1;
                }
                // Splitting up the data into usable variables
                const value = localStorage.getItem(key);
                let index1 = value.indexOf('#');
                let user = value.slice(0, index1);
                let index2 = value.indexOf('#', index1 + '#'.length);
                let time = +value.slice(index1 + '#'.length, index2);
                let question = value.slice(index2 + "#".length);
                let questionGroup = key.replace(id, '').replace('recorded', '');

                // Handling the data
                addQuestion(user, questionGroup, time, question, false, id, "")

                // Listing all the timeCell ids
                const formattedId = id.toString().padStart(4, '0');
                timeCells.push(`timeCell${group}${formattedId}`);
            }
        }
    }
/*
    // Setting the width of all timeCell elements to a dynamic value
    for (let a = 0; a < timeCells.length; a++) {
        const timeCell = document.getElementById(timeCells[a]);
        if (timeCell) {
            timeCell.style.width = `${window.width}px`;
        }
    }*/
}