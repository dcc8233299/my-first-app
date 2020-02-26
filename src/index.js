import React from 'react';
import reactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail avatar={faker.image.avatar()} author="Sam" timeAgo="Yesterday at 2:00AM" commentText="Very good!" />
            <CommentDetail avatar={faker.image.avatar()} author="Alex" timeAgo="Today at 4:54PM" commentText="Actually it's a bit boring." />
            <CommentDetail avatar={faker.image.avatar()} author="Jane" timeAgo="Today at 8:00PM" commentText="I like this!" />
        </div>
    );
};

reactDOM.render(
    <App />,
    document.querySelector('#root')
);