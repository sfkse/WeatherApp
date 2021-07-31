import { makeStyles } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';


const Style = makeStyles({

    searchWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        marginTop: 50,
        marginBottom: 50,
        padding: "1rem"



    },
    input: {
        color: "green",
        minWidth: 350
    },
    resultWrapper: {
        padding: 20
    },

    imageListItem: {
        width: 45,
        height: 50

    },
    displayTime: {
        color: orange[900]

    },
    detailRight: {
        paddingTop: "5px"
    }
})

export default Style
