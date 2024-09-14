function refreshConnection() {
    if (localStorage.getItem('connectiontwitchActive') == 'true') {
        switch(checkTwitchState()) {
            case 'Closing':
            case 'Closed':
            case 'Unknown':
                connectTwitch();
                break;
        }
    }
    else {
        switch(checkTwitchState()) {
            case 'Open':
            case 'Opening':
                closeTwitch();
                break;
        }
    }
}