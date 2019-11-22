import React from 'react';

const Author = props => (
    <div className="author_container">
        <img className="avatar" src={props.avatarUrl}></img>
        <p classname="author">{props.author}</p>
    </div>
)

export default Author