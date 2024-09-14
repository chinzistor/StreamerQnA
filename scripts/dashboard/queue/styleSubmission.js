function styleSubmission(type, group, formattedId) {
    styling(document.getElementById(`${group}${formattedId}`), 'table', type);
    styling(document.getElementById(`nameCell${group}${formattedId}`), 'name', type);
    styling(document.getElementById(`name${group}${formattedId}`), 'nameText', type);
    document.getElementById(`nameCell${group}${formattedId}`).style.borderTopLeftRadius =
        `${Math.max(localStorage.getItem(`dashboardQueue${type}nameBorderRoundingtopLeft`),
                    localStorage.getItem(`dashboardQueue${type}BorderRoundingtopLeft`))}px`
    if (document.getElementById(`timeCell${group}${formattedId}`)) {
        styling(document.getElementById(`timeCell${group}${formattedId}`), 'time', type);
        styling(document.getElementById(`time${group}${formattedId}`), 'timeText', type);
        document.getElementById(`timeCell${group}${formattedId}`).style.borderTopRightRadius =
            `${Math.max(localStorage.getItem(`dashboardQueue${type}timeBorderRoundingtopRight`),
                        localStorage.getItem(`dashboardQueue${type}BorderRoundingtopRight`))}px`
    }
    else {
        document.getElementById(`nameCell${group}${formattedId}`).style.borderTopRightRadius =
            `${Math.max(localStorage.getItem(`dashboardQueue${type}nameBorderRoundingtopRight`),
                        localStorage.getItem(`dashboardQueue${type}BorderRoundingtopRight`))}px`
    }
    styling(document.getElementById(`questionBody${group}${formattedId}`), 'question', type);
    styling(document.getElementById(`question${group}${formattedId}`), 'questionText', type);
    document.getElementById(`questionBody${group}${formattedId}`).style.borderBottomLeftRadius =
        `${Math.max(localStorage.getItem(`dashboardQueue${type}questionBorderRoundingbottomLeft`),
                    localStorage.getItem(`dashboardQueue${type}BorderRoundingbottomLeft`))}px`
    document.getElementById(`questionBody${group}${formattedId}`).style.borderBottomRightRadius =
        `${Math.max(localStorage.getItem(`dashboardQueue${type}questionBorderRoundingbottomRight`),
                    localStorage.getItem(`dashboardQueue${type}BorderRoundingbottomRight`))}px`

    styling(document.getElementById(`del${formattedId}`), 'questionText', type);
    styling(document.getElementById(`show${group}${formattedId}`), 'questionText', type);
}