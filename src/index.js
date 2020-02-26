import React from 'react';
import reactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Sam" 
                    timeAgo="Yesterday at 2:00AM" 
                    commentText="Very good!" 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Alex" 
                    timeAgo="Today at 4:54PM" 
                    commentText="Actually it's a bit boring." 
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Jane" 
                    timeAgo="Today at 8:00PM" 
                    commentText="I like this!" 
                />
            </ApprovalCard>
        </div>
    );
};

reactDOM.render(
    <App />,
    document.querySelector('#root')
);