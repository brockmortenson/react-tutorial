import React, { useState } from 'react';

function Functional() {
    const [ name, setName ] = useState('');

    const handleClick = () => {
        if (name === '') {
            setName('John');
        } else {
            setName('');
        }
    }
    
    return (
        <div>
            Functional
            <p>Name: {name}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Functional;