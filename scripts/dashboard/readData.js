function readData() {
    window.id = 0;
    localStorage.setItem('bubbleData', '-none-');
    for (let a = 0; a < localStorage.length; a++) {
        const key = localStorage.key(a);
        for (let group in window.commands) {
            if (key.includes(group)) {
                const id = +key.replace(group, '');
                //console.log(window.id);
                if (id >= window.id) {
                    window.id = id + 1;
                }
                //console.log(window.id);
                const value = localStorage.getItem(key);
                let index1 = value.indexOf('#');
                let user = value.slice(0, index1);
                let index2 = value.indexOf('#', index1 + '#'.length);
                let time = value.slice(index1 + '#'.length, index2);
                let question = value.slice(index2 + "#".length);
                let questionGroup = key.replace(id, '');

                addQuestion(user, questionGroup, time, question, false, id)
                //console.log(`${user} ${time} ${question} ${questionGroup} ${id} ${key}`);
            }
        }
    }
}