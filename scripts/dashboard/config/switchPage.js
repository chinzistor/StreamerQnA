function switchPage(page) {
    switch(page) {
        case 'queue':
            document.getElementById('groups').style.display = '';
            document.getElementById('groupActionsTable').style.display = '';
            document.getElementById('questionTableBody').style.display = '';
            document.getElementById('configPage').style.display = 'none';
            document.getElementById('statsPage').style.display = 'none';
            localStorage.setItem('configPage', 'queue');
            styleButton('queue', 'selected');
            styleButton('config', 'unselected');
            styleButton('stats', 'unselected');
            break;
        case 'config':
            document.getElementById('groups').style.display = 'none';
            document.getElementById('groupActionsTable').style.display = 'none';
            document.getElementById('questionTableBody').style.display = 'none';
            document.getElementById('configPage').style.display = '';
            document.getElementById('statsPage').style.display = 'none';
            localStorage.setItem('configPage', 'config');
            styleButton('queue', 'unselected');
            styleButton('config', 'selected');
            styleButton('stats', 'unselected');
            break;
        case 'stats':
            document.getElementById('groups').style.display = 'none';
            document.getElementById('groupActionsTable').style.display = 'none';
            document.getElementById('questionTableBody').style.display = 'none';
            document.getElementById('configPage').style.display = 'none';
            document.getElementById('statsPage').style.display = '';
            localStorage.setItem('configPage', 'stats');
            styleButton('queue', 'unselected');
            styleButton('config', 'unselected');
            styleButton('stats', 'selected');
            break;
    }


    // Padding elements within tables
    document.body.offsetWidth;
    const tableSpacersLeft = document.getElementsByClassName('tableSpacerLeft');
    for (let a = 0; a < tableSpacersLeft.length; a++) {
        tableSpacersLeft[a].style.width = `${Math.max(localStorage.getItem('dashboardTableBorderRoundingtopLeft'),
                                                       localStorage.getItem('dashboardTableBorderRoundingbottomLeft'))}px`;
    }
    const tableSpacersRight = document.getElementsByClassName('tableSpacerRight');
    for (let a = 0; a < tableSpacersRight.length; a++) {
        tableSpacersRight[a].style.width = `${Math.max(localStorage.getItem('dashboardTableBorderRoundingtopRight'),
                                                       localStorage.getItem('dashboardTableBorderRoundingbottomRight'))}px`;
    }
    const tableHalf = document.getElementsByClassName('tableHalf');
    for (let a = 0; a < tableHalf.length; a++) {
        const freeSpace = tableHalf[a].parentElement.offsetWidth
                          - Math.max(localStorage.getItem('dashboardTableBorderRoundingtopRight'),
                                     localStorage.getItem('dashboardTableBorderRoundingbottomLeft'))
                          - Math.max(localStorage.getItem('dashboardTableBorderRoundingtopLeft'),
                                     localStorage.getItem('dashboardTableBorderRoundingbottomRight'));
        tableHalf[a].style.width = `${freeSpace / 2}px`;
    }
}