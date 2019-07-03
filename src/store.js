import React, {Component} from 'react';

class Store extends React.Component{
    state = {
        appName: 'Al-Roker'
    };
    
    render(){
        return React.Children.map(this.props.children, (child) =>{
            return React.cloneElement(child, {...this.state})
        })
    }
}

export default Store;