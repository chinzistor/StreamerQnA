function transferData() {
    if (localStorage.getItem('transferComplete') == null) {
        localStorage.clear();
        // Bot config transfer
        if (window.username != null) {
            localStorage.setItem('connectionTwitchUserName', window.username);
        }
        else {
            localStorage.setItem('connectionTwitchUserName', '');
        }
        if (window.oauthToken != null) {
            localStorage.setItem('connectionTwitchOAuth', window.oauthToken);
        }
        else {
            localStorage.setItem('connectionTwitchOAuth', '');
        }
        localStorage.setItem(`connectionTwitchTimeOut`, '1000');


        // Styling config transfer
        let types = ['selected', 'unselected'];
        let borders = ['top', 'bottom', 'left', 'right'];
        let corners = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
        let cells = ['name', 'time', 'question'];



        // Dashboard styling
        if (window.dashboardStyle != null) {
            localStorage.setItem('dashboardBackgroundColor', window.dashboardStyle.background);
            localStorage.setItem('dashboardButtonsBorderSpacing', window.dashboardStyle.buttons.borderSpacing);

            for (let a in types) {
                // Button styling
                localStorage.setItem(`dashboardButtons${types[a]}BackgroundColor`, window.dashboardStyle.buttons[types[a]].background);
                localStorage.setItem(`dashboardButtons${types[a]}Color`, window.dashboardStyle.buttons[types[a]].color);
                localStorage.setItem(`dashboardButtons${types[a]}Font`, window.dashboardStyle.buttons[types[a]].font);
                localStorage.setItem(`dashboardButtons${types[a]}FontSize`, window.dashboardStyle.buttons[types[a]].size);

                localStorage.setItem(`dashboardButtons${types[a]}BorderSpacing`, window.dashboardStyle.buttons[types[a]].border.spacing);
                for (let b in borders) {
                    localStorage.setItem(`dashboardButtons${types[a]}Border${borders[b]}Style`, window.dashboardStyle.buttons[types[a]].border[borders[b]].style);
                    localStorage.setItem(`dashboardButtons${types[a]}Border${borders[b]}Color`, window.dashboardStyle.buttons[types[a]].border[borders[b]].color);
                    localStorage.setItem(`dashboardButtons${types[a]}Border${borders[b]}Thickness`, window.dashboardStyle.buttons[types[a]].border[borders[b]].thickness);
                }
                for (let b in corners) {
                    localStorage.setItem(`dashboardButtons${types[a]}BorderRounding${corners[b]}`, window.dashboardStyle.buttons[types[a]].border.rounding[corners[b]]);
                }

                // Queues and commands styling
                for (let b in cells) {
                    localStorage.setItem(`dashboardQueue${types[a]}${cells[b]}BackgroundColor`, window.dashboardStyle.queue[types[a]][cells[b]].background);
                    localStorage.setItem(`dashboardQueue${types[a]}${cells[b]}Color`, window.dashboardStyle.queue[types[a]][cells[b]].color);
                    localStorage.setItem(`dashboardQueue${types[a]}${cells[b]}Font`, window.dashboardStyle.queue[types[a]][cells[b]].font);
                    localStorage.setItem(`dashboardQueue${types[a]}${cells[b]}FontSize`, window.dashboardStyle.queue[types[a]][cells[b]].size);

                    for (let c in borders) {
                        localStorage.setItem(`dashboardQueue${types[a]}${cells[b]}Border${borders[c]}Style`, window.dashboardStyle.queue[types[a]][cells[b]].border[borders[c]].style);
                        localStorage.setItem(`dashboardQueue${types[a]}${cells[b]}Border${borders[c]}Color`, window.dashboardStyle.queue[types[a]][cells[b]].border[borders[c]].color);
                        localStorage.setItem(`dashboardQueue${types[a]}${cells[b]}Border${borders[c]}Thickness`, window.dashboardStyle.queue[types[a]][cells[b]].border[borders[c]].thickness);
                    }
                    for (let c in corners) {
                        localStorage.setItem(`dashboardQueue${types[a]}${cells[b]}BorderRounding${corners[c]}`, window.dashboardStyle.queue[types[a]][cells[b]].border.rounding[corners[c]]);
                    }
                }
                localStorage.setItem(`dashboardQueue${types[a]}BorderSpacing`, window.dashboardStyle.queue[types[a]].border.spacing);
                for (let b in borders) {
                    localStorage.setItem(`dashboardQueue${types[a]}Border${borders[b]}Style`, window.dashboardStyle.queue[types[a]].border[borders[b]].style);
                    localStorage.setItem(`dashboardQueue${types[a]}Border${borders[b]}Color`, window.dashboardStyle.queue[types[a]].border[borders[b]].color);
                    localStorage.setItem(`dashboardQueue${types[a]}Border${borders[b]}Thickness`, window.dashboardStyle.queue[types[a]].border[borders[b]].thickness);
                }
                for (let b in corners) {
                    localStorage.setItem(`dashboardQueue${types[a]}BorderRounding${corners[b]}`, window.dashboardStyle.queue[types[a]].border.rounding[corners[b]]);
                }
            }
        }


        else {
            localStorage.setItem('dashboardBackgroundColor', '#000033');
            localStorage.setItem('dashboardButtonsBorderSpacing', '0');

            // Selected
            // Button styling
            localStorage.setItem(`dashboardButtonsselectedBackgroundColor`, '#00AAAA');
            localStorage.setItem(`dashboardButtonsselectedColor`, '#FFFF00');
            localStorage.setItem(`dashboardButtonsselectedFont`, 'sans serif');
            localStorage.setItem(`dashboardButtonsselectedFontSize`, '8');

            localStorage.setItem(`dashboardButtonsselectedBorderSpacing`, '0');
            for (let b in borders) {
                localStorage.setItem(`dashboardButtonsselectedBorder${borders[b]}Style`, 'solid');
                localStorage.setItem(`dashboardButtonsselectedBorder${borders[b]}Color`, '#FFFF00');
                localStorage.setItem(`dashboardButtonsselectedBorder${borders[b]}Thickness`, '2');
            }
            for (let b in corners) {
                localStorage.setItem(`dashboardButtonsselectedBorderRounding${corners[b]}`, '10');
            }

            // Queues and commands styling
            // name
            localStorage.setItem(`dashboardQueueselectednameBackgroundColor`, '#33FFFF');
            localStorage.setItem(`dashboardQueueselectednameColor`, '#AAAA00');
            localStorage.setItem(`dashboardQueueselectednameFont`, 'sans serif');
            localStorage.setItem(`dashboardQueueselectednameFontSize`, '10');

            for (let c in borders) {
                localStorage.setItem(`dashboardQueueselectednameBorder${borders[c]}Style`, 'solid');
                localStorage.setItem(`dashboardQueueselectednameBorder${borders[c]}Color`, '#00FFFF');
                localStorage.setItem(`dashboardQueueselectednameBorder${borders[c]}Thickness`, '2');
            }
            for (let c in corners) {
                localStorage.setItem(`dashboardQueueselectednameBorderRounding${corners[c]}`, '10');
            }
            // time
            localStorage.setItem(`dashboardQueueselectedtimeBackgroundColor`, '#33FFFF');
            localStorage.setItem(`dashboardQueueselectedtimeColor`, '#AAAA00');
            localStorage.setItem(`dashboardQueueselectedtimeFont`, 'sans serif');
            localStorage.setItem(`dashboardQueueselectedtimeFontSize`, '10');

            for (let c in borders) {
                localStorage.setItem(`dashboardQueueselectedtimeBorder${borders[c]}Style`, 'solid');
                localStorage.setItem(`dashboardQueueselectedtimeBorder${borders[c]}Color`, '#00FFFF');
                localStorage.setItem(`dashboardQueueselectedtimeBorder${borders[c]}Thickness`, '2');
            }
            for (let c in corners) {
                localStorage.setItem(`dashboardQueueselectedtimeBorderRounding${corners[c]}`, '10');
            }
            // question
            localStorage.setItem(`dashboardQueueselectedquestionBackgroundColor`, '#008888');
            localStorage.setItem(`dashboardQueueselectedquestionColor`, '#AAAA00');
            localStorage.setItem(`dashboardQueueselectedquestionFont`, 'sans serif');
            localStorage.setItem(`dashboardQueueselectedquestionFontSize`, '10');

            for (let c in borders) {
                localStorage.setItem(`dashboardQueueselectedquestionBorder${borders[c]}Style`, 'solid');
                localStorage.setItem(`dashboardQueueselectedquestionBorder${borders[c]}Color`, '#00FFFF');
                localStorage.setItem(`dashboardQueueselectedquestionBorder${borders[c]}Thickness`, '2');
            }
            for (let c in corners) {
                localStorage.setItem(`dashboardQueueselectedquestionBorderRounding${corners[c]}`, '10');
            }

            localStorage.setItem(`dashboardQueueselectedBorderSpacing`, window.dashboardStyle.queue.selected.border.spacing);
            for (let b in borders) {
                localStorage.setItem(`dashboardQueueselectedBorder${borders[b]}Style`, 'solid');
                localStorage.setItem(`dashboardQueueselectedBorder${borders[b]}Color`, '#008888');
                localStorage.setItem(`dashboardQueueselectedBorder${borders[b]}Thickness`, '2');
            }
            for (let b in corners) {
                localStorage.setItem(`dashboardQueueselectedBorderRounding${corners[b]}`, '10');
            }

            // Unselected
            // Button styling
            localStorage.setItem(`dashboardButtonsunselectedBackgroundColor`, '#0000AA');
            localStorage.setItem(`dashboardButtonsunselectedColor`, '#0000FF');
            localStorage.setItem(`dashboardButtonsunselectedFont`, 'sans serif');
            localStorage.setItem(`dashboardButtonsunselectedFontSize`, '10');

            localStorage.setItem(`dashboardButtonsunselectedBorderSpacing`, '0');
            for (let b in borders) {
                localStorage.setItem(`dashboardButtonsunselectedBorder${borders[b]}Style`, 'solid');
                localStorage.setItem(`dashboardButtonsunselectedBorder${borders[b]}Color`, '#00FFFF');
                localStorage.setItem(`dashboardButtonsunselectedBorder${borders[b]}Thickness`, '2');
            }
            for (let b in corners) {
                localStorage.setItem(`dashboardButtonsunselectedBorderRounding${corners[b]}`, '10');
            }

            // Queues and commands styling
            // name
            localStorage.setItem(`dashboardQueueunselectednameBackgroundColor`, '#00AAAA');
            localStorage.setItem(`dashboardQueueunselectednameColor`, '#00FFFF');
            localStorage.setItem(`dashboardQueueunselectednameFont`, 'sans serif');
            localStorage.setItem(`dashboardQueueunselectednameFontSize`, '10');

            for (let c in borders) {
                localStorage.setItem(`dashboardQueueunselectednameBorder${borders[c]}Style`, 'solid');
                localStorage.setItem(`dashboardQueueunselectednameBorder${borders[c]}Color`, '#008888');
                localStorage.setItem(`dashboardQueueunselectednameBorder${borders[c]}Thickness`, '2');
            }
            for (let c in corners) {
                localStorage.setItem(`dashboardQueueunselectednameBorderRounding${corners[c]}`, '10');
            }
            // time
            localStorage.setItem(`dashboardQueueunselectedtimeBackgroundColor`, '#00AAAA');
            localStorage.setItem(`dashboardQueueunselectedtimeColor`, '#00FFFF');
            localStorage.setItem(`dashboardQueueunselectedtimeFont`, 'sans serif');
            localStorage.setItem(`dashboardQueueunselectedtimeFontSize`, '10');

            for (let c in borders) {
                localStorage.setItem(`dashboardQueueunselectedtimeBorder${borders[c]}Style`, 'solid');
                localStorage.setItem(`dashboardQueueunselectedtimeBorder${borders[c]}Color`, '#008888');
                localStorage.setItem(`dashboardQueueunselectedtimeBorder${borders[c]}Thickness`, '2');
            }
            for (let c in corners) {
                localStorage.setItem(`dashboardQueueunselectedtimeBorderRounding${corners[c]}`, '10');
            }
            // question
            localStorage.setItem(`dashboardQueueunselectedquestionBackgroundColor`, '#000055');
            localStorage.setItem(`dashboardQueueunselectedquestionColor`, '#00FFFF');
            localStorage.setItem(`dashboardQueueunselectedquestionFont`, 'sans serif');
            localStorage.setItem(`dashboardQueueunselectedquestionFontSize`, '10');

            for (let c in borders) {
                localStorage.setItem(`dashboardQueueunselectedquestionBorder${borders[c]}Style`, 'solid');
                localStorage.setItem(`dashboardQueueunselectedquestionBorder${borders[c]}Color`, '#008888');
                localStorage.setItem(`dashboardQueueunselectedquestionBorder${borders[c]}Thickness`, '2');
            }
            for (let c in corners) {
                localStorage.setItem(`dashboardQueueunselectedquestionBorderRounding${corners[c]}`, '10');
            }

            localStorage.setItem(`dashboardQueueunselectedborderSpacing`, window.dashboardStyle.queue.unselected.border.spacing);
            for (let b in borders) {
                localStorage.setItem(`dashboardQueueunselectedborder${borders[b]}Style`, 'solid');
                localStorage.setItem(`dashboardQueueunselectedborder${borders[b]}Color`, '#008888');
                localStorage.setItem(`dashboardQueueunselectedborder${borders[b]}Thickness`, '2');
            }
            for (let b in corners) {
                localStorage.setItem(`dashboardQueueunselectedborderRounding${corners[b]}`, '10');
            }
        }


        // Config data for things that were not used in version 0.41
        localStorage.setItem(`dashboardtimeFormat`, '%h:%m:%s');

        localStorage.setItem(`dashboardButtonAlertBackgroundColor`, '#FF0000');
        localStorage.setItem(`dashboardButtonsHoverTime`, '0.25');
        localStorage.setItem(`dashboardButtonsHoverType`, 'ease');
        localStorage.setItem('dashboardButtonSelected', 'unselected');

        localStorage.setItem(`dashboardButtonsalertBackgroundColor`, '#FF0000');
        localStorage.setItem(`dashboardButtonsalertColor`, '#00FFFF');
        localStorage.setItem(`dashboardButtonsalertFont`, 'sans serif');
        localStorage.setItem(`dashboardButtonsalertFontSize`, '10');

        localStorage.setItem(`dashboardButtonsalertBorderSpacing`, '0');
        for (let b in borders) {
            localStorage.setItem(`dashboardButtonsalertBorder${borders[b]}Style`, 'solid');
            localStorage.setItem(`dashboardButtonsalertBorder${borders[b]}Color`, '#FFAA00');
            localStorage.setItem(`dashboardButtonsalertBorder${borders[b]}Thickness`, '2');
        }
        for (let b in corners) {
            localStorage.setItem(`dashboardButtonsalertBorderRounding${corners[b]}`, '10');
        }

        localStorage.setItem(`dashboardButtonshoverBackgroundColor`, '#00FFFF');
        localStorage.setItem(`dashboardButtonshoverColor`, '#0000FF');
        localStorage.setItem(`dashboardButtonshoverFont`, 'sans serif');
        localStorage.setItem(`dashboardButtonshoverFontSize`, '10');

        localStorage.setItem(`dashboardButtonshoverBorderSpacing`, '0');
        for (let b in borders) {
            localStorage.setItem(`dashboardButtonshoverBorder${borders[b]}Style`, 'solid');
            localStorage.setItem(`dashboardButtonshoverBorder${borders[b]}Color`, '#00FFFF');
            localStorage.setItem(`dashboardButtonshoverBorder${borders[b]}Thickness`, '2');
        }
        for (let b in corners) {
            localStorage.setItem(`dashboardButtonshoverBorderRounding${corners[b]}`, '10');
        }

        localStorage.setItem(`dashboardButtonshoverselectedBackgroundColor`, '#00FFFF');
        localStorage.setItem(`dashboardButtonshoverselectedColor`, '#0000FF');
        localStorage.setItem(`dashboardButtonshoverselectedFont`, 'sans serif');
        localStorage.setItem(`dashboardButtonshoverselectedFontSize`, '10');

        localStorage.setItem(`dashboardButtonshoverselectedBorderSpacing`, '0');
        for (let b in borders) {
            localStorage.setItem(`dashboardButtonshoverselectedBorder${borders[b]}Style`, 'solid');
            localStorage.setItem(`dashboardButtonshoverselectedBorder${borders[b]}Color`, '#FFFF00');
            localStorage.setItem(`dashboardButtonshoverselectedBorder${borders[b]}Thickness`, '2');
        }
        for (let b in corners) {
            localStorage.setItem(`dashboardButtonshoverselectedBorderRounding${corners[b]}`, '10');
        }



        localStorage.setItem(`dashboardQueueHoverTime`, '0.25');
        localStorage.setItem(`dashboardQueueHoverType`, 'ease');

        localStorage.setItem(`dashboardQueuenewnameBackgroundColor`, '#FF0000');
        localStorage.setItem(`dashboardQueuenewtimeBackgroundColor`, '#FF0000');
        localStorage.setItem(`dashboardQueuenewquestionBackgroundColor`, '#FF8800');
        localStorage.setItem(`dashboardQueuehovernameBackgroundColor`, '#00AAFF');
        localStorage.setItem(`dashboardQueuehovertimeBackgroundColor`, '#00AAFF');
        localStorage.setItem(`dashboardQueuehoverquestionBackgroundColor`, '#0000AA');
        localStorage.setItem(`dashboardQueuehoverselectednameBackgroundColor`, '#00FFFF');
        localStorage.setItem(`dashboardQueuehoverselectedtimeBackgroundColor`, '#00FFFF');
        localStorage.setItem(`dashboardQueuehoverselectedquestionBackgroundColor`, '#00AAAA');
        for (let a in cells) {
            localStorage.setItem(`dashboardQueuenew${cells[a]}Font`, 'sans serif');
            localStorage.setItem(`dashboardQueuenew${cells[a]}FontSize`, '10');
            localStorage.setItem(`dashboardQueuehover${cells[a]}Font`, 'sans serif');
            localStorage.setItem(`dashboardQueuehover${cells[a]}FontSize`, '10');
            localStorage.setItem(`dashboardQueuehoverselected${cells[a]}Font`, 'sans serif');
            localStorage.setItem(`dashboardQueuehoverselected${cells[a]}FontSize`, '10');
            for (let b in borders) {
                localStorage.setItem(`dashboardQueuenew${cells[a]}Border${borders[b]}Style`, 'solid');
                localStorage.setItem(`dashboardQueuenew${cells[a]}Border${borders[b]}Color`, '#00FFFF');
                localStorage.setItem(`dashboardQueuenew${cells[a]}Border${borders[b]}Thickness`, '2');
                localStorage.setItem(`dashboardQueuehover${cells[a]}Border${borders[b]}Style`, 'solid');
                localStorage.setItem(`dashboardQueuehover${cells[a]}Border${borders[b]}Color`, '#00FFFF');
                localStorage.setItem(`dashboardQueuehover${cells[a]}Border${borders[b]}Thickness`, '2');
                localStorage.setItem(`dashboardQueuehoverselected${cells[a]}Border${borders[b]}Style`, 'solid');
                localStorage.setItem(`dashboardQueuehoverselected${cells[a]}Border${borders[b]}Color`, '#FFFF00');
                localStorage.setItem(`dashboardQueuehoverselected${cells[a]}Border${borders[b]}Thickness`, '2');
            }
            for (let b in corners) {
                localStorage.setItem(`dashboardQueuenew${cells[a]}BorderRounding${corners[b]}`, '10');
                localStorage.setItem(`dashboardQueuehover${cells[a]}BorderRounding${corners[b]}`, '10');
                localStorage.setItem(`dashboardQueuehoverselected${cells[a]}BorderRounding${corners[b]}`, '10');
            }
        }

        localStorage.setItem(`dashboardQueuenewnameColor`, '#00FFFF');
        localStorage.setItem(`dashboardQueuenewtimeColor`, '#00FFFF');
        localStorage.setItem(`dashboardQueuenewquestionColor`, '#00AAAA');

        localStorage.setItem(`dashboardQueuehovernameColor`, '#0000FF');
        localStorage.setItem(`dashboardQueuehovertimeColor`, '#0000FF');
        localStorage.setItem(`dashboardQueuehoverquestionColor`, '#00FFFF');

        localStorage.setItem(`dashboardQueuehoverselectednameColor`, '#FFFF00');
        localStorage.setItem(`dashboardQueuehoverselectedtimeColor`, '#FFFF00');
        localStorage.setItem(`dashboardQueuehoverselectedquestionColor`, '#AAAA00');

        localStorage.setItem(`dashboardQueuenewBorderRoundingtopLeft`, '30');
        localStorage.setItem(`dashboardQueuehoverBorderRoundingtopLeft`, '30');
        localStorage.setItem(`dashboardQueuehoverselectedBorderRoundingtopLeft`, '30');
        localStorage.setItem(`dashboardQueuenewBorderRoundingtopRight`, '10');
        localStorage.setItem(`dashboardQueuehoverBorderRoundingtopRight`, '10');
        localStorage.setItem(`dashboardQueuehoverselectedBorderRoundingtopRight`, '10');
        localStorage.setItem(`dashboardQueuenewBorderRoundingbottomLeft`, '10');
        localStorage.setItem(`dashboardQueuehoverBorderRoundingbottomLeft`, '10');
        localStorage.setItem(`dashboardQueuehoverselectedBorderRoundingbottomLeft`, '10');
        localStorage.setItem(`dashboardQueuenewBorderRoundingbottomRight`, '30');
        localStorage.setItem(`dashboardQueuehoverBorderRoundingbottomRight`, '30');
        localStorage.setItem(`dashboardQueuehoverselectedBorderRoundingbottomRight`, '30');

        for (let b in borders) {
            localStorage.setItem(`dashboardQueuenewBorder${borders[b]}Style`, 'solid');
            localStorage.setItem(`dashboardQueuenewBorder${borders[b]}Color`, '#00FFFF');
            localStorage.setItem(`dashboardQueuenewBorder${borders[b]}Thickness`, '2');
            localStorage.setItem(`dashboardQueuehoverBorder${borders[b]}Style`, 'solid');
            localStorage.setItem(`dashboardQueuehoverBorder${borders[b]}Color`, '#00FFFF');
            localStorage.setItem(`dashboardQueuehoverBorder${borders[b]}Thickness`, '2');
            localStorage.setItem(`dashboardQueuehoverselectedBorder${borders[b]}Style`, 'solid');
            localStorage.setItem(`dashboardQueuehoverselectedBorder${borders[b]}Color`, '#FFFF00');
            localStorage.setItem(`dashboardQueuehoverselectedBorder${borders[b]}Thickness`, '2');
        }

        localStorage.setItem('dashboardTableBordertopThickness', '2');
        localStorage.setItem('dashboardTableBordertopStyle', 'solid');
        localStorage.setItem('dashboardTableBordertopColor', '#008888');
        localStorage.setItem('dashboardTableBorderbottomThickness', '2');
        localStorage.setItem('dashboardTableBorderbottomStyle', 'solid');
        localStorage.setItem('dashboardTableBorderbottomColor', '#008888');
        localStorage.setItem('dashboardTableBorderleftThickness', '2');
        localStorage.setItem('dashboardTableBorderleftStyle', 'solid');
        localStorage.setItem('dashboardTableBorderleftColor', '#008888');
        localStorage.setItem('dashboardTableBorderrightThickness', '2');
        localStorage.setItem('dashboardTableBorderrightStyle', 'solid');
        localStorage.setItem('dashboardTableBorderrightColor', '#008888');

        localStorage.setItem('dashboardTableBorderRoundingtopLeft', '30');
        localStorage.setItem('dashboardTableBorderRoundingtopRight', '10');
        localStorage.setItem('dashboardTableBorderRoundingbottomLeft', '10');
        localStorage.setItem('dashboardTableBorderRoundingbottomRight', '30');

        localStorage.setItem('dashboardTableBackgroundColor', '#0000AA');

        localStorage.setItem('dashboardTableFont', 'sans serif');
        localStorage.setItem('dashboardTableColor', '#00FFFF');
        localStorage.setItem('dashboardTableFontSize', '10');

        localStorage.setItem('dashboardToggleSize', '25');
        localStorage.setItem('dashboardToggleStokeSize', '4');
        localStorage.setItem('dashboardToggleunselectedBackgroundColor', '#0000FF');
        localStorage.setItem('dashboardToggleunselectedColor', '#00FFFF');
        localStorage.setItem('dashboardToggleselectedBackgroundColor', '#00FFFF');
        localStorage.setItem('dashboardToggleselectedColor', '#FFFF00');

        localStorage.setItem('dashboardFont', 'sans serif');
        localStorage.setItem('dashboardColor', '#00FFFF');
        localStorage.setItem('dashboardFontSize', '10');


        localStorage.setItem('dashboardButtonsHoverTypeCubicBezier', '0,0,0,0');
        localStorage.setItem('dashboardButtonsHoverTypeSteps', '0,start');

        localStorage.setItem('dashboardQueueSelected', 'unselected');
        localStorage.setItem('dashboardQueueSection', 'border');
        localStorage.setItem('dashboardBubbleSection', 'border');





        // Bubble styling
        if (window.bubbleStyle != null) {
            localStorage.setItem(`bubbleTransparency`, window.bubbleStyle.tablestyle.transparency);
            localStorage.setItem(`bubbleBorderSpacing`, window.bubbleStyle.tablestyle.border.spacing);
            for (let b in corners) {
                localStorage.setItem(`bubbleBorderRounding${corners[b]}`, window.bubbleStyle.tablestyle.border.rounding[corners[b]]);
            }
            for (let b in borders) {
                localStorage.setItem(`bubbleBorder${borders[b]}Style`, window.bubbleStyle.tablestyle.border[borders[b]].style);
                localStorage.setItem(`bubbleBorder${borders[b]}Color`, window.bubbleStyle.tablestyle.border[borders[b]].color);
                localStorage.setItem(`bubbleBorder${borders[b]}Thickness`, window.bubbleStyle.tablestyle.border[borders[b]].thickness);
                localStorage.setItem(`bubbleBorder${borders[b]}Trasnparency`, window.bubbleStyle.tablestyle.border[borders[b]].transparency);
            }
            for (let b in corners) {
                localStorage.setItem(`bubbleBorder${corners[b]}`, window.bubbleStyle.tablestyle.border.rounding[corners[b]]);
            }
            for (let a in cells) {
                localStorage.setItem(`bubble${cells[a]}BackgroundColor`, window.bubbleStyle.texts[cells[a]].background);
                localStorage.setItem(`bubble${cells[a]}Color`, window.bubbleStyle.texts[cells[a]].color);
                localStorage.setItem(`bubble${cells[a]}FontSize`, window.bubbleStyle.texts[cells[a]].size);
                localStorage.setItem(`bubble${cells[a]}Font`, window.bubbleStyle.texts[cells[a]].font);
                localStorage.setItem(`bubble${cells[a]}BackgroundTransparency`, window.bubbleStyle.texts[cells[a]].backgroundTransparency);
                localStorage.setItem(`bubble${cells[a]}Trasnparency`, window.bubbleStyle.texts[cells[a]].transparency);
                for (let b in borders) {
                    localStorage.setItem(`bubble${cells[a]}Border${borders[b]}Style`, window.bubbleStyle.texts[cells[a]].border[borders[b]].style);
                    localStorage.setItem(`bubble${cells[a]}Border${borders[b]}Color`, window.bubbleStyle.texts[cells[a]].border[borders[b]].color);
                    localStorage.setItem(`bubble${cells[a]}Border${borders[b]}Thickness`, window.bubbleStyle.texts[cells[a]].border[borders[b]].thickness);
                    localStorage.setItem(`bubble${cells[a]}Border${borders[b]}Trasnparency`, window.bubbleStyle.texts[cells[a]].border[borders[b]].transparency);
                }
                for (let c in corners) {
                    localStorage.setItem(`bubble${cells[a]}BorderRounding${corners[c]}`, window.bubbleStyle.texts[cells[a]].border.rounding[corners[c]]);
                }
            }
            localStorage.setItem(`bubbletimeFormat`, window.bubbleStyle.texts.time.format);
        }


        else {
            localStorage.setItem(`bubbleTransparency`, '1');
            localStorage.setItem(`bubbleBorderSpacing`, '0');
            for (let b in corners) {
                localStorage.setItem(`bubbleBorderRounding${corners[b]}`, '10');
            }
            for (let b in borders) {
                localStorage.setItem(`bubbleBorder${borders[b]}Style`, 'solid');
                localStorage.setItem(`bubbleBorder${borders[b]}Color`, '#00FFFF');
                localStorage.setItem(`bubbleBorder${borders[b]}Thickness`, '2');
                localStorage.setItem(`bubbleBorder${borders[b]}Trasnparency`, '1');
            }

            localStorage.setItem(`bubblenameBackgroundColor`, '#33FFFF');
            localStorage.setItem(`bubblenameColor`, `#008888`);
            localStorage.setItem(`bubblenameFontSize`, `15`);
            localStorage.setItem(`bubblenameFont`, `sans serif`);
            localStorage.setItem(`bubblenameBackgroundTransparency`, `1`);
            localStorage.setItem(`bubblenameTrasnparency`, `1`);
            for (let b in borders) {
                localStorage.setItem(`bubblenameBorder${borders[b]}Style`, 'solid');
                localStorage.setItem(`bubblenameBorder${borders[b]}Color`, '#00FFFF');
                localStorage.setItem(`bubblenameBorder${borders[b]}Thickness`, '2');
                localStorage.setItem(`bubblenameBorder${borders[b]}Trasnparency`, '1');
            }
            for (let c in corners) {
                localStorage.setItem(`bubblenameBorderRounding${corners[c]}`, '10');
            }

            localStorage.setItem(`bubbletimeBackgroundColor`, '#33FFFF');
            localStorage.setItem(`bubbletimeColor`, `#008888`);
            localStorage.setItem(`bubbletimeFontSize`, `15`);
            localStorage.setItem(`bubbletimeFont`, `sans serif`);
            localStorage.setItem(`bubbletimeBackgroundTransparency`, `1`);
            localStorage.setItem(`bubbletimeTrasnparency`, `1`);
            for (let b in borders) {
                localStorage.setItem(`bubbletimeBorder${borders[b]}Style`, 'solid');
                localStorage.setItem(`bubbletimeBorder${borders[b]}Color`, '#00FFFF');
                localStorage.setItem(`bubbletimeBorder${borders[b]}Thickness`, '2');
                localStorage.setItem(`bubbletimeBorder${borders[b]}Trasnparency`, '1');
            }
            for (let c in corners) {
                localStorage.setItem(`bubbletimeBorderRounding${corners[c]}`, '10');
            }
            localStorage.setItem(`bubbletimeFormat`, '%h:%m:%s');

            localStorage.setItem(`bubblequestionBackgroundColor`, '#33FFFF');
            localStorage.setItem(`bubblequestionColor`, `#008888`);
            localStorage.setItem(`bubblequestionFontSize`, `15`);
            localStorage.setItem(`bubblequestionFont`, `sans serif`);
            localStorage.setItem(`bubblequestionBackgroundTransparency`, `1`);
            localStorage.setItem(`bubblequestionTrasnparency`, `1`);
            for (let b in borders) {
                localStorage.setItem(`bubblequestionBorder${borders[b]}Style`, 'solid');
                localStorage.setItem(`bubblequestionBorder${borders[b]}Color`, '#00FFFF');
                localStorage.setItem(`bubblequestionBorder${borders[b]}Thickness`, '2');
                localStorage.setItem(`bubblequestionBorder${borders[b]}Trasnparency`, '1');
            }
            for (let c in corners) {
                localStorage.setItem(`bubblequestionBorderRounding${corners[c]}`, '10');
            }
        }



        // Further styling options
        localStorage.setItem('styleSelection', 'Dashboard');





        // Commands config transfer
        if (window.commands != null) {
            let num = 0;
            let commandList = null;
            for (let groupRaw in window.commands) {
                num++;
                localStorage.setItem(`commandName${num}`, groupRaw);
                if (commandList == null) {
                    commandList = groupRaw;
                }
                else {
                    commandList = `${commandList}%-%${groupRaw}`;
                }
                let group = groupRaw.replace(" ", "");
                // Aliases
                if (window.commands[groupRaw].aliases.length <= 0) {
                    localStorage.setItem(`commandAliases${groupRaw}`, '');
                }
                else {
                    localStorage.setItem(`commandAliases${groupRaw}`, window.commands[groupRaw].aliases[0]);
                }
                if (window.commands[groupRaw].aliases.length > 1) {
                    for (let a = 1; a < window.commands[groupRaw].aliases.length; a++) {
                        localStorage.setItem(`commandAliases${groupRaw}`, `${localStorage.getItem(`commandAliases${groupRaw}`)}\n${window.commands[groupRaw].aliases[a]}`);
                    }
                }
                // Responses
                if (window.commands[groupRaw].response.length <= 0) {
                    localStorage.setItem(`commandResponses${groupRaw}`, '');
                }
                else {
                    localStorage.setItem(`commandResponses${groupRaw}`, window.commands[groupRaw].response[0]);
                }
                if (window.commands[groupRaw].response.length > 1) {
                    for (let a = 1; a < window.commands[groupRaw].response.length; a++) {
                        localStorage.setItem(`commandResponses${groupRaw}`, `${localStorage.getItem(`commandResponses${groupRaw}`)}\n${window.commands[groupRaw].response[a]}`);
                    }
                }
                // Duplication responses
                if (window.commands[groupRaw].duplicationResponse.length <= 0) {
                    localStorage.setItem(`commandDuplicationResponses${groupRaw}`, '');
                }
                else {
                    localStorage.setItem(`commandDuplicationResponses${groupRaw}`, window.commands[groupRaw].duplicationResponse[0]);
                }
                if (window.commands[groupRaw].duplicationResponse.length > 1) {
                    for (let a = 1; a < window.commands[groupRaw].duplicationResponse.length; a++) {
                        localStorage.setItem(`commandDuplicationResponses${groupRaw}`, `${localStorage.getItem(`commandDuplicationResponses${groupRaw}`)}\n${window.commands[groupRaw].duplicationResponse[a]}`);
                    }
                }

                // Discord webhook
                localStorage.setItem(`commandDiscordEnable${groupRaw}`, window.commands[groupRaw].discord.enabled);
                localStorage.setItem(`commandDiscordURL${groupRaw}`, window.commands[groupRaw].discord.webhookUrl);
                localStorage.setItem(`commandDiscordColor${groupRaw}`, window.commands[groupRaw].discord.color);
            }
            localStorage.setItem('commandAmount', num);
            localStorage.setItem('commands', commandList);
        }


        else {
            let commands = ['Questions', 'Requests', 'Compliments'];
            for (let a in commands) {
                localStorage.setItem(`commandName${a}`, commands[a]);
                let group = commands[a].replace(" ", "");
                // Discord webhook
                localStorage.setItem(`commandDiscordEnable${commands[a]}`, 'false');
                localStorage.setItem(`commandDiscordURL${commands[a]}`, '');
                localStorage.setItem(`commandDiscordColor${commands[a]}`, '#00FFFF');
            }
            localStorage.setItem('commandAliasesQuestions', 'question');
            localStorage.setItem('commandResponsesQuestions', '%user your question has been saved.\nYour question will be soon answered, %user');
            localStorage.setItem('commandDuplicationResponsesQuestions', "%user this question was already submitted.\n%user we've seen this question already.");

            localStorage.setItem('commandAliasesRequests', 'request\nreq');
            localStorage.setItem('commandResponsesRequests', '%user your request has been stored.');
            localStorage.setItem('commandDuplicationResponsesRequests', "%user this request is already submitted.");

            localStorage.setItem('commandAliasesCompliments', 'compliment\ncomp');
            localStorage.setItem('commandResponsesCompliments', "%user we've recieved your compliment.");
            localStorage.setItem('commandDuplicationResponsesCompliments', "%user yes, we know, someone already said that.");

            localStorage.setItem('commandAmount', 3);
            localStorage.setItem('commands', 'Questions%-%Requests%-%Compliments');
        }



        // Spam filter settings transfer
        if (window.allowSQFDU != null) {
            localStorage.setItem('allowSimilarQuestionFromDifferentUser', window.allowSQFDU);
        }
        else {
            localStorage.setItem('allowSimilarQuestionFromDifferentUser', 'false');
        }

        if (window.allowRQ != null) {
            localStorage.setItem('rejectRepeatedQuestion', window.allowRQ);
        }
        else {
            localStorage.setItem('rejectRepeatedQuestion', 'false');
        }

        if (window.checkGroup != null) {
            localStorage.setItem('allowCheckGroup', window.checkGroup);
        }
        else {
            localStorage.setItem('allowCheckGroup', 'false');
        }

        if (window.similaritySensitivity != null) {
            localStorage.setItem('similaritySensitivity', window.similaritySensitivity);
        }
        else {
            localStorage.setItem('similaritySensitivity', '0.5');
        }


        // Saving that the transfer is complete
        localStorage.setItem('transferComplete', 'true');
    }
}