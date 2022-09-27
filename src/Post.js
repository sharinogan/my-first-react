import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div>
                <h3>Author : { this.props.myId }</h3>
                <p>{ this.props.children }</p>
            </div>
        );
    }
}

export default Post;