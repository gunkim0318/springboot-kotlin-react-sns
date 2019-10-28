import { makeStyles } from "@material-ui/core";

//img
import background from '../assets/img/background.jpg';

const useStyle = makeStyles(theme => ({
    subRoot: {
        width: '100%',
        backgroundImage: `url(${background})`
    },

    content: {
        width: '100%',
        height: '100%',
    },
    
}))

export default useStyle;