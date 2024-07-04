function getTime() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let hours12 = now.getHours();
    let period = hours12 >= 12 ? 'PM' : 'AM';
    hours12 = (hours12 % 12) || 12;
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let format = window.bubbleStyle.texts.time.format;
    format = format.replace('%h', hours);
    format = format.replace('%H', hours12);
    format = format.replace('%m', minutes);
    format = format.replace('%s', seconds);
    format = format.replace('%p', period);
    return format;
}