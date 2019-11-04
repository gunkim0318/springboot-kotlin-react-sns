import { makeStyles } from "@material-ui/core";

//img
import background from '../assets/img/background.jpg';

const useStyle = makeStyles(theme => ({
    subRoot: {
        width: '100%',
        backgroundImage: `url(${background})`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',

        // -webkit-background-size: 'cover',
        // -moz-background-size: 'cover',
        // -o-background-size: 'cover',
        // background-size: 'cover',
    },
    mainRoot: {
        width: '100%',
        padding: 15,
    },

    content: {
        width: '100%',
        height: '100%',
        overflow: "auto",
    },
    
}))

export default useStyle;