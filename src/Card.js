import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="card">
                <img className="logo" src="../fat_rat.png"></img>
                <h1 className="headline"> This is a headline </h1>
                <p classname="message"> This is a message, you should read it carefully. </p>
                <div className="author-container">
                    <p className="author"> Author </p>
                    <img className="avatar" src="../coolguy.jpg"></img>
                </div>
                <url> ratbastards.com </url>

            </div>
        )
    }
}

export default Card