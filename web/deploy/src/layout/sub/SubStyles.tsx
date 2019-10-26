import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    root: {
        display: 'grid',
        width: '100%',
    },

    content: {
        width: '100%',
    },
    card: {
        width: '60%',
        [theme.breakpoints.down('sm')] : {
            width: '360px'
        }
    }
}))

export default useStyle;