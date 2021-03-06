import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import CoinChart from './chart/CoinChart';

const bitsum_url = "https://api.bithumb.com/public/ticker/{order_currency}_{payment_currency}";
let reqURL_krw : string = bitsum_url;
reqURL_krw = reqURL_krw.replace("{order_currency}", "all");
reqURL_krw = reqURL_krw.replace("{payment_currency}", "KRW");

interface ApiType {
    acc_trade_value: string,
    acc_trade_value_24H: string,
    closing_price: string,
    fluctate_24H: string,
    fluctate_rate_24H: string,
    max_price: string,
    min_price: string,
    opening_price: string,
    prev_closing_price: string,
    units_traded: string,
    units_traded_24H: string
}

function CoinAPI() {
    const [allData, setAllData] = useState<ApiType>({
        acc_trade_value: "",
        acc_trade_value_24H: "",
        closing_price: "",
        fluctate_24H: "",
        fluctate_rate_24H: "",
        max_price: "",
        min_price: "",
        opening_price: "",
        prev_closing_price: "",
        units_traded: "",
        units_traded_24H: ""
    });

    useEffect(() => {
        debounce(async () => {
            const response : ApiType = await axios.get(reqURL_krw)
                .then(response => response.data.data.BTC)
                .catch(err => err);
            setAllData({
                acc_trade_value: response.acc_trade_value,
                acc_trade_value_24H: response.acc_trade_value_24H,
                closing_price: response.closing_price,
                fluctate_24H: response.fluctate_24H,
                fluctate_rate_24H: response.fluctate_rate_24H,
                max_price: response.max_price,
                min_price: response.min_price,
                opening_price: response.opening_price,
                prev_closing_price: response.prev_closing_price,
                units_traded: response.units_traded,
                units_traded_24H: response.units_traded_24H
            });
        }, 1500)();
    }, [allData]);

    return (
        <div>
            ????????????
            <br/>????????????: {allData.acc_trade_value},
            <br/>?????? 24?????? ????????????: {allData.acc_trade_value_24H},
            <br/>??????(00??? ??????): {allData.opening_price},
            <br/>??????(00??? ??????) : {allData.closing_price},
            <br/>?????? 24?????? ?????????: {allData.fluctate_24H},
            <br/>?????? 24?????? ?????????: {allData.fluctate_rate_24H},
            <br/>?????????(00??? ??????): {allData.max_price},
            <br/>?????????(00??? ??????): {allData.min_price},
            <br/>????????????: {allData.prev_closing_price},
            <br/>?????????: {allData.units_traded},
            <br/>??????24?????? ?????????: {allData.units_traded_24H}
            <br/><a href="/"><button>?????? ??????</button></a>
            <br/><a href="coin_history"><button>history</button></a>
            <br/>
            <br/>
            <br/>
            <div>
                <CoinChart/>
            </div>
        </div>
    )
}

export default React.memo(CoinAPI);
