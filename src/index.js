import React from 'react';
import reactDOM from 'react-dom';

const App = () => {
    const buttonText = 'Click Here';
    const style = {backgroundColor: 'green', color: 'white'};

    return <div>
        <label className="label" htmlFor="name">Enter Name:</label>
        <input id="name" type="text"/>
        <button style={style}>{buttonText}</button>
    </div>
}

reactDOM.render(
    <App />,
    document.querySelector('#root')
)