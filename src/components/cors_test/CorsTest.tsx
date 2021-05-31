import React from 'react'
import axios from 'axios';

function CorsTest() {
    const req = async () => {
        await axios.post('http://localhost:8080/api/cors_test', {
            test: "test"
        }).then(res => console.log(res.data));
    }

    return (
        <div>
            <button onClick={req}>request</button>
        </div>
    )
}

export default CorsTest
