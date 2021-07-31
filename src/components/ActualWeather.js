import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography/Typography'
import Style from '../style/Style';
import { ImageList, ImageListItem } from '@material-ui/core';
import DisplayTime from './DisplayTime';


const ActualWeather = ({ weather }) => {
    const classes = Style();


    return (
        <Grid container spacing={2}>
            <Grid item sm={6}>
                <Paper className={classes.resultWrapper} >
                    <Grid container direction="column" spacing={2} >
                        <Grid item sm={6}>
                            <DisplayTime time={weather?.dt} />
                            <Typography variant="h3">Gothenburg</Typography>
                            <Grid container alignItems="center" justifyContent="flex-start" spacing={2} >

                                <Grid item sm={2}>
                                    <ImageList rowHeight={50}>
                                        <ImageListItem cols={2}  >
                                            <img
                                                src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}.png`}
                                                alt="WeatherIcon"
                                                className={classes.imageListItem}
                                            />

                                        </ImageListItem>
                                    </ImageList>
                                </Grid>
                                <Grid item sm={10}>
                                    <Typography
                                        variant="h5"
                                    >
                                        17°C
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6}>
                            <Typography></Typography>
                        </Grid>
                        <Grid item sm={6}>
                            <Grid container spacing={2} >
                                <Grid item sm={6}>
                                    <Typography> 7.2m/s SSW</Typography>
                                    <Typography> 7.2m/s SSW</Typography>
                                    <Typography> 7.2m/s SSW</Typography>

                                </Grid>
                                <Grid item sm={6}>
                                    <Typography> 7.2m/s SSW</Typography>
                                    <Typography> 7.2m/s SSW</Typography>
                                    <Typography> 7.2m/s SSW</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

            <Grid item sm={6} >
                <Paper  >
                    <Grid container direction="column" spacing={2} >
                        <Grid item sm={6}>asd</Grid>
                        <Grid item sm={6}>asd</Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default ActualWeather
