import React from 'react';
import navsData from './navsData';
import styleSheet from './ArticleStyle';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

import  './Article.css';



class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            article:'',
            loading:false
        }
    }
    
    dealData(url){
        var _this = this;
        this.setState({loading:true})
        if(!url){
            import('../../../weekly/'+navsData[0].item).then(function(data){
                _this.setState({article:data,loading:false})
            }) 
        }
        navsData.forEach(function(item){
            if(item.url===('/article/'+url)){
                import('../../../weekly/'+item.item).then(function(data){
                    _this.setState({article:data,loading:false})
                })

            }
        })
    }

    componentDidMount() {
        this.dealData(this.props.match.params.url);

    }
    
    componentWillReceiveProps(nextProps){
        if(this.props.match.params.url!==nextProps.match.params.url){
            this.dealData(nextProps.match.params.url);
        }
    }
    render() {
        const {classes} = this.props;
        return (
           <div className="article-content" >   
               {this.state.loading&&<CircularProgress className={classes.progress} size={50} />}     
               <div dangerouslySetInnerHTML={{ __html:this.state.article }}></div>
           </div>
        );
    }
}

export default withStyles(styleSheet)(Article);