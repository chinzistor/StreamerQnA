// Removing a question from the queue
function deleteMessage(id, group) {
    hideBubble(id, group);
    localStorage.removeItem(`${group}${id}`);
    localStorage.setItem('bubbleData', '-none-');
    //console.log(`${group}${id}`);
    document.getElementById(`${group}${id}`).remove();
}