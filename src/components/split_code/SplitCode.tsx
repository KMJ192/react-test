import React from 'react';
import { useState } from 'react';
import { Increase, Decrease } from './SourceCode';
import './SplitCode.css';

function SplitCode() {
    const [num, setNum] = useState(1);
    
    const increase = () => {
        setNum(Increase(num));
    }
    const decrease = () => {
        setNum(Decrease(num));
    }

    return (
        <div className="code-isolation-test-container">
            <div className="output">output : {num}</div>
            <button 
                className="increase"
                onClick={increase}
            >+1</button>
            <button 
                className="decrease"
                onClick={decrease}
            >+1</button>
        </div>
    )
}

export default SplitCode
