import React from 'react';
import Headline from './Headline';
import Logo from './Logo';
import Message from './Message';
import Author from './Author';

class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="card_container">
                <div className="main_section">
                    <Logo logoUrl={this.props.logoUrl} />
                    <Headline headline={this.props.headline}/>
                    <Author 
                        author={this.props.author}
                        avatarUrl={this.props.avatarUrl}
                    />
                </div>
                <div className="bottom_section">
                    <Message 
                        message={this.props.message}
                        title={this.props.headline}
                        url={this.props.url}
                        urlDisplayName={this.props.urlDisplayName}
                    />
                </div>
            </div>
        )
    }
}

export default Card