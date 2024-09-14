function toggleSite(name) {
    // Getting the canvas element based on its id
    const canvas = document.getElementById(`${name}CheckboxCanvas`);
    const switchSquare = canvas.getContext('2d');

    let size = localStorage.getItem('dashboardToggleSize');
    let strokeSize = localStorage.getItem('dashboardToggleStokeSize');
    switch(localStorage.getItem(`connection${name}Active`)) {
        case null:
        case 'false':
            // Toggling the variable
            localStorage.setItem(`connection${name}Active`, 'true');
            // Redrawing the canvas
            switchSquare.fillStyle = localStorage.getItem('dashboardToggleselectedBackgroundColor');
            switchSquare.fillRect(size/4, size/4, size, size);
            switchSquare.strokeStyle = localStorage.getItem('dashboardToggleselectedColor');
            switchSquare.lineWidth = strokeSize;
            switchSquare.strokeRect(size/4 + strokeSize/2, size/4 + strokeSize/2, size*0.75-strokeSize, size*0.75-strokeSize);
            document.getElementById(`${name}ConfigTable`).style.display = '';
            break;
        case 'true':
            // Toggling the variable
            localStorage.setItem(`connection${name}Active`, 'false');
            // Redrawing the canvas
            switchSquare.fillStyle = localStorage.getItem('dashboardToggleunselectedBackgroundColor');
            switchSquare.fillRect(size/4, size/4, size, size);
            switchSquare.strokeStyle = localStorage.getItem('dashboardToggleunselectedColor');
            switchSquare.lineWidth = strokeSize;
            switchSquare.strokeRect(size/4 + strokeSize/2, size/4 + strokeSize/2, size*0.75-strokeSize, size*0.75-strokeSize);
            document.getElementById(`${name}ConfigTable`).style.display = 'none';
            break;
    }
}