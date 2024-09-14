function styleSelector(section) {
    localStorage.setItem('styleSelection', section);
    let names = ['Dashboard', 'Buttons', 'Queue', 'Bubble'];
    for (let a in names) {
        document.getElementById(`style${names[a]}Settings`).style.display = 'none';
    }
    document.getElementById(`style${section}Settings`).style.display = '';

    if (section == 'Dashboard' || section == 'Bubble') {
        document.getElementById(`styleTransition`).style.display = 'none';
    }
    else {
        document.getElementById(`styleTransition`).style.display = '';
        const buttonSetTransitionTime = document.getElementById('styleTransitionTimeInput');
        buttonSetTransitionTime.addEventListener('change', function() {
            localStorage.setItem(`dashboard${section}HoverTime`, buttonSetTransitionTime.value * 1000);
        });
    }

    if (section == 'Dashboard') {
        const elements = document.getElementsByClassName(`nonDashboard`);
        for (let a = 0; a < elements.length; a++) {
            elements[a].style.display = 'none';
        }
    }
    else {
        const elements = document.getElementsByClassName(`nonDashboard`);
        for (let a = 0; a < elements.length; a++) {
            elements[a].style.display = '';
        }
    }
    updateTableStyle();
}