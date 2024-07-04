function deleteMessage(id, group) {
    hideBubble(id, group);
    localStorage.removeItem(`${group}${id}`);
    localStorage.setItem('bubbleData', '-none-');
    //console.log(localStorage.getItem('bubbleData'));
    document.getElementById(`${group}${id}`).remove();
}