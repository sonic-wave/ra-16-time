import React from 'react'
import moment from 'moment';

export const DateTimePretty = (Component) => {
    return (props) => {
        let displayTime;
        const currentDate = new moment();
        const videoDate = moment(props.date);
        const differenceInHours = currentDate.diff(videoDate, 'hours');
        const differenceInDays = currentDate.diff(videoDate, 'days');

        if (differenceInHours <= 1) {
            displayTime = '12 минут назад';
        } else if (differenceInHours > 1 && differenceInHours <= 24) {
            displayTime = '5 часов назад';
        } else {
            displayTime = `${differenceInDays} дней назад`;
        }

        return <Component {...props} date={displayTime} />;
    };
};
