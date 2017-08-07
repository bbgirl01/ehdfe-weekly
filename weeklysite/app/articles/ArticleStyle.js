import {createStyleSheet} from 'material-ui/styles';

const styleSheet = createStyleSheet(theme => ({
   progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
    position:'fixed',
    left:'50%',
    top:'50%',
    color:'#2196F3'
  },
}));

export default styleSheet;