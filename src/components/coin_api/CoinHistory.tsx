import axios from 'axios';
import React, { useEffect } from 'react';

const bitsum_url = "https://api.bithumb.com/public/transaction_history/{order_currency}_{payment_currency}";
let reqURL_krw : string = bitsum_url;
reqURL_krw = reqURL_krw.replace("{order_currency}", "BTC");
reqURL_krw = reqURL_krw.replace("{payment_currency}", "KRW");

function CoinHistory() {
    useEffect(() => {
        axios.get(reqURL_krw).then(res => console.log(res.data.data));
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default CoinHistory
