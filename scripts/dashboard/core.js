function core() {
    window.twitchSocket = '';

    if (localStorage.getItem('connectiontwitchActive') == 'true') {
        connectTwitch();
    }
}