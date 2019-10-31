import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    root: {
        width: '100%',
    },

    content: {
        width: '100%',
    },
    cardGrid: {
        width: '100%',
        padding: 0,
    },
    card: {
        marginTop: '10px',
        marginBottom: '10px',
        [theme.breakpoints.down('sm')] : {
            width: '100%',
            minWidth: '270px',
            marginLeft: '10px',
            marginRight: '10px',
            
        },
        [theme.breakpoints.up('sm')] : {
            width: '600px',
        },
    },
    cardContent: {
        padding: 20,
        margin: 0,
        width: '100%',
        height: '100%',
    }
}))

export default useStyle;