// Getting the local time formatted based on formatting settings
function getTime(time, page) {
    //let now = new Date();
    //console.log(now);
    const date = new Date(time);
    const years = date.getFullYear().toString().padStart(4, '0');
    const months = (date.getMonth() + 1).toString().padStart(2, '0');
    const days = date.getDate().toString().padStart(2, '0');
    const hours24 = date.getHours().toString().padStart(2, '0');
    const hours12 = hours24 % 12 || 12;
    const period = hours24 >= 12 ? 'PM' : 'AM';
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    let format;
    switch(page) {
        case 'bubble':
            format = localStorage.getItem(`bubbletimeFormat`);
            break;
        case 'dashboard':
            format = localStorage.getItem(`dashboardtimeFormat`);
            break;
        default:
            format = '%h:%m:%s';
    }
    format = format.replace('%y', years).replace('%M', months).replace('%d', days).replace('%h', hours24).replace('%H', hours12).replace('%m', minutes).replace('%s', seconds).replace('%p', period);
    return format;
}