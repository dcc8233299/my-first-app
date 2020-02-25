import React from 'react';
import reactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>        
                <div className="content">
                    <a href="/" className="author">
                        {faker.name.jobTitle()}
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 9:32PM</span>
                    </div>
                    <div className="text">
                        leave comment here.
                    </div>
                </div>
            </div>     
        </div>
    );
};

reactDOM.render(
    <App />,
    document.querySelector('#root')
);