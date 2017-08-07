import {createStyleSheet} from 'material-ui/styles';

const styleSheet = createStyleSheet(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 0
    },
    header: {
        backgroundColor: '#2196F3',
        flexDirection:'row'
    },
    logo:{
        flexGrow:1,
        textAlign:'center',
        lineHeight:'48px',
        fontSize:'26px',
        fontFamily: 'STKaiti',
        whiteSpace:'nowrap'
    },
    tab:{
        flexGrow:4
    },
    backgroundImg:{
        verticalAlign:'middle',
        height:'50%'
    },
    morevert:{
        alignSelf:'flex-end',
        flexGrow:1,
        textAlign:'center',
        lineHeight:'41px',
        color:'#fff'
    }
}));

export default styleSheet;