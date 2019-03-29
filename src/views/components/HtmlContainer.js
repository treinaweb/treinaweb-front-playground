import React, { Component } from 'react';

class HtmlContainer extends Component{
    static defaultProps = {
        initial: '',
        controllers: []
    }

    createHtml(){
        return {'__html': this.props.initial};
    }

    render(){
        const { props } = this,
            { controllers } = props;
        return(
            <div dangerouslySetInnerHTML={this.createHtml()} className="htmlContainer" >
                
            </div>
        );
    }
}

export default HtmlContainer;