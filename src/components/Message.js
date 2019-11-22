import React from 'react';

const Message = props => (
    <div className="message_container">
        <h3 className="message_headline">{props.title}</h3>
        <p className="message">{props.message}</p>
        <a href={props.url}>{props.urlDisplayName}</a>
    </div>
)

export default Message