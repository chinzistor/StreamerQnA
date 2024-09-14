function styleButton(object, style) {
    // Editting the selected button
    let cell = document.getElementById(`${object}ConfigCell`);
    cell.style.borderTop               = `${localStorage.getItem(`dashboardButtons${style}BordertopThickness`)}px `
                                       + `${localStorage.getItem(`dashboardButtons${style}BordertopStyle`)} `
                                       + `${localStorage.getItem(`dashboardButtons${style}BordertopColor`)}`;
    cell.style.borderBottom            = `${localStorage.getItem(`dashboardButtons${style}BorderbottomThickness`)}px `
                                       + `${localStorage.getItem(`dashboardButtons${style}BorderbottomStyle`)} `
                                       + `${localStorage.getItem(`dashboardButtons${style}BorderbottomColor`)}`;
    cell.style.borderLeft              = `${localStorage.getItem(`dashboardButtons${style}BorderleftThickness`)}px `
                                       + `${localStorage.getItem(`dashboardButtons${style}BorderleftStyle`)} `
                                       + `${localStorage.getItem(`dashboardButtons${style}BorderleftColor`)}`;
    cell.style.borderRight             = `${localStorage.getItem(`dashboardButtons${style}BorderrightThickness`)}px `
                                       + `${localStorage.getItem(`dashboardButtons${style}BorderrightStyle`)} `
                                       + `${localStorage.getItem(`dashboardButtons${style}BorderrightColor`)}`;
    cell.style.borderSpacing           = `${localStorage.getItem(`dashboardButtons${style}BorderSpacing`)}px`;
    cell.style.backgroundColor         =    localStorage.getItem(`dashboardButtons${style}BackgroundColor`);
    cell.style.borderTopLeftRadius     = `${localStorage.getItem(`dashboardButtons${style}BorderRoundingtopLeft`)}px`;
    cell.style.borderTopRightRadius    = `${localStorage.getItem(`dashboardButtons${style}BorderRoundingtopRight`)}px`;
    cell.style.borderBottomLeftRadius  = `${localStorage.getItem(`dashboardButtons${style}BorderRoundingbottomLeft`)}px`;
    cell.style.borderBottomRightRadius = `${localStorage.getItem(`dashboardButtons${style}BorderRoundingbottomRight`)}px`;
    switch(style) {
        case 'selected':
        case 'hoverselected':
            cell.addEventListener('mouseenter', () => {
                styleButton(object, 'hoverselected');
            });
            cell.addEventListener('mouseleave', () => {
                styleButton(object, 'selected');
            });
            break;
        case 'hover':
        case 'alert':
        case 'unselected':
            cell.addEventListener('mouseenter', () => {
                styleButton(object, 'hover');
            });
            cell.addEventListener('mouseleave', () => {
                styleButton(object, 'unselected');
            });
            break;
    }
    cell.style.transition = `background-color ${localStorage.getItem(`dashboardButtonsHoverTime`) / 1000}s `
                          + `${localStorage.getItem(`dashboardButtonsHoverType`)}, `
                          + `border ${localStorage.getItem(`dashboardButtonsHoverTime`) / 1000}s `
                          + `${localStorage.getItem(`dashboardButtonsHoverType`)}, `
                          + `border-radius ${localStorage.getItem(`dashboardButtonsHoverTime`) / 1000}s `
                          + `${localStorage.getItem(`dashboardButtonsHoverType`)}`;
    //cell.style.transitionTimingFunction = localStorage.getItem(`dashboardButtonsunselectedHoverType`);

    // Editting the selected text
    let text = document.getElementById(`${object}ConfigText`);
    text.style.fontSize = `${localStorage.getItem(`dashboardButtons${style}FontSize`)}pt`;
    text.style.color = localStorage.getItem(`dashboardButtons${style}Color`);
    text.style.fontFamily = localStorage.getItem(`dashboardButtons${style}Font`);
    text.style.lineHeight = 0;
    text.style.transition = `color ${localStorage.getItem(`dashboardButtonsHoverTime`) / 1000}s `
                          + `${localStorage.getItem(`dashboardButtonsHoverType`)}, `
                          + `font-family ${localStorage.getItem(`dashboardButtonsHoverTime`) / 1000}s `
                          + `${localStorage.getItem(`dashboardButtonsHoverType`)}, `
                          + `font-size ${localStorage.getItem(`dashboardButtonsHoverTime`) / 1000}s `
                          + `${localStorage.getItem(`dashboardButtonsHoverType`)}`;
}