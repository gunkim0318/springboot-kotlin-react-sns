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
        width:'100%',
        [theme.breakpoints.down('sm')] : {
            width: '360px',
            marginLeft: '40px',
            marginRight: '40px',
            
        },
        [theme.breakpoints.up('sm')] : {
            width: '500px',
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