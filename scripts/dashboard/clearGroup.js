function clearGroup(group) {
    let list = [];
    for (let a = 0; a < localStorage.length; a++) {
        const key = localStorage.key(a);
        if (key.includes(group)) {
            if (localStorage.getItem('bubbleData') == key) {
                localStorage.setItem('bubbleData', '-none-');
            }
            document.getElementById(key).remove();
            list.push(key);
        }
    }
    for (let a = 0; a < list.length; a++) {
        localStorage.removeItem(list[a]);
    }
}