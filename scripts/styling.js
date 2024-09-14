function styling(element, object, style) {
    // element: which HTML element to style
    // object: which part the object is within the bubble
    // style: which style should be used

    let type;
    let page;
    switch(object) {
        case 'name':
        case 'nameText':
            type = 'name';
            break;
        case 'time':
        case 'timeText':
            type = 'time';
            break;
        case 'question':
        case 'questionText':
            type = 'question';
            break;
    }

    if (element) {
        if (style == 'bubble') {
            switch(object) {
                case 'table':
                    element.style.borderTop    = `${localStorage.getItem(`bubbleTableBordertopThickness`)}px `
                                               + `${localStorage.getItem(`bubbleTableBordertopStyle`)} `
                                               + `${localStorage.getItem(`bubbleTableBordertopColor`)}`;
                    element.style.borderBottom = `${localStorage.getItem(`bubbleTableBorderbottomThickness`)}px `
                                               + `${localStorage.getItem(`bubbleTableBorderbottomStyle`)} `
                                               + `${localStorage.getItem(`bubbleTableBorderbottomColor`)}`;
                    element.style.borderLeft   = `${localStorage.getItem(`bubbleTableBorderleftThickness`)}px `
                                               + `${localStorage.getItem(`bubbleTableBorderleftStyle`)} `
                                               + `${localStorage.getItem(`bubbleTableBorderleftColor`)}`;
                    element.style.borderRight  = `${localStorage.getItem(`bubbleTableBorderrightThickness`)}px `
                                               + `${localStorage.getItem(`bubbleTableBorderrightStyle`)} `
                                               + `${localStorage.getItem(`bubbleTableBorderrightColor`)}`;
                    element.style.borderTopLeftRadius     = `${localStorage.getItem(`bubbleTableBorderRoundingtopLeft`)}px`;
                    element.style.borderTopRightRadius    = `${localStorage.getItem(`bubbleTableBorderRoundingtopRight`)}px`;
                    element.style.borderBottomLeftRadius  = `${localStorage.getItem(`bubbleTableBorderRoundingbottomLeft`)}px`;
                    element.style.borderBottomRightRadius = `${localStorage.getItem(`bubbleTableBorderRoundingbottomRight`)}px`;
                    break;
                case 'name':
                case 'time':
                case 'question':
                    element.style.backgroundColor = formatColor(localStorage.getItem(`bubble${type}BackgroundColor`),
                                                                localStorage.getItem(`bubble${type}BackgroundTransparency`));
                    element.style.borderTop    = `${localStorage.getItem(`bubble${type}BordertopThickness`)}px `
                                               + `${localStorage.getItem(`bubble${type}BordertopStyle`)} `
                                               + `${formatColor(localStorage.getItem(`bubble${type}BordertopColor`),
                                                                localStorage.getItem(`bubble${type}BordertopTransparency`))}`;
                    element.style.borderBottom = `${localStorage.getItem(`bubble${type}BorderbottomThickness`)}px `
                                               + `${localStorage.getItem(`bubble${type}BorderbottomStyle`)} `
                                               + `${formatColor(localStorage.getItem(`bubble${type}BorderbottomColor`),
                                                                localStorage.getItem(`bubble${type}BorderbottomTransparency`))}`;
                    element.style.borderLeft   = `${localStorage.getItem(`bubble${type}BorderleftThickness`)}px `
                                               + `${localStorage.getItem(`bubble${type}BorderleftStyle`)} `
                                               + `${formatColor(localStorage.getItem(`bubble${type}BorderleftColor`),
                                                                localStorage.getItem(`bubble${type}BorderleftTransparency`))}`;
                    element.style.borderRight  = `${localStorage.getItem(`bubble${type}BorderrightThickness`)}px `
                                               + `${localStorage.getItem(`bubble${type}BorderrightStyle`)} `
                                               + `${formatColor(localStorage.getItem(`bubble${type}BorderrightColor`),
                                                                localStorage.getItem(`bubble${type}BorderrightTransparency`))}`;
                    element.style.borderTopLeftRadius     = `${localStorage.getItem(`bubble${type}BorderRoundingtopLeft`)}px`;
                    element.style.borderTopRightRadius    = `${localStorage.getItem(`bubble${type}BorderRoundingtopRight`)}px`;
                    element.style.borderBottomLeftRadius  = `${localStorage.getItem(`bubble${type}BorderRoundingbottomLeft`)}px`;
                    element.style.borderBottomRightRadius = `${localStorage.getItem(`bubble${type}BorderRoundingbottomRight`)}px`;
                    break;
                case 'nameText':
                case 'timeText':
                case 'questionText':
                    element.style.fontFamily = localStorage.getItem(`bubble${type}Font`);
                    element.style.fontSize   = `${localStorage.getItem(`bubble${type}FontSize`)}pt`;
                    element.style.color      = formatColor(localStorage.getItem(`bubble${type}Color`),
                                                           localStorage.getItem(`bubble${type}Trasnparency`));
                    break;
            }
            switch(object) {
                case 'nameText':
                    element.style.paddingLeft  = `${Math.max(localStorage.getItem(`bubble${type}BorderRoundingtopLeft`) / 2,
                                                             localStorage.getItem(`bubble${type}BorderRoundingtopLeft`) * 1.5)}px`;
                    element.style.paddingRight = `${localStorage.getItem(`bubble${type}BorderRoundingtopRight`) * 1.5}px`;
                    break;
                case 'timeText':
                    element.style.paddingLeft  = `${localStorage.getItem(`bubble${type}BorderRoundingtopLeft`) * 1.5}px`;
                    element.style.paddingRight = `${Math.max(localStorage.getItem(`bubble${type}BorderRoundingtopRight`) / 2,
                                                             localStorage.getItem(`bubble${type}BorderRoundingtopRight`) * 1.5)}px`;
                    break;
                case 'questionText':
                    element.style.paddingLeft  = `${Math.max(localStorage.getItem(`bubble${type}BorderRoundingbottomLeft`) / 2,
                                                             localStorage.getItem(`bubble${type}BorderRoundingbottomLeft`) * 1.5)}px`;
                    element.style.paddingRight = `${Math.max(localStorage.getItem(`bubble${type}BorderRoundingbottomRight`) / 2,
                                                             localStorage.getItem(`bubble${type}BorderRoundingbottomRight`) * 1.5)}px`;
                    break;
            }
        }

        else {
            switch(object) {
                case 'table':
                    element.style.borderTop    = `${localStorage.getItem(`dashboardQueue${style}BordertopThickness`)}px `
                                               + `${localStorage.getItem(`dashboardQueue${style}BordertopStyle`)} `
                                               + `${localStorage.getItem(`dashboardQueue${style}BordertopColor`)}`;
                    element.style.borderBottom = `${localStorage.getItem(`dashboardQueue${style}BorderbottomThickness`)}px `
                                               + `${localStorage.getItem(`dashboardQueue${style}BorderbottomStyle`)} `
                                               + `${localStorage.getItem(`dashboardQueue${style}BorderbottomColor`)}`;
                    element.style.borderLeft   = `${localStorage.getItem(`dashboardQueue${style}BorderleftThickness`)}px `
                                               + `${localStorage.getItem(`dashboardQueue${style}BorderleftStyle`)} `
                                               + `${localStorage.getItem(`dashboardQueue${style}BorderleftColor`)}`;
                    element.style.borderRight  = `${localStorage.getItem(`dashboardQueue${style}BorderrightThickness`)}px `
                                               + `${localStorage.getItem(`dashboardQueue${style}BorderrightStyle`)} `
                                               + `${localStorage.getItem(`dashboardQueue${style}BorderrightColor`)}`;
                    element.style.borderTopLeftRadius     = `${localStorage.getItem(`dashboardQueue${style}BorderRoundingtopLeft`)}px`;
                    element.style.borderTopRightRadius    = `${localStorage.getItem(`dashboardQueue${style}BorderRoundingtopRight`)}px`;
                    element.style.borderBottomLeftRadius  = `${localStorage.getItem(`dashboardQueue${style}BorderRoundingbottomLeft`)}px`;
                    element.style.borderBottomRightRadius = `${localStorage.getItem(`dashboardQueue${style}BorderRoundingbottomRight`)}px`;
                    element.style.transition = `background-color ${localStorage.getItem(`dashboardQueueHoverTime`)}s `
                                             + `${localStorage.getItem(`dashboardQueueHoverType`)}, `
                                             + `border ${localStorage.getItem(`dashboardQueueHoverTime`)}s `
                                             + `${localStorage.getItem(`dashboardQueueHoverType`)}, `
                                             + `border-radius ${localStorage.getItem(`dashboardQueueHoverTime`)}s `
                                             + `${localStorage.getItem(`dashboardQueueHoverType`)}, `
                                             + `border-color ${localStorage.getItem(`dashboardQueueHoverTime`)}s `
                                             + `${localStorage.getItem(`dashboardQueueHoverType`)}, `
                                             + `border-width ${localStorage.getItem(`dashboardQueueHoverTime`)}s `
                                             + `${localStorage.getItem(`dashboardQueueHoverType`)}`;
                    break;
                case 'name':
                case 'time':
                case 'question':
                    element.style.backgroundColor = localStorage.getItem(`dashboardQueue${style}${type}BackgroundColor`);
                    element.style.borderTop    = `${localStorage.getItem(`dashboardQueue${style}${type}BordertopThickness`)}px `
                                               + `${localStorage.getItem(`dashboardQueue${style}${type}BordertopStyle`)} `
                                               + `${localStorage.getItem(`dashboardQueue${style}${type}BordertopColor`)}`;
                    element.style.borderBottom = `${localStorage.getItem(`dashboardQueue${style}${type}BorderbottomThickness`)}px `
                                               + `${localStorage.getItem(`dashboardQueue${style}${type}BorderbottomStyle`)} `
                                               + `${localStorage.getItem(`dashboardQueue${style}${type}BorderbottomColor`)}`;
                    element.style.borderLeft   = `${localStorage.getItem(`dashboardQueue${style}${type}BorderleftThickness`)}px `
                                               + `${localStorage.getItem(`dashboardQueue${style}${type}BorderleftStyle`)} `
                                               + `${localStorage.getItem(`dashboardQueue${style}${type}BorderleftColor`)}`;
                    element.style.borderRight  = `${localStorage.getItem(`dashboardQueue${style}${type}BorderrightThickness`)}px `
                                               + `${localStorage.getItem(`dashboardQueue${style}${type}BorderrightStyle`)} `
                                               + `${localStorage.getItem(`dashboardQueue${style}${type}BorderrightColor`)}`;
                    element.style.borderTopLeftRadius     = `${localStorage.getItem(`dashboardQueue${style}${type}BorderRoundingtopLeft`)}px`;
                    element.style.borderTopRightRadius    = `${localStorage.getItem(`dashboardQueue${style}${type}BorderRoundingtopRight`)}px`;
                    element.style.borderBottomLeftRadius  = `${localStorage.getItem(`dashboardQueue${style}${type}BorderRoundingbottomLeft`)}px`;
                    element.style.borderBottomRightRadius = `${localStorage.getItem(`dashboardQueue${style}${type}BorderRoundingbottomRight`)}px`;
                    element.style.transition = `background-color ${localStorage.getItem(`dashboardQueueHoverTime`)}s `
                                             + `${localStorage.getItem(`dashboardQueueHoverType`)}, `
                                             + `border ${localStorage.getItem(`dashboardQueueHoverTime`)}s `
                                             + `${localStorage.getItem(`dashboardQueueHoverType`)}, `
                                             + `border-radius ${localStorage.getItem(`dashboardQueueHoverTime`)}s `
                                             + `${localStorage.getItem(`dashboardQueueHoverType`)}, `
                                             + `border-color ${localStorage.getItem(`dashboardQueueHoverTime`)}s `
                                             + `${localStorage.getItem(`dashboardQueueHoverType`)}, `
                                             + `border-width ${localStorage.getItem(`dashboardQueueHoverTime`)}s `
                                             + `${localStorage.getItem(`dashboardQueueHoverType`)}`;
                    break;
                case 'nameText':
                case 'timeText':
                case 'questionText':
                    element.style.fontFamily = localStorage.getItem(`dashboardQueue${style}${type}Font`);
                    element.style.fontSize   = `${localStorage.getItem(`dashboardQueue${style}${type}FontSize`)}pt`;
                    element.style.color      = localStorage.getItem(`dashboardQueue${style}${type}Color`);
                    element.style.transition = `color ${localStorage.getItem(`dashboardQueueHoverTime`)}s `
                                             + `${localStorage.getItem(`dashboardQueueHoverType`)}, `
                                             + `font-family ${localStorage.getItem(`dashboardQueueHoverTime`)}s `
                                             + `${localStorage.getItem(`dashboardQueueHoverType`)}, `
                                             + `font-size ${localStorage.getItem(`dashboardQueueHoverTime`)}s `
                                             + `${localStorage.getItem(`dashboardQueueHoverType`)}`;
                    break;
            }
            switch(object) {
                case 'nameText':
                    element.style.paddingLeft  = `${Math.max(localStorage.getItem(`dashboardQueue${style}BorderRoundingtopLeft`) / 2,
                                                             localStorage.getItem(`dashboardQueue${style}${type}BorderRoundingtopLeft`) * 1.5)}px`;
                    element.style.paddingRight = `${localStorage.getItem(`dashboardQueue${style}${type}BorderRoundingtopRight`) * 1.5}px`;
                    break;
                case 'timeText':
                    element.style.paddingLeft  = `${localStorage.getItem(`dashboardQueue${style}${type}BorderRoundingtopLeft`) * 1.5}px`;
                    element.style.paddingRight = `${Math.max(localStorage.getItem(`dashboardQueue${style}BorderRoundingtopRight`) / 2,
                                                             localStorage.getItem(`dashboardQueue${style}${type}BorderRoundingtopRight`) * 1.5)}px`;
                    break;
                case 'questionText':
                    element.style.paddingLeft  = `${Math.max(localStorage.getItem(`dashboardQueue${style}BorderRoundingbottomLeft`) / 2,
                                                             localStorage.getItem(`dashboardQueue${style}${type}BorderRoundingbottomLeft`) * 1.5)}px`;
                    element.style.paddingRight = `${Math.max(localStorage.getItem(`dashboardQueue${style}BorderRoundingbottomRight`) / 2,
                                                             localStorage.getItem(`dashboardQueue${style}${type}BorderRoundingbottomRight`) * 1.5)}px`;
                    break;
            }
        }
    }
}