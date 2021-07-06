import React, { useEffect, useState } from 'react'

function HooksTest() {
    const [count, setCount] = useState(0);
    const [done, setDone] = useState(true);

    const init = () => {
        setCount(0);
    }

    const stop = () => {
        setDone(state => !state);
    }
    
    useEffect(() => {
        console.log("count");
        let timer: any;
        if(done){
            timer = setInterval(() => {
                setCount(count => count+1);
            }, 1000)
        }else if(!done && count === 0){
            clearInterval(timer);
        }
        return() => {
            console.log("clear");
            clearInterval(timer);
        }
    }, [done, count]);

    return (
        <div>
            카운트 : {count}
            <button onClick={init}>초기화</button>
            <button onClick={stop}>중지/시작</button>
        </div>
    )
}

export default React.memo(HooksTest);