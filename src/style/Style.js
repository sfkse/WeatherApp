import { makeStyles } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange'


const Style = makeStyles((theme) => ({

    searchWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        marginTop: 50,
        marginBottom: 50,
        padding: theme.spacing(2),


    },
    input: {
        color: "green",
        width: "50%",

    },
    resultWrapper: {
        padding: 20
    },

    imageListItem: {
        width: 45,
        height: 50

    },
    displayTime: {
        color: orange[700]
    }
}))

export default Style
