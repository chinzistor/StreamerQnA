function toggleSpamFilter() {
    // Getting the canvas element based on its id
    const canvas = document.getElementById(`spamCheckboxCanvas`);
    const switchSquare = canvas.getContext('2d');

    let strokeSize = localStorage.getItem('dashboardToggleStokeSize');
    let size = localStorage.getItem('dashboardToggleSize');
    switch(localStorage.getItem(`rejectRepeatedQuestion`)) {
        case null:
        case 'false':
            // Toggling the variable
            localStorage.setItem(`rejectRepeatedQuestion`, 'true');
            // Redrawing the canvas
            switchSquare.fillStyle = localStorage.getItem('dashboardToggleselectedBackgroundColor');
            switchSquare.fillRect(size/4, size/4, size, size);
            switchSquare.strokeStyle = localStorage.getItem('dashboardToggleselectedColor');
            switchSquare.lineWidth = strokeSize;
            switchSquare.strokeRect(size/4 + strokeSize/2, size/4 + strokeSize/2, size*0.75-strokeSize, size*0.75-strokeSize);
            document.getElementById(`spamConfigTable`).style.display = '';
            break;
        case 'true':
            // Toggling the variable
            localStorage.setItem(`rejectRepeatedQuestion`, 'false');
            // Redrawing the canvas
            switchSquare.fillStyle = localStorage.getItem('dashboardToggleunselectedBackgroundColor');
            switchSquare.fillRect(size/4, size/4, size, size);
            switchSquare.strokeStyle = localStorage.getItem('dashboardToggleunselectedColor');
            switchSquare.lineWidth = strokeSize;
            switchSquare.strokeRect(size/4 + strokeSize/2, size/4 + strokeSize/2, size*0.75-strokeSize, size*0.75-strokeSize);
            document.getElementById(`spamConfigTable`).style.display = 'none';
            break;
    }
}

function toggleSpamGroupCheck() {
    // Getting the canvas element based on its id
    const canvas = document.getElementById(`spamCheckGroupsCanvas`);
    const switchSquare = canvas.getContext('2d');

    let strokeSize = localStorage.getItem('dashboardToggleStokeSize');
    let size = localStorage.getItem('dashboardToggleSize');
    switch(localStorage.getItem(`allowCheckGroup`)) {
        case null:
        case 'false':
            // Toggling the variable
            localStorage.setItem(`allowCheckGroup`, 'true');
            // Redrawing the canvas
            switchSquare.fillStyle = localStorage.getItem('dashboardToggleselectedBackgroundColor');
            switchSquare.fillRect(size/4, size/4, size, size);
            switchSquare.strokeStyle = localStorage.getItem('dashboardToggleselectedColor');
            switchSquare.lineWidth = strokeSize;
            switchSquare.strokeRect(size/4 + strokeSize/2, size/4 + strokeSize/2, size*0.75-strokeSize, size*0.75-strokeSize);
            break;
        case 'true':
            // Toggling the variable
            localStorage.setItem(`allowCheckGroup`, 'false');
            // Redrawing the canvas
            switchSquare.fillStyle = localStorage.getItem('dashboardToggleunselectedBackgroundColor');
            switchSquare.fillRect(size/4, size/4, size, size);
            switchSquare.strokeStyle = localStorage.getItem('dashboardToggleunselectedColor');
            switchSquare.lineWidth = strokeSize;
            switchSquare.strokeRect(size/4 + strokeSize/2, size/4 + strokeSize/2, size*0.75-strokeSize, size*0.75-strokeSize);
            break;
    }
}

function toggleSpamOtherUsers() {
    // Getting the canvas element based on its id
    const canvas = document.getElementById(`spamCheckUsersCanvas`);
    const switchSquare = canvas.getContext('2d');

    let strokeSize = localStorage.getItem('dashboardToggleStokeSize');
    let size = localStorage.getItem('dashboardToggleSize');
    switch(localStorage.getItem(`allowSimilarQuestionFromDifferentUser`)) {
        case null:
        case 'false':
            // Toggling the variable
            localStorage.setItem(`allowSimilarQuestionFromDifferentUser`, 'true');
            // Redrawing the canvas
            switchSquare.fillStyle = localStorage.getItem('dashboardToggleselectedBackgroundColor');
            switchSquare.fillRect(size/4, size/4, size, size);
            switchSquare.strokeStyle = localStorage.getItem('dashboardToggleselectedColor');
            switchSquare.lineWidth = strokeSize;
            switchSquare.strokeRect(size/4 + strokeSize/2, size/4 + strokeSize/2, size*0.75-strokeSize, size*0.75-strokeSize);
            break;
        case 'true':
            // Toggling the variable
            localStorage.setItem(`allowSimilarQuestionFromDifferentUser`, 'false');
            // Redrawing the canvas
            switchSquare.fillStyle = localStorage.getItem('dashboardToggleunselectedBackgroundColor');
            switchSquare.fillRect(size/4, size/4, size, size);
            switchSquare.strokeStyle = localStorage.getItem('dashboardToggleunselectedColor');
            switchSquare.lineWidth = strokeSize;
            switchSquare.strokeRect(size/4 + strokeSize/2, size/4 + strokeSize/2, size*0.75-strokeSize, size*0.75-strokeSize);
            break;
    }
}
