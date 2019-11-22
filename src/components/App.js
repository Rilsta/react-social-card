import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import card from '../cardData';
import avatarUrl from '../coolguy.jpg'
import logoUrl from '../eagle.png';

class App extends React.Component {
    render() {
        return (
            <div className="app_container">
                <Card 
                    headline = {card.headline}
                    author = {card.author}
                    avatarUrl = {avatarUrl}
                    logoUrl = {logoUrl}
                    message = {card.message}
                    url = {card.url}
                    urlDisplayName = {card.urlDisplayName}
                />
            </div>
        )
    }
}

export default App;