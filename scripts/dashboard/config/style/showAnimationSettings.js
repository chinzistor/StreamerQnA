function showAnimationSettings() {
    if (buttonSelectTransition.value == 'cubic-bezier') {
        localStorage.setItem('dashboardButtonsHoverType', `cubic-bezier(${document.getElementById('styleTransitionCubicBezier0').value},${document.getElementById('styleTransitionCubicBezier1').value},${document.getElementById('styleTransitionCubicBezier2').value},${document.getElementById('styleTransitionCubicBezier3').value})`);
        localStorage.setItem('dashboardButtonsHoverTypeCubicBezier', `${document.getElementById('styleTransitionCubicBezier0').value},${document.getElementById('styleTransitionCubicBezier1').value},${document.getElementById('styleTransitionCubicBezier2').value},${document.getElementById('styleTransitionCubicBezier3').value}`);

        document.getElementById('styleTransitionCubicBezier0').style.display = '';
        document.getElementById('styleTransitionCubicBezier1').style.display = '';
        document.getElementById('styleTransitionCubicBezier2').style.display = '';
        document.getElementById('styleTransitionCubicBezier3').style.display = '';

        document.getElementById('styleTransitionSteps').style.display = 'none';
        document.getElementById('styleTransitionStepsText').style.display = 'none';
        document.getElementById('styleTransitionStepsSelect').style.display = 'none';
    }
    else if (buttonSelectTransition.value == 'steps') {
        localStorage.setItem('dashboardButtonsHoverType', `steps(${document.getElementById('styleTransitionSteps').value}, ${document.getElementById('styleTransitionStepsSelect').value})`);
        localStorage.setItem('dashboardButtonsHoverTypeSteps', `${document.getElementById('styleTransitionSteps').value},${document.getElementById('styleTransitionStepsSelect').value}`);
        document.getElementById('styleTransitionCubicBezier0').style.display = 'none';
        document.getElementById('styleTransitionCubicBezier1').style.display = 'none';
        document.getElementById('styleTransitionCubicBezier2').style.display = 'none';
        document.getElementById('styleTransitionCubicBezier3').style.display = 'none';

        document.getElementById('styleTransitionSteps').style.display = '';
        document.getElementById('styleTransitionStepsText').style.display = '';
        document.getElementById('styleTransitionStepsSelect').style.display = '';
    }
    else {
        localStorage.setItem('dashboardButtonsHoverType', buttonSelectTransition.value);
        document.getElementById('styleTransitionCubicBezier0').style.display = 'none';
        document.getElementById('styleTransitionCubicBezier1').style.display = 'none';
        document.getElementById('styleTransitionCubicBezier2').style.display = 'none';
        document.getElementById('styleTransitionCubicBezier3').style.display = 'none';

        document.getElementById('styleTransitionSteps').style.display = 'none';
        document.getElementById('styleTransitionStepsText').style.display = 'none';
        document.getElementById('styleTransitionStepsSelect').style.display = 'none';
    }
}