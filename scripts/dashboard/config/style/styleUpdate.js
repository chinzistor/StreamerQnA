function styleUpdate() {
    document.getElementById('styleDashboardFont').style.fontFamily      = localStorage.getItem('dashboardFont');
    document.getElementById('styleDashboardFontSize').style.fontFamily  = localStorage.getItem('dashboardFont');
    document.getElementById('styleDashboardFontColor').style.fontFamily = localStorage.getItem('dashboardFont');

    document.getElementById('styleDashboardFont').style.fontSize      = `${localStorage.getItem('dashboardFontSize')}pt`;
    document.getElementById('styleDashboardFontSize').style.fontSize  = `${localStorage.getItem('dashboardFontSize')}pt`;
    document.getElementById('styleDashboardFontColor').style.fontSize = `${localStorage.getItem('dashboardFontSize')}pt`;

    document.getElementById('styleDashboardFont').style.color      = localStorage.getItem('dashboardFontColor');
    document.getElementById('styleDashboardFontSize').style.color  = localStorage.getItem('dashboardFontColor');
    document.getElementById('styleDashboardFontColor').style.color = localStorage.getItem('dashboardFontColor');
}