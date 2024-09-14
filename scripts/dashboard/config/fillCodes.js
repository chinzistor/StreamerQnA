function fillCodes() {
    document.getElementById('TwitchUserName').value = localStorage.getItem('connectionTwitchUserName');
    document.getElementById('TwitchOAuth').value = localStorage.getItem('connectionTwitchOAuth');
    document.getElementById('TwitchTimeOut').value = +localStorage.getItem('connectionTwitchTimeOut');

    if (localStorage.getItem(`connectiontwitchActive`) == null) {
        localStorage.setItem(`connectiontwitchActive`, 'true');
    }

    document.getElementById('spamSensitivityBar').value = localStorage.getItem('similaritySensitivity') * 1000;
    document.getElementById('sensitivityValue').textContent = Math.round(localStorage.getItem('similaritySensitivity') * 100);

    document.getElementById('styleButtonChoice').value = localStorage.getItem('dashboardButtonSelected');

    document.getElementById('styleDashboardFontInput').value = localStorage.getItem('dashboardFont');
    document.getElementById('styleDashboardFontSizeInput').value = localStorage.getItem('dashboardFontSize');
    document.getElementById('styleDashboardFontColorInput').value = localStorage.getItem('dashboardColor');

    document.getElementById('styleTransitionTimeInput').value = localStorage.getItem('dashboardButtonsHoverTime');
    document.getElementById('styleTransitionTimeInput').style.width = `${localStorage.getItem('dashboardFontSize') * 5}px`

    document.getElementById('styleTransitionSteps').style.width = `${localStorage.getItem('dashboardFontSize') * 5}px`

    let transitionStyle = localStorage.getItem('dashboardButtonsHoverType');
    let parts = transitionStyle.split('(');
    document.getElementById('styleTransitionTypeInput').value = parts[0];
    if (transitionStyle.includes('cubic-bezier')) {
        let values = localStorage.getItem('dashboardButtonsHoverTypeCubicBezier').split(',');
        for (let a = 0; a < 4; a++) {
            document.getElementById(`styleTransitionCubicBezier${a}`).style.display = '';
            if (values[a] == null || values[a] == '') {
                document.getElementById(`styleTransitionCubicBezier${a}`).value = 0;
            }
            else {
                document.getElementById(`styleTransitionCubicBezier${a}`).value = +values[a];
            }
        }
        document.getElementById('styleTransitionSteps').style.display = 'none';
        document.getElementById('styleTransitionStepsSelect').style.display = 'none';
        document.getElementById('styleTransitionStepsText').style.display = 'none';
    }

    else if (transitionStyle.includes('steps')) {
        let values = localStorage.getItem('dashboardButtonsHoverTypeSteps').split(',');
        document.getElementById('styleTransitionSteps').value = +values[0];
        document.getElementById('styleTransitionStepsSelect').value = values[1];

        for (let a = 0; a < 4; a++) {
            document.getElementById(`styleTransitionCubicBezier${a}`).style.display = 'none';
        }
        document.getElementById('styleTransitionSteps').style.display = '';
        document.getElementById('styleTransitionStepsSelect').style.display = '';
        document.getElementById('styleTransitionStepsText').style.display = '';
    }

    else {
        document.getElementById('styleTransitionTypeInput').value = transitionStyle;
        for (let a = 0; a < 4; a++) {
            document.getElementById(`styleTransitionCubicBezier${a}`).style.display = 'none';
        }
        document.getElementById('styleTransitionSteps').style.display = 'none';
        document.getElementById('styleTransitionStepsSelect').style.display = 'none';
        document.getElementById('styleTransitionStepsText').style.display = 'none';
    }

    for (let a = 0; a < 4; a++) {
        const bezierInput = document.getElementById(`styleTransitionCubicBezier${a}`);
        bezierInput.style.width = `${localStorage.getItem('dashboardFontSize') * 4}px`;
        bezierInput.addEventListener('input', function() {
            localStorage.setItem('dashboardButtonsHoverType', `${buttonSelectTransition.value}(${document.getElementById('styleTransitionCubicBezier0').value},`
                                                                                            + `${document.getElementById('styleTransitionCubicBezier1').value},`
                                                                                            + `${document.getElementById('styleTransitionCubicBezier2').value},`
                                                                                            + `${document.getElementById('styleTransitionCubicBezier3').value})`);
            localStorage.setItem('dashboardButtonsHoverTypeCubicBezier', `${document.getElementById('styleTransitionCubicBezier0').value},`
                                                                       + `${document.getElementById('styleTransitionCubicBezier1').value},`
                                                                       + `${document.getElementById('styleTransitionCubicBezier2').value},`
                                                                       + `${document.getElementById('styleTransitionCubicBezier3').value}`);
        });
    }

    document.getElementById('styleTransitionSteps').addEventListener('input', function() {
        localStorage.setItem('dashboardButtonsHoverType', `steps(${document.getElementById('styleTransitionSteps').value}, `
                                                              + `${document.getElementById('styleTransitionStepsSelect').value})`);
        localStorage.setItem('dashboardButtonsHoverTypeSteps', `${document.getElementById('styleTransitionSteps').value},`
                                                             + `${document.getElementById('styleTransitionStepsSelect').value}`);
    });
    document.getElementById('styleTransitionStepsSelect').addEventListener('change', function() {
        localStorage.setItem('dashboardButtonsHoverType', `steps(${document.getElementById('styleTransitionSteps').value}, `
                                                              + `${document.getElementById('styleTransitionStepsSelect').value})`);
        localStorage.setItem('dashboardButtonsHoverTypeSteps', `${document.getElementById('styleTransitionSteps').value},`
                                                             + `${document.getElementById('styleTransitionStepsSelect').value}`);
    });
}