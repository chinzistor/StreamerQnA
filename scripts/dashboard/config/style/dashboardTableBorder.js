function dashboardTableBorder(id, type, side) {
    if (id == 'dashboard') {
        switch(side) {
            case 'top':
                document.getElementById('styleTableBody').style.borderTop       = `${localStorage.getItem(`dashboardTableBordertopThickness`)}px ${localStorage.getItem(`dashboardTableBordertopStyle`)} ${localStorage.getItem(`dashboardTableBordertopColor`)}`;
                break;
            case 'bottom':
                document.getElementById('styleTableBody').style.borderBottom    = `${localStorage.getItem(`dashboardTableBorderbottomThickness`)}px ${localStorage.getItem(`dashboardTableBorderbottomStyle`)} ${localStorage.getItem(`dashboardTableBorderbottomColor`)}`;
                break;
            case 'left':
                document.getElementById('styleTableBody').style.borderLeft      = `${localStorage.getItem(`dashboardTableBorderleftThickness`)}px ${localStorage.getItem(`dashboardTableBorderleftStyle`)} ${localStorage.getItem(`dashboardTableBorderleftColor`)}`;
                break;
            case 'right':
                document.getElementById('styleTableBody').style.borderRight     = `${localStorage.getItem(`dashboardTableBorderrightThickness`)}px ${localStorage.getItem(`dashboardTableBorderrightStyle`)} ${localStorage.getItem(`dashboardTableBorderrightColor`)}`;
                break;
        }
    }
    if (id == 'button') {
        switch(side) {
            case 'top':
                document.getElementById('styleTableBody').style.borderTop       = `${localStorage.getItem(`dashboardButtons${type}BordertopThickness`)}px ${localStorage.getItem(`dashboardButtons${type}BordertopStyle`)} ${localStorage.getItem(`dashboardButtons${type}BordertopColor`)}`;
                break;
            case 'bottom':
                document.getElementById('styleTableBody').style.borderBottom    = `${localStorage.getItem(`dashboardButtons${type}BorderbottomThickness`)}px ${localStorage.getItem(`dashboardButtons${type}BorderbottomStyle`)} ${localStorage.getItem(`dashboardButtons${type}BorderbottomColor`)}`;
                break;
            case 'left':
                document.getElementById('styleTableBody').style.borderLeft      = `${localStorage.getItem(`dashboardButtons${type}BorderleftThickness`)}px ${localStorage.getItem(`dashboardButtons${type}BorderleftStyle`)} ${localStorage.getItem(`dashboardButtons${type}BorderleftColor`)}`;
                break;
            case 'right':
                document.getElementById('styleTableBody').style.borderRight     = `${localStorage.getItem(`dashboardButtons${type}BorderrightThickness`)}px ${localStorage.getItem(`dashboardButtons${type}BorderrightStyle`)} ${localStorage.getItem(`dashboardButtons${type}BorderrightColor`)}`;
                break;
        }
    }
}