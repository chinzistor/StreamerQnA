// Getting the local time formatted based on formatting settings
function getTime() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let hours12 = now.getHours();
    let period = hours12 >= 12 ? 'PM' : 'AM';
    hours12 = (hours12 % 12) || 12;
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let format = window.bubbleStyle.texts.time.format;
    format = format.replace('%h', hours).replace('%H', hours12).replace('%m', minutes).replace('%s', seconds).replace('%p', period);
    return format;
}