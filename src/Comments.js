import React, { Component } from 'react';

class Comments extends Component {
    render(props) {
        return (
            <h5>{props.post.comments}</h5>
        )
    }
}

export default Comments;