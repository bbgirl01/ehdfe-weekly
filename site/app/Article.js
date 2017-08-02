import React from 'react';
import navsData from './navsData';

class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            article:''
        }
    }
    
    dealData(url){
        var _this = this;
        navsData.forEach(function(item){
            if(item.url===('/article/'+url)){
                import('../../weekly/'+item.item).then(function(data){
                    _this.setState({article:data})
                })

            }
        })
    }

    componentDidMount() {
        if(this.props.match.params.url){
            this.dealData(this.props.match.params.url);
        }
    }
    
    componentWillReceiveProps(nextProps){
        if(this.props.match.params.url!==nextProps.match.params.url){
            this.dealData(nextProps.match.params.url);
        }
    }
    render() {

        return (
           <div>
               <div dangerouslySetInnerHTML={{ __html:this.state.article }}></div>
           </div>
        );
    }
}

export default Article;