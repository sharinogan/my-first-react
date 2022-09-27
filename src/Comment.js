import React from 'react';
const Comment = (props) => {
    const { userId, data } = props;
    return (
        <div>
            <span>{data} from id: {userId}</span>
        </div>
    )
}

export default Comment;