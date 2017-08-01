import React from 'react';
import navsData from './navsData';

class Article extends React.Component {
    constructor(props) {
        super(props)
    }
    
    dealData(){
        var  url = this.props.match.params.url;
        navsData.forEach(function(item){
            if(item.url===('/'+url)){
                import('../../weekly/'+item.name).then(function(data){
                    console.log(data,22)
                })

            }
        })
    }
    componentWillReceiveProps(nextProps){
        if(this.props.match.params.url!==nextProps.match.params.url){
            this.dealData();
        }
    }

    render() {
       
        return (
            <div>
                <h2>User: {this.props.match.params.url}</h2>
            </div>
        );
    }
}

export default Article;