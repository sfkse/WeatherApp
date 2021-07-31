import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import NavigationIcon from '@material-ui/icons/Navigation';
import orange from '@material-ui/core/colors/orange';
import Style from '../style/Style';
import { ImageList, ImageListItem } from '@material-ui/core';
import DisplayTime from './DisplayTime';


const ActualWeather = ({ weather }) => {
    const classes = Style();
    const description = weather?.weather[0]?.description.charAt(0).toUpperCase() + weather?.weather[0]?.description.toLowerCase().slice(1)
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.resultWrapper} >
                    <Grid
                        container
                        direction="column"
                        spacing={2}
                    >
                        <Grid
                            item
                            sm={6}
                            xs={12}
                        >
                            <DisplayTime time={weather?.dt} />
                            <Typography variant="h3">
                                {weather?.name}
                            </Typography>
                            <Grid
                                container
                                alignItems="center"
                                justifyContent="flex-start"
                                spacing={2}
                            >
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
                                        {Math.floor(weather?.main?.temp)}°C
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} >
                            <Grid container spacing={2} >
                                <Grid item xs={12}>
                                    <Typography>
                                        Feels like {Math.floor(weather?.main?.temp)}°C.
                                        {description}
                                    </Typography>
                                </Grid>
                                <Grid item sm={6} >
                                    <Typography variant="subtitle2">
                                        <NavigationIcon
                                            fontSize="small"
                                            color="action"
                                            style={{
                                                transform: `rotate(${180 + weather?.wind?.deg}deg) `,
                                                color: `${orange}`,
                                            }}
                                        />
                                        {weather?.wind?.speed} m/s
                                        <br />
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        Humidity: {weather?.main?.humidity}%
                                    </Typography>
                                </Grid>
                                <Grid item sm={6} >
                                    <Typography className={classes.detailRight} variant="subtitle2">
                                        Pressure: {weather?.main?.pressure}hPa
                                        <br />
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        Visibility: {weather?.visibility}m
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

        </Grid>
    )
}

export default ActualWeather
