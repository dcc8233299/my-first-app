import React from 'react';
import reactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
        </div>
    );
};

reactDOM.render(
    <App />,
    document.querySelector('#root')
);