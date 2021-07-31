import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import Style from '../style/Style';


const DisplayTime = ({ time }) => {
    const classes = Style();

    const date = new Date(time * 1000);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const hour = date.getHours();
    const minute = date.getMinutes();


    return (
        <Typography className={classes.displayTime} variant="caption">
            {`${month} ${day}, ${hour}:${minute}`}
        </Typography>
    )
}

export default DisplayTime
