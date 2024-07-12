// Reading stored questions and adding them to the dashboard
function readData() {
    window.id = 0;
    // Reseting the bubble
    localStorage.setItem('bubbleData', '-none-');
    // Listing all keys
    let keys = [];
    for (let a = localStorage.length; a > 0; a--) {
        const key = localStorage.key(a - 1);
        keys.push(key);
    }
    // Sorting the questions alphabetically
    keys.sort()
    // Going through all questions
    for (let a = 0; a < keys.length; a++) {
        for (let group in window.commands) {
        const key = keys[a];
            // Checking if the key of a data contains one of the groups' name
            if (key.includes(group)) {
                // Getting the numerical ID of the group
                const id = key.replace(group, '');
                const numId = +id;
                //console.log(window.id);
                // Making sure upcoming questions from chat will have a unique numerical ID
                if (numId >= window.id) {
                    window.id = numId + 1;
                }
                //console.log(window.id);
                // Splitting up the data into usable variables
                const value = localStorage.getItem(key);
                let index1 = value.indexOf('#');
                let user = value.slice(0, index1);
                let index2 = value.indexOf('#', index1 + '#'.length);
                let time = value.slice(index1 + '#'.length, index2);
                let question = value.slice(index2 + "#".length);
                let questionGroup = key.replace(id, '');

                // Handling the data
                addQuestion(user, questionGroup, time, question, false, id, "")
                //console.log(`${user} ${time} ${question} ${questionGroup} ${id} ${key}`);
            }
        }
    }
}