import React from 'react';
import Input from '@material-ui/core/TextField/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchButton from '@material-ui/core/Button/Button';
import Style from '../style/Style';


const Search = () => {
    const classes = Style()

    return (

        <Grid container spacing={2} >
            <Grid item className={classes.container} sm={12}>
                <Paper className={classes.searchWrapper}>
                    <Input
                        className={classes.input}
                        id="outlined-basic"
                        label="Enter city name"
                        variant="outlined"
                        size="small"
                    />
                    <SearchButton
                        variant="contained"
                        color="primary"
                        className={classes.searchIcon}>
                        Search
                    </SearchButton>
                </Paper>
            </Grid>



        </Grid>

    )
}

export default Search
